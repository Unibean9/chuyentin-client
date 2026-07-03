"use client";

import { type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import type { Mentor } from "./data";
import { MentorPhotoFrame } from "./mentor-photo-frame";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function MentorCard({ mentor, index }: { mentor: Mentor; index: number }) {
  const reduceMotion = useSsrSafeReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };
  const tiltX = useSpring(useTransform(pointerY, [0, 1], [8, -8]), springConfig);
  const tiltY = useSpring(useTransform(pointerX, [0, 1], [-8, 8]), springConfig);
  const lift = useSpring(useMotionValue(0), springConfig);

  function handlePointerMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  }

  function handlePointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
    lift.set(0);
  }

  return (
    <motion.article
      className="mentor-card"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: easeOut,
      }}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => lift.set(1)}
      onMouseLeave={handlePointerLeave}
      style={{ perspective: 900 }}
    >
      <motion.div
        className="rounded-2xl bg-white p-5"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          y: useTransform(lift, [0, 1], [0, -6]),
          transformStyle: "preserve-3d",
        }}
      >
        <MentorPhotoFrame photo={mentor.photo} name={mentor.name} />

        <div className="mt-5">
          <h3 className="text-xl font-black tracking-[-0.025em] text-brand-deep">{mentor.name}</h3>
          <p className="mt-1 text-sm font-black text-brand-primary">{mentor.role}</p>
          <p className="mt-3 text-pretty text-sm font-semibold leading-6 text-muted-foreground">
            {mentor.credential} · {mentor.years}
          </p>
          <p className="mentor-card-quote mt-4 text-pretty text-sm font-bold leading-6 text-brand-deep">
            “{mentor.quote}”
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}
