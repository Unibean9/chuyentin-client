"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { ScrollToTopButton } from "./scroll-to-top-button";
import { contactDockLinks } from "./contact-dock-data";
import { ZaloIcon } from "@/components/icons";

const CHAT_MESSAGES = [
  "Liên hệ để nhận đăng kí kiểm tra đầu vào",
  "Liên hệ để nhận giá ưu đãi",
  "Liên hệ để được hỗ trợ",
] as const;

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BUBBLE_IN_MS = 280;
const CHAR_MS = 38;
const HOLD_MS = 1600;
const BUBBLE_OUT_MS = 260;
const AUTO_GAP_MS = 900;
const AUTO_REST_MS = 2800;

function openDurationMs(message: string) {
  const chars = Array.from(message).length;
  return BUBBLE_IN_MS + chars * CHAR_MS + HOLD_MS;
}

function closeDurationMs() {
  return BUBBLE_OUT_MS;
}

function MessengerBadge({ className }: { className?: string }) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          y1="28"
          x2="28"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00B2FF" />
          <stop offset="0.5" stopColor="#7A45FF" />
          <stop offset="1" stopColor="#FF4D8D" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M16 2C8.268 2 2 7.9 2 15.15c0 3.96 1.9 7.5 4.88 9.86V30l4.5-2.48c1.24.34 2.56.52 3.94.52 7.732 0 14-5.9 14-13.15S23.732 2 16 2Zm1.45 17.55-3.68-3.92-6.98 3.92 7.72-8.22 3.72 3.92 6.92-3.92-7.7 8.22Z"
      />
    </svg>
  );
}

function TypeCaret({ active }: { active: boolean }) {
  const reduceMotion = useSsrSafeReducedMotion();

  if (!active) return null;

  return (
    <motion.span
      aria-hidden
      className="ml-0.5 inline-block h-[0.95em] w-[1.5px] translate-y-[0.08em] bg-neutral-500 align-baseline"
      animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 1,
              repeat: Infinity,
              times: [0, 0.45, 0.5, 1],
              ease: "linear",
            }
      }
    />
  );
}

