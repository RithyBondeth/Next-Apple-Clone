"use client";

import { SectionHeading } from "./SectionHeading";

/**
 * iPhone essentials section showcasing accessories and AirTag.
 * Grid layout with two feature cards.
 */
export function EssentialsSection() {
  return (
    <section className="iphone-section iphone-essentials-section" id="essentials">
      <SectionHeading title="iPhone essentials." link="All iPhone accessories" />
      <div className="iphone-essentials-grid">
        <article className="iphone-essential-card iphone-reveal">
          <div>
            <h3>iPhone accessories</h3>
            <p>Protect and personalize your iPhone with fresh accessories like colorful cases, the Crossbody Strap, and more.</p>
            <a href="#top">Shop iPhone accessories <span aria-hidden="true">›</span></a>
          </div>
          <img src="/images/iphone/essential-accessories.jpg" alt="iPhone accessories" />
        </article>
        <article className="iphone-essential-card iphone-reveal">
          <div>
            <h3>AirTag</h3>
            <p>Now with a 50% louder speaker and up to a 1.5x greater Precision Finding range, it&apos;s easier than ever to keep track of what matters.</p>
            <a href="#top">Buy <span aria-hidden="true">›</span></a>
          </div>
          <img src="/images/iphone/essential-airtag.jpg" alt="AirTag accessories" />
        </article>
      </div>
    </section>
  );
}
