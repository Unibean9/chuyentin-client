"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useSsrSafeReducedMotion } from "./use-ssr-safe-reduced-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.72, delay: reduceMotion ? 0 : delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

export function SectionIcon({ children, dense = false }: { children: ReactNode; dense?: boolean }) {
  return (
    <div className={`mx-auto grid place-items-center ${dense ? "size-14" : "size-20"}`}>
      <div
        className={`mini-section-hex grid place-items-center text-brand-deep ${dense ? "size-12" : "size-16"}`}
      >
        {children}
      </div>
    </div>
  );
}

export function ZigZag({ className = "" }: { className?: string }) {
  return <span className={`zigzag-mark block text-brand-deep ${className}`} aria-hidden="true" />;
}

export function SectionIntro({
  icon,
  title,
  copy,
  centered = false,
  compact = false,
  dense = false,
  wide = false,
}: {
  icon?: ReactNode;
  title: ReactNode;
  copy?: ReactNode;
  centered?: boolean;
  compact?: boolean;
  dense?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      className={
        centered
          ? `mx-auto text-center ${wide ? "max-w-5xl px-1 sm:px-4" : "max-w-3xl"}`
          : wide
            ? "max-w-5xl px-1 sm:px-4"
            : "max-w-3xl"
      }
    >
      {icon ? <SectionIcon dense={dense}>{icon}</SectionIcon> : null}
      <h2
        className={`text-[clamp(2rem,3.4vw,3.25rem)] font-black tracking-[-0.035em] text-brand-deep ${
          wide ? "text-pretty leading-[1.08]" : "text-balance leading-[1.03]"
        } ${
          dense
            ? "mt-2 leading-[1.04]"
            : compact
              ? "mt-3 leading-[1.02]"
              : "mt-4"
        }`}
      >
        {title}
      </h2>
      <ZigZag
        className={
          centered
            ? `mx-auto ${dense ? "mt-3" : compact ? "mt-4" : "mt-5"}`
            : dense
              ? "mt-3"
              : compact
                ? "mt-4"
                : "mt-5"
        }
      />
      {copy ? (
        <p
          className={`text-pretty text-muted-foreground ${
            dense
              ? "mt-3 text-sm leading-6 md:text-base md:leading-7"
              : compact
                ? "mt-4 text-base leading-7 md:text-lg md:leading-8"
                : "mt-5 text-base leading-8 md:text-lg"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
