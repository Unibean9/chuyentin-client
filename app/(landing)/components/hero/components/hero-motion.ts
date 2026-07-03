import type { Variants } from "framer-motion";

export const heroEase = [0.16, 1, 0.3, 1] as const;

const heroEaseOutExpo = [0.19, 1, 0.22, 1] as const;

export function heroControlsIntroVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
    };
  }

  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay: 0.2, ease: heroEaseOutExpo },
    },
  };
}
