"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

const easing = (t: number) => 1 - Math.pow(1 - t, 4);

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let rafId = 0;
    let unsubscribeScroll: (() => void) | undefined;

    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      unsubscribeScroll?.();
      unsubscribeScroll = undefined;
      lenis?.destroy();
      lenis = null;
    };

    const start = () => {
      stop();

      // Fall back to native scroll when the user has opted out of motion.
      if (motionQuery.matches) return;

      lenis = new Lenis({
        duration: 1.5,
        easing,
        smoothWheel: true,
        autoRaf: false,
        anchors: true,
        respectReducedMotion: true,
      });

      unsubscribeScroll = lenis.on("scroll", () => {
        // Lenis writes native scroll position each frame. This callback keeps
        // observer-based whileInView / useInView in lockstep with that update.
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    start();
    motionQuery.addEventListener("change", start);

    return () => {
      motionQuery.removeEventListener("change", start);
      stop();
    };
  }, []);

  return children;
}
