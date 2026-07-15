"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/landing/section-kit";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { assessmentSteps } from "./first-test-data";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function FirstTestSteps() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <div className="relative mt-12">
      <motion.div
        className="absolute left-[16.67%] right-[16.67%] top-6 hidden h-0.5 origin-left bg-brand-primary/25 md:block"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduceMotion ? 0.2 : 0.9, delay: 0.15, ease: easeOut }}
        aria-hidden
      />

      <div className="grid gap-8 md:grid-cols-3">
        {assessmentSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.1}>
            <article className="feature-column relative">
              <span className="relative grid size-12 place-items-center rounded-full bg-brand-primary text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-brand-deep">
                {step.title}
              </h3>
              <p className="mt-3 text-pretty font-semibold leading-7 text-muted-foreground">
                {step.copy}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
