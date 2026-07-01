"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, RefObject } from "react";

const VIEW_W = 1000;
const VIEW_H = 460;
const PATH_ID = "chuyentin-trail-path";

/** S-curve ngang hơn: ít leo dọc, vẫn uốn cong */
const TRAIL_PATH =
  "M 55 360 C 175 330, 245 310, 325 335 C 405 360, 465 295, 545 280 C 625 265, 705 235, 785 205 C 855 178, 915 162, 932 158";

const STOP_FRACTIONS = [0.14, 0.38, 0.62, 0.84] as const;
const SPARKLE_FRACTIONS = [0.22, 0.32, 0.5, 0.56, 0.72, 0.78, 0.9] as const;
const FLAG_FRACTION = 0.995;

const milestones = [
  {
    title: "Đánh giá nền",
    hint: "Đo C++, mảng, xâu",
  },
  {
    title: "Vá lỗ hổng",
    hint: "Học phần yếu",
  },
  {
    title: "Luyện track",
    hint: "300+ bài",
  },
  {
    title: "Mentor & báo cáo",
    hint: "Báo cáo PH",
  },
] as const;

const WAYPOINTS = [0, ...STOP_FRACTIONS, FLAG_FRACTION] as const;
const TRAVEL_MS = 1050;
const HOLD_MS = 1300;
const FLAG_HOLD_MS = 1600;
const easeOut = [0.16, 1, 0.3, 1] as const;

function easeOutExpo(t: number) {
  return t >= 1 ? 1 : 1 - 2 ** (-10 * t);
}

function segmentTiming(segmentIndex: number) {
  const isFlag = segmentIndex >= milestones.length;
  return {
    travelMs: TRAVEL_MS,
    holdMs: isFlag ? FLAG_HOLD_MS : HOLD_MS,
  };
}

function totalCycleMs() {
  return WAYPOINTS.slice(0, -1).reduce<number>((sum, _, index) => {
    const { travelMs, holdMs } = segmentTiming(index);
    return sum + travelMs + holdMs;
  }, 0);
}

type ScenePoint = { x: number; y: number };
type SvgPoint = { x: number; y: number };

type PathLayout = {
  ready: boolean;
  stops: ScenePoint[];
  flag: ScenePoint;
  sparkles: SvgPoint[];
  pointAt: (fraction: number) => { scene: ScenePoint; svg: SvgPoint };
};

function usePathLayout(sceneRef: RefObject<HTMLDivElement | null>): PathLayout {
  const [layout, setLayout] = useState<PathLayout>({
    ready: false,
    stops: [],
    flag: { x: 0, y: 0 },
    sparkles: [],
    pointAt: () => ({
      scene: { x: 0, y: 0 },
      svg: { x: 0, y: 0 },
    }),
  });

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const measure = () => {
      const svg = scene.querySelector(".trail-scene-svg") as SVGSVGElement | null;
      const path = svg?.querySelector(`#${PATH_ID}`) as SVGPathElement | null;
      if (!svg || !path) return;

      const sceneRect = scene.getBoundingClientRect();
      const ctm = svg.getScreenCTM();
      if (!ctm || sceneRect.width === 0 || sceneRect.height === 0) return;

      const total = path.getTotalLength();

      const pointAt = (fraction: number) => {
        const onPath = path.getPointAtLength(total * fraction);
        const mapped = svg.createSVGPoint();
        mapped.x = onPath.x;
        mapped.y = onPath.y;
        const screen = mapped.matrixTransform(ctm);

        return {
          svg: { x: onPath.x, y: onPath.y },
          scene: {
            x: ((screen.x - sceneRect.left) / sceneRect.width) * 100,
            y: ((screen.y - sceneRect.top) / sceneRect.height) * 100,
          },
        };
      };

      setLayout({
        ready: true,
        stops: STOP_FRACTIONS.map((fraction) => pointAt(fraction).scene),
        flag: pointAt(FLAG_FRACTION).scene,
        sparkles: SPARKLE_FRACTIONS.map((fraction) => pointAt(fraction).svg),
        pointAt,
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(scene);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [sceneRef]);

  return layout;
}

type TrailPhase = "travel" | "hold";

type TrailMotion = {
  progress: number;
  segmentIndex: number;
  phase: TrailPhase;
};

function resolveTrailMotion(elapsed: number): TrailMotion {
  let cursor = 0;

  for (let segmentIndex = 0; segmentIndex < WAYPOINTS.length - 1; segmentIndex += 1) {
    const from = WAYPOINTS[segmentIndex];
    const to = WAYPOINTS[segmentIndex + 1];
    const { travelMs, holdMs } = segmentTiming(segmentIndex);

    if (elapsed < cursor + travelMs) {
      const t = easeOutExpo(elapsed / travelMs);
      return {
        progress: from + (to - from) * t,
        segmentIndex,
        phase: "travel",
      };
    }
    cursor += travelMs;

    if (elapsed < cursor + holdMs) {
      return {
        progress: to,
        segmentIndex,
        phase: "hold",
      };
    }
    cursor += holdMs;
  }

  return {
    progress: FLAG_FRACTION,
    segmentIndex: milestones.length,
    phase: "hold",
  };
}

function useTrailProgress(reducedMotion: boolean): TrailMotion {
  const [motion, setMotion] = useState<TrailMotion>({
    progress: 0,
    segmentIndex: 0,
    phase: "travel",
  });
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setMotion({
        progress: STOP_FRACTIONS[milestones.length - 1],
        segmentIndex: milestones.length - 1,
        phase: "hold",
      });
      return;
    }

    const cycleMs = totalCycleMs();
    let raf = 0;

    const tick = (time: number) => {
      if (startRef.current === null) startRef.current = time;
      const elapsed = (time - startRef.current) % cycleMs;
      setMotion(resolveTrailMotion(elapsed));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reducedMotion]);

  return motion;
}

