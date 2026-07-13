"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArrowNavButton({
  direction,
  onClick,
  disabled,
  size = "md",
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  size?: "sm" | "md";
  label?: { prev: string; next: string };
}) {
  const reduceMotion = useReducedMotion();
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const buttonSize = size === "sm" ? "size-9" : "size-11";
  const iconSize = size === "sm" ? "size-4.5" : "size-6";
  const ariaLabel = direction === "prev" ? (label?.prev ?? "Slide trước") : (label?.next ?? "Slide sau");

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      whileHover={reduceMotion || disabled ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion || disabled ? undefined : { scale: 0.94 }}
      transition={{ type: "spring", stiffness: 520, damping: 26 }}
      className={`inline-flex ${buttonSize} shrink-0 items-center justify-center rounded-full bg-black/35 text-white shadow-[0_2px_12px_oklch(0_0_0_/_0.28)] ring-2 ring-white/45 backdrop-blur-sm transition-colors hover:bg-black/45 hover:ring-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-black/35`}
    >
      <motion.span
        animate={reduceMotion || disabled ? undefined : { x: direction === "prev" ? [0, -2, 0] : [0, 2, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Icon className={iconSize} strokeWidth={2.5} />
      </motion.span>
    </motion.button>
  );
}
