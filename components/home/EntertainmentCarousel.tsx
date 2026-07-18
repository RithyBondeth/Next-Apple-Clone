"use client";

import { useRef } from "react";

import AppleMark from "@/components/ui/AppleMark";
import { useCarousel } from "@/hooks/use-carousel";
import { entertainment, loopedEntertainment } from "@/utils/constants/entertainment";
import { services } from "@/utils/constants/services";

/**
 * Entertainment carousel section with Apple TV+ shows and services grid.
 * Features infinite looping, auto-play, keyboard/touch navigation, and dot indicators.
 */
export function EntertainmentCarousel() {
  const {
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
  } = useCarousel(entertainment.length);

  const touchStart = useRef<number | null>(null);

  return (
    <section
      ref={entertainmentRef}
      className="entertainment reveal-item"
      id="entertainment"
      data-reveal
    >
      <h2 className="entertainment-heading">Endless entertainment.</h2>

      <div className="carousel-window">
        <div
          className={
            carouselTransitioning
              ? "carousel-track"
              : "carousel-track is-jumping"
          }
          style={{
            transform: `translate3d(calc(-${trackSlide * 100}% - ${
              trackSlide * 12
            }px), 0, 0)`,
          }}
          tabIndex={0}
          aria-label="Apple TV entertainment gallery"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              stepCarousel(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              stepCarousel(1);
            }
          }}
          onTouchStart={(event) => {
            touchStart.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            const end = event.changedTouches[0]?.clientX;
            if (
              start !== null &&
              end !== undefined &&
              Math.abs(end - start) > 44
            ) {
              if (end < start) {
                stepCarousel(1);
              } else {
                stepCarousel(-1);
              }
            }
            touchStart.current = null;
          }}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget) return;

            if (trackSlide === loopedEntertainment.length - 1) {
              setCarouselTransitioning(false);
              setTrackSlide(1);
            } else if (trackSlide === 0) {
              setCarouselTransitioning(false);
              setTrackSlide(entertainment.length);
            }
          }}
        >
          {loopedEntertainment.map((item, loopIndex) => (
            <article
              className={
                loopIndex === trackSlide
                  ? "entertainment-card is-active"
                  : "entertainment-card"
              }
              key={item.loopKey}
              style={{ backgroundImage: `url("${item.image}")` }}
              aria-hidden={loopIndex !== trackSlide}
            >
              <div className="entertainment-copy">
                <a
                  href="#entertainment"
                  tabIndex={loopIndex === trackSlide ? 0 : -1}
                >
                  Stream now
                </a>
                <p>
                  <strong>{item.genre}</strong> · {item.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="services-window" aria-label="Apple services">
        <div className="services-track">
          {services.map((item) => (
            <article
              className={`service-card ${item.layout}`}
              key={item.title}
              style={{ backgroundImage: `url("${item.image}")` }}
            >
              <span className="service-brand">
                <AppleMark inverted />
                {item.brand}
              </span>
              <div className="service-copy">
                <p>{item.title}</p>
                <a href="#entertainment">{item.action}</a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <div className="carousel-dots" aria-label="Choose a show">
          {entertainment.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={index === activeSlide ? "active" : ""}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => selectCarouselSlide(index)}
            />
          ))}
        </div>
        <button
          className="carousel-play"
          type="button"
          aria-label={carouselPlaying ? "Pause gallery" : "Play gallery"}
          onClick={() => setCarouselPlaying((playing) => !playing)}
        >
          {carouselPlaying ? "Ⅱ" : "▶"}
        </button>
      </div>
    </section>
  );
}
