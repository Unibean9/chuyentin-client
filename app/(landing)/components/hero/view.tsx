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
      className="relative isolate w-full overflow-hidden border-b border-[oklch(0.9_0.018_285)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Hero slideshow"
    >
      <div className="relative aspect-video w-full md:aspect-auto md:h-[calc(100dvh-4.85rem)] md:min-h-144">
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
          className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden items-center justify-between px-5 md:flex md:px-8"
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
          className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center px-4 md:bottom-6"
          variants={heroControlsIntroVariants(Boolean(reduceMotion))}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-3 md:hidden">
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
