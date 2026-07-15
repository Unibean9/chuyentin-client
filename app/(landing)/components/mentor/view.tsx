"use client";

import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { MentorShowcase } from "./components/mentor-showcase";
import { MentorSectionBackdrop } from "./components/mentor-section-backdrop";
import { mentors } from "./components/mentor-data";

const easeOut = [0.22, 1, 0.36, 1] as const;

function MentorSection() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <section
      id="doi-ngu"
      className="relative overflow-x-clip bg-brand-primary px-4 py-10 text-white sm:px-6 md:px-8 md:py-12"
    >
      <MentorSectionBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.h2
          className="text-center text-balance font-display text-[clamp(1.9rem,3.5vw,2.85rem)] font-black tracking-[-0.035em] text-white"
          initial={
            reduceMotion
              ? false
              : { y: 20, opacity: 0.45, filter: "blur(6px)" }
          }
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.85,
            ease: easeOut,
          }}
        >
          Đội ngũ mentor
        </motion.h2>

        <MentorShowcase members={mentors} />
      </div>
    </section>
  );
}

export default MentorSection;
export { MentorSection };
