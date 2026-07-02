"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCw } from "lucide-react";
import type { WhyUsItem } from "./why-us-data";
import { whyUsCardEntranceVariants } from "./why-us-motion";

const cardTones = {
  purple: {
    front: "bg-brand-primary text-white",
    muted: "text-white/55",
    footer: "text-white/60",
    badge: "bg-brand-primary text-white",
  },
  yellow: {
    front: "bg-brand-accent text-brand-deep",
    muted: "text-brand-deep/50",
    footer: "text-brand-deep/60",
    badge: "bg-brand-accent text-brand-deep",
  },
};

export function WhyUsCard({
  item,
  contentIndex,
  staggerIndex,
  tone: toneName,
  className = "",
}: {
  item: WhyUsItem;
  contentIndex: number;
  staggerIndex: number;
  tone: "purple" | "yellow";
  className?: string;
}) {
  const [pinned, setPinned] = useState(false);
  const reduceMotion = useReducedMotion();
  const tone = cardTones[toneName];

  return (
    <motion.div
      className={`group perspective-[1600px] hidden lg:block ${className}`}
      variants={whyUsCardEntranceVariants(Boolean(reduceMotion), staggerIndex)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-pressed={pinned}
        aria-label={`${item.title}. Chạm hoặc di chuột để xem nội dung chi tiết.`}
        onClick={() => setPinned((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setPinned((current) => !current);
          }
        }}
        className={`relative h-full min-h-52 w-full cursor-pointer transform-3d focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
          reduceMotion ? "" : "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        } ${
          pinned
            ? "transform-[rotateY(180deg)]"
            : "group-hover:transform-[rotateY(180deg)] group-focus-visible:transform-[rotateY(180deg)]"
        }`}
      >
        <div
          className={`absolute inset-0 flex flex-col rounded-2xl p-6 shadow-[0_10px_0_oklch(0.2_0.08_300/0.18)] backface-hidden ${tone.front}`}
        >
          <span className={`text-xs font-black ${tone.muted}`}>{`0${contentIndex + 1}`}</span>
          <div className="flex flex-1 items-center justify-center text-center">
            <h3 className="text-balance text-[clamp(1.4rem,2.4vw,1.85rem)] font-black leading-[1.1] tracking-tight">
              {item.title}
            </h3>
          </div>
          <span className={`inline-flex items-center gap-1.5 self-end text-xs font-bold ${tone.footer}`}>
            <RotateCw className="size-3.5" aria-hidden />
            Chi tiết chương trình
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center gap-3 rounded-2xl bg-white p-6 shadow-[0_10px_0_oklch(0.2_0.08_300/0.18)] ring-1 ring-[oklch(0.9_0.02_300)] backface-hidden transform-[rotateY(180deg)]">
          <span className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-black ${tone.badge}`}>
            {`0${contentIndex + 1}`}
          </span>
          <h3 className="text-base font-black leading-tight tracking-[-0.02em] text-brand-deep">
            {item.title}
          </h3>
          <p className="text-pretty text-sm font-semibold leading-6 text-muted-foreground">{item.body}</p>
        </div>
      </div>
    </motion.div>
  );
}
