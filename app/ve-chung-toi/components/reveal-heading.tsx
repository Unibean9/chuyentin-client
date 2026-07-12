"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

// "visible" always resolves y to 0% regardless of reduceMotion: the hidden
// shape can legally differ between renders (SSR vs. a real reduced-motion
// device), but if "visible" ever omitted `y`, a line whose committed hidden
// style still had y:"100%" would stay clipped out of view forever.
function lineVariants(reduceMotion: boolean, index: number) {
  return {
    hidden: reduceMotion ? { opacity: 0 } : { y: "100%", opacity: 0.4 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: reduceMotion
        ? { delay: 0, duration: 0.2 }
        : { duration: 0.85, delay: index * 0.09, ease: easeOutExpo },
    },
  };
}

/** Headline whose lines wipe up into place, clipped so only the settled glyph ever shows. */
export function RevealHeading({
  lines,
  as: Tag = "h2",
  className = "",
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
}) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className="block"
            variants={lineVariants(Boolean(reduceMotion), index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
