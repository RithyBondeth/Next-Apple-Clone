"use client";

import { useEffect, useRef, useState } from "react";

export function RailControls({
  target,
  label,
}: {
  target: string;
  label: string;
}) {
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const rail = document.getElementById(target);
    if (!rail) return;

    const updateControls = () => {
      const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
      setCanPrevious(rail.scrollLeft > 2);
      setCanNext(rail.scrollLeft < maxScroll - 2);
    };

    updateControls();
    rail.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      rail.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [target]);

  const scroll = (direction: -1 | 1) => {
    const rail = document.getElementById(target);
    if (!rail) return;

    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
    }

    const firstCard = rail.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const cardStep = (firstCard?.offsetWidth ?? rail.clientWidth * 0.72) + gap;
    const visibleCards = Math.max(1, Math.floor(rail.clientWidth / cardStep));
    const distance = cardStep * Math.max(1, visibleCards - 1);
    const start = rail.scrollLeft;
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const destination = Math.max(
      0,
      Math.min(maxScroll, start + direction * distance),
    );
    const startedAt = performance.now();
    const duration = 680;

    const animate = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      rail.scrollLeft = start + (destination - start) * eased;

      if (progress < 1) {
        animationFrame.current = window.requestAnimationFrame(animate);
      } else {
        animationFrame.current = null;
      }
    };

    animationFrame.current = window.requestAnimationFrame(animate);
  };

  return (
    <div className="iphone-rail-controls" aria-label={`${label} controls`}>
      <button
        type="button"
        aria-label={`Previous ${label}`}
        disabled={!canPrevious}
        onClick={() => scroll(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label={`Next ${label}`}
        disabled={!canNext}
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  );
}
