"use client";

import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { values } from "./data";
import { RevealHeading } from "./reveal-heading";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function ValuesSection() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <section className="about-values px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-352">
        <RevealHeading
          as="h2"
          lines={["Giá trị cốt lõi"]}
          className="max-w-2xl text-balance text-[clamp(2rem,3.8vw,3.25rem)] font-black leading-[1.08] tracking-[-0.035em] text-brand-deep"
        />
        <motion.p
          className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0.2 : 0.65, ease: easeOut }}
        >
          Không phải khẩu hiệu — đây là những điều thể hiện trong cách chúng tôi vận hành mỗi tuần.
        </motion.p>

        <ul className="about-values-list mt-12 md:mt-16">
          {values.map((item, index) => (
            <motion.li
              key={item.title}
              className="about-values-item"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.75,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: easeOut,
              }}
            >
              <h3 className="text-balance text-[clamp(1.55rem,2.6vw,2.15rem)] font-black leading-[1.15] tracking-[-0.03em] text-brand-deep">
                {item.title}
              </h3>
              <p className="mt-3 max-w-prose text-pretty text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
                {item.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
