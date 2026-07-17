"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { roadmapImage, roadmapPathPoints, roadmapStages } from "./roadmap-data";

const easeOut = [0.16, 1, 0.3, 1] as const;

/** above/below được chọn thủ công theo khoảng trống thật trong ảnh — không chỉ luân phiên máy móc. */
const LABEL_ABOVE = [false, true, false, true, true] as const;

/**
 * Khoảng cách chấm → nhãn (rem), tính theo độ dày thật của dải ruy băng tại từng
 * điểm (đo pixel: ~99/127/117/104/80px) cộng biên an toàn — để chữ (không còn nền
 * card) không đè lên dải ruy băng phía sau.
 */
const LABEL_GAP_REM = [4, 5, 4.75, 4.25, 3.5] as const;
const LINE_START_REM = 0.4;

/** Mốc "Luyện đề & thi thử" — neo vị trí khối intro phía trên. */
const MOCK_EXAMS_STAGE = roadmapStages[4];
/**
 * Khoảng cách từ chấm mốc → đáy khối intro (icon + title + mô tả).
 * = gap nhãn pin (3.5) + chiều cao khối nhãn (~5.5) + khoảng thở vừa đủ (~1.25).
 */
const INTRO_GAP_ABOVE_LANDMARK_REM = 3.5 + 5.5 + 1.25;

const PATH_D = roadmapPathPoints
  .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x} ${y}`)
  .join(" ");

/**
 * Điểm nổi bật xuyên suốt cả lộ trình — không phải danh sách chuyên đề chi tiết
 * của 5 giai đoạn (đã hiện trên ảnh), mà là những gì con thực sự nhận được.
 */
const HIGHLIGHT_TAGS = [
  "C++ từ nền tảng đến nâng cao",
  "Tư duy giải quyết vấn đề",
  "Thuật toán & cấu trúc dữ liệu",
  "Luyện thi HSG Tin học",
  "Thi vào lớp 10 chuyên Tin",
  "Mentor đồng hành 1:1",
  "Luyện đề sát cấu trúc thi thật",
  "Báo cáo tiến độ minh bạch",
];

function RoadmapPin({
  stage,
  index,
}: {
  stage: (typeof roadmapStages)[number];
  index: number;
}) {
  const reduceMotion = useSsrSafeReducedMotion();
  const isAbove = LABEL_ABOVE[index] ?? index % 2 === 1;
  const gap = LABEL_GAP_REM[index] ?? 3;
  const lineLength = Math.max(gap - LINE_START_REM - 0.2, 0.6);

  return (
    <motion.div
      className="absolute"
      style={{ left: `${stage.left}%`, top: `${stage.top}%` }}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : index * 0.14, ease: easeOut }}
    >
      <motion.span
        className="absolute size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary ring-[3px] ring-white xl:size-4"
        style={{ boxShadow: "0 0 0 6px oklch(0.47 0.21 305 / 0.16)" }}
        animate={reduceMotion ? undefined : { scale: [1, 1.18, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 + 0.6 }
        }
      />

      <motion.span
        aria-hidden
        className="absolute left-0 w-0 border-l-2 border-dashed border-brand-primary/50"
        style={
          isAbove
            ? { bottom: `${LINE_START_REM}rem`, height: `${lineLength}rem`, transformOrigin: "bottom" }
            : { top: `${LINE_START_REM}rem`, height: `${lineLength}rem`, transformOrigin: "top" }
        }
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.14 + 0.2, ease: "easeOut" }}
      />

      <div
        className="absolute w-48 text-center"
        style={{
          transform: isAbove
            ? `translate(-50%, calc(-100% - ${gap}rem))`
            : `translate(-50%, ${gap}rem)`,
        }}
      >
        <p className="text-pretty text-base font-black leading-snug tracking-[-0.015em] text-brand-deep xl:text-lg">
          {stage.title}
        </p>
        <p className="mt-1 text-sm font-bold italic text-brand-primary">{stage.tagline}</p>
        <p className="mt-1.5 text-pretty text-sm leading-snug text-muted-foreground">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
}

function RoadmapPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 60%"],
  });
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative hidden xl:block">
      <Image
        src={roadmapImage.src}
        alt={roadmapImage.alt}
        width={roadmapImage.width}
        height={roadmapImage.height}
        sizes="(min-width: 1280px) 90vw, 100vw"
        className="h-auto w-full"
        priority
      />

      <div
        className="absolute left-[4%]"
        style={{
          top: `${MOCK_EXAMS_STAGE.top}%`,
          transform: `translateY(calc(-100% - ${INTRO_GAP_ABOVE_LANDMARK_REM}rem))`,
        }}
      >
        <h2 className="whitespace-nowrap text-[clamp(2rem,3.4vw,3.25rem)] font-black leading-[1.04] tracking-[-0.035em] text-brand-deep">
          Hành trình chinh phục trường chuyên
        </h2>
        <p className="mt-2 whitespace-nowrap text-lg leading-8 text-muted-foreground">
          Mỗi giai đoạn có đích đến rõ ràng, không học nhảy cóc.
        </p>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${roadmapImage.width} ${roadmapImage.height}`}
        fill="none"
        aria-hidden
      >
        <path d={PATH_D} stroke="white" strokeOpacity={0.55} strokeWidth={10} strokeLinecap="round" />
        {reduceMotion ? (
          <path d={PATH_D} stroke="oklch(0.47 0.21 305)" strokeWidth={4} strokeLinecap="round" />
        ) : (
          <motion.path
            d={PATH_D}
            stroke="oklch(0.47 0.21 305)"
            strokeWidth={4}
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray={1}
            style={{ strokeDashoffset: dashOffset }}
          />
        )}
      </svg>

      <div className="absolute inset-0">
        {roadmapStages.map((stage, index) => (
          <RoadmapPin key={stage.id} stage={stage} index={index} />
        ))}
      </div>
    </div>
  );
}

