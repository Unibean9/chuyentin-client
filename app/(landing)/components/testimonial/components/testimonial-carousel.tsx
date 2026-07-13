"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowNavButton } from "@/components/landing/arrow-nav-button";
import { MediaFrame } from "@/components/landing/media-frame";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { testimonialSlots } from "./testimonial-data";

const loopingTestimonialSlots = [...testimonialSlots, ...testimonialSlots, ...testimonialSlots];

function TestimonialCard({
  slot,
  tone,
  index,
  isDuplicate,
  cardRef,
}: {
  slot: (typeof testimonialSlots)[number];
  tone: "primary" | "accent";
  index: number;
  isDuplicate: boolean;
  cardRef: (node: HTMLElement | null) => void;
}) {
  const isAccent = tone === "accent";

  return (
    <article
      ref={cardRef}
      role={isDuplicate ? undefined : "group"}
      aria-hidden={isDuplicate || undefined}
      aria-roledescription={isDuplicate ? undefined : "slide"}
      aria-label={isDuplicate ? undefined : `${index + 1} / ${testimonialSlots.length}`}
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
  const loopResetTimeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(testimonialSlots.length);
  const activeIndexRef = useRef(testimonialSlots.length);
  const reduceMotion = useSsrSafeReducedMotion();

  const setTrackPosition = useCallback((index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;

    const left = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({ left, behavior });
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (loopResetTimeoutRef.current !== null) {
        window.clearTimeout(loopResetTimeoutRef.current);
      }

      setTrackPosition(index, reduceMotion ? "auto" : "smooth");
      setActiveIndex(index);
      activeIndexRef.current = index;

      const firstMiddleIndex = testimonialSlots.length;
      const firstLastIndex = testimonialSlots.length * 2;
      const normalizedIndex =
        index >= firstLastIndex
          ? index - testimonialSlots.length
          : index < firstMiddleIndex
            ? index + testimonialSlots.length
            : null;

      if (normalizedIndex !== null) {
        loopResetTimeoutRef.current = window.setTimeout(
          () => {
            setTrackPosition(normalizedIndex, "auto");
            setActiveIndex(normalizedIndex);
            activeIndexRef.current = normalizedIndex;
            loopResetTimeoutRef.current = null;
          },
          reduceMotion ? 0 : 650,
        );
      }
    },
    [reduceMotion, setTrackPosition],
  );

  useLayoutEffect(() => {
    const initialIndex = testimonialSlots.length;
    const positionAtStart = () => setTrackPosition(initialIndex, "auto");
    const keepCurrentCardCentered = () => setTrackPosition(activeIndexRef.current, "auto");
    const animationFrameId = window.requestAnimationFrame(positionAtStart);

    window.addEventListener("resize", keepCurrentCardCentered);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", keepCurrentCardCentered);
    };
  }, [setTrackPosition]);

  useEffect(() => {
    if (testimonialSlots.length <= 1) return;

    const timeoutId = window.setTimeout(() => {
      scrollToIndex(activeIndex + 1);
    }, 5_000);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex, scrollToIndex]);

  useEffect(
    () => () => {
      if (loopResetTimeoutRef.current !== null) {
        window.clearTimeout(loopResetTimeoutRef.current);
      }
    },
    [],
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
          {loopingTestimonialSlots.map((slot, index) => (
            <TestimonialCard
              key={`${slot.id}-${Math.floor(index / testimonialSlots.length)}`}
              slot={slot}
              tone={index % 2 === 0 ? "primary" : "accent"}
              index={index % testimonialSlots.length}
              isDuplicate={
                index < testimonialSlots.length || index >= testimonialSlots.length * 2
              }
              cardRef={(node) => {
                cardRefs.current[index] = node;
              }}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-2 z-10 flex items-center md:left-12 xl:left-20">
        <div className="pointer-events-auto">
          <ArrowNavButton
            direction="prev"
            onClick={() => scrollToIndex(activeIndex - 1)}
            label={{ prev: "Trích dẫn trước", next: "Trích dẫn sau" }}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-2 z-10 flex items-center md:right-12 xl:right-20">
        <div className="pointer-events-auto">
          <ArrowNavButton
            direction="next"
            onClick={() => scrollToIndex(activeIndex + 1)}
            label={{ prev: "Trích dẫn trước", next: "Trích dẫn sau" }}
          />
        </div>
      </div>
    </div>
  );
}
