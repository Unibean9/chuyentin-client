"use client";

import { useReducedMotion } from "framer-motion";
import { useLayoutEffect, useState } from "react";

/**
 * framer-motion's useReducedMotion reads matchMedia synchronously during the
 * client's first render, so it can already report `true` before hydration
 * while the server (no window) always rendered as if `false` — a hydration
 * mismatch whenever the device has Reduced Motion on. Gating behind a mount
 * flag makes the first client render match the server, then syncs the real
 * value via useLayoutEffect before the browser paints (no visible flash).
 */
export function useSsrSafeReducedMotion(): boolean {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  return mounted && Boolean(prefersReduced);
}
