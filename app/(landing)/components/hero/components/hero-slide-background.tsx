"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { heroEase } from "./hero-motion";
import type { HeroSlide } from "./hero-data";

export function HeroSlideBackground({
  slide,
  isActive,
  reduceMotion,
  priority = false,
}: {
  slide: HeroSlide;
  isActive: boolean;
  reduceMotion: boolean;
  priority?: boolean;
}) {
  const style = { "--slide-hue": slide.hue } as CSSProperties;
  const canKenBurns = isActive && !reduceMotion;

  return (
    <motion.div
      className="absolute inset-0"
      style={style}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        zIndex: isActive ? 1 : 0,
      }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.9,
        ease: heroEase,
      }}
      aria-hidden={!isActive}
    >
      <div className="hero-slide-placeholder absolute inset-0" />
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={
          canKenBurns ? { scale: 1.08, x: "-1.75%" } : { scale: 1, x: "0%" }
        }
        transition={
          canKenBurns
            ? { duration: 6, ease: "linear" }
            : { duration: 0.9, ease: heroEase }
        }
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 100vw, 0px"
          className="object-cover object-[75%_center]"
        />
      </motion.div>
      <div className="hero-scrim absolute inset-0" />
    </motion.div>
  );
}
