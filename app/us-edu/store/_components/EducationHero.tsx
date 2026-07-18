"use client";

export function EducationHero() {
  return (
    <>
      <aside className="education-promo">
        <p>
          For a limited time, get a gift card up to $150<sup>◊</sup> when you
          buy Mac or iPad with education savings.{" "}
          <a href="#products">Learn more</a>
        </p>
      </aside>

      <section className="education-hero">
        <img
          className="education-hero-ground"
          src="/images/store/education-header.png"
          alt=""
        />
        <span className="edu-sticker edu-sticker-cap" aria-hidden="true" />
        <span className="edu-sticker edu-sticker-pink" aria-hidden="true" />
        <span className="edu-sticker edu-sticker-eyes" aria-hidden="true" />
        <span className="edu-sticker edu-sticker-peace" aria-hidden="true" />
        <span className="edu-sticker edu-sticker-yellow" aria-hidden="true" />
        <div className="education-hero-inner">
          <div>
            <h1>Education Store</h1>
          </div>
          <div className="education-help">
            <h2>College, sorted.</h2>
            <a href="#quick-links">Connect with a Specialist ↗</a>
            <a href="#quick-links">Find an Apple Store ↗</a>
          </div>
        </div>
      </section>

      <button
        className="education-chat-fab"
        type="button"
        aria-label="Chat with an Apple Specialist"
      >
        <img src="/images/store/specialist.png" alt="" />
      </button>
    </>
  );
}
