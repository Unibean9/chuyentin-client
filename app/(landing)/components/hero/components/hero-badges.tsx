"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroBadgeTracks, heroTrackStyle } from "./hero-data";
import { heroBadgeVariants } from "./hero-motion";

function HeroBadge({
  track,
  reduceMotion,
}: {
  track: (typeof heroBadgeTracks)[number];
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      variants={heroBadgeVariants(reduceMotion)}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.06, rotate: 2 }}
      transition={{ type: "spring", stiffness: 460, damping: 22 }}
      style={heroTrackStyle(track)}
    >
      <div className="hex-shell size-11 md:size-14 lg:size-16">
        <div className="hex-badge">
          <span className="text-xs md:text-sm">{track.short}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroBadges({ animateIntro = false }: { animateIntro?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex gap-2 md:gap-2.5 lg:gap-3"
      initial={animateIntro ? "hidden" : false}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: reduceMotion
            ? { staggerChildren: 0.04, delayChildren: 0.05 }
            : { staggerChildren: 0.06, delayChildren: animateIntro ? 0.12 : 0 },
        },
      }}
    >
      {heroBadgeTracks.map((track) => (
        <HeroBadge key={track.name} track={track} reduceMotion={Boolean(reduceMotion)} />
      ))}
    </motion.div>
  );
}
