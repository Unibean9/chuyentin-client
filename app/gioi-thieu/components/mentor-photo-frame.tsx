"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const easeOutExpo = [0.19, 1, 0.22, 1] as const;

/**
 * Real mentor photos aren't uploaded yet — this frame ships the exact slot
 * (size, ratio, border) a real photo will drop into, so nobody mistakes it
 * for a finished section. Swap `photo` once the real portrait exists.
 */
export function MentorPhotoFrame({ photo, name }: { photo?: string; name: string }) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <div className="image-slot relative aspect-4/5 w-full overflow-hidden rounded-2xl">
      {photo ? (
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <Image src={photo} alt={`Ảnh mentor ${name}`} fill className="object-cover" />
        </motion.div>
      ) : (
        <>
          <div className="image-slot-grid absolute inset-0" />
          <div className="relative grid h-full place-items-center p-5 text-center">
            <div>
              <ImageIcon className="mx-auto size-8 text-brand-primary" aria-hidden />
              <p className="mt-3 text-sm font-black text-brand-deep">Ảnh mentor: {name}</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground">Khung dựng, chờ ảnh thật</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
