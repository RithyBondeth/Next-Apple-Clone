"use client";

import { useEffect } from "react";

import { incentives } from "@/utils/constants/iphone";
import type { Detail } from "@/utils/types";

import { RailControls } from "./RailControls";
import { SectionHeading } from "./SectionHeading";

/**
 * "Why Apple is the best place to buy iPhone" section.
 * Displays trade-in, financing, setup, delivery, and other shopping benefits.
 * Cards open a detail modal when clicked.
 */
export function IncentiveSection({
  onDetail,
}: {
  onDetail: (item: Detail) => void;
}) {
  useEffect(() => {
    const incentiveSection = document.querySelector<HTMLElement>(
      ".iphone-buy-section",
    );
    if (!incentiveSection) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      incentiveSection.classList.add("is-staggered-in");
      return;
    }

    const staggerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          incentiveSection.classList.add("is-staggered-in");
          staggerObserver.disconnect();
        }
      },
      { rootMargin: "0px 0px 12% 0px", threshold: 0.12 },
    );

    staggerObserver.observe(incentiveSection);

    return () => {
      staggerObserver.disconnect();
    };
  }, []);

  return (
    <section className="iphone-section iphone-buy-section" id="why-buy">
      <SectionHeading
        title="Why Apple is the best place to buy iPhone."
        link="Shop iPhone"
      />
      <div className="iphone-rail iphone-incentive-rail" id="incentive-rail">
        {incentives.map((item, index) => (
          <article
            className="iphone-incentive-card"
            style={{ transitionDelay: `${80 + index * 75}ms` }}
            key={item.title}
          >
            <img src={item.image} alt="" />
            <div className="iphone-card-copy">
              <p className="iphone-card-eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p className="iphone-card-description">
                {item.copy}
                {item.eyebrow === "Apple Trade In" && <sup>*</sup>}
                {item.eyebrow === "Ways to Buy" && <sup>11</sup>}
              </p>
            </div>
            <button
              type="button"
              aria-label={`Learn more about ${item.eyebrow}`}
              onClick={() => onDetail(item)}
            >
              +
            </button>
          </article>
        ))}
      </div>
      <RailControls target="incentive-rail" label="shopping benefits" />
    </section>
  );
}
