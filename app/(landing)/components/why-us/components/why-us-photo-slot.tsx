"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { WhyUsMobileStory } from "./why-us-data";
import { whyUsCardEntranceVariants } from "./why-us-motion";

function WhyUsPhotoImage({
  src,
  alt,
  label,
  objectPosition,
}: {
  src?: string;
  alt?: string;
  label: string;
  objectPosition: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt ?? label}
        fill
        sizes="(min-width: 1024px) 24vw, 100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
    );
  }

  return (
    <>
      <div className="image-slot-grid absolute inset-0" />
      <div className="relative grid h-full min-h-52 place-items-center p-5 text-center">
        <div>
          <ImageIcon className="mx-auto size-7 text-brand-primary" aria-hidden />
          <p className="mt-3 text-sm font-black text-brand-deep">{label}</p>
          <p className="mt-1 text-xs font-bold text-muted-foreground">Khung dựng, thay ảnh sau</p>
        </div>
      </div>
    </>
  );
}

export function WhyUsPhotoSlot({
  label,
  index,
  src,
  alt,
  objectPosition = "center",
  mobileStory,
  className = "",
}: {
  label: string;
  index: number;
  src?: string;
  alt?: string;
  objectPosition?: string;
  mobileStory?: WhyUsMobileStory;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={whyUsCardEntranceVariants(Boolean(reduceMotion), index)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {mobileStory ? (
        <article className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_0_oklch(0.2_0.08_300/0.12)] ring-1 ring-[oklch(0.9_0.02_300)] lg:hidden">
          <div className="relative aspect-5/4 overflow-hidden">
            <WhyUsPhotoImage src={src} alt={alt} label={label} objectPosition={objectPosition} />
          </div>
          <div className="space-y-3 p-5">
            <h3 className="text-balance text-lg font-black leading-snug tracking-[-0.02em] text-brand-deep">
              {mobileStory.title}
            </h3>
            <p className="text-pretty text-sm font-semibold leading-6 text-muted-foreground">
              {mobileStory.intro}
            </p>
            <ol className="space-y-2 text-sm font-semibold leading-6 text-muted-foreground">
              {mobileStory.points.map((point, pointIndex) => (
                <li key={point} className="flex gap-2.5">
                  <span className="mt-0.5 shrink-0 font-black tabular-nums text-brand-primary">
                    {pointIndex + 1}.
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </article>
      ) : null}

      <div
        className={`image-slot relative h-full min-h-52 overflow-hidden rounded-2xl ${
          mobileStory ? "hidden lg:block" : ""
        }`}
      >
        <WhyUsPhotoImage src={src} alt={alt} label={label} objectPosition={objectPosition} />
      </div>
    </motion.div>
  );
}
