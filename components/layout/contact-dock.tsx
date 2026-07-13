"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { ScrollToTopButton } from "./scroll-to-top-button";
import { contactDockLinks } from "./contact-dock-data";

function MessengerIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
      <path
        fill="currentColor"
        d="M16 2C8.268 2 2 7.544 2 14.316c0 3.352 1.672 6.332 4.288 8.284-.136 1.76-.496 5.992-.6 7.152-.112.96.408.944.856.696.456-.296 5.336-3.888 6.168-4.456 1.048.288 2.152.44 3.288.44 7.732 0 14-5.544 14-12.316S23.732 2 16 2Zm1.384 12.024-2.72-2.904-5.32 2.904 5.856-6.224 2.792 2.904 5.248-2.904-5.856 6.224Z"
      />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        d="M9 7h14a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 23 21h-5.2L14 24.5V21H9A3.5 3.5 0 0 1 5.5 17.5v-7A3.5 3.5 0 0 1 9 7Z"
      />
      <text
        x="16"
        y="16.5"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6.5"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        Zalo
      </text>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-7" aria-hidden>
      <g transform="translate(16 16) rotate(-38) translate(-12 -12)">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 16.92v2.2a1.65 1.65 0 0 1-1.8 1.65 16.5 16.5 0 0 1-7.18-2.55 16.25 16.25 0 0 1-5-5 16.5 16.5 0 0 1-2.55-7.22A1.65 1.65 0 0 1 7.42 4.3h2.48a1.65 1.65 0 0 1 1.65 1.42c.1.79.3 1.57.58 2.32a1.65 1.65 0 0 1-.37 1.74l-1.05 1.05a13.2 13.2 0 0 0 4.95 4.95l1.05-1.05a1.65 1.65 0 0 1 1.74-.37c.75.28 1.53.48 2.32.58a1.65 1.65 0 0 1 1.42 1.65v2.48Z"
        />
      </g>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M21.5 7.5c1.2.45 2.2 1.3 2.9 2.4M23.5 5.5c1.6.75 2.9 2 3.7 3.6"
      />
    </svg>
  );
}

function DockLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="contact-dock-link grid size-11 place-items-center rounded-full text-white transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/12 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      {children}
    </a>
  );
}

function PhoneLink({ href, label }: { href: string; label: string }) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <a
      href={href}
      aria-label={label}
      className="contact-dock-link grid size-11 place-items-center rounded-full text-white transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/12 hover:shadow-[0_0_0_1px_oklch(1_0_0/0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
    >
      <motion.span
        className="inline-flex origin-[58%_42%]"
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: [0, -16, 16, -14, 14, -10, 10, -5, 5, 0],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 0.75,
                repeat: Infinity,
                repeatDelay: 1.75,
                ease: [0.36, 0, 0.18, 1],
              }
        }
      >
        <PhoneIcon />
      </motion.span>
    </a>
  );
}

export function ContactDock() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.aside
      className="contact-dock fixed right-0 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 flex w-[3.5rem] flex-col items-center"
      initial={reduceMotion ? false : { x: 24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.65,
        delay: reduceMotion ? 0 : 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-label="Tiện ích nhanh"
    >
      <div className="contact-dock-panel relative w-[3.5rem]">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-brand-deep drop-shadow-[-8px_12px_28px_oklch(0.2_0.08_300/0.32)]"
          viewBox="0 0 56 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0 28 C0 28 16 24 18 0 H56 V200 H18 C16 176 0 172 0 148 V28 Z"
          />
        </svg>

        <div className="relative z-10 flex flex-col items-center gap-3.5 py-5 pl-3.5 pr-2.5">
          <DockLink href={contactDockLinks.messengerHref} label="Nhắn tin qua Messenger">
            <MessengerIcon />
          </DockLink>

          <DockLink href={contactDockLinks.zaloHref} label="Nhắn tin qua Zalo">
            <ZaloIcon />
          </DockLink>

          <PhoneLink href={contactDockLinks.phoneHref} label="Gọi tư vấn" />
        </div>
      </div>
      <ScrollToTopButton />
    </motion.aside>
  );
}
