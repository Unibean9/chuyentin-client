"use client";

import { useCallback, useRef, useState } from "react";
import { ArrowNavButton } from "@/components/landing/arrow-nav-button";
import { MediaFrame } from "@/components/landing/media-frame";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { testimonialSlots } from "./testimonial-data";

function TestimonialCard({
  slot,
  tone,
  cardRef,
}: {
  slot: (typeof testimonialSlots)[number];
  tone: "primary" | "accent";
  cardRef: (node: HTMLElement | null) => void;
}) {
  const isAccent = tone === "accent";

  return (
    <article
      ref={cardRef}
      className={`peek-carousel-card grid gap-6 rounded-2xl p-7 sm:grid-cols-[1fr_11rem] sm:items-center sm:gap-6 sm:p-9 ${
        isAccent ? "bg-brand-accent" : "bg-brand-primary"
      }`}
    >
      <div className="order-2 sm:order-1">
        <h3
          className={`text-pretty text-xl font-black leading-snug tracking-[-0.015em] md:text-2xl ${
            isAccent ? "text-brand-deep" : "text-white"
          }`}
        >
          {slot.headline}
        </h3>
        <p
          className={`mt-3 text-pretty text-sm font-semibold leading-7 md:text-base ${
            isAccent ? "text-brand-deep/78" : "text-white/82"
          }`}
        >
          {slot.body}
        </p>

        <p className={`mt-6 text-sm font-black ${isAccent ? "text-brand-deep" : "text-white"}`}>
          {slot.name}
          <span
            className={`mt-0.5 block text-xs font-bold italic ${
              isAccent ? "text-brand-deep/70" : "text-white/72"
            }`}
          >
            {slot.role}
          </span>
        </p>
      </div>

      <div className="order-1 mx-auto w-28 sm:order-2 sm:mx-0 sm:w-full">
        <MediaFrame
          label={`Ảnh ${slot.name}`}
          aspectClassName="aspect-square"
          className="rounded-full"
        />
      </div>
    </article>
  );
}

export function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useSsrSafeReducedMotion();

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, testimonialSlots.length - 1));
      cardRefs.current[clamped]?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(clamped);
    },
    [reduceMotion],
  );

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="peek-carousel-track"
        role="group"
        aria-roledescription="carousel"
        aria-label="Trích dẫn phụ huynh và học sinh"
      >
        <div className="peek-carousel-rail py-2">
          {testimonialSlots.map((slot, index) => (
            <TestimonialCard
              key={slot.id}
              slot={slot}
              tone={index % 2 === 0 ? "primary" : "accent"}
              cardRef={(node) => {
                cardRefs.current[index] = node;
              }}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-2 z-10 flex items-center md:left-4">
        <div className="pointer-events-auto">
          <ArrowNavButton
            direction="prev"
            disabled={activeIndex === 0}
            onClick={() => scrollToIndex(activeIndex - 1)}
            label={{ prev: "Trích dẫn trước", next: "Trích dẫn sau" }}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-2 z-10 flex items-center md:right-4">
        <div className="pointer-events-auto">
          <ArrowNavButton
            direction="next"
            disabled={activeIndex === testimonialSlots.length - 1}
            onClick={() => scrollToIndex(activeIndex + 1)}
            label={{ prev: "Trích dẫn trước", next: "Trích dẫn sau" }}
          />
        </div>
      </div>
    </div>
  );
}
