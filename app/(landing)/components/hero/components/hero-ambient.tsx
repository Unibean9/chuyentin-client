"use client";

import { useReducedMotion } from "framer-motion";

const glyphs = [
  { label: "</>", className: "hero-ambient-glyph left-[8%] top-[14%] text-[1.35rem]", delay: "0s" },
  { label: "O(n)", className: "hero-ambient-glyph right-[34%] top-[22%] text-xs font-black", delay: "-4s" },
  { label: "{ }", className: "hero-ambient-glyph left-[22%] bottom-[28%] text-lg", delay: "-7s" },
  { label: "Σ", className: "hero-ambient-glyph right-[18%] bottom-[34%] text-xl font-black", delay: "-2s" },
];

export function HeroAmbient() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] hidden overflow-hidden md:block" aria-hidden>
      <div className="hero-ambient-sweep absolute inset-0" />
      <div className="hero-ambient-dots absolute left-[6%] top-[10%] size-28 opacity-35" />
      {glyphs.map((glyph) => (
        <span
          key={glyph.label}
          className={`absolute font-black text-white/18 ${glyph.className}`}
          style={{ animationDelay: glyph.delay }}
        >
          {glyph.label}
        </span>
      ))}
    </div>
  );
}
