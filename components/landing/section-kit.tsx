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

export function SectionIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid size-20 place-items-center">
      <div className="mini-section-hex grid size-16 place-items-center text-brand-deep">{children}</div>
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
  wide = false,
}: {
  icon?: ReactNode;
  title: ReactNode;
  copy?: ReactNode;
  centered?: boolean;
  compact?: boolean;
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
      {icon ? <SectionIcon>{icon}</SectionIcon> : null}
      <h2
        className={`font-black tracking-[-0.035em] text-brand-deep ${
          wide ? "text-pretty leading-[1.08]" : "text-balance leading-[1.03]"
        } ${
          compact
            ? "mt-3 text-[clamp(2.45rem,4.35vw,3.95rem)] leading-[1.02]"
            : "mt-4 text-[clamp(2.25rem,5vw,4.35rem)]"
        }`}
      >
        {title}
      </h2>
      <ZigZag className={centered ? `mx-auto ${compact ? "mt-4" : "mt-5"}` : compact ? "mt-4" : "mt-5"} />
      {copy ? (
        <p
          className={`text-pretty text-base text-muted-foreground md:text-lg ${
            compact ? "mt-4 leading-7 md:leading-8" : "mt-5 leading-8"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
