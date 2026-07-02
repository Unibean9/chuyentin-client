import type { Variants } from "framer-motion";

const whyUsEase = [0.16, 1, 0.3, 1] as const;

/** Entrance echoes the hover flip: cards tilt up out of the page on the same axis. */
export function whyUsCardEntranceVariants(reduceMotion: boolean, index: number): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3, delay: index * 0.03, ease: whyUsEase },
      },
    };
  }

  return {
    hidden: { opacity: 0, y: 46, rotateX: -55 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.85, delay: index * 0.09, ease: whyUsEase },
    },
  };
}
