"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HeroSlide } from "./hero-data";

export function HeroDots({
  slides,
  activeIndex,
  onSelect,
}: {
  slides: HeroSlide[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex items-center gap-2.5" role="tablist" aria-label="Chọn slide hero">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-current={isActive ? "true" : undefined}
            aria-label={`Slide ${index + 1}: ${slide.imageAlt}`}
            onClick={() => onSelect(index)}
            layout={reduceMotion ? false : true}
            whileHover={reduceMotion ? undefined : { scale: 1.12 }}
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
            className={`relative h-2.5 overflow-hidden rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${
              isActive ? "w-8 bg-white/20" : "w-2.5 bg-white/45 hover:bg-white/70"
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="hero-active-dot"
                className="absolute inset-0 rounded-full bg-brand-accent"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
          </motion.button>
        );
      })}
    </div>
  );
}
