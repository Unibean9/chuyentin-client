"use client";

import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { RevealHeading } from "./reveal-heading";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function IntroHero() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <section className="about-hero relative overflow-hidden px-5 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <RevealHeading
          as="h1"
          className="text-balance text-[clamp(2.4rem,5.2vw,4.75rem)] font-black leading-[1.05] tracking-[-0.035em] text-brand-deep"
          lines={["Dạy chuyên Tin bằng", "sự cụ thể, không bằng lời hứa."]}
        />

        <motion.p
          className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:mt-8 md:text-lg md:leading-9"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.7,
            delay: reduceMotion ? 0 : 0.12,
            ease: easeOut,
          }}
        >
          Chuyên Tin là nơi luyện thi chuyên Tin và HSG Tin học cho học sinh THCS — nền tảng thuật
          toán, bài luyện thật, mentor chữa lỗi tận gốc và báo cáo tuần để phụ huynh nhìn thấy con
          đang tiến bộ ở đâu.
        </motion.p>
      </div>
    </section>
  );
}