function stopStateFromMotion(index: number, motion: TrailMotion, reducedMotion: boolean) {
  if (reducedMotion) {
    return index < milestones.length - 1 ? "is-done" : "is-pending";
  }

  if (motion.segmentIndex >= milestones.length) {
    return "is-done";
  }

  if (index < motion.segmentIndex) return "is-done";
  if (index === motion.segmentIndex && motion.phase === "hold") return "is-done";
  return "is-pending";
}

function statusLabel(index: number, motion: TrailMotion, reducedMotion: boolean) {
  const state = stopStateFromMotion(index, motion, reducedMotion);
  if (state === "is-done") return "Đã hoàn thành";
  return "Sắp tới";
}

function TrailScene({
  reducedMotion,
  trailMotion,
}: {
  reducedMotion: boolean;
  trailMotion: TrailMotion;
}) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const layout = usePathLayout(sceneRef);
  const { progress } = trailMotion;
  const runner = layout.pointAt(progress).svg;
  const flagSvg = layout.pointAt(FLAG_FRACTION).svg;
  const reveal = Math.min(progress, FLAG_FRACTION);
  const dashStyle = {
    "--trail-progress": reveal,
  } as CSSProperties;

  return (
    <div
      ref={sceneRef}
      className={`trail-scene${layout.ready ? " is-ready" : ""}`}
      aria-label="Lộ trình học dạng con đường"
    >
      <svg
        className="trail-scene-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <filter id="trail-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id={PATH_ID} d={TRAIL_PATH} />
        </defs>

        <rect width={VIEW_W} height={VIEW_H} fill="transparent" />

        <path d={TRAIL_PATH} className="trail-path-rail" />
        <path d={TRAIL_PATH} className="trail-path-glow" filter="url(#trail-glow)" />
        <path d={TRAIL_PATH} className="trail-path-road" />
        <path
          d={TRAIL_PATH}
          className="trail-path-fill"
          pathLength={1}
          style={dashStyle}
        />

        {layout.sparkles.map((sparkle, index) => (
          <circle
            key={`sparkle-${index}`}
            cx={sparkle.x}
            cy={sparkle.y}
            r="3.5"
            className="trail-sparkle"
            style={{ animationDelay: `${index * 0.35}s` }}
          />
        ))}

        <circle cx={runner.x} cy={runner.y} r="7" className="trail-runner" />

        <g className="trail-flag" transform={`translate(${flagSvg.x}, ${flagSvg.y - 46})`}>
          <line x1="0" y1="0" x2="0" y2="42" className="trail-flag-pole" />
          <path d="M0 0 L26 10 L0 22 Z" className="trail-flag-cloth" />
        </g>
      </svg>

      <div
        className="trail-flag-copy"
        style={
          {
            "--stop-x": `${layout.flag.x}%`,
            "--stop-y": `${layout.flag.y}%`,
          } as CSSProperties
        }
      >
        <p className="trail-title">Thi chuyên</p>
        <p className="trail-status">Đích đến</p>
      </div>

      <ol className="trail-stops">
        {milestones.map((step, index) => {
          const state = stopStateFromMotion(index, trailMotion, reducedMotion);
          const point = layout.stops[index] ?? { x: 0, y: 0 };
          const style = {
            "--stop-x": `${point.x}%`,
            "--stop-y": `${point.y}%`,
          } as CSSProperties;

          return (
            <motion.li
              key={step.title}
              className={`trail-stop ${state}`}
              style={style}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: easeOut }}
            >
              <div className="trail-stop-marker">
                <span className="trail-node">
                  <span className="trail-node-core">
                    {state === "is-done" ? (
                      <Check className="size-5" strokeWidth={3} aria-hidden />
                    ) : (
                      <span className="trail-node-num" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </span>
                </span>
              </div>

              <div className="trail-copy">
                <h3 className="trail-title">{step.title}</h3>
                <p className="trail-status">{statusLabel(index, trailMotion, reducedMotion)}</p>
                <p className={`trail-hint${state === "is-pending" ? " is-placeholder" : ""}`}>
                  {step.hint}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

export function LearningPathFlow() {
  const reducedMotion = useReducedMotion();
  const trailMotion = useTrailProgress(!!reducedMotion);

  return (
    <div className="trail-flow">
      <div className="trail-frame">
        <TrailScene reducedMotion={!!reducedMotion} trailMotion={trailMotion} />
      </div>
    </div>
  );
}
