"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroArrowButton({
  direction,
  onClick,
  size = "md",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  size?: "sm" | "md";
}) {
  const reduceMotion = useReducedMotion();
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const buttonSize = size === "sm" ? "size-8" : "size-10";
  const iconSize = size === "sm" ? "size-4" : "size-5";

  return (
    <motion.button
      type="button"
      aria-label={direction === "prev" ? "Slide trước" : "Slide sau"}
      onClick={onClick}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      transition={{ type: "spring", stiffness: 520, damping: 26 }}
      className={`inline-flex ${buttonSize} shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-[2px] transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70`}
    >
      <motion.span
        animate={reduceMotion ? undefined : { x: direction === "prev" ? [0, -2, 0] : [0, 2, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className={iconSize} />
      </motion.span>
    </motion.button>
  );
}
