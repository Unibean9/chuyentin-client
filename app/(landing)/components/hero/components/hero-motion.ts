import type { Transition, Variants } from "framer-motion";

export const heroEase = [0.16, 1, 0.3, 1] as const;

export const heroEaseOutExpo = [0.19, 1, 0.22, 1] as const;

export function heroTransition(reduceMotion: boolean, duration = 0.7): Transition {
  if (reduceMotion) {
    return { duration: 0.2, ease: "easeOut" };
  }

  return { duration, ease: heroEase };
}

/** First page load — full staged reveal for static hero blocks. */
export function heroIntroStaticVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0.04, delayChildren: 0.08 }
        : { staggerChildren: 0.07, delayChildren: 0.28 },
    },
  };
}

export function heroIntroItemVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: heroTransition(true, 0.2) },
    };
  }

  return {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.62, ease: heroEaseOutExpo },
    },
  };
}

/** Headline container — line stagger on first load. */
export function heroHeadlineIntroContainerVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? { staggerChildren: 0.04 }
        : { staggerChildren: 0.07 },
    },
  };
}

/** Headline container — fast overlap on slide change. */
export function heroHeadlineSwapVariants(
  reduceMotion: boolean,
  direction = 1,
): Variants {
  if (reduceMotion) {
    return {
      slideHidden: { opacity: 0 },
      visible: { opacity: 1, transition: heroTransition(true, 0.18) },
      exit: { opacity: 0, transition: heroTransition(true, 0.12) },
    };
  }

  const offset = direction > 0 ? 1 : -1;

  return {
    slideHidden: {
      opacity: 0,
      y: offset * 28,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.42, ease: heroEaseOutExpo },
    },
    exit: {
      opacity: 0,
      y: offset * -18,
      filter: "blur(5px)",
      transition: { duration: 0.22, ease: heroEase },
    },
  };
}

/** Mobile hero image — cinematic crossfade; UI chrome stays fixed. */
export function heroMobileImageSwapVariants(reduceMotion: boolean, direction = 1): Variants {
  if (reduceMotion) {
    return {
      enter: { opacity: 0 },
      center: { opacity: 1, transition: heroTransition(true, 0.2) },
      exit: { opacity: 0, transition: heroTransition(true, 0.15) },
    };
  }

  const offset = direction > 0 ? 1 : -1;

  return {
    enter: {
      opacity: 0,
      x: `${offset * 5}%`,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.68, ease: heroEaseOutExpo },
    },
    exit: {
      opacity: 0,
      x: `${offset * -3.5}%`,
      scale: 1.02,
      transition: { duration: 0.48, ease: heroEase },
    },
  };
}

/** Headline lines — rich reveal on first load only. */
export function heroHeadlineLineIntroVariants(reduceMotion: boolean, index: number): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delay: index * 0.04, duration: 0.2 },
      },
    };
  }

  return {
    hidden: {
      opacity: 0,
      y: 40,
      clipPath: "inset(100% 0 0 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 0.72,
        ease: heroEaseOutExpo,
      },
    },
  };
}

/** Headline lines — snappy, no extra delay on slide swap. */
export function heroHeadlineLineSwapVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      slideHidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }

  return {
    slideHidden: { opacity: 0.85 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };
}

export function heroHighlightIntroVariants(reduceMotion: boolean, index: number): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delay: 0.05 + index * 0.05, duration: 0.2 } },
    };
  }

  return {
    hidden: { opacity: 0, scale: 0.9, y: 6 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 520,
        damping: 28,
      },
    },
  };
}

export function heroBadgeVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2 } },
    };
  }

  return {
    hidden: { opacity: 0, y: 18, scale: 0.82, rotate: -8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 420,
        damping: 26,
      },
    },
  };
}

/** Controls row — intro on page load. */
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
      transition: { duration: 0.55, delay: 0.52, ease: heroEaseOutExpo },
    },
  };
}
