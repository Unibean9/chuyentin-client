"use client";

import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { milestones } from "./data";
import { MediaFrame } from "./media-frame";
import { RevealHeading } from "./reveal-heading";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MilestonesSection() {
  const reduceMotion = useSsrSafeReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-milestone-card]");
    const delta = (card?.offsetWidth ?? 320) + 24;
    scroller.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  return (
    <section className="about-milestones overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-352 px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <RevealHeading
              as="h2"
              lines={["Những dấu ấn nổi bật"]}
              className="text-balance text-[clamp(2rem,3.8vw,3.25rem)] font-black leading-[1.08] tracking-[-0.035em] text-brand-deep"
            />
            <motion.p
              className="mt-5 text-pretty text-base leading-8 text-muted-foreground md:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: reduceMotion ? 0.2 : 0.65, ease: easeOut }}
            >
              Từ một lớp học nhỏ đến lộ trình có cấu trúc — từng bước Chuyên Tin xây để phụ huynh
              và học sinh nhìn thấy đường đi rõ ràng.
            </motion.p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Cột mốc trước"
              onClick={() => scrollByCard(-1)}
              className="about-milestone-nav"
            >
              <ChevronLeft className="size-5" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              aria-label="Cột mốc sau"
              onClick={() => scrollByCard(1)}
              className="about-milestone-nav"
            >
              <ChevronRight className="size-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="about-milestone-track mt-10 md:mt-14"
        tabIndex={0}
        aria-label="Danh sách cột mốc phát triển"
      >
        <div className="about-milestone-rail">
          {milestones.map((item, index) => (
            <motion.article
              key={item.id}
              data-milestone-card
              className="about-milestone-card"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.7,
                delay: reduceMotion ? 0 : Math.min(index, 3) * 0.06,
                ease: easeOut,
              }}
            >
              <MediaFrame
                label={item.frameLabel}
                photo={item.photo}
                aspectClassName="aspect-4/3"
                className="rounded-xl"
              />
              <p className="mt-5 text-sm font-black text-brand-primary">{item.phase}</p>
              <h3 className="mt-2 text-balance text-xl font-black leading-snug tracking-[-0.025em] text-brand-deep md:text-[1.35rem]">
                {item.title}
              </h3>
              <p className="mt-3 text-pretty text-sm font-semibold leading-7 text-muted-foreground md:text-base md:leading-7">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
