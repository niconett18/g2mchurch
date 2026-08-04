"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

/**
 * Global Lenis smooth-scroll root.
 *
 * Runs in `root` mode, which drives the real window scroll position, so
 * framer-motion's `useScroll` / `useInView` keep working unchanged.
 *
 * Touch devices intentionally keep native momentum scrolling (`syncTouch: false`):
 * hijacking touch scroll costs frame budget on mobile and feels worse than the
 * platform default. Smoothing applies to wheel/trackpad input.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.05,
        // Exponential ease-out: quick pickup, long soft settle.
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !reduceMotion,
        syncTouch: false,
        touchMultiplier: 1.6,
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}

/**
 * Scrolls to a selector or offset through Lenis, falling back to the native API
 * when Lenis is unavailable (reduced motion, or before the provider mounts).
 */
export function useSmoothScrollTo() {
  const lenis = useLenis();

  return useCallback(
    (target: string | number) => {
      if (lenis) {
        // offset 0 preserves the original scrollIntoView landing position.
        lenis.scrollTo(target, { offset: 0 });
        return;
      }

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: "smooth" });
        return;
      }

      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    },
    [lenis]
  );
}

export { useLenis };
