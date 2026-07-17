"use client";

import { useEffect, useRef, useState } from "react";
import { AppleMark, footerColumns, navItems } from "../../AppleHome";

type StoreCard = {
  eyebrow?: string;
  title: string;
  copy?: string;
  price?: string;
  image: string;
  dark?: boolean;
  accent?: boolean;
};

const productLinks = [
  ["Mac", "/images/store/nav-mac.png"],
  ["iPad", "/images/store/nav-ipad.png"],
  ["iPhone", "/images/store/nav-iphone.png"],
  ["Apple Watch", "/images/store/nav-watch.png"],
  ["Apple Vision Pro", "/images/store/nav-vision.png"],
  ["AirPods", "/images/store/nav-airpods.png"],
  ["AirTag", "/images/store/nav-airtag.png"],
  ["Apple TV 4K", "/images/store/nav-tv.png"],
  ["HomePod", "/images/store/nav-homepod.png"],
  ["Accessories", "/images/store/nav-accessories.png"],
  ["Apple Gift Card", "/images/store/nav-giftcard.png"],
];

const shelves: {
  title: string;
  subtitle: string;
  cards: StoreCard[];
}[] = [
  {
    title: "Limited-time offer.",
    subtitle: "Major must-haves.",
    cards: [
      {
        eyebrow: "LIMITED TIME",
        title: "Buy Mac or iPad with education savings, get a gift card.",
        copy: "Get up to a $150 Apple Gift Card with an eligible purchase.",
        image: "/images/store/offer-featured.jpg",
        dark: true,
        accent: true,
      },
      {
        eyebrow: "OFFER ELIGIBLE · Education Savings",
        title: "MacBook Air",
        copy: "Now supercharged by M5.",
        price: "From $999 or $83.25/mo. for 12 mo. with education savings",
        image: "/images/store/offer-macbook-air.jpg",
      },
      {
        eyebrow: "OFFER ELIGIBLE · Education Savings",
        title: "MacBook Pro",
        copy: "Supercharged by the M5 family.",
        price: "From $1499 or $124.91/mo. for 12 mo. with education savings",
        image: "/images/store/offer-macbook-pro.jpg",
      },
    ],
  },
  {
    title: "Education savings.",
    subtitle: "Get sorted with special pricing.",
    cards: [
      {
        eyebrow: "NEW",
        title: "MacBook Neo",
        copy: "The magic of Mac at a surprising price.",
        price: "From $599 or $49.91/mo. for 12 mo. with education savings",
        image: "/images/store/macbook-neo.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "Apple Watch Series 11",
        copy: "The ultimate way to watch your health.",
        price: "From $359 or $29.91/mo. for 12 mo. with education savings",
        image: "/images/store/watch-s11.jpg",
      },
      {
        eyebrow: "Education Savings",
        title: "iPad",
        copy: "Lovable. Drawable. Magical.",
        price: "From $429 or $35.75/mo. for 12 mo. with education savings",
        image: "/images/store/ipad.jpg",
      },
    ],
  },
  {
    title: "Additional ways to save.",
    subtitle: "For college students, educators, and more.",
    cards: [
      {
        title: "Learn about education savings available only at Apple.",
        copy: "Special pricing on Mac, iPad, and more.",
        image: "/images/store/edu-offer.jpg",
      },
      {
        title: "Explore accessories with education savings.",
        copy: "Find essentials for class, campus, and everything after.",
        image: "/images/store/ipad-accessories.jpg",
      },
      {
        eyebrow: "APPLE CREATOR STUDIO",
        title: "$2.99 per month for students and educators.",
        copy: "Creative apps for video, music, images, and productivity.",
        image: "/images/store/creator-studio.jpg",
      },
    ],
  },
  {
    title: "The Apple Store difference.",
    subtitle: "Even more reasons to shop with us.",
    cards: [
      {
        eyebrow: "APPLE TRADE IN",
        title: "Trade in your current device. Get credit toward a new one.",
        image: "/images/store/trade-in.jpg",
      },
      {
        eyebrow: "APPLE CARD",
        title: "Pay in full or pay over time. Your choice.",
        image: "/images/store/apple-card.jpg",
      },
      {
        eyebrow: "CUSTOMIZE YOUR MAC",
        title: "Build it just the way you want.",
        copy: "Choose your memory, storage, and more.",
        image: "/images/store/customize-mac.jpg",
      },
      {
        eyebrow: "FREE ENGRAVING",
        title: "Make them yours. Only at Apple.",
        image: "/images/store/accessories.png",
      },
    ],
  },
  {
    title: "Endless potential.",
    subtitle: "Take teaching and learning further with Apple.",
    cards: [
      {
        eyebrow: "APPLE FOR COLLEGE",
        title: "Major. In any field.",
        copy: "No matter what you study, ace it with Mac and iPad.",
        image: "/images/store/college.jpg",
      },
      {
        eyebrow: "APPLE EDUCATION COMMUNITY",
        title: "Empowering teachers to inspire students.",
        copy: "Get free resources and fresh ideas for teaching with Apple.",
        image: "/images/store/community.jpg",
        dark: true,
      },
      {
        eyebrow: "COLLEGE ESSENTIALS",
        title: "Powerful tools for every assignment.",
        copy: "Study, create, collaborate, and stay organized.",
        image: "/images/store/college-essentials.jpg",
      },
    ],
  },
  {
    title: "More to love.",
    subtitle: "Find your new favorites.",
    cards: [
      {
        title: "iPhone 17 Pro",
        copy: "All out Pro.",
        price: "From $1099 or $45.79/mo. for 24 mo.",
        image: "/images/store/iphone-17-pro.jpg",
      },
      {
        eyebrow: "FREE ENGRAVING",
        title: "AirPods Max 2",
        copy: "New intelligent features. More immersive listening.",
        price: "$549 or $91.50/mo. for 6 mo.",
        image: "/images/store/airpods-max.jpg",
      },
      {
        title: "iPhone 17",
        copy: "Magichromatic.",
        price: "From $799 or $33.29/mo. for 24 mo.",
        image: "/images/store/iphone-17.jpg",
      },
    ],
  },
  {
    title: "The Apple experience.",
    subtitle: "Balance work and play with apps and services.",
    cards: [
      {
        title: "Apple Intelligence.",
        copy: "Create, communicate, and get things done effortlessly.",
        image: "/images/store/apple-intelligence.jpg",
      },
      {
        eyebrow: "TODAY AT APPLE",
        title: "Explore Apple Intelligence",
        copy: "Come try it for yourself in a free session at the Apple Store.",
        image: "/images/store/today-at-apple.jpg",
      },
      {
        eyebrow: "APPLECARE",
        title: "Handled with care.",
        copy: "Protect your products in one simple plan.",
        image: "/images/store/applecare.jpg",
      },
    ],
  },
];

