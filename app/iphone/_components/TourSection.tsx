"use client";

import { SectionHeading } from "./SectionHeading";

/**
 * Guided Tour section with a video card.
 * Opens a tour video modal when the play button is clicked.
 */
export function TourSection({
  onTourOpen,
}: {
  onTourOpen: () => void;
}) {
  return (
    <section className="iphone-section iphone-tour-section">
      <SectionHeading title="Take a closer look." />
      <article className="iphone-tour-card iphone-reveal">
        <img src="/images/iphone/guided-tour.jpg" alt="" />
        <div className="iphone-tour-copy">
          <p>A Guided Tour of</p>
          <h3>iPhone 17 Pro,<br />iPhone Air, and iPhone 17</h3>
          <button type="button" onClick={onTourOpen}>
            Watch the film <span aria-hidden="true">▶</span>
          </button>
        </div>
      </article>
    </section>
  );
}