function ChatBubbleLink({
  href,
  label,
  message,
  open,
  onOpenChange,
  onCycleComplete,
  icon,
}: {
  href: string;
  label: string;
  message: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCycleComplete: () => void;
  icon: ReactNode;
}) {
  const reduceMotion = useSsrSafeReducedMotion();
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [typedCount, setTypedCount] = useState(0);
  const [phase, setPhase] = useState<"idle" | "typing" | "holding" | "hiding">("idle");
  const wasBubbleOpen = useRef(false);
  const chars = Array.from(message);
  const typedText = chars.slice(0, typedCount).join("");

  useEffect(() => {
    if (open) {
      setBubbleOpen(true);
      setTypedCount(reduceMotion ? chars.length : 0);
      setPhase(reduceMotion ? "holding" : "typing");
      return;
    }

    if (bubbleOpen) {
      setPhase("hiding");
      if (reduceMotion) {
        setBubbleOpen(false);
        setTypedCount(0);
        setPhase("idle");
      }
    }
  }, [open, bubbleOpen, reduceMotion, chars.length]);

  useEffect(() => {
    if (phase !== "typing" || reduceMotion) return;

    if (typedCount >= chars.length) {
      setPhase("holding");
      return;
    }

    const id = window.setTimeout(() => {
      setTypedCount((count) => count + 1);
    }, CHAR_MS);

    return () => window.clearTimeout(id);
  }, [phase, typedCount, chars.length, reduceMotion]);

  useEffect(() => {
    if (phase !== "hiding" || reduceMotion) return;

    if (typedCount <= 0) {
      setBubbleOpen(false);
      setPhase("idle");
      return;
    }

    const id = window.setTimeout(() => {
      setTypedCount((count) => Math.max(0, count - 2));
    }, 16);

    return () => window.clearTimeout(id);
  }, [phase, typedCount, reduceMotion]);

  useEffect(() => {
    if (wasBubbleOpen.current && !bubbleOpen) {
      onCycleComplete();
    }
    wasBubbleOpen.current = bubbleOpen;
  }, [bubbleOpen, onCycleComplete]);

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-end gap-2.5 outline-none"
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
      onFocus={() => onOpenChange(true)}
      onBlur={() => onOpenChange(false)}
    >
      <AnimatePresence
        onExitComplete={() => {
          if (!open) {
            setTypedCount(0);
            setPhase("idle");
          }
        }}
      >
        {bubbleOpen ? (
          <motion.span
            key={message}
            aria-hidden
            className="inline-flex max-w-[min(18.5rem,calc(100vw-5.5rem))] items-center rounded-md bg-white px-3 py-2.5 text-[0.8rem] font-semibold leading-none tracking-[-0.01em] text-neutral-700 shadow-[0_6px_20px_oklch(0.35_0.02_300/0.16)]"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, x: 14, scale: 0.92, filter: "blur(4px)" }
            }
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              reduceMotion
                ? { opacity: 0, transition: { duration: 0.1 } }
                : {
                    opacity: 0,
                    x: 10,
                    scale: 0.94,
                    filter: "blur(3px)",
                    transition: { duration: BUBBLE_OUT_MS / 1000, ease: EASE_OUT_EXPO },
                  }
            }
            transition={{
              duration: reduceMotion ? 0.12 : BUBBLE_IN_MS / 1000,
              ease: EASE_OUT_EXPO,
            }}
          >
            <span className="whitespace-nowrap">
              {typedText}
              <TypeCaret active={phase === "typing" || phase === "holding"} />
            </span>
          </motion.span>
        ) : null}
      </AnimatePresence>

      <span className="relative z-10 grid size-12 shrink-0 place-items-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] group-focus-visible:ring-4 group-focus-visible:ring-brand-primary/40 rounded-full">
        {icon}
      </span>
    </a>
  );
}

function PhoneLink({ href, label }: { href: string; label: string }) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-12 place-items-center rounded-full bg-brand-deep text-white shadow-[0_8px_22px_oklch(0.28_0.12_303/0.28)] ring-2 ring-white/30 outline-none transition-shadow duration-300 hover:shadow-[0_12px_28px_oklch(0.28_0.12_303/0.36)] focus-visible:ring-4 focus-visible:ring-brand-primary/45"
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
        <svg viewBox="0 0 32 32" className="size-6" aria-hidden>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.92v2.2a1.65 1.65 0 0 1-1.8 1.65 16.5 16.5 0 0 1-7.18-2.55 16.25 16.25 0 0 1-5-5 16.5 16.5 0 0 1-2.55-7.22A1.65 1.65 0 0 1 7.42 4.3h2.48a1.65 1.65 0 0 1 1.65 1.42c.1.79.3 1.57.58 2.32a1.65 1.65 0 0 1-.37 1.74l-1.05 1.05a13.2 13.2 0 0 0 4.95 4.95l1.05-1.05a1.65 1.65 0 0 1 1.74-.37c.75.28 1.53.48 2.32.58a1.65 1.65 0 0 1 1.42 1.65v2.48Z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            d="M21.5 7.5c1.2.45 2.2 1.3 2.9 2.4M23.5 5.5c1.6.75 2.9 2 3.7 3.6"
          />
        </svg>
      </motion.span>
    </a>
  );
}

