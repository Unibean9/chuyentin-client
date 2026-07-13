"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { roadmapStages } from "./roadmap-data";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

function RoadmapStageRow({ stage, index }: { stage: (typeof roadmapStages)[number]; index: number }) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.li
      className="relative grid grid-cols-[2.75rem_1fr] gap-x-5 pb-10 last:pb-0 md:grid-cols-[3.25rem_1fr] md:gap-x-7"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.65, delay: reduceMotion ? 0 : index * 0.12, ease: easeOut }}
    >
      <span className="relative z-10 grid size-11 place-items-center rounded-full border-2 border-brand-primary bg-white font-display text-base font-bold text-brand-primary md:size-13 md:text-lg">
        {index + 1}
      </span>

      <div className="pt-1">
        <p className="text-xs font-black uppercase tracking-[0.06em] text-brand-primary">
          {stage.shortName} · {stage.suggestedGrade}
        </p>
        <h3 className="mt-1.5 text-xl font-black leading-tight tracking-[-0.025em] text-brand-deep md:text-2xl">
          {stage.title}
        </h3>
        <p className="mt-2.5 max-w-xl text-pretty font-semibold leading-7 text-muted-foreground">
          {stage.goal}
        </p>
        <p className="mt-3 text-sm font-bold text-brand-deep/70">Đích đến: {stage.exam}</p>
      </div>
    </motion.li>
  );
}

export function RoadmapTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 78%", "end 55%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      <div
        className="absolute left-[1.375rem] top-2 bottom-12 w-px bg-[oklch(0.88_0.03_303)] md:left-[1.625rem]"
        aria-hidden
      />
      {!reduceMotion ? (
        <motion.div
          className="absolute left-[1.375rem] top-2 bottom-12 w-px origin-top bg-brand-primary md:left-[1.625rem]"
          style={{ scaleY }}
          aria-hidden
        />
      ) : null}

      <ol className="relative">
        {roadmapStages.map((stage, index) => (
          <RoadmapStageRow key={stage.id} stage={stage} index={index} />
        ))}
      </ol>

      <div className="relative mt-2 pl-[2.75rem] md:pl-[3.25rem]">
        <a
          href="#tu-van"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand-deep px-6 text-sm font-black text-brand-deep transition-transform hover:-translate-y-0.5"
        >
          Tư vấn lộ trình phù hợp với con
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}
