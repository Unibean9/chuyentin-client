"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { SafeImage } from "@/components/ui/safe-image";
import { cn } from "@/lib/utils";
import type { ActivityItem } from "./activity-data";

const AUTOPLAY_MS = 5000;
const VISIBLE_RANGE = 3;
const easeOut = [0.16, 1, 0.3, 1] as const;

/** Center lớn nhất; ảnh sát bên nhỏ hơn; ảnh phía sau nhỏ hơn nữa một chút. */
const SCALE = [1, 0.9, 0.82, 0.76] as const;
/** Khe nhỏ cố định giữa mép center và mép ảnh sát bên — không phụ thuộc vw. */
const CENTER_GAP = "1.25rem";
/** Mức chồng giữa các ảnh ngoài (abs ≥ 2). */
const OUTER_OVERLAP = "4.5rem";

/**
 * Offset tâm thẻ theo % chiều rộng chính thẻ + khe cố định.
 * % trong translateX tính theo width của chính element → luôn cách đúng
 * dù card 42vw hay 480px.
 */
function cardOffsetX(abs: number, direction: number): string {
  if (abs === 0 || direction === 0) return "-50%";

  // abs=1: nửa center + nửa neighbor + khe nhỏ
  // = 50%*(1 + s1) + CENTER_GAP
  if (abs === 1) {
    const pct = 50 * (1 + SCALE[1]);
    return `calc(-50% + ${direction} * (${pct}% + ${CENTER_GAP}))`;
  }

  // abs≥2: tiếp tục từ abs-1, trừ overlap để đè lên nhau
  let pct = 50 * (1 + SCALE[1]);
  for (let i = 2; i <= abs; i += 1) {
    pct += 50 * (SCALE[i - 1] + SCALE[i]);
  }
  const overlaps = abs - 1;
  return `calc(-50% + ${direction} * (${pct}% + ${CENTER_GAP} - ${overlaps} * ${OUTER_OVERLAP}))`;
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function shortestDelta(index: number, active: number, count: number) {
  let delta = index - active;
  if (delta > count / 2) delta -= count;
  if (delta < -count / 2) delta += count;
  return delta;
}

function NavButton({
  direction,
  onClick,
  label,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "z-50 grid size-11 place-items-center rounded-full border border-white/80 bg-white text-brand-deep shadow-lg transition-transform hover:scale-105 active:scale-95 sm:size-12",
        className,
      )}
    >
      <Icon className="size-5 stroke-[2.5]" aria-hidden />
    </button>
  );
}

function ActivityCard({
  item,
  isActive,
  showCopy,
  className,
}: {
  item: ActivityItem;
  isActive: boolean;
  showCopy: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-3/4 overflow-hidden rounded-[1.5rem] bg-muted shadow-[0_24px_60px_-20px_oklch(0.35_0.12_292_/_0.45)]",
        isActive && "ring-2 ring-brand-primary/20",
        className,
      )}
    >
      <SafeImage
        src={item.imagePath}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 88vw, 460px"
        className="object-cover"
        priority={isActive}
      />

      <div
        className={cn(
          "absolute inset-0 bg-linear-to-t from-brand-deep/90 via-brand-deep/25 to-transparent",
          showCopy ? "opacity-100" : "opacity-30",
        )}
      />

      {showCopy ? (
        <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6 md:p-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80 sm:text-xs">
            {item.category}
          </p>
          <h3 className="mt-1.5 text-pretty text-lg font-black leading-snug tracking-[-0.02em] text-white sm:text-xl md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-pretty text-sm leading-relaxed text-white/90 md:text-base md:leading-7">
            {item.description}
          </p>
        </div>
      ) : null}
    </div>
  );
}

