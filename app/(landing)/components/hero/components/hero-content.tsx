"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { LogoMark } from "@/components/layout/header";
import { HeroBadges } from "./hero-badges";
import type { HeroSlide } from "./hero-data";
import {
  heroHeadlineIntroContainerVariants,
  heroHeadlineLineIntroVariants,
  heroHeadlineLineSwapVariants,
  heroHeadlineSwapVariants,
  heroHighlightIntroVariants,
  heroIntroItemVariants,
  heroIntroStaticVariants,
} from "./hero-motion";

function HeroHeadline({
  slide,
  direction,
  isIntro,
  reduceMotion,
  compact = false,
}: {
  slide: HeroSlide;
  direction: number;
  isIntro: boolean;
  reduceMotion: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="relative">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.h1
            key={slide.id}
            className="absolute top-0 left-0 text-[clamp(1.5rem,5vw,1.85rem)] font-black leading-[1.1] tracking-[-0.035em] text-white drop-shadow-[0_2px_14px_oklch(0.1_0.05_300/0.85)]"
            variants={heroHeadlineSwapVariants(reduceMotion, direction)}
            initial="slideHidden"
            animate="visible"
            exit="exit"
          >
            {slide.headline.map((line, index) => (
              <span key={index} className="block">
                {line.before}
                {line.highlight ? <span className="text-brand-accent">{line.highlight}</span> : null}
                {line.after}
              </span>
            ))}
          </motion.h1>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(2*1.06*clamp(2.75rem,5vw,4.75rem))]">
      <AnimatePresence initial={false}>
        <motion.h1
          key={slide.id}
          className="absolute top-0 left-0 text-[clamp(2.35rem,7vw,4.75rem)] font-black leading-[1.06] tracking-[-0.035em] text-white"
          variants={
            isIntro
              ? heroHeadlineIntroContainerVariants(reduceMotion)
              : heroHeadlineSwapVariants(reduceMotion, direction)
          }
          initial={isIntro ? "hidden" : "slideHidden"}
          animate="visible"
          exit="exit"
        >
          {slide.headline.map((line, index) => (
            <motion.span
              key={index}
              className="block whitespace-nowrap"
              variants={
                isIntro
                  ? heroHeadlineLineIntroVariants(reduceMotion, index)
                  : heroHeadlineLineSwapVariants(reduceMotion)
              }
              initial={isIntro ? "hidden" : "slideHidden"}
              animate="visible"
            >
              {line.before}
              {line.highlight ? (
                isIntro ? (
                  <motion.span
                    className="inline-block text-brand-accent"
                    variants={heroHighlightIntroVariants(reduceMotion, index)}
                  >
                    {line.highlight}
                  </motion.span>
                ) : (
                  <span className="text-brand-accent">{line.highlight}</span>
                )
              ) : null}
              {line.after}
            </motion.span>
          ))}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export function HeroContent({
  slide,
  direction = 1,
  compact = false,
  compactPart,
}: {
  slide: HeroSlide;
  direction?: number;
  compact?: boolean;
  compactPart?: "headline" | "buttons";
}) {
  const reduceMotion = useReducedMotion();
  const motionReduced = Boolean(reduceMotion);
  const isIntroRef = useRef(true);
  const isIntro = isIntroRef.current;

  useEffect(() => {
    isIntroRef.current = false;
  }, []);

  if (compact && compactPart === "headline") {
    return (
      <div className="relative z-10 max-w-[54%] min-h-[calc(2*1.1*clamp(1.5rem,5vw,1.85rem))]">
        <HeroHeadline
          slide={slide}
          direction={direction}
          isIntro={false}
          reduceMotion={motionReduced}
          compact
        />
      </div>
    );
  }

  if (compact && compactPart === "buttons") {
    return (
      <div className="relative z-10 flex max-w-[54%] flex-col items-start gap-1.5">
        <a
          href="#danh-gia"
          className="inline-flex h-8 items-center justify-center gap-1 rounded-md bg-primary px-2.5 text-[0.6875rem] font-black leading-tight text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.12_303)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          Bắt đầu đánh giá
          <ArrowRight className="size-3 shrink-0" />
        </a>
        <a
          href="#exercises"
          className="inline-flex h-8 items-center justify-center gap-1 rounded-md bg-white px-2.5 text-[0.6875rem] font-black leading-tight text-brand-primary ring-2 ring-brand-primary/65 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          Xem lộ trình
          <ChevronRight className="size-3 shrink-0" />
        </a>
      </div>
    );
  }

  if (compact) {
    return (
      <>
        <div className="relative z-10 flex max-w-[54%] flex-col gap-2.5">
          <HeroHeadline
            slide={slide}
            direction={direction}
            isIntro={false}
            reduceMotion={motionReduced}
            compact
          />
          <div
            className="pointer-events-none invisible flex flex-col items-start gap-1.5"
            aria-hidden
          >
            <span className="h-8" />
            <span className="h-8" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-10 flex max-w-[54%] flex-col items-start gap-1.5">
          <a
            href="#danh-gia"
            className="inline-flex h-8 items-center justify-center gap-1 rounded-md bg-primary px-2.5 text-[0.6875rem] font-black leading-tight text-primary-foreground shadow-[0_3px_0_oklch(0.28_0.12_303)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            Bắt đầu đánh giá
            <ArrowRight className="size-3 shrink-0" />
          </a>
          <a
            href="#exercises"
            className="inline-flex h-8 items-center justify-center gap-1 rounded-md bg-white px-2.5 text-[0.6875rem] font-black leading-tight text-brand-primary ring-2 ring-brand-primary/65 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            Xem lộ trình
            <ChevronRight className="size-3 shrink-0" />
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="relative z-10 max-w-2xl lg:max-w-3xl">
      <HeroHeadline
        slide={slide}
        direction={direction}
        isIntro={isIntro}
        reduceMotion={motionReduced}
      />

      <motion.div
        variants={heroIntroStaticVariants(motionReduced)}
        initial={isIntro ? "hidden" : false}
        animate="visible"
      >
        <motion.p
          variants={heroIntroItemVariants(motionReduced)}
          className="mt-8 max-w-lg text-pretty text-lg font-semibold leading-8 text-white/85 md:mt-10 md:text-xl md:leading-9"
        >
          Track học, bài luyện và mentor chữa lỗi cho học sinh lớp 9 ôn HSG, thi vào lớp 10
          chuyên Tin.
        </motion.p>

        <motion.div
          variants={heroIntroItemVariants(motionReduced)}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#danh-gia"
            whileHover={motionReduced ? undefined : { y: -3, scale: 1.02 }}
            whileTap={motionReduced ? undefined : { y: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 520, damping: 28 }}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-black text-primary-foreground shadow-[0_5px_0_oklch(0.28_0.12_303)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            Bắt đầu đánh giá
            <ArrowRight className="size-5" />
          </motion.a>
          <motion.a
            href="#exercises"
            whileHover={motionReduced ? undefined : { y: -3, scale: 1.02 }}
            whileTap={motionReduced ? undefined : { y: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 520, damping: 28 }}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-7 text-base font-black text-brand-primary ring-2 ring-brand-primary/65 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            Xem lộ trình
            <ChevronRight className="size-5" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={heroIntroItemVariants(motionReduced)}
          className="mt-10 hidden w-fit max-w-full flex-col gap-3 rounded-xl border-2 border-brand-primary bg-white p-3.5 shadow-[0_6px_0_oklch(0.83_0.16_86)] md:flex md:flex-row md:items-center md:gap-4"
        >
          <LogoMark />
          <p className="text-pretty text-sm font-bold leading-6 text-muted-foreground">
            Lộ trình rõ, bài luyện thật, phản hồi theo từng tuần.
          </p>
          <a
            href="#parents"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-brand-primary"
          >
            Phụ huynh xem
            <ArrowRight className="size-4" />
          </a>
        </motion.div>

        <motion.div variants={heroIntroItemVariants(motionReduced)} className="mt-8">
          <HeroBadges animateIntro={isIntro} />
        </motion.div>
      </motion.div>
    </div>
  );
}