function StoreShelf({
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
    track.current?.scrollBy({ left: direction * 420, behavior: "smooth" });
  };

  return (
    <section className="edu-shelf" aria-label={`${title} ${subtitle}`}>
      <h2 className="edu-shelf-heading">
        <span>{title}</span> {subtitle}
      </h2>
      <div className="edu-card-track" ref={track}>
        {cards.map((card) => (
          <a
            className={card.dark ? "edu-store-card is-dark" : "edu-store-card"}
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

export function EducationStore() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const closeNavigation = () => {
    setActiveNav(null);
    setSearchOpen(false);
    setBagOpen(false);
    setMenuOpen(false);
    setMobileSubmenu(null);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNavigation();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.documentElement.classList.toggle("nav-lock", menuOpen);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.documentElement.classList.remove("nav-lock");
    };
  }, [menuOpen]);

  const activeMenu = navItems.find((item) => item.key === activeNav);
  const mobileMenu = navItems.find((item) => item.key === mobileSubmenu);
  const navigationOpen = Boolean(
    activeMenu || searchOpen || bagOpen || menuOpen,
  );

  return (
    <div className="education-store-page">
      <div className="education-switcher">
        <div>
          <a href="/us-edu/store">Education Store Home</a>
          <span aria-hidden="true" />
          <a href="/">Exit</a>
        </div>
      </div>

      <header
        className={
          navigationOpen
            ? "store-global-header is-open"
            : "store-global-header"
        }
        onMouseLeave={() => setActiveNav(null)}
      >
        <nav className="global-nav" aria-label="Global">
          <a className="brand-link" href="/" aria-label="Apple UI home">
            <AppleMark inverted />
          </a>
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
                  href={item.key === "store" ? "/us-edu/store" : "#products"}
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
                setSearchOpen((value) => !value);
                setActiveNav(null);
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
                setBagOpen((value) => !value);
                setActiveNav(null);
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
                setMenuOpen((value) => !value);
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
          <div className="nav-flyout">
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
                        <a href="#products" onClick={closeNavigation}>
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
              <label className="sr-only" htmlFor="education-store-search">
                Search the Education Store
              </label>
              <input
                id="education-store-search"
                type="search"
                placeholder="Search apple.com"
                autoFocus
              />
            </form>
            <p>Quick Links</p>
            {[
              "Find a Store",
              "Mac for College",
              "iPad for College",
              "Apple Trade In",
              "Education Savings",
            ].map((item) => (
              <a href="#quick-links" onClick={closeNavigation} key={item}>
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
              <a href="#quick-links">Sign in</a> to see if you have any saved
              items.
            </p>
            <h3>My Profile</h3>
            <ul>
              {["Orders", "Your Saves", "Account", "Sign in"].map((item) => (
                <li key={item}>
                  <a href="#quick-links" onClick={closeNavigation}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {menuOpen && (
          <div className="mobile-drawer store-mobile-drawer">
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
                            <a href="#products" onClick={closeNavigation}>
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
          className="store-nav-curtain"
          type="button"
          aria-label="Close navigation"
          onClick={closeNavigation}
        />
      )}

      <main>
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
              <p>College, sorted.</p>
            </div>
            <div className="education-help">
              <img src="/images/store/specialist.png" alt="" />
              <p>
                <a href="#quick-links">Connect with a Specialist ↗</a>
                <a href="#quick-links">Find an Apple Store ↗</a>
              </p>
            </div>
          </div>
        </section>

        <nav
          className="education-product-nav"
          aria-label="Shop product categories"
        >
          <div>
            {productLinks.map(([label, image]) => (
              <a href="#products" key={label}>
                <img src={image} alt="" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </nav>

        <div id="products">
          {shelves.slice(0, 4).map((shelf) => (
            <StoreShelf key={shelf.title} {...shelf} />
          ))}
        </div>

        <section className="edu-accessory-banner">
          <div>
            <p className="edu-card-eyebrow">ACCESSORIES</p>
            <h2>Campus-ready essentials.</h2>
            <p>Find the perfect companions for Mac, iPad, and iPhone.</p>
            <a href="#quick-links">Shop accessories</a>
          </div>
          <img src="/images/store/accessories.png" alt="" loading="lazy" />
        </section>

        {shelves.slice(4).map((shelf) => (
          <StoreShelf key={shelf.title} {...shelf} />
        ))}

        <section className="education-quick-links" id="quick-links">
          <h2>Quick Links</h2>
          <div>
            {[
              "Find a Store",
              "Order Status",
              "Shopping Help",
              "Returns",
              "Your Saves",
            ].map((link) => (
              <a href="#products" key={link}>
                {link}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer education-footer">
        <div className="footer-inner">
          <section className="footnotes" aria-label="Footnotes">
            <p>
              ◊ Available for Qualified Purchasers only. Qualified Purchasers
              receive an Apple Gift Card when they purchase an eligible Mac or
              iPad (“Eligible Product”) at a Qualifying Location through August
              27, 2026. Gift card values may vary by Eligible Product. Offer is
              subject to availability. While supplies last. Additional
              restrictions apply. <a href="#products">View full offer terms</a>.
            </p>
            <p>
              Education pricing is available to current and newly accepted
              college students and their parents, as well as faculty, staff,
              and homeschool teachers of all grade levels.
            </p>
            <p>
              Monthly pricing is available when you select Apple Card Monthly
              Installments at checkout. Actual value awarded for trade-in is
              based on the condition, year, and configuration of your eligible
              device.
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
                          <a href="#products">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </div>
            ))}
          </nav>

          <p className="shop-note">
            More ways to shop: <a href="#quick-links">Find an Apple Store</a> or{" "}
            <a href="#quick-links">other retailer</a> near you. Or call{" "}
            <a href="#quick-links">1-800-MY-APPLE</a> (1-800-692-7753).
          </p>

          <div className="legal-row">
            <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
            <nav aria-label="Legal">
              <a href="#products">Privacy Policy</a>
              <a href="#products">Terms of Use</a>
              <a href="#products">Sales and Refunds</a>
              <a href="#products">Legal</a>
              <a href="#products">Site Map</a>
            </nav>
            <a href="#products">United States</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
