"use client";

import { Check } from "lucide-react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { storyStops } from "./data";
import { RevealHeading } from "./reveal-heading";

type NodeFraction = { id: string; fraction: number };

function useStoryProgress(stopRefs: React.RefObject<HTMLDivElement | null>[]) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [fractions, setFractions] = useState<NodeFraction[]>([]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const measure = () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      if (wrapperRect.height === 0) return;

      setFractions(
        stopRefs.map((ref, index) => {
          const node = ref.current;
          if (!node) return { id: storyStops[index].id, fraction: 0 };
          const nodeRect = node.getBoundingClientRect();
          const nodeCenter = nodeRect.top - wrapperRect.top + nodeRect.height * 0.28;
          return { id: storyStops[index].id, fraction: nodeCenter / wrapperRect.height };
        }),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [stopRefs]);

  return { wrapperRef, fractions };
}

function StoryRail({
  wrapperRef,
  fractions,
}: {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  fractions: NodeFraction[];
}) {
  const reduceMotion = useSsrSafeReducedMotion();
  const [activeIndex, setActiveIndex] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 60%", "end 55%"],
  });

  const railFillScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const runnerTop = useTransform(scrollYProgress, (v) => `${Math.min(Math.max(v, 0), 1) * 100}%`);

  // Synced after mount rather than baked into the initial useState value, so
  // the first client render always matches the server (see
  // use-ssr-safe-reduced-motion.ts for why that matters).
  useLayoutEffect(() => {
    if (reduceMotion) setActiveIndex(storyStops.length - 1);
  }, [reduceMotion]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduceMotion) return;
    let next = -1;
    fractions.forEach((entry, index) => {
      if (v >= entry.fraction) next = index;
    });
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <div className="intro-story-rail hidden md:block" aria-hidden>
      <div className="intro-story-rail-track" />
      <motion.div className="intro-story-rail-fill" style={{ scaleY: railFillScale }} />

      {fractions.map((entry, index) => {
        const isDone = index <= activeIndex;
        return (
          <div
            key={entry.id}
            className="intro-story-node-slot"
            style={{ top: `${entry.fraction * 100}%` }}
          >
            <span className="trail-node">
              <span
                className="trail-node-core"
                style={{
                  background: isDone ? "oklch(0.47 0.21 305)" : "oklch(0.85 0.02 292)",
                }}
              >
                {isDone ? (
                  <Check className="size-5" strokeWidth={3} aria-hidden />
                ) : (
                  <span className="trail-node-num" style={{ color: "oklch(0.4 0.03 292)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </span>
            </span>
          </div>
        );
      })}

      <motion.div className="intro-story-runner" style={{ top: runnerTop }} />
    </div>
  );
}

function StoryStop({
  stopRef,
  kicker,
  title,
  children,
}: {
  stopRef: React.RefObject<HTMLDivElement | null>;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.div
      ref={stopRef}
      className="intro-story-stop"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="text-xs font-black uppercase tracking-[0.08em] text-brand-primary">
        {kicker}
      </span>
      <RevealHeading
        as="h2"
        lines={[title]}
        className="mt-3 max-w-2xl text-balance text-[clamp(1.85rem,3.2vw,2.75rem)] font-black leading-[1.1] tracking-[-0.03em] text-brand-deep"
      />
      <div className="mt-5 max-w-2xl">{children}</div>
    </motion.div>
  );
}

export function StoryTimeline({ mentorGrid }: { mentorGrid: ReactNode }) {
  const stopRef0 = useRef<HTMLDivElement>(null);
  const stopRef1 = useRef<HTMLDivElement>(null);
  const stopRef2 = useRef<HTMLDivElement>(null);
  // Stable array identity — useStoryProgress's effect depends on this reference,
  // and a fresh array every render would re-fire the effect in an infinite loop.
  const stopRefs = useMemo(() => [stopRef0, stopRef1, stopRef2], [stopRef0, stopRef1, stopRef2]);
  const { wrapperRef, fractions } = useStoryProgress(stopRefs);

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div ref={wrapperRef} className="intro-story-wrapper relative mx-auto max-w-352">
        <StoryRail wrapperRef={wrapperRef} fractions={fractions} />

        <div className="intro-story-stops space-y-16 md:space-y-24 md:pl-28">
          <StoryStop stopRef={stopRefs[0]} kicker={storyStops[0].kicker} title={storyStops[0].title}>
            <p className="text-pretty text-base leading-8 text-muted-foreground md:text-lg">
              {storyStops[0].body}
            </p>
          </StoryStop>

          <StoryStop stopRef={stopRefs[1]} kicker={storyStops[1].kicker} title={storyStops[1].title}>
            <p className="text-pretty text-base leading-8 text-muted-foreground md:text-lg">
              {storyStops[1].body}
            </p>
          </StoryStop>

          {mentorGrid}

          <StoryStop stopRef={stopRefs[2]} kicker={storyStops[2].kicker} title={storyStops[2].title}>
            <p className="text-pretty text-base leading-8 text-muted-foreground md:text-lg">
              {storyStops[2].body}
            </p>
          </StoryStop>
        </div>
      </div>
    </section>
  );
}
