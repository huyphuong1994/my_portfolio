"use client";

/**
 * Wraps the app in LazyMotion so framer-motion's animation features load
 * lazily. We only need the DOM animation feature set (no drag, no layout
 * animations) — using `m` everywhere instead of `motion` is what unlocks
 * the bundle savings (~30KB on first load).
 *
 * `strict` enforces this at runtime: rendering `<motion.X>` throws so we
 * can't accidentally regress.
 */

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
