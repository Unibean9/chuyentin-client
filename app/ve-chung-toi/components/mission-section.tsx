"use client";

import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { missionVision } from "./data";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MissionSection() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <section className="about-mission relative overflow-hidden">
      <div className="about-mission-glow" aria-hidden />

      <div className="relative mx-auto max-w-352 px-5 py-16 md:px-8 md:py-24">
        <motion.h2
          className="max-w-2xl text-balance text-[clamp(1.85rem,3.4vw,2.85rem)] font-black leading-[1.1] tracking-[-0.035em] text-white"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0.2 : 0.75, ease: easeOut }}
        >
          Sứ mệnh & tầm nhìn
        </motion.h2>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-14">
          {([missionVision.mission, missionVision.vision] as const).map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.7,
                delay: reduceMotion ? 0 : index * 0.1,
                ease: easeOut,
              }}
            >
              <h3 className="text-xl font-black tracking-[-0.02em] text-brand-accent md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-prose text-pretty text-base leading-8 text-white/90 md:text-lg md:leading-9">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
