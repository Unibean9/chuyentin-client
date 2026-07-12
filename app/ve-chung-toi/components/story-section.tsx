"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/landing/section-kit";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { storyFrames, storyNarrative } from "./data";
import { MediaFrame } from "./media-frame";
import { RevealHeading } from "./reveal-heading";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function StorySection() {
  const reduceMotion = useSsrSafeReducedMotion();
  const [lead, middle, close] = storyNarrative;

  return (
    <section className="about-story px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-352">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <RevealHeading
              as="h2"
              lines={["Câu chuyện của chúng tôi"]}
              className="max-w-xl text-balance text-[clamp(2rem,3.8vw,3.25rem)] font-black leading-[1.08] tracking-[-0.035em] text-brand-deep"
            />

            <motion.p
              className="mt-8 max-w-prose text-pretty text-base leading-8 text-foreground/88 md:text-lg md:leading-9"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: easeOut }}
            >
              {lead}
            </motion.p>

            <motion.p
              className="mt-5 max-w-prose text-pretty text-base leading-8 text-foreground/88 md:text-lg md:leading-9"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.7,
                delay: reduceMotion ? 0 : 0.08,
                ease: easeOut,
              }}
            >
              {middle}
            </motion.p>
          </div>

          <Reveal delay={0.1} className="lg:pt-4">
            <MediaFrame
              label={storyFrames[0].label}
              hint={storyFrames[0].hint}
              photo={storyFrames[0].photo}
              aspectClassName="aspect-4/5"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:mt-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <MediaFrame
              label={storyFrames[1].label}
              hint={storyFrames[1].hint}
              photo={storyFrames[1].photo}
              aspectClassName="aspect-video"
            />
          </Reveal>

          <motion.p
            className="order-1 max-w-prose text-pretty text-base leading-8 text-foreground/88 md:text-lg md:leading-9 lg:order-2"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: easeOut }}
          >
            {close}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
