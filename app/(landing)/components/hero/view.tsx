"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowNavButton } from "@/components/landing/arrow-nav-button";
import { HeroAutoplayProgress } from "./components/hero-autoplay-progress";
import { HeroDots } from "./components/hero-dots";
import { heroSlides } from "./components/hero-data";
import { HeroSlideBackground } from "./components/hero-slide-background";
import { heroControlsIntroVariants } from "./components/hero-motion";

const AUTOPLAY_INTERVAL_MS = 6000;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduceMotion || isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion, isPaused]);

  const goPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <section
      className="relative isolate w-full overflow-hidden border-b border-border bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && event.currentTarget.contains(next)) return;
        setIsPaused(false);
      }}
      aria-roledescription="carousel"
      aria-label="Hình ảnh Chuyên Tin"
    >
      <h1 className="sr-only">Chuyên Tin — luyện thi chuyên Tin lớp 9 lên 10</h1>

      <div className="relative aspect-video w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <HeroSlideBackground
            key={slide.id}
            slide={slide}
            isActive={index === activeIndex}
            reduceMotion={Boolean(reduceMotion)}
            priority={index === 0}
          />
        ))}

        <HeroAutoplayProgress
          activeIndex={activeIndex}
          isPaused={isPaused}
          durationMs={AUTOPLAY_INTERVAL_MS}
        />

        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between px-3 md:flex md:px-5"
          variants={heroControlsIntroVariants(Boolean(reduceMotion))}
          initial="hidden"
          animate="visible"
        >
          <div className="pointer-events-auto">
            <ArrowNavButton direction="prev" onClick={goPrev} />
          </div>
          <div className="pointer-events-auto">
            <ArrowNavButton direction="next" onClick={goNext} />
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center px-4 md:bottom-4"
          variants={heroControlsIntroVariants(Boolean(reduceMotion))}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-1 md:hidden">
            <ArrowNavButton direction="prev" onClick={goPrev} size="sm" />
            <HeroDots slides={heroSlides} activeIndex={activeIndex} onSelect={goToSlide} />
            <ArrowNavButton direction="next" onClick={goNext} size="sm" />
          </div>
          <div className="hidden md:block">
            <HeroDots slides={heroSlides} activeIndex={activeIndex} onSelect={goToSlide} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
export { Hero };
