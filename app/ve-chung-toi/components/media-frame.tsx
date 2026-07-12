"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

type MediaFrameProps = {
  label: string;
  hint?: string;
  photo?: string;
  alt?: string;
  /** Tailwind aspect class, e.g. aspect-video, aspect-4/5 */
  aspectClassName?: string;
  className?: string;
};

/**
 * Photo slot for the about page. Ships the exact frame a real image will
 * drop into — never a finished-looking empty panel.
 */
export function MediaFrame({
  label,
  hint = "Khung dựng — thêm ảnh sau",
  photo,
  alt,
  aspectClassName = "aspect-video",
  className = "",
}: MediaFrameProps) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <div
      className={`about-media-frame image-slot relative w-full overflow-hidden rounded-2xl ${aspectClassName} ${className}`}
    >
      {photo ? (
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <Image src={photo} alt={alt ?? label} fill className="object-cover" />
        </motion.div>
      ) : (
        <>
          <div className="image-slot-grid absolute inset-0" />
          <div className="relative grid h-full place-items-center p-5 text-center">
            <div>
              <ImageIcon className="mx-auto size-8 text-brand-primary" aria-hidden />
              <p className="mt-3 text-sm font-black text-brand-deep">{label}</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground">{hint}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
