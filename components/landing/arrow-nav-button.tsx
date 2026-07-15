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
  const buttonSize = "size-11";
  const iconSize = size === "sm" ? "size-5" : "size-6";
  const ariaLabel = direction === "prev" ? (label?.prev ?? "Slide trước") : (label?.next ?? "Slide sau");

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      whileHover={reduceMotion || disabled ? undefined : { scale: 1.05 }}
      whileTap={reduceMotion || disabled ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex ${buttonSize} shrink-0 items-center justify-center rounded-full bg-black/55 text-white shadow-[0_2px_12px_oklch(0_0_0_/_0.28)] ring-2 ring-white/50 transition-colors hover:bg-black/70 hover:ring-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/85 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-black/55`}
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