function MobileCarousel({
  items,
  active,
  onPrev,
  onNext,
}: {
  items: ActivityItem[];
  active: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[active];

  return (
    <div className="relative mt-8 px-5 md:hidden">
      <div className="relative mx-auto max-w-sm">
        <ActivityCard item={item} isActive showCopy />

        <NavButton
          direction="prev"
          onClick={onPrev}
          label="Ảnh hoạt động trước"
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <NavButton
          direction="next"
          onClick={onNext}
          label="Ảnh hoạt động tiếp theo"
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

function DesktopCoverflow({
  items,
  active,
  prevActive,
  reduceMotion,
  onPrev,
  onNext,
  onSelect,
}: {
  items: ActivityItem[];
  active: number;
  prevActive: number;
  reduceMotion: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}) {
  const count = items.length;

  return (
    <div className="relative mt-10 hidden w-screen max-w-[100vw] left-1/2 -translate-x-1/2 md:block">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[min(70vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/18 blur-3xl"
      />

      <NavButton
        direction="prev"
        onClick={onPrev}
        label="Ảnh hoạt động trước"
        className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-8"
      />
      <NavButton
        direction="next"
        onClick={onNext}
        label="Ảnh hoạt động tiếp theo"
        className="absolute right-4 top-1/2 -translate-y-1/2 lg:right-8"
      />

      <div
        className="relative h-[620px] w-full overflow-visible perspective-[1400px] lg:h-[680px]"
        aria-roledescription="carousel"
        aria-label="Hình ảnh hoạt động ngoại khóa"
      >
        {/* Không dùng preserve-3d trên list — để z-index DOM thắng, center không bị đè. */}
        <ul className="relative size-full list-none">
          {items.map((item, index) => {
            const delta = shortestDelta(index, active, count);
            const prevDelta = shortestDelta(index, prevActive, count);
            const wrapped = Math.abs(delta - prevDelta) > VISIBLE_RANGE;
            const rawAbs = Math.abs(delta);
            const abs = Math.min(rawAbs, VISIBLE_RANGE);
            const isActive = delta === 0;
            const visible = rawAbs <= VISIBLE_RANGE;
            const direction = delta === 0 ? 0 : delta > 0 ? 1 : -1;

            return (
              <motion.li
                key={item.id}
                className={cn(
                  "absolute left-1/2 top-1/2 w-[min(42vw,460px)] lg:w-[480px]",
                  !visible && "pointer-events-none",
                  isActive ? "cursor-default" : "cursor-pointer",
                )}
                initial={false}
                animate={
                  reduceMotion
                    ? {
                        x: "-50%",
                        y: "-50%",
                        scale: isActive ? 1 : 0.94,
                        rotateY: 0,
                        opacity: isActive ? 1 : 0,
                      }
                    : {
                        x: cardOffsetX(abs, direction),
                        y: "-50%",
                        scale: SCALE[abs],
                        rotateY: direction * Math.min(abs, 2) * -10,
                        opacity: visible ? 1 : 0,
                      }
                }
                transition={
                  wrapped || reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.55, ease: easeOut }
                }
                style={{
                  // Center luôn cao nhất; abs càng lớn z càng thấp.
                  zIndex: isActive ? 30 : Math.max(1, 20 - abs),
                }}
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) onSelect(index);
                }}
              >
                <ActivityCard item={item} isActive={isActive} showCopy={isActive} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function ActivitiesCoverflow({ items }: { items: ActivityItem[] }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useSsrSafeReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prevActiveRef = useRef(0);
  const count = items.length;

  useLayoutEffect(() => {
    prevActiveRef.current = active;
  }, [active]);

  const goTo = useCallback(
    (index: number) => {
      setActive(mod(index, count));
    },
    [count],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (reduceMotion || count <= 1) return;
    timerRef.current = setInterval(goNext, AUTOPLAY_MS);
  }, [count, goNext, reduceMotion]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  const handlePrev = () => {
    goPrev();
    resetAutoplay();
  };

  const handleNext = () => {
    goNext();
    resetAutoplay();
  };

  const handleSelect = (index: number) => {
    goTo(index);
    resetAutoplay();
  };

  return (
    <>
      <MobileCarousel items={items} active={active} onPrev={handlePrev} onNext={handleNext} />
      <DesktopCoverflow
        items={items}
        active={active}
        prevActive={prevActiveRef.current}
        reduceMotion={reduceMotion}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelect={handleSelect}
      />
    </>
  );
}
