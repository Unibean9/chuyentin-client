"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export function StatCounter({
  value,
  suffix = "",
  suffixClassName,
}: {
  value: number;
  suffix?: string;
  suffixClassName?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setTimeout(() => {
        setDisplay(value);
      }, 0);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("vi-VN")}
      {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
    </span>
  );
}
