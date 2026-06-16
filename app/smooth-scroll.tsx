"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.28,
      smoothWheel: true,
      syncTouch: false
    });

    function raf(time: number) {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    }

    frameRef.current = requestAnimationFrame(raf);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
