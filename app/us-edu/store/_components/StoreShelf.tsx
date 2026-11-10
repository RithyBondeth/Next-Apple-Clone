"use client";

import { useRef } from "react";

import type { StoreCard } from "@/utils/types";

/**
 * Store shelf component for displaying a row of product cards.
 * Supports horizontal scrolling with previous/next controls.
 *
 * @param title - Shelf section title
 * @param subtitle - Shelf section subtitle
 * @param cards - Array of product cards to display
 */
export function StoreShelf({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: StoreCard[];
}) {
  const track = useRef<HTMLDivElement | null>(null);

  const move = (direction: -1 | 1) => {
    const distance = cards.some((card) => card.product) ? 333 : 420;
    track.current?.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section className="edu-shelf" aria-label={`${title} ${subtitle}`}>
      <h2 className="edu-shelf-heading">
        <span>{title}</span> {subtitle}
      </h2>
      <div className="edu-card-track" ref={track}>
        {cards.map((card) => (
          <a
            className={[
              "edu-store-card",
              card.dark ? "is-dark" : "",
              card.product ? "is-product" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            href="#quick-links"
            key={`${title}-${card.title}`}
          >
            <img src={card.image} alt="" loading="lazy" />
            <div className="edu-store-card-copy">
              {card.eyebrow && (
                <p
                  className={
                    card.accent
                      ? "edu-card-eyebrow is-accent"
                      : "edu-card-eyebrow"
                  }
                >
                  {card.eyebrow}
                </p>
              )}
              <h3>{card.title}</h3>
              {card.copy && <p className="edu-card-description">{card.copy}</p>}
              {card.price && <p className="edu-card-price">{card.price}</p>}
            </div>
          </a>
        ))}
      </div>
      <div className="edu-shelf-controls" aria-label={`${title} controls`}>
        <button
          type="button"
          aria-label={`Previous ${title} items`}
          onClick={() => move(-1)}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label={`Next ${title} items`}
          onClick={() => move(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}
