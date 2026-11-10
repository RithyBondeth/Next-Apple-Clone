"use client";

/**
 * Privacy section highlighting Safari's privacy features.
 * Single card with banner image and call-to-action.
 */
export function PrivacySection() {
  return (
    <section className="iphone-section iphone-privacy-section">
      <article className="iphone-privacy-card iphone-reveal">
        <img src="/images/iphone/privacy-banner.jpg" alt="" />
        <div>
          <p>Privacy. That&apos;s iPhone.</p>
          <h2>Safari. A browser that&apos;s actually private.</h2>
          <a href="#essentials">Learn more <span aria-hidden="true">›</span></a>
        </div>
      </article>
    </section>
  );
}
