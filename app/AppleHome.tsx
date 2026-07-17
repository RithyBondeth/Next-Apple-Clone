"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const promoCards = [
  {
    title: "iPad Air",
    eyebrow: "AIR",
    copy: "Now supercharged by M4.",
    image: "/images/ipad-air.jpg",
    theme: "light",
  },
  {
    title: "MacBook Pro",
    copy: "Now with M5, M5 Pro, and M5 Max.",
    image: "/images/macbook-pro.jpg",
    theme: "dark",
  },
  {
    title: "Apple Watch",
    eyebrow: "SERIES 11",
    copy: "The ultimate way to watch your health.",
    image: "/images/apple-watch.jpg",
    theme: "light",
  },
  {
    title: "iPad Pro",
    copy: "Advanced AI performance. Game-changing capabilities.",
    image: "/images/ipad-pro.jpg",
    theme: "dark",
  },
  {
    title: "Trade In",
    copy: "Get credit toward your next iPhone.",
    image: "/images/trade-in.jpg",
    theme: "light",
  },
  {
    title: "Apple Card",
    copy: "Get up to 3% Daily Cash back with every purchase.",
    image: "/images/apple-card.jpg",
    theme: "light",
  },
];

const entertainment = [
  {
    image: "/images/tv-f1.jpg",
    title: "F1 on Apple TV",
    genre: "Live Sports",
    copy: "Every Grand Prix, live and on demand.",
  },
  {
    image: "/images/tv-silo.jpg",
    title: "Silo",
    genre: "Sci-Fi",
    copy: "The truth lies in the past.",
  },
  {
    image: "/images/tv-trying.jpg",
    title: "Trying",
    genre: "Comedy",
    copy: "New season.",
  },
  {
    image: "/images/tv-lucky.jpg",
    title: "Lucky",
    genre: "Action",
    copy: "A high-stakes heist goes sideways.",
  },
  {
    image: "/images/tv-mls.jpg",
    title: "MLS on Apple TV",
    genre: "Live Sports",
    copy: "Every club. Every match. All season long.",
  },
];

const loopedEntertainment = [
  {
    ...entertainment[entertainment.length - 1],
    logicalIndex: entertainment.length - 1,
    loopKey: "clone-last",
  },
  ...entertainment.map((item, logicalIndex) => ({
    ...item,
    logicalIndex,
    loopKey: `slide-${logicalIndex}`,
  })),
  {
    ...entertainment[0],
    logicalIndex: 0,
    loopKey: "clone-first",
  },
];

const services = [
  {
    image: "/images/service-fitness.jpg",
    brand: "Fitness+",
    title: "Programs",
    action: "Watch now",
    layout: "cover",
  },
  {
    image: "/images/service-zane.jpg",
    brand: "Music",
    title: "Sabrina Carpenter: The Zane Lowe Interview",
    action: "Listen now",
    layout: "split dark",
  },
  {
    image: "/images/service-powerwash.jpg",
    brand: "Arcade",
    title: "PowerWash Simulator",
    action: "Play now",
    layout: "cover",
  },
  {
    image: "/images/service-yoga.jpg",
    brand: "Fitness+",
    title: "Morning Yoga with Jessica",
    action: "Watch now",
    layout: "cover",
  },
  {
    image: "/images/service-pop.jpg",
    brand: "Music",
    title: "A-List Pop",
    action: "Listen now",
    layout: "split pink",
  },
];

const footerColumns = [
  [
    {
      title: "Shop and Learn",
      items: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Apple Wallet",
      items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
    },
  ],
  [
    {
      title: "Account",
      items: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
    },
    {
      title: "Entertainment",
      items: [
        "Apple One",
        "Apple TV",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness+",
        "Apple News+",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },
  ],
  [
    {
      title: "Apple Store",
      items: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Group Reservations",
        "Apple Camp",
        "Apple Store App",
        "Certified Refurbished",
        "Apple Trade In",
        "Financing",
        "Carrier Deals at Apple",
        "Order Status",
        "Shopping Help",
      ],
    },
  ],
  [
    {
      title: "For Business",
      items: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      items: ["Apple and Education", "Shop for K–12", "Shop for College"],
    },
    {
      title: "For Healthcare",
      items: ["Apple and Healthcare"],
    },
    {
      title: "For Government",
      items: ["Apple and Government", "Shop for Veterans and Military"],
    },
  ],
  [
    {
      title: "Apple Values",
      items: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
        "Supply Chain Innovation",
      ],
    },
    {
      title: "About Apple",
      items: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ],
];

function AppleMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      className={inverted ? "apple-mark apple-mark-inverted" : "apple-mark"}
      src="/apple.svg"
      alt="Apple"
    />
  );
}

function ProductActions({
  dark = false,
  secondaryLabel = "Buy",
}: {
  dark?: boolean;
  secondaryLabel?: string;
}) {
  return (
    <div className="product-actions">
      <a className="button-primary" href="#products">
        Learn more
      </a>
      <a className={dark ? "button-secondary dark" : "button-secondary"} href="#products">
        {secondaryLabel}
      </a>
    </div>
  );
}

export function AppleHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [trackSlide, setTrackSlide] = useState(2);
  const [carouselInView, setCarouselInView] = useState(false);
  const [carouselPlaying, setCarouselPlaying] = useState(true);
  const [carouselCycle, setCarouselCycle] = useState(0);
  const [carouselTransitioning, setCarouselTransitioning] = useState(true);
  const [heroAnimationDone, setHeroAnimationDone] = useState(false);
  const touchStart = useRef<number | null>(null);
  const entertainmentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = entertainmentRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCarouselPlaying(false);
      return;
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
      setActiveSlide((current) => (current + 1) % entertainment.length);
      setTrackSlide((current) => current + 1);
    }, 4160);

    return () => window.clearInterval(timer);
  }, [carouselCycle, carouselInView, carouselPlaying]);

  useEffect(() => {
    if (carouselTransitioning) return;

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setCarouselTransitioning(true));
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [carouselTransitioning]);

  const closeOverlays = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setBagOpen(false);
  };

  const stepCarousel = (direction: -1 | 1) => {
    setCarouselTransitioning(true);
    setCarouselCycle((current) => current + 1);
    setActiveSlide(
      (current) =>
        (current + direction + entertainment.length) % entertainment.length,
    );
    setTrackSlide((current) => current + direction);
  };

  const selectCarouselSlide = (index: number) => {
    setCarouselTransitioning(true);
    setCarouselCycle((current) => current + 1);
    setActiveSlide(index);
    setTrackSlide(index + 1);
  };

  return (
    <div className="site-shell">
      <header className="global-header">
        <nav className="global-nav" aria-label="Global">
          <a className="brand-link" href="#top" aria-label="Apple UI home">
            <AppleMark />
          </a>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <a key={item} href="#products">
                {item}
              </a>
            ))}
          </div>

          <div className="nav-tools">
            <button
              className="icon-button"
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setBagOpen(false);
                setMenuOpen(false);
              }}
            >
              <span className="search-icon" aria-hidden="true" />
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label="Shopping bag"
              aria-expanded={bagOpen}
              onClick={() => {
                setBagOpen((open) => !open);
                setSearchOpen(false);
                setMenuOpen(false);
              }}
            >
              <span className="bag-icon" aria-hidden="true" />
            </button>
            <button
              className="icon-button menu-button"
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open);
                setSearchOpen(false);
                setBagOpen(false);
              }}
            >
              <span className={menuOpen ? "menu-lines open" : "menu-lines"} aria-hidden="true" />
            </button>
          </div>
        </nav>

        {searchOpen && (
          <div className="nav-panel search-panel">
            <form
              className="search-form"
              onSubmit={(event) => {
                event.preventDefault();
                closeOverlays();
              }}
            >
              <span className="search-icon large" aria-hidden="true" />
              <label className="sr-only" htmlFor="site-search">
                Search this UI demo
              </label>
              <input id="site-search" type="search" placeholder="Search apple.com" autoFocus />
              <button type="button" onClick={closeOverlays}>
                Cancel
              </button>
            </form>
            <p>Quick Links</p>
            <a href="#products">Explore the latest products →</a>
            <a href="#entertainment">Explore entertainment →</a>
          </div>
        )}

        {bagOpen && (
          <div className="nav-panel bag-panel">
            <h2>Your Bag is empty.</h2>
            <p>Sign in to see if you have any saved items.</p>
            <a href="#products" onClick={closeOverlays}>
              Continue Shopping
            </a>
          </div>
        )}

        {menuOpen && (
          <div className="mobile-drawer">
            {navItems.map((item) => (
              <a key={item} href="#products" onClick={closeOverlays}>
                {item}
                <span aria-hidden="true">›</span>
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="top">
        <section
          className={
            heroAnimationDone
              ? "hero hero-college animation-done"
              : "hero hero-college animation-playing"
          }
        >
          <div
            className={heroAnimationDone ? "hero-media is-finished" : "hero-media"}
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
              <source src="/images/college-hero-desktop.webm" type="video/webm" />
            </video>
          </div>
          <div className="hero-copy">
            <h1>College, sorted.</h1>
            <p>
              Get a gift card from $100 to $150<sup>*</sup> when you buy Mac or iPad
              with education savings.
            </p>
            <a className="button-primary" href="#products">
              Shop
            </a>
          </div>
        </section>

        <section className="hero hero-iphone">
          <div className="hero-copy">
            <h2>iPhone</h2>
            <p>Meet the latest iPhone lineup.</p>
            <ProductActions secondaryLabel="Shop iPhone" />
          </div>
        </section>

        <section className="hero hero-macbook">
          <div className="hero-copy">
            <h2>MacBook Air</h2>
            <p>Now supercharged by M5.</p>
            <ProductActions />
          </div>
        </section>

        <section className="promo-grid" id="products" aria-label="Featured products">
          {promoCards.map((card) => (
            <article
              className={`promo-card reveal-item ${
                card.theme === "dark" ? "promo-dark" : ""
              }`}
              key={card.title}
              data-reveal
            >
              <img className="promo-art" src={card.image} alt="" loading="lazy" />
              <div className="promo-copy">
                <h3>
                  {(card.title === "Apple Watch" ||
                    card.title === "Trade In" ||
                    card.title === "Apple Card") && (
                    <AppleMark inverted={card.theme === "dark"} />
                  )}
                  {card.title}
                </h3>
                {card.eyebrow && <span className="promo-eyebrow">{card.eyebrow}</span>}
                <p>{card.copy}</p>
                <ProductActions dark={card.theme === "dark"} />
              </div>
            </article>
          ))}
        </section>

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
                if (start !== null && end !== undefined && Math.abs(end - start) > 44) {
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
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <section className="footnotes" aria-label="Footnotes">
            <p>
              * Available for qualified purchasers only. Offer availability and gift
              card values may vary by eligible product. Terms and restrictions apply.
            </p>
            <p>
              Product images and names are used for this unofficial interface study.
              Apple and related marks are trademarks of Apple Inc.
            </p>
          </section>

          <nav className="footer-directory" aria-label="Apple directory">
            {footerColumns.map((column, columnIndex) => (
              <div className="footer-column" key={columnIndex}>
                {column.map((group) => (
                  <details key={group.title} className="footer-group">
                    <summary>{group.title}</summary>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <a href="#top">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            ))}
          </nav>

          <p className="shop-note">
            More ways to shop: <a href="#top">Find an Apple Store</a> or{" "}
            <a href="#top">other retailer</a> near you.
          </p>

          <div className="legal-row">
            <p>Copyright © 2026 Apple UI Study. All rights reserved.</p>
            <nav aria-label="Legal">
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms of Use</a>
              <a href="#top">Sales and Refunds</a>
              <a href="#top">Legal</a>
              <a href="#top">Site Map</a>
            </nav>
            <a href="#top">United States</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
