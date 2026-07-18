"use client";

import { useState } from "react";

import ProductActions from "@/components/ui/ProductActions";

/**
 * Hero section component for the homepage.
 * Contains three hero blocks: College education offer, iPhone, and MacBook Air.
 * The college hero includes an autoplay video that transitions to static on completion.
 */
export function HeroSection() {
  const [heroAnimationDone, setHeroAnimationDone] = useState(false);

  return (
    <>
      {/* College education hero with video background */}
      <section
        className={
          heroAnimationDone
            ? "hero hero-college animation-done"
            : "hero hero-college animation-playing"
        }
      >
        <div
          className={
            heroAnimationDone ? "hero-media is-finished" : "hero-media"
          }
          aria-hidden="true"
        >
          <video
            autoPlay
            muted
            playsInline
            preload="auto"
            poster="/images/college-startframe-desktop.png"
            onEnded={() => setHeroAnimationDone(true)}
            onError={() => setHeroAnimationDone(true)}
          >
            <source
              media="(max-width: 734px)"
              src="/images/college-hero-mobile.webm"
              type="video/webm"
            />
            <source
              src="/images/college-hero-desktop.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="hero-copy">
          <h1>College, sorted.</h1>
          <p>
            Get a gift card from $100 to $150<sup>*</sup> when you buy Mac or
            iPad with education savings.
          </p>
          <a className="button-primary" href="/us-edu/store">
            Shop
          </a>
        </div>
      </section>

      {/* iPhone hero section */}
      <section className="hero hero-iphone">
        <div className="hero-copy">
          <h2>iPhone</h2>
          <p>Meet the latest iPhone lineup.</p>
          <ProductActions secondaryLabel="Shop iPhone" />
        </div>
      </section>

      {/* MacBook Air hero section */}
      <section className="hero hero-macbook">
        <div className="hero-copy">
          <h2>MacBook Air</h2>
          <p>Now supercharged by M5.</p>
          <ProductActions />
        </div>
      </section>
    </>
  );
}
