"use client";

import { considerations } from "@/utils/constants/iphone";
import type { Detail } from "@/utils/types";

import { RailControls } from "./RailControls";
import { SectionHeading } from "./SectionHeading";

/**
 * "Get to know iPhone" section highlighting key features.
 * Covers innovation, cameras, chip, iOS, environment, privacy, and safety.
 * Cards open a detail modal when clicked.
 */
export function ConsiderSection({
  onDetail,
}: {
  onDetail: (item: Detail) => void;
}) {
  return (
    <section className="iphone-section iphone-consider-section">
      <SectionHeading title="Get to know iPhone." />
      <div className="iphone-rail iphone-consider-rail" id="consider-rail">
        {considerations.map((item, index) => (
          <article
            className="iphone-consider-card iphone-reveal"
            style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
            key={item.title}
          >
            <img src={item.image} alt="" />
            <div className="iphone-consider-copy">
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
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
      <RailControls target="consider-rail" label="iPhone features" />
    </section>
  );
}
