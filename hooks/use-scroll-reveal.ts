"use client";

import { useEffect } from "react";

/**
 * Custom hook for scroll-triggered reveal animations.
 * Uses IntersectionObserver to add "is-visible" class when elements enter viewport.
 *
 * @param selector - CSS selector for elements to observe (default: ".iphone-reveal")
 *
 * @example
 * ```tsx
 * useScrollReveal(".my-reveal-class");
 * ```
 */
export function useScrollReveal(selector = ".iphone-reveal") {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(selector);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // If user prefers reduced motion, show all items immediately
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 10% 0px", threshold: 0.1 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, [selector]);
}
