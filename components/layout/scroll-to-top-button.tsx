"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const MIN_SCROLL_DISTANCE = 480;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const reduceMotion = useSsrSafeReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      const revealAfter = Math.max(MIN_SCROLL_DISTANCE, window.innerHeight * 0.65);
      setIsVisible(window.scrollY > revealAfter);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="mt-6 size-12 shrink-0">
      <AnimatePresence>
        {isVisible ? (
          <motion.button
            type="button"
            aria-label="Cuộn lên đầu trang"
            title="Lên đầu trang"
            onClick={scrollToTop}
            className="group grid size-12 place-items-center rounded-full bg-[oklch(0.88_0_0)] text-brand-deep shadow-[0_4px_8px_oklch(0.2_0.02_300/0.12)] outline-none transition-colors duration-200 hover:bg-[oklch(0.82_0_0)] focus-visible:ring-3 focus-visible:ring-brand-primary/40"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.82, filter: "blur(5px)" }
            }
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 10, scale: 0.88, filter: "blur(3px)" }
            }
            transition={{
              duration: reduceMotion ? 0.12 : 0.36,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.span
              className="inline-flex"
              initial={reduceMotion ? false : { y: 4 }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.3,
                delay: reduceMotion ? 0 : 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ArrowUp
                className="size-5 stroke-[2.25] transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5"
                aria-hidden
              />
            </motion.span>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
