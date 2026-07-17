"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AppleMark, footerColumns, navItems } from "../AppleHome";

type Detail = {
  eyebrow?: string;
  title: string;
  copy: string;
  image: string;
};

const chapterItems = [
  ["iPhone 17 Pro", "/images/iphone/nav-17-pro.png", "New"],
  ["iPhone Air", "/images/iphone/nav-air.png", "New"],
  ["iPhone 17", "/images/iphone/nav-17.png", "New"],
  ["iPhone 17e", "/images/iphone/nav-17e.png", "New"],
  ["iPhone 16", "/images/iphone/nav-16.png", ""],
  ["Compare", "/images/iphone/nav-compare.png", ""],
  ["Accessories", "/images/iphone/nav-accessories.png", ""],
  ["Shop iPhone", "/images/iphone/nav-shop.png", ""],
  ["iOS Preview", "/images/iphone/nav-ios.png", ""],
];

const lineup = [
  {
    name: "iPhone 17 Pro",
    image: "/images/iphone/lineup-17-pro.jpg",
    tagline: "Innovative design for ultimate performance and battery life.",
    price: "From $1099 or $45.79/mo. for 24 mo.",
    colors: ["#e9702d", "#dce6ed", "#34495e"],
    new: true,
  },
  {
    name: "iPhone Air",
    image: "/images/iphone/lineup-air.jpg",
    tagline: "The thinnest iPhone ever. With the power of pro inside.",
    price: "From $999 or $41.62/mo. for 24 mo.",
    colors: ["#b9c9e2", "#f0eadf", "#d7e8e2", "#27272a"],
    new: true,
  },
  {
    name: "iPhone 17",
    image: "/images/iphone/lineup-17.jpg",
    tagline: "Even more delightful. Even more durable.",
    price: "From $799 or $33.29/mo. for 24 mo.",
    colors: ["#b8d8e8", "#b7d5c1", "#e8d9ee", "#f3f0e8", "#252527"],
    new: true,
  },
  {
    name: "iPhone 17e",
    image: "/images/iphone/lineup-17e.jpg",
    tagline: "Feature stacked. Value packed.",
    price: "From $599 or $24.95/mo. for 24 mo.",
    colors: ["#f2f0eb", "#2f3032"],
    new: true,
  },
  {
    name: "iPhone 16",
    image: "/images/iphone/lineup-16.jpg",
    tagline: "Amazing performance. Durable design.",
    price: "From $699 or $29.12/mo. for 24 mo.",
    colors: ["#6fa5c9", "#9a92b9", "#8bc4a4", "#f2e5d6", "#2e3032"],
    new: false,
  },
];

const incentives: Detail[] = [
  {
    eyebrow: "Apple Trade In",
    title: "Save on a new iPhone with a trade-in.",
    copy: "Get up to $195–$695 in credit toward iPhone 17, iPhone Air, or iPhone 17 Pro when you trade in iPhone 13 or higher.",
    image: "/images/iphone/why-trade-in.jpg",
  },
  {
    eyebrow: "Ways to Buy",
    title: "Pay over time, interest-free.",
    copy: "When you choose to check out at Apple with Apple Card Monthly Installments.",
    image: "/images/iphone/why-buy.jpg",
  },
  {
    eyebrow: "Personal Setup",
    title: "Meet your new iPhone with Personal Setup.",
    copy: "Jump into online sessions with a Specialist to set up your iPhone and discover new features.",
    image: "/images/iphone/why-setup.jpg",
  },
  {
    eyebrow: "Delivery and Pickup",
    title: "Get flexible delivery and easy pickup.",
    copy: "Choose two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
    image: "/images/iphone/why-delivery.jpg",
  },
  {
    eyebrow: "Guided Shopping",
    title: "Shop live with a Specialist.",
    copy: "Let us help you find what you need and answer all of your questions, one on one, at an Apple Store or online.",
    image: "/images/iphone/why-specialist.jpg",
  },
  {
    eyebrow: "Apple Store App",
    title: "Explore a shopping experience designed around you.",
    copy: "Use the Apple Store app to get a more personal way to shop.",
    image: "/images/iphone/why-app.jpg",
  },
];

