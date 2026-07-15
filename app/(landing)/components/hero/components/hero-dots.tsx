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
    <div className="flex items-center" role="tablist" aria-label="Chọn slide hero">
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
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid size-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          >
            <span
              className={`relative block h-2.5 overflow-hidden rounded-full transition-[width,background-color] duration-300 ease-out ${
                isActive ? "w-8 bg-white/25" : "w-2.5 bg-white/50 hover:bg-white/75"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="hero-active-dot"
                  className="absolute inset-0 rounded-full bg-brand-accent"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 420, damping: 32 }
                  }
                />
              ) : null}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