function RoadmapStepper() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <ol className="relative xl:hidden">
      <div className="absolute bottom-2 left-5.5 top-2 w-px bg-[oklch(0.88_0.03_303)]" aria-hidden />

      {roadmapStages.map((stage, index) => (
        <motion.li
          key={stage.id}
          className="relative grid grid-cols-[2.75rem_1fr] gap-x-4 pb-8 last:pb-0"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : index * 0.1, ease: easeOut }}
        >
          <span className="relative z-10 grid size-11 place-items-center rounded-full border-2 border-brand-primary bg-white font-display text-base font-bold text-brand-primary">
            {stage.step}
          </span>
          <div className="pt-1">
            <h3 className="text-base font-black leading-tight tracking-[-0.02em] text-brand-deep">
              {stage.title}
            </h3>
            <p className="mt-1 text-xs font-bold italic text-brand-primary">{stage.tagline}</p>
            <p className="mt-1.5 text-pretty text-sm leading-6 text-muted-foreground">
              {stage.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}

function RoadmapTags() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.div
      className="mt-6 text-center xl:mt-8"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: easeOut }}
    >
      <p className="text-pretty text-xl font-black tracking-[-0.02em] text-brand-deep md:text-2xl">
        Những gì con có được trong suốt lộ trình
      </p>
      <ul
        className="mt-5 grid grid-cols-2 gap-2 sm:gap-2.5 xl:flex xl:flex-wrap xl:justify-center xl:gap-2.5"
        aria-label="Điểm nổi bật của lộ trình"
      >
        {HIGHLIGHT_TAGS.map((tag) => (
          <li
            key={tag}
            className="flex min-h-11 items-center justify-center rounded-2xl bg-brand-primary px-2.5 py-2.5 text-center text-[0.8rem] font-black leading-snug text-white sm:px-3 sm:text-sm xl:min-h-0 xl:rounded-full xl:px-4 xl:py-2 xl:text-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function RoadmapJourney() {
  return (
    <div>
      <RoadmapPath />
      <RoadmapStepper />
      <RoadmapTags />

      <div className="mt-10 flex justify-center lg:mt-12">
        <a
          href="#tu-van"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand-deep px-6 text-sm font-black text-brand-deep transition-transform hover:-translate-y-0.5"
        >
          Xem lộ trình chi tiết
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
