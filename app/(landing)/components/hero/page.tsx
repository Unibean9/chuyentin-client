"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroAmbient } from "./components/hero-ambient";
import { HeroArrowButton } from "./components/hero-arrows";
import { HeroAutoplayProgress } from "./components/hero-autoplay-progress";
import { HeroContent } from "./components/hero-content";
import { HeroDots } from "./components/hero-dots";
import { heroSlides } from "./components/hero-data";
import { HeroMobile } from "./components/hero-mobile";
import { HeroSlideBackground } from "./components/hero-slide-background";
import { heroControlsIntroVariants } from "./components/hero-motion";

const AUTOPLAY_INTERVAL_MS = 6000;

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduceMotion || isPaused) return;

    timerRef.current = setInterval(() => {
      setSlideDirection(1);
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduceMotion, isPaused]);

  const activeSlide = heroSlides[activeIndex];

  const goPrev = useCallback(() => {
    setSlideDirection(-1);
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goNext = useCallback(() => {
    setSlideDirection(1);
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setSlideDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex],
  );

  return (
    <section
      className="relative isolate w-full overflow-hidden border-b border-[oklch(0.9_0.018_285)] md:h-[calc(100dvh-4.85rem)] md:min-h-144 md:pl-6 md:pr-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-md:hidden">
        {heroSlides.map((slide, index) => (
          <HeroSlideBackground
            key={slide.id}
            slide={slide}
            isActive={index === activeIndex}
            reduceMotion={Boolean(reduceMotion)}
            priority={index === 0}
          />
        ))}

        <HeroAmbient />

        <HeroAutoplayProgress
          activeIndex={activeIndex}
          isPaused={isPaused}
          durationMs={AUTOPLAY_INTERVAL_MS}
        />
      </div>

      <HeroMobile
        slide={activeSlide}
        direction={slideDirection}
        onPrev={goPrev}
        onNext={goNext}
      />

      <div className="relative z-10 hidden w-full max-w-[88rem] flex-col md:flex md:h-full md:justify-center">
        <HeroContent slide={activeSlide} direction={slideDirection} />

        <motion.div
          className="mt-10 flex items-center gap-4"
          variants={heroControlsIntroVariants(Boolean(reduceMotion))}
          initial="hidden"
          animate="visible"
        >
          <HeroArrowButton direction="prev" onClick={goPrev} />
          <HeroDots slides={heroSlides} activeIndex={activeIndex} onSelect={goToSlide} />
          <HeroArrowButton direction="next" onClick={goNext} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
export { Hero };
