"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { HeroArrowButton } from "./hero-arrows";
import { HeroContent } from "./hero-content";
import type { HeroSlide } from "./hero-data";
import { heroMobileImageSwapVariants } from "./hero-motion";

export function HeroMobile({
  slide,
  direction,
  onPrev,
  onNext,
}: {
  slide: HeroSlide;
  direction: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const motionReduced = Boolean(reduceMotion);

  return (
    <div className="relative w-full md:hidden">
      <div className="relative aspect-video w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide.id}
            custom={direction}
            className="absolute inset-0"
            variants={heroMobileImageSwapVariants(motionReduced, direction)}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 767px) 100vw, 0px"
              className="object-cover object-[75%_center]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col p-3.5">
        <div className="hero-mobile-scrim absolute inset-0" aria-hidden />

        <div className="relative flex min-h-0 flex-1 items-center">
          <div className="w-full -translate-y-2">
            <HeroContent slide={slide} direction={direction} compact compactPart="headline" />
          </div>
        </div>

        <div className="pointer-events-auto -translate-y-3">
          <HeroContent slide={slide} direction={direction} compact compactPart="buttons" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-1">
        <div className="pointer-events-auto">
          <HeroArrowButton direction="prev" onClick={onPrev} size="sm" />
        </div>
        <div className="pointer-events-auto">
          <HeroArrowButton direction="next" onClick={onNext} size="sm" />
        </div>
      </div>
    </div>
  );
}
