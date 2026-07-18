"use client";

import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

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

export function useCarousel(entertainmentLength: number): UseCarouselReturn {
  const [activeSlide, setActiveSlide] = useState(1);
  const [trackSlide, setTrackSlide] = useState(2);
  const [carouselInView, setCarouselInView] = useState(false);
  const [carouselPlaying, setCarouselPlaying] = useState(true);
  const [carouselCycle, setCarouselCycle] = useState(0);
  const [carouselTransitioning, setCarouselTransitioning] = useState(true);
  const entertainmentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = entertainmentRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => setCarouselPlaying(false), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setCarouselInView(entry.isIntersecting),
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    if (carouselTransitioning) return;

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setCarouselTransitioning(true));
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [carouselTransitioning]);

  const stepCarousel = (direction: -1 | 1) => {
    setCarouselTransitioning(true);
    setCarouselCycle((current) => current + 1);
    setActiveSlide(
      (current) =>
        (current + direction + entertainmentLength) % entertainmentLength,
    );
    setTrackSlide((current) => current + direction);
  };

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
