"use client";

import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

/** Return type for the useCarousel hook */
type UseCarouselReturn = {
  activeSlide: number;
  trackSlide: number;
  carouselTransitioning: boolean;
  carouselPlaying: boolean;
  entertainmentRef: React.RefObject<HTMLElement | null>;
  stepCarousel: (direction: -1 | 1) => void;
  selectCarouselSlide: (index: number) => void;
  setCarouselPlaying: Dispatch<SetStateAction<boolean>>;
  setCarouselTransitioning: Dispatch<SetStateAction<boolean>>;
  setTrackSlide: Dispatch<SetStateAction<number>>;
};

/**
 * Custom hook for managing the entertainment carousel state and behavior.
 * Handles auto-play, manual navigation, touch gestures, and infinite looping.
 *
 * @param entertainmentLength - Number of slides in the carousel
 * @returns Carousel state and control functions
 *
 * @example
 * ```tsx
 * const { activeSlide, stepCarousel, selectCarouselSlide } = useCarousel(5);
 * ```
 */
export function useCarousel(entertainmentLength: number): UseCarouselReturn {
  const [activeSlide, setActiveSlide] = useState(1);
  const [trackSlide, setTrackSlide] = useState(2);
  const [carouselInView, setCarouselInView] = useState(false);
  const [carouselPlaying, setCarouselPlaying] = useState(true);
  const [carouselCycle, setCarouselCycle] = useState(0);
  const [carouselTransitioning, setCarouselTransitioning] = useState(true);
  const touchStart = useRef<number | null>(null);
  const entertainmentRef = useRef<HTMLElement | null>(null);

  // Pause carousel if user prefers reduced motion
  useEffect(() => {
    const section = entertainmentRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCarouselPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setCarouselInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel when playing and in view
  useEffect(() => {
    if (!carouselPlaying || !carouselInView) return;

    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setCarouselTransitioning(true);
      setActiveSlide((current) => (current + 1) % entertainmentLength);
      setTrackSlide((current) => current + 1);
    }, 4160);

    return () => window.clearInterval(timer);
  }, [carouselCycle, carouselInView, carouselPlaying, entertainmentLength]);

  // Re-enable transitions after a jump (for infinite loop)
  useEffect(() => {
    if (carouselTransitioning) return;

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setCarouselTransitioning(true));
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [carouselTransitioning]);

  /** Step carousel forward or backward by one slide */
  const stepCarousel = (direction: -1 | 1) => {
    setCarouselTransitioning(true);
    setCarouselCycle((current) => current + 1);
    setActiveSlide(
      (current) =>
        (current + direction + entertainmentLength) % entertainmentLength,
    );
    setTrackSlide((current) => current + direction);
  };

  /** Jump to a specific slide by index */
  const selectCarouselSlide = (index: number) => {
    setCarouselTransitioning(true);
    setCarouselCycle((current) => current + 1);
    setActiveSlide(index);
    setTrackSlide(index + 1);
  };

  return {
    activeSlide,
    trackSlide,
    carouselTransitioning,
    carouselPlaying,
    entertainmentRef,
    stepCarousel,
    selectCarouselSlide,
    setCarouselPlaying,
    setCarouselTransitioning,
    setTrackSlide,
  };
}