export function ContactDock() {
  const reduceMotion = useSsrSafeReducedMotion();
  const [messengerOpen, setMessengerOpen] = useState(false);
  const [zaloOpen, setZaloOpen] = useState(false);
  const [messengerMsg, setMessengerMsg] = useState(0);
  const [zaloMsg, setZaloMsg] = useState(0);
  const [autoKey, setAutoKey] = useState<"messenger" | "zalo" | null>(null);
  const messengerMsgRef = useRef(0);
  const zaloMsgRef = useRef(0);
  const userControlling = messengerOpen || zaloOpen;

  const advanceMessengerMsg = () => {
    setMessengerMsg((index) => {
      const next = (index + 1) % CHAT_MESSAGES.length;
      messengerMsgRef.current = next;
      return next;
    });
  };
  const advanceZaloMsg = () => {
    setZaloMsg((index) => {
      const next = (index + 1) % CHAT_MESSAGES.length;
      zaloMsgRef.current = next;
      return next;
    });
  };

  useEffect(() => {
    if (reduceMotion || userControlling) {
      setAutoKey(null);
      return;
    }

    const timers: number[] = [];
    let cancelled = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(
          window.setTimeout(() => {
            if (!cancelled) resolve();
          }, ms),
        );
      });

    const loop = async () => {
      while (!cancelled) {
        const messengerText = CHAT_MESSAGES[messengerMsgRef.current];
        if (!cancelled) setAutoKey("messenger");
        await wait(openDurationMs(messengerText));
        if (cancelled) break;
        setAutoKey(null);
        await wait(closeDurationMs() + Array.from(messengerText).length * 16 + AUTO_GAP_MS);
        if (cancelled) break;

        const zaloText = CHAT_MESSAGES[zaloMsgRef.current];
        setAutoKey("zalo");
        await wait(openDurationMs(zaloText));
        if (cancelled) break;
        setAutoKey(null);
        await wait(closeDurationMs() + Array.from(zaloText).length * 16 + AUTO_REST_MS);
      }
    };

    timers.push(window.setTimeout(() => void loop(), 1400));

    return () => {
      cancelled = true;
      for (const id of timers) window.clearTimeout(id);
    };
  }, [reduceMotion, userControlling]);

  return (
    <motion.aside
      className="contact-dock fixed right-3 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-50 flex flex-col items-end sm:right-4"
      initial={reduceMotion ? false : { x: 28, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.65,
        delay: reduceMotion ? 0 : 0.25,
        ease: EASE_OUT_EXPO,
      }}
      aria-label="Tiện ích nhanh"
    >
      <div className="flex flex-col items-end gap-3.5">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.86 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.5,
            delay: reduceMotion ? 0 : 0.35,
            ease: EASE_OUT_EXPO,
          }}
        >
          <ChatBubbleLink
            href={contactDockLinks.messengerHref}
            label="Nhắn tin qua Messenger"
            message={CHAT_MESSAGES[messengerMsg]}
            open={messengerOpen || autoKey === "messenger"}
            onOpenChange={setMessengerOpen}
            onCycleComplete={advanceMessengerMsg}
            icon={
              <span className="grid size-12 place-items-center rounded-full bg-white shadow-[0_8px_18px_oklch(0.45_0.18_300/0.22)]">
                <MessengerBadge className="size-9" />
              </span>
            }
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.86 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.5,
            delay: reduceMotion ? 0 : 0.42,
            ease: EASE_OUT_EXPO,
          }}
        >
          <ChatBubbleLink
            href={contactDockLinks.zaloHref}
            label="Nhắn tin qua Zalo"
            message={CHAT_MESSAGES[zaloMsg]}
            open={zaloOpen || autoKey === "zalo"}
            onOpenChange={setZaloOpen}
            onCycleComplete={advanceZaloMsg}
            icon={
              <span className="grid size-12 place-items-center rounded-full bg-[#0068FF] text-white shadow-[0_8px_18px_oklch(0.45_0.16_255/0.35)]">
                <ZaloIcon className="size-[1.7rem]" />
              </span>
            }
          />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.86 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.15 : 0.5,
            delay: reduceMotion ? 0 : 0.49,
            ease: EASE_OUT_EXPO,
          }}
        >
          <PhoneLink href={contactDockLinks.phoneHref} label="Gọi tư vấn" />
        </motion.div>
      </div>

      <ScrollToTopButton />
    </motion.aside>
  );
}
