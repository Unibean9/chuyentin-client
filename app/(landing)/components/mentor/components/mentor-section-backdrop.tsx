"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const lineReveal = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.05, ease: easeOut },
  },
};

const nodeReveal = {
  hidden: { scale: 0.35, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/**
 * Họa tiết nền section mentor: đồ thị vẽ ra khi section vào viewport.
 */
export function MentorSectionBackdrop() {
  const reduceMotion = useSsrSafeReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-80px" });
  const active = reduceMotion || inView;

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -left-[12%] top-[-8%] size-[min(42vw,22rem)] rounded-full bg-white/[0.07] blur-3xl motion-reduce:blur-2xl"
        initial={false}
        animate={
          active
            ? { opacity: 1, scale: 1 }
            : { opacity: 0.25, scale: 0.88 }
        }
        transition={{ duration: reduceMotion ? 0.01 : 1.1, ease: easeOut }}
      />
      <motion.div
        className="absolute -right-[10%] bottom-[-14%] size-[min(48vw,26rem)] rounded-full bg-[oklch(0.83_0.16_86/0.12)] blur-3xl motion-reduce:blur-2xl"
        initial={false}
        animate={
          active
            ? { opacity: 1, scale: 1 }
            : { opacity: 0.2, scale: 0.9 }
        }
        transition={{
          duration: reduceMotion ? 0.01 : 1.2,
          delay: reduceMotion ? 0 : 0.08,
          ease: easeOut,
        }}
      />
      <motion.div
        className="absolute left-[38%] top-[42%] size-[min(28vw,14rem)] -translate-x-1/2 rounded-full bg-white/[0.04] blur-2xl"
        initial={false}
        animate={active ? { opacity: 1 } : { opacity: 0.15 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.12, ease: easeOut }}
      />

      {/* Graph — góc trên phải */}
      <svg
        className="absolute right-[-4%] top-[6%] h-[min(52vw,22rem)] w-[min(58vw,26rem)] opacity-[0.22] md:opacity-[0.28]"
        viewBox="0 0 420 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          initial={false}
          animate={active ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.045,
                delayChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
        >
          <g stroke="white" strokeWidth="1.25" strokeLinecap="round">
            {(
              [
                [68, 72, 148, 48],
                [148, 48, 236, 88],
                [236, 88, 318, 54],
                [148, 48, 172, 148],
                [236, 88, 172, 148],
                [172, 148, 112, 210],
                [172, 148, 268, 198],
                [268, 198, 348, 160],
                [268, 198, 292, 278],
                [112, 210, 68, 288],
                [112, 210, 198, 268],
                [318, 54, 378, 110],
                [378, 110, 348, 160],
              ] as const
            ).map(([x1, y1, x2, y2]) => (
              <motion.line
                key={`${x1}-${y1}-${x2}-${y2}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                variants={lineReveal}
              />
            ))}
          </g>
          <g fill="white">
            {(
              [
                [68, 72, 4.5],
                [148, 48, 5.5],
                [236, 88, 4.5],
                [318, 54, 4],
                [172, 148, 6],
                [112, 210, 4.5],
                [268, 198, 5],
                [348, 160, 4],
                [378, 110, 3.5],
                [292, 278, 3.5],
                [68, 288, 3.5],
                [198, 268, 4],
              ] as const
            ).map(([cx, cy, r]) => (
              <motion.circle
                key={`n-${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={r}
                variants={nodeReveal}
              />
            ))}
          </g>
          <motion.circle
            cx="172"
            cy="148"
            r="9"
            fill="oklch(0.83 0.16 86 / 0.55)"
            variants={nodeReveal}
          />
          <motion.circle
            cx="268"
            cy="198"
            r="7"
            fill="oklch(0.83 0.16 86 / 0.4)"
            variants={nodeReveal}
          />
        </motion.g>
      </svg>

      {/* Graph — góc dưới trái */}
      <svg
        className="absolute bottom-[4%] left-[-6%] h-[min(44vw,18rem)] w-[min(50vw,22rem)] opacity-[0.16] md:opacity-[0.22]"
        viewBox="0 0 360 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          initial={false}
          animate={active ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.05,
                delayChildren: reduceMotion ? 0 : 0.28,
              },
            },
          }}
        >
          <g stroke="white" strokeWidth="1.2" strokeLinecap="round">
            {(
              [
                [40, 210, 98, 148],
                [98, 148, 168, 178],
                [98, 148, 132, 78],
                [132, 78, 210, 52],
                [168, 178, 248, 148],
                [210, 52, 248, 148],
                [248, 148, 310, 98],
                [168, 178, 198, 248],
              ] as const
            ).map(([x1, y1, x2, y2]) => (
              <motion.line
                key={`l2-${x1}-${y1}-${x2}-${y2}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                variants={lineReveal}
              />
            ))}
          </g>
          <g fill="white">
            {(
              [
                [40, 210, 3.5],
                [98, 148, 5],
                [132, 78, 4],
                [210, 52, 3.5],
                [168, 178, 4.5],
                [248, 148, 5],
                [310, 98, 3.5],
                [198, 248, 3.5],
              ] as const
            ).map(([cx, cy, r]) => (
              <motion.circle
                key={`n2-${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={r}
                variants={nodeReveal}
              />
            ))}
          </g>
          <motion.circle
            cx="98"
            cy="148"
            r="8"
            fill="oklch(0.83 0.16 86 / 0.35)"
            variants={nodeReveal}
          />
        </motion.g>
      </svg>

    </div>
  );
}