const considerations: Detail[] = [
  {
    eyebrow: "Innovation",
    title: "Beautiful and durable, by design.",
    copy: "iPhone combines groundbreaking engineering with materials made to stand up to everyday life.",
    image: "/images/iphone/consider-innovation.jpg",
  },
  {
    eyebrow: "Cutting-Edge Cameras",
    title: "Picture your best photos and videos.",
    copy: "Advanced camera systems make every shot look incredible, from everyday moments to cinematic video.",
    image: "/images/iphone/consider-camera.jpg",
  },
  {
    eyebrow: "Chip and Battery Life",
    title: "Fast that lasts.",
    copy: "Apple silicon brings outstanding speed, efficiency, and all-day battery life.",
    image: "/images/iphone/consider-chip.jpg",
  },
  {
    eyebrow: "iOS and Apple Intelligence",
    title: "New look. Even more magic.",
    copy: "Personal, powerful, and private experiences help you communicate, create, and get things done.",
    image: "/images/iphone/consider-ios.jpg",
  },
  {
    eyebrow: "Environment",
    title: "Designed with the earth in mind.",
    copy: "More recycled materials, responsible packaging, and clean energy move every iPhone closer to carbon neutral.",
    image: "/images/iphone/consider-environment.jpg",
  },
  {
    eyebrow: "Privacy",
    title: "Your data. Just where you want it.",
    copy: "iPhone is built from the ground up to protect your personal information.",
    image: "/images/iphone/consider-privacy.jpg",
  },
  {
    eyebrow: "Peace of Mind",
    title: "Helpful features. On and off the grid.",
    copy: "Safety features can connect you with help when you need it, even when cellular service is unavailable.",
    image: "/images/iphone/consider-safety.jpg",
  },
];

const navHref = (key: string) => {
  if (key === "store") return "/us-edu/store";
  if (key === "iphone") return "/iphone";
  return "/#products";
};

function IPhoneHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const closeNavigation = () => {
    setMenuOpen(false);
    setMobileSubmenu(null);
    setActiveNav(null);
    setSearchOpen(false);
    setBagOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNavigation();
    };
    document.addEventListener("keydown", handleEscape);
    document.documentElement.classList.toggle("nav-lock", menuOpen);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.documentElement.classList.remove("nav-lock");
    };
  }, [menuOpen]);

  const activeMenu = navItems.find((item) => item.key === activeNav);
  const mobileMenu = navItems.find((item) => item.key === mobileSubmenu);
  const navigationOpen = Boolean(
    activeMenu || searchOpen || bagOpen || menuOpen,
  );

  return (
    <>
      <header
        className={
          navigationOpen
            ? "global-header iphone-global-header is-open"
            : "global-header iphone-global-header"
        }
        onMouseLeave={() => setActiveNav(null)}
      >
        <nav className="global-nav" aria-label="Global">
          <Link className="brand-link" href="/" aria-label="Apple UI home">
            <AppleMark />
          </Link>

          <ul className="desktop-nav">
            {navItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => {
                  setActiveNav(item.key);
                  setSearchOpen(false);
                  setBagOpen(false);
                }}
              >
                <a
                  href={navHref(item.key)}
                  aria-current={item.key === "iphone" ? "page" : undefined}
                  aria-expanded={activeNav === item.key}
                  onFocus={() => {
                    setActiveNav(item.key);
                    setSearchOpen(false);
                    setBagOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-tools" onMouseEnter={() => setActiveNav(null)}>
            <button
              className="icon-button"
              type="button"
              aria-label="Search apple.com"
              aria-expanded={searchOpen}
              onClick={() => {
                setSearchOpen((open) => !open);
                setActiveNav(null);
                setBagOpen(false);
                setMenuOpen(false);
                setMobileSubmenu(null);
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
                setActiveNav(null);
                setSearchOpen(false);
                setMenuOpen(false);
                setMobileSubmenu(null);
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
                setActiveNav(null);
                setSearchOpen(false);
                setBagOpen(false);
                setMobileSubmenu(null);
              }}
            >
              <span
                className={menuOpen ? "menu-lines open" : "menu-lines"}
                aria-hidden="true"
              />
            </button>
          </div>
        </nav>

        {activeMenu && (
          <div
            className="nav-flyout"
            onMouseEnter={() => setActiveNav(activeMenu.key)}
          >
            <div className="nav-flyout-content">
              {activeMenu.groups.map((group) => (
                <section
                  className={
                    group.elevated
                      ? "nav-flyout-group is-elevated"
                      : "nav-flyout-group"
                  }
                  key={group.title}
                >
                  <h2>{group.title}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <a href={navHref(activeMenu.key)} onClick={closeNavigation}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )}

        {searchOpen && (
          <div className="nav-panel search-panel">
            <form
              className="search-form"
              onSubmit={(event) => {
                event.preventDefault();
                closeNavigation();
              }}
            >
              <span className="search-icon large" aria-hidden="true" />
              <label className="sr-only" htmlFor="iphone-site-search">
                Search this UI study
              </label>
              <input
                id="iphone-site-search"
                type="search"
                placeholder="Search apple.com"
                autoFocus
              />
              <button
                className="search-cancel"
                type="button"
                onClick={closeNavigation}
              >
                Cancel
              </button>
            </form>
            <p>Quick Links</p>
            {[
              "Find a Store",
              "Shop iPhone",
              "Compare iPhone",
              "Apple Trade In",
              "iPhone Support",
            ].map((item) => (
              <a href="#lineup" onClick={closeNavigation} key={item}>
                <span aria-hidden="true">→</span>
                {item}
              </a>
            ))}
          </div>
        )}

        {bagOpen && (
          <div className="nav-panel bag-panel">
            <h2>Your Bag is empty.</h2>
            <p>
              <a href="#lineup" onClick={closeNavigation}>
                Sign in
              </a>{" "}
              to see if you have any saved items
            </p>
            <h3>My Profile</h3>
            <ul>
              {["Orders", "Your Saves", "Account", "Sign in"].map((label) => (
                <li key={label}>
                  <a href="#lineup" onClick={closeNavigation}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {menuOpen && (
          <div className="mobile-drawer" aria-label="Mobile navigation">
            {mobileMenu ? (
              <div className="mobile-submenu">
                <button
                  className="mobile-back"
                  type="button"
                  onClick={() => setMobileSubmenu(null)}
                >
                  <span aria-hidden="true">‹</span>
                  {mobileMenu.label}
                </button>
                <div className="mobile-submenu-groups">
                  {mobileMenu.groups.map((group) => (
                    <section
                      className={group.elevated ? "is-elevated" : ""}
                      key={group.title}
                    >
                      <h2>{group.title}</h2>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>
                            <a
                              href={navHref(mobileMenu.key)}
                              onClick={closeNavigation}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="mobile-nav-list">
                {navItems.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => setMobileSubmenu(item.key)}
                    >
                      {item.label}
                      <span aria-hidden="true">›</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </header>

      {navigationOpen && (
        <button
          className="nav-curtain"
          type="button"
          aria-label="Close navigation"
          onClick={closeNavigation}
        />
      )}
    </>
  );
}

function RailControls({
  target,
  label,
}: {
  target: string;
  label: string;
}) {
  const [canPrevious, setCanPrevious] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const rail = document.getElementById(target);
    if (!rail) return;

    const updateControls = () => {
      const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
      setCanPrevious(rail.scrollLeft > 2);
      setCanNext(rail.scrollLeft < maxScroll - 2);
    };

    updateControls();
    rail.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      rail.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [target]);

  const scroll = (direction: -1 | 1) => {
    const rail = document.getElementById(target);
    if (!rail) return;

    if (animationFrame.current !== null) {
      window.cancelAnimationFrame(animationFrame.current);
    }

    const firstCard = rail.firstElementChild as HTMLElement | null;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    const cardStep = (firstCard?.offsetWidth ?? rail.clientWidth * 0.72) + gap;
    const visibleCards = Math.max(1, Math.floor(rail.clientWidth / cardStep));
    const distance = cardStep * Math.max(1, visibleCards - 1);
    const start = rail.scrollLeft;
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const destination = Math.max(
      0,
      Math.min(maxScroll, start + direction * distance),
    );
    const startedAt = performance.now();
    const duration = 680;

    const animate = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      rail.scrollLeft = start + (destination - start) * eased;

      if (progress < 1) {
        animationFrame.current = window.requestAnimationFrame(animate);
      } else {
        animationFrame.current = null;
      }
    };

    animationFrame.current = window.requestAnimationFrame(animate);
  };

  return (
    <div className="iphone-rail-controls" aria-label={`${label} controls`}>
      <button
        type="button"
        aria-label={`Previous ${label}`}
        disabled={!canPrevious}
        onClick={() => scroll(-1)}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label={`Next ${label}`}
        disabled={!canNext}
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  );
}

function SectionHeading({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <div className="iphone-section-heading iphone-reveal">
      <h2>{title}</h2>
      {link && <a href="#lineup">{link} <span aria-hidden="true">›</span></a>}
    </div>
  );
}

export function IPhonePage() {
  const [detail, setDetail] = useState<Detail | null>(null);
  const [tourOpen, setTourOpen] = useState(false);
  const [activePartner, setActivePartner] = useState("mac");
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const revealItems =
      document.querySelectorAll<HTMLElement>(".iphone-reveal");
    const incentiveSection = document.querySelector<HTMLElement>(
      ".iphone-buy-section",
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      incentiveSection?.classList.add("is-staggered-in");
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
      { rootMargin: "0px 0px 10% 0px", threshold: 0.1 },
    );
    revealItems.forEach((item) => observer.observe(item));

    const staggerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          incentiveSection?.classList.add("is-staggered-in");
          staggerObserver.disconnect();
        }
      },
      { rootMargin: "0px 0px 12% 0px", threshold: 0.12 },
    );

    if (incentiveSection) staggerObserver.observe(incentiveSection);

    return () => {
      observer.disconnect();
      staggerObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const mobileFooter = window.matchMedia("(max-width: 734px)");
    const syncFooterGroups = () => {
      document
        .querySelectorAll<HTMLDetailsElement>(".footer-group")
        .forEach((group) => {
          group.open = !mobileFooter.matches;
        });
    };
    syncFooterGroups();
    mobileFooter.addEventListener("change", syncFooterGroups);
    return () => mobileFooter.removeEventListener("change", syncFooterGroups);
  }, []);

  useEffect(() => {
    if (!detail && !tourOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetail(null);
        setTourOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.documentElement.classList.add("iphone-modal-lock");
    window.requestAnimationFrame(() => dialogRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.classList.remove("iphone-modal-lock");
    };
  }, [detail, tourOpen]);

  const partnerContent = {
    mac: {
      label: "iPhone and Mac",
      copy: "With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.",
      image: "/images/iphone/ecosystem-mac.jpg",
    },
    watch: {
      label: "iPhone and Apple Watch",
      copy: "Pair iPhone with Apple Watch and get notifications, track activity, find your devices, and stay connected right from your wrist.",
      image: "/images/iphone/ecosystem-watch.jpg",
    },
    airpods: {
      label: "iPhone and AirPods",
      copy: "Set up AirPods with a tap. Automatic switching makes moving between your Apple devices feel effortless, while Personalized Spatial Audio surrounds you in sound.",
      image: "/images/iphone/ecosystem-airpods.jpg",
    },
  }[activePartner as "mac" | "watch" | "airpods"];

  return (
    <div className="iphone-page">
      <IPhoneHeader />

      <main id="top">
        <section className="iphone-top">
          <div className="iphone-trade-banner">
            <p>
              Get up to $195–$695 in credit toward iPhone 17, iPhone Air, or
              iPhone 17 Pro when you trade in iPhone 13 or higher.<sup>*</sup>{" "}
              <a href="#lineup">Shop iPhone <span aria-hidden="true">›</span></a>
            </p>
          </div>

          <div className="iphone-title-row iphone-reveal">
            <h1>iPhone</h1>
          </div>

          <nav className="iphone-chapter-nav" aria-label="iPhone">
            <div className="iphone-chapter-track">
              {chapterItems.map(([label, image, badge], index) => (
                <a href={index < 5 ? "#lineup" : "#essentials"} key={label}>
                  <span className="iphone-chapter-image">
                    <img src={image} alt="" />
                  </span>
                  <span className="iphone-chapter-label">{label}</span>
                  {badge && <span className="iphone-chapter-badge">{badge}</span>}
                </a>
              ))}
            </div>
          </nav>
        </section>

        <section className="iphone-section iphone-lineup-section" id="lineup">
          <SectionHeading title="Explore the lineup." link="Compare all models" />
          <div className="iphone-rail iphone-lineup-rail" id="lineup-rail">
            {lineup.map((phone, index) => (
              <article
                className="iphone-lineup-card iphone-reveal"
                style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
                key={phone.name}
              >
                <div className="iphone-lineup-image">
                  <img src={phone.image} alt={phone.name} />
                </div>
                <div className="iphone-swatches" aria-label="Available colors">
                  {phone.colors.map((color) => (
                    <span
                      style={{ backgroundColor: color }}
                      key={color}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                {phone.new && <p className="iphone-new">New</p>}
                <h3>{phone.name}</h3>
                <p className="iphone-lineup-tagline">{phone.tagline}</p>
                <p className="iphone-lineup-price">{phone.price}</p>
                <div className="iphone-lineup-actions">
                  <a className="button-primary" href="#why-buy">
                    Learn more
                  </a>
                  <a href="#why-buy">Buy <span aria-hidden="true">›</span></a>
                </div>
              </article>
            ))}
          </div>
          <RailControls target="lineup-rail" label="iPhone lineup" />
        </section>

        <section className="iphone-section iphone-tour-section">
          <SectionHeading title="Take a closer look." />
          <article className="iphone-tour-card iphone-reveal">
            <img src="/images/iphone/guided-tour.jpg" alt="" />
            <div className="iphone-tour-copy">
              <p>A Guided Tour of</p>
              <h3>iPhone 17 Pro,<br />iPhone Air, and iPhone 17</h3>
              <button type="button" onClick={() => setTourOpen(true)}>
                Watch the film <span aria-hidden="true">▶</span>
              </button>
            </div>
          </article>
        </section>

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
                  onClick={() => setDetail(item)}
                >
                  +
                </button>
              </article>
            ))}
          </div>
          <RailControls target="incentive-rail" label="shopping benefits" />
        </section>

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
                  onClick={() => setDetail(item)}
                >
                  +
                </button>
              </article>
            ))}
          </div>
          <RailControls target="consider-rail" label="iPhone features" />
        </section>

        <section className="iphone-section iphone-privacy-section">
          <article className="iphone-privacy-card iphone-reveal">
            <img src="/images/iphone/privacy-banner.jpg" alt="" />
            <div>
              <p>Privacy. That’s iPhone.</p>
              <h2>Safari. A browser that’s actually private.</h2>
              <a href="#essentials">Learn more <span aria-hidden="true">›</span></a>
            </div>
          </article>
        </section>

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
                <p>Now with a 50% louder speaker and up to a 1.5x greater Precision Finding range, it’s easier than ever to keep track of what matters.</p>
                <a href="#top">Buy <span aria-hidden="true">›</span></a>
              </div>
              <img src="/images/iphone/essential-airtag.jpg" alt="AirTag accessories" />
            </article>
          </div>
        </section>

        <section className="iphone-section iphone-partners-section">
          <SectionHeading title="Significant others." />
          <div className="iphone-partners iphone-reveal">
            <div className="iphone-partner-tabs">
              {([
                ["mac", "iPhone and Mac"],
                ["watch", "iPhone and Apple Watch"],
                ["airpods", "iPhone and AirPods"],
              ] as const).map(([key, label]) => (
                <div className="iphone-partner-group" key={key}>
                  <button
                    type="button"
                    className={activePartner === key ? "is-active" : ""}
                    aria-expanded={activePartner === key}
                    onClick={() => setActivePartner(key)}
                  >
                    <span>{label}</span>
                    <span aria-hidden="true">{activePartner === key ? "⌃" : "⌄"}</span>
                  </button>
                  {activePartner === key && (
                    <p className="iphone-partner-copy">{partnerContent.copy}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="iphone-partner-media" key={activePartner}>
              <img src={partnerContent.image} alt={partnerContent.label} />
            </div>
          </div>
        </section>

        <section className="iphone-directory">
          <div className="iphone-directory-inner">
            <h2>iPhone</h2>
            <div className="iphone-directory-grid">
              <div>
                <h3>Explore iPhone</h3>
                <a href="#lineup">Explore All iPhone</a>
                <a href="#lineup">iPhone 17 Pro</a>
                <a href="#lineup">iPhone Air</a>
                <a href="#lineup">iPhone 17</a>
                <a href="#lineup">iPhone 17e</a>
                <a href="#lineup">iPhone 16</a>
                <a href="#lineup">Compare iPhone</a>
              </div>
              <div>
                <h3>Shop iPhone</h3>
                <a href="#why-buy">Shop iPhone</a>
                <a href="#essentials">iPhone Accessories</a>
                <a href="#why-buy">Apple Trade In</a>
                <a href="#why-buy">Carrier Deals at Apple</a>
                <a href="#why-buy">Financing</a>
              </div>
              <div>
                <h3>More from iPhone</h3>
                <a href="#top">iPhone Support</a>
                <a href="#top">AppleCare</a>
                <a href="#top">iOS Preview</a>
                <a href="#top">Apple Intelligence and Siri</a>
                <a href="#top">iPhone Privacy</a>
                <a href="#top">Better with Mac</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer iphone-footer">
        <div className="footer-inner">
          <section className="footnotes" aria-label="Footnotes">
            <p>
              * Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. Offer availability may vary by store.
            </p>
            <p>
              Apple Card Monthly Installments is available for certain Apple
              products and is subject to credit approval and credit limit.
            </p>
            <p>
              Battery life varies by use and configuration. See apple.com/batteries
              for more information.
            </p>
            <p>
              Features are subject to change. Some features, applications, and
              services may not be available in all regions or all languages.
            </p>
          </section>

          <nav className="footer-directory" aria-label="Apple directory">
            {footerColumns.map((column, columnIndex) => (
              <div className="footer-column" key={columnIndex}>
                {column.map((group) => (
                  <details key={group.title} className="footer-group" open>
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
            <a href="#top">other retailer</a> near you. Or call{" "}
            <a href="#top">1-800-MY-APPLE</a> (1-800-692-7753).
          </p>

          <div className="legal-row">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
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

      {(detail || tourOpen) && (
        <div
          className="iphone-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setDetail(null);
              setTourOpen(false);
            }
          }}
        >
          <div
            className={tourOpen ? "iphone-modal iphone-tour-modal" : "iphone-modal"}
            role="dialog"
            aria-modal="true"
            aria-label={tourOpen ? "Guided Tour" : detail?.eyebrow}
            tabIndex={-1}
            ref={dialogRef}
          >
            <button
              className="iphone-modal-close"
              type="button"
              aria-label="Close"
              onClick={() => {
                setDetail(null);
                setTourOpen(false);
              }}
            >
              ×
            </button>
            {tourOpen ? (
              <>
                <img src="/images/iphone/guided-tour.jpg" alt="" />
                <div className="iphone-tour-modal-copy">
                  <span className="iphone-tour-play" aria-hidden="true">▶</span>
                  <p>A Guided Tour of</p>
                  <h2>iPhone 17 Pro, iPhone Air, and iPhone 17</h2>
                  <p>
                    Discover the newest iPhone lineup, from the most powerful
                    Pro camera system to the remarkably thin iPhone Air.
                  </p>
                </div>
              </>
            ) : detail ? (
              <>
                <img src={detail.image} alt="" />
                <div className="iphone-modal-copy">
                  <p>{detail.eyebrow}</p>
                  <h2>{detail.title}</h2>
                  <p>{detail.copy}</p>
                  <a href="#lineup" onClick={() => setDetail(null)}>
                    Learn more <span aria-hidden="true">›</span>
                  </a>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
