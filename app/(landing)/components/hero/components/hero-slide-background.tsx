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
      <div className="hero-slide-placeholder absolute inset-0" style={{ background: slide.backdrop }} />
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </motion.div>
  );
}
