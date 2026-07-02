"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroAutoplayProgress({
  activeIndex,
  isPaused,
  durationMs,
}: {
  activeIndex: number;
  isPaused: boolean;
  durationMs: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion || isPaused) return null;

  return (
    <motion.div
      key={activeIndex}
      className="pointer-events-none absolute bottom-0 left-0 z-20 hidden h-0.5 origin-left bg-brand-accent/75 md:block"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: durationMs / 1000,
        ease: "linear",
      }}
      style={{ width: "100%" }}
      aria-hidden
    />
  );
}
