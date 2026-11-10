"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { StoreHeader } from "@/app/us-edu/store/_components/StoreHeader";

type Product = {
  name: string;
  image: string;
  colors: Array<{ name: string; value: string }>;
  price: string;
  monthly: string;
  footnote: string;
};

type FeatureCard = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  dark?: boolean;
  accent?: "blue" | "purple" | "orange";
  compact?: boolean;
  swatches?: string[];
  video?: boolean;
};

const products: Product[] = [
  {
    name: "iPhone 17 Pro & iPhone 17 Pro Max",
    image: "/images/buy-iphone/iphone-17-pro.jpg",
    colors: [
      { name: "Silver", value: "#deded9" },
      { name: "Cosmic Orange", value: "#e9854e" },
      { name: "Deep Blue", value: "#3b506f" },
    ],
    price: "$1099",
    monthly: "$45.79/mo.",
    footnote: "◊",
  },
  {
    name: "iPhone Air",
    image: "/images/buy-iphone/iphone-air.jpg",
    colors: [
      { name: "Sky Blue", value: "#dce9ec" },
      { name: "Light Gold", value: "#f2eee3" },
      { name: "Cloud White", value: "#f4f4f2" },
      { name: "Space Black", value: "#171717" },
    ],
    price: "$999",
    monthly: "$41.62/mo.",
    footnote: "◊",
  },
  {
    name: "iPhone 17",
    image: "/images/buy-iphone/iphone-17.jpg",
    colors: [
      { name: "Lavender", value: "#d7c7e4" },
      { name: "Sage", value: "#a9baa1" },
      { name: "Mist Blue", value: "#c9dce8" },
      { name: "White", value: "#f1f1ef" },
      { name: "Black", value: "#252525" },
    ],
    price: "$799",
    monthly: "$33.29/mo.",
    footnote: "∆",
  },
  {
    name: "iPhone 17e",
    image: "/images/buy-iphone/iphone-17e.jpg",
    colors: [
      { name: "Soft Pink", value: "#edd9dc" },
      { name: "White", value: "#f1f1ef" },
      { name: "Black", value: "#252525" },
    ],
    price: "$599",
    monthly: "$24.95/mo.",
    footnote: "◊",
  },
  {
    name: "iPhone 16 & iPhone 16 Plus",
    image: "/images/buy-iphone/iphone-16-plus.jpg",
    colors: [
      { name: "Ultramarine", value: "#7986d5" },
      { name: "Teal", value: "#b7d9d3" },
      { name: "Pink", value: "#e9c8dc" },
      { name: "White", value: "#f1f1ef" },
      { name: "Black", value: "#252525" },
    ],
    price: "$699",
    monthly: "$29.12/mo.",
    footnote: "§",
  },
];

const shoppingGuides: FeatureCard[] = [
  {
    eyebrow: "COMPARE ALL MODELS",
    title: "Which iPhone is right for you?",
    image: "/images/buy-iphone/compare.jpg",
  },
  {
    title:
      "Apple Intelligence. Create, communicate, and get things done effortlessly.",
    image: "/images/buy-iphone/apple-intelligence.jpg",
  },
  {
    title: "Shop with a Specialist over video.",
    description: "Choose your next device in a guided, one-way video session.",
    image: "/images/buy-iphone/specialist-video.jpg",
  },
  {
    eyebrow: "IPHONE SPECIALIST",
    title: "Shop one on one with a Specialist. Online or in a store.",
    image: "/images/buy-iphone/specialist-help.jpg",
  },
  {
    eyebrow: "Today at Apple",
    title: "Explore Apple Intelligence",
    description:
      "Come try it for yourself in a free session at the Apple Store.",
    image: "/images/buy-iphone/today-at-apple.jpg",
  },
  {
    eyebrow: "SWITCH TO IPHONE",
    title: "Switching from Android to iPhone is super simple.",
    image: "/images/buy-iphone/why-switch.jpg",
  },
];

const savingsCards: FeatureCard[] = [
  {
    eyebrow: "APPLE TRADE IN",
    title:
      "Get $195–$695 in credit toward any iPhone 17, iPhone Air or iPhone 17 Pro when you trade in iPhone 13 or higher.",
    image: "/images/buy-iphone/trade-in-main.jpg",
    accent: "orange",
  },
  {
    eyebrow: "WATCH AND LEARN",
    title: "How to trade in your iPhone.",
    description: "Get a quick overview in this video.",
    image: "/images/buy-iphone/trade-in.png",
    video: true,
  },
  {
    eyebrow: "CARRIER DEALS AT APPLE",
    title: "Get up to $800–$1100 in credit on a new iPhone after trade-in.",
    description:
      "Explore deals that accept eligible trade-in devices in any condition — and some that don’t require a trade-in at all.",
    image: "/images/buy-iphone/carrier-trade.jpg",
    accent: "blue",
  },
  {
    eyebrow: "WATCH AND LEARN",
    title: "How to save on iPhone with carrier deals at Apple.",
    description: "Get a quick overview in this video.",
    image: "/images/buy-iphone/carrier-offers.png",
    video: true,
  },
  {
    eyebrow: "APPLE CARD",
    title:
      "Pay 0% APR over 24 months when you choose to check out with Apple Card Monthly Installments.",
    image: "/images/buy-iphone/apple-card.jpg",
  },
];

const accessoryCards: FeatureCard[] = [
  {
    title: "Get even more attached to iPhone.",
    description:
      "Protect and personalize your iPhone with colorful accessories.",
    image: "/images/buy-iphone/accessories-story.jpg",
  },
  {
    eyebrow: "New",
    title: "iPhone 17e Silicone Case with MagSafe – Soft Pink",
    description: "$49.00",
    image: "/images/buy-iphone/accessories/iphone-17e-case.jpg",
    compact: true,
    swatches: ["#f1d8de", "#ff694d", "#f3eee1", "#b8c7a8", "#465c75", "#272727"],
  },
  {
    eyebrow: "New",
    title: "Crossbody Strap - Soft Pink",
    description: "$59.00",
    image: "/images/buy-iphone/accessories/crossbody-strap.jpg",
    compact: true,
    swatches: ["#efcfd7", "#ff6549", "#e7ff3c", "#365d92", "#bcd7e9", "#ba9b7b"],
  },
  {
    eyebrow: "Only at Apple",
    title: "Herschel Cloud Sling for iPhone",
    description: "$59.95",
    image: "/images/buy-iphone/accessories/herschel-cloud-sling.jpg",
    compact: true,
    swatches: ["#627f9c", "#edbdc8"],
  },
  {
    eyebrow: "Free Engraving",
    title: "AirTag",
    description: "$29.00",
    image: "/images/buy-iphone/accessories/airtag-product.jpg",
    compact: true,
  },
  {
    eyebrow: "Only at Apple",
    title: "Herschel AirTag Charm",
    description: "$19.95",
    image: "/images/buy-iphone/accessories/herschel-airtag-charm.jpg",
    compact: true,
    swatches: ["#3f554b", "#527da4", "#e9b8c2", "#a6b99b"],
  },
  {
    eyebrow: "New",
    title: "iPhone 17 Pro Silicone Case with MagSafe – Vanilla",
    description: "$49.00",
    image: "/images/buy-iphone/accessories/iphone-17-pro-case.jpg",
    compact: true,
    swatches: ["#ff6a4f", "#efe8d8", "#1f2e3d", "#bd7355", "#b2a2c0", "#252525"],
  },
  {
    eyebrow: "Only at Apple",
    title: "PopSockets Kick-Out Grip & Stand (MagSafe compatible)",
    description: "$44.95",
    image: "/images/buy-iphone/accessories/popsockets-kickout.jpg",
    compact: true,
    swatches: ["#53645d", "#242424", "#e9e9e9", "#e78776"],
  },
  {
    title: "mophie Check Case for iPhone 17 Pro",
    description: "$59.95",
    image: "/images/buy-iphone/accessories/mophie-check-case.jpg",
    compact: true,
  },
  {
    title: "40W Dynamic Power Adapter with 60W Max",
    description: "$39.00",
    image: "/images/buy-iphone/accessories/40w-adapter.jpg",
    compact: true,
  },
  {
    title: "iPhone 17 Clear Case with MagSafe",
    description: "$49.00",
    image: "/images/buy-iphone/accessories/iphone-17-clear-case.jpg",
    compact: true,
  },
  {
    eyebrow: "Only at Apple",
    title: "Nimble SharePower Portable Battery Charger",
    description: "$79.95",
    image: "/images/buy-iphone/accessories/nimble-sharepower.jpg",
    compact: true,
    swatches: ["#698ba8", "#e2b4bd", "#ededeb"],
  },
  {
    title: "iPhone Air Case with MagSafe – Shadow",
    description: "$49.00",
    image: "/images/buy-iphone/accessories/iphone-air-case.jpg",
    compact: true,
  },
  {
    title: "iPhone Air MagSafe Battery",
    description: "$99.00",
    image: "/images/buy-iphone/accessories/iphone-air-battery.jpg",
    compact: true,
  },
  {
    title: "20W USB-C Power Adapter",
    description: "$19.00",
    image: "/images/buy-iphone/accessories/20w-adapter.jpg",
    compact: true,
  },
  {
    title: "Explore MagSafe accessories.",
    image: "/images/buy-iphone/magsafe-card.jpg",
  },
];

const supportCards: FeatureCard[] = [
  {
    eyebrow: "ESIM ON IPHONE",
    title:
      "iPhone and eSIM — an easier and more secure way to connect to your carrier.",
    image: "/images/buy-iphone/esim.jpg",
  },
  {
    eyebrow: "APPLECARE",
    title: "Handled with AppleCare.",
    description:
      "Protect your iPhone with AppleCare+ with Theft and Loss. Or protect multiple products with AppleCare One.",
    image: "/images/buy-iphone/applecare-main.jpg",
  },
  {
    eyebrow: "WATCH AND LEARN",
    title: "How AppleCare protects your iPhone.",
    description:
      "Get a quick overview of what AppleCare+ and AppleCare One cover.",
    image: "/images/buy-iphone/applecare.jpg",
    video: true,
  },
  {
    eyebrow: "WATCH AND LEARN",
    title: "Use Quick Start to set up and transfer data.",
    description: "Watch Jeannie’s one-minute overview on how easy it can be.",
    image: "/images/buy-iphone/quick-start.jpg",
    video: true,
  },
  {
    eyebrow: "QUICK START SETUP",
    title:
      "Automatically set up your new iPhone with your current iOS device.",
    image: "/images/buy-iphone/setup.jpg",
  },
  {
    eyebrow: "WATCH AND LEARN",
    title: "Want to activate service on a new iPhone?",
    description: "Watch this simple 40-second overview from TJ.",
    image: "/images/buy-iphone/activation.jpg",
    video: true,
  },
  {
    eyebrow: "PERSONAL SETUP",
    title: "Set up your new iPhone with help from a Specialist.",
    description:
      "Let us guide you through data transfer, new features, and more in online, one-on-one sessions.",
    image: "/images/buy-iphone/personal-setup.jpg",
  },
  {
    eyebrow: "Today at Apple",
    title: "Join us to discover the best of iPhone.",
    description:
      "Get started or explore what’s new in free sessions at the Apple Store.",
    image: "/images/buy-iphone/today-at-apple-iphone.jpg",
  },
];

const experienceCards: FeatureCard[] = [
  {
    title: "Discover iOS 26. New look. Even more magic.",
    image: "/images/buy-iphone/ios-26.jpg",
  },
  {
    eyebrow: "AIRPODS",
    title: "Magically connect to your iPhone.",
    image: "/images/buy-iphone/airpods.jpg",
  },
  {
    title: "You get more than an iPhone when you get an iPhone.",
    image: "/images/buy-iphone/subscriptions.jpg",
  },
  {
    eyebrow: "APPLE 2030",
    title: "Innovating for you. With the earth in mind.",
    image: "/images/buy-iphone/environment.jpg",
  },
  {
    eyebrow: "AIRTAG",
    title: "The most findable AirTag yet.",
    image: "/images/buy-iphone/airtag.jpg",
  },
  {
    eyebrow: "APPLE ONE",
    title: "Bundle up to six Apple services. And enjoy more for less.",
    image: "/images/buy-iphone/apple-one.jpg",
  },
];

function scrollShelf(id: string, direction: -1 | 1) {
  const shelf = document.getElementById(id);
  if (!shelf) return;

  shelf.scrollBy({
    left: direction * Math.min(540, shelf.clientWidth * 0.78),
    behavior: "smooth",
  });
}

function Shelf({
  id,
  title,
  subtitle,
  cards,
  className = "",
}: {
  id: string;
  title: string;
  subtitle: string;
  cards: FeatureCard[];
  className?: string;
}) {
  return (
    <section className={`iphone-shop-shelf ${className}`} id={`${id}-section`}>
      <h2 className="iphone-shop-shelf-heading">
        <span>{title}</span> {subtitle}
      </h2>
      <div
        className="iphone-shop-track"
        id={id}
        role="region"
        aria-label={`${title} ${subtitle}`}
        tabIndex={0}
      >
        {cards.map((card) => (
          <article
            className={[
              "iphone-feature-card",
              card.dark ? "is-dark" : "",
              card.compact ? "is-compact" : "",
              card.video ? "is-video" : "",
              card.accent ? `has-${card.accent}-accent` : "",
            ]
              .filter(Boolean)
              .join(" ")}
            key={`${card.eyebrow ?? ""}-${card.title}`}
          >
            {card.image && <img src={card.image} alt="" />}
            {card.compact && card.swatches && (
              <ul
                className="iphone-accessory-swatches"
                aria-label={`${card.title} available colors`}
              >
                {card.swatches.map((swatch, index) => (
                  <li
                    key={`${card.title}-${swatch}-${index}`}
                    style={{ backgroundColor: swatch }}
                  />
                ))}
              </ul>
            )}
            <div className="iphone-feature-copy">
              {card.eyebrow && <p>{card.eyebrow}</p>}
              <h3>{card.title}</h3>
              {card.description && <span>{card.description}</span>}
            </div>
            {card.video && (
              <button
                className="iphone-video-play"
                type="button"
                aria-label={`Play ${card.title}`}
              >
                <span aria-hidden="true">▶</span>
              </button>
            )}
          </article>
        ))}
      </div>
      <div className="iphone-shop-shelf-controls" aria-label={`${title} controls`}>
        <button
          type="button"
          aria-label={`Previous - ${title}`}
          onClick={() => scrollShelf(id, -1)}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label={`Next - ${title}`}
          onClick={() => scrollShelf(id, 1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export function IphoneEducationShop() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [chatOpen, setChatOpen] = useState(false);

  const closeNavigation = () => {
    setActiveNav(null);
    setSearchOpen(false);
    setBagOpen(false);
    setMenuOpen(false);
    setMobileSubmenu(null);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      closeNavigation();
      setSelectedProduct(null);
      setChatOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.documentElement.classList.toggle(
      "nav-lock",
      menuOpen || Boolean(selectedProduct),
    );

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.documentElement.classList.remove("nav-lock");
    };
  }, [menuOpen, selectedProduct]);

  const navigationOpen = Boolean(
    activeNav || searchOpen || bagOpen || menuOpen,
  );

  return (
    <div className="iphone-education-shop" id="top">
      <div className="education-switcher">
        <div>
          <Link href="/us-edu/store">Education Store Home</Link>
          <span aria-hidden="true" />
          <Link href="/">Exit</Link>
        </div>
      </div>

      <StoreHeader
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        bagOpen={bagOpen}
        setBagOpen={setBagOpen}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        mobileSubmenu={mobileSubmenu}
        setMobileSubmenu={setMobileSubmenu}
        closeNavigation={closeNavigation}
        navigationOpen={navigationOpen}
      />

      <main>
        <section className="iphone-shop-hero">
          <h1>Shop iPhone for Education</h1>
          <div className="iphone-shop-help">
            <a href="#quick-links">Connect with a Specialist ↗</a>
            <a href="#quick-links">Find an Apple Store ↗</a>
          </div>
        </section>

        <nav className="iphone-shop-local-nav" aria-label="Shop iPhone sections">
          <div>
            <a href="#models-section">All Models</a>
            <a href="#shopping-guides-section">Shopping Guides</a>
            <a href="#ways-to-save-section">Ways to Save</a>
            <a href="#accessories-section">Accessories</a>
            <a href="#setup-support-section">Setup and Support</a>
            <a href="#iphone-experience-section">The iPhone Experience</a>
          </div>
        </nav>

        <section className="iphone-shop-shelf iphone-model-shelf" id="models-section">
          <h2 className="iphone-shop-shelf-heading">
            <span>All models.</span> Take your pick.
          </h2>
          <div
            className="iphone-shop-track iphone-model-track"
            id="models"
            role="region"
            aria-label="All iPhone models"
            tabIndex={0}
          >
            {products.map((product) => (
              <article className="iphone-product-card" key={product.name}>
                <h3>{product.name}</h3>
                <div className="iphone-product-visual">
                  <img src={product.image} alt={`${product.name} lineup`} />
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                  >
                    Take a closer look
                  </button>
                </div>
                <ul aria-label={`${product.name} available colors`}>
                  {product.colors.map((color) => (
                    <li
                      key={color.name}
                      title={color.name}
                      style={{ backgroundColor: color.value }}
                    >
                      <span className="sr-only">{color.name}</span>
                    </li>
                  ))}
                </ul>
                <div className="iphone-product-footer">
                  <p>
                    From {product.price} or {product.monthly} for 24 mo.
                    <sup>{product.footnote}</sup>
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Buy ${product.name}`}
                  >
                    Buy
                  </button>
                </div>
              </article>
            ))}
            <a className="iphone-accessory-card" href="#accessories-section">
              <img
                src="/images/buy-iphone/accessories-card.jpg"
                alt="iPhone accessories"
              />
              <span>Explore iPhone accessories.</span>
            </a>
          </div>
          <div className="iphone-shop-shelf-controls" aria-label="All models controls">
            <button
              type="button"
              aria-label="Previous - All models"
              onClick={() => scrollShelf("models", -1)}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next - All models"
              onClick={() => scrollShelf("models", 1)}
            >
              ›
            </button>
          </div>
        </section>

        <Shelf
          id="shopping-guides"
          title="Shopping guides."
          subtitle="Can’t decide? Start here."
          cards={shoppingGuides}
        />
        <Shelf
          id="ways-to-save"
          title="Ways to save."
          subtitle="Right here at Apple."
          cards={savingsCards}
        />
        <Shelf
          id="accessories"
          title="Accessories."
          subtitle="Essentials that pair perfectly with your favorite devices."
          cards={accessoryCards}
          className="iphone-accessory-shelf"
        />
        <Shelf
          id="setup-support"
          title="Setup and support."
          subtitle="Our Specialists are here to help."
          cards={supportCards}
        />
        <Shelf
          id="iphone-experience"
          title="The iPhone experience."
          subtitle="Designed to connect with everything Apple."
          cards={experienceCards}
        />

        <section className="iphone-quick-links" id="quick-links">
          <h2>Quick Links</h2>
          <div>
            {[
              "Order Status",
              "Shopping Help",
              "Returns",
              "Your Saves",
            ].map((link) => (
              <a href="#top" key={link}>
                {link} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer
        className="site-footer iphone-shop-footer"
        footnotes={
          <>
            <p>
              ◊ Monthly pricing is available when you select Apple Card Monthly
              Installments at checkout. Taxes and shipping are not included in
              monthly pricing.
            </p>
            <p>
              Trade-in values will vary based on the condition, year, and
              configuration of your eligible device. Not all devices are
              eligible for credit.
            </p>
            <p>
              Apple Intelligence is available in beta. Some features may not be
              available in all regions or languages. Features, applications,
              and services are subject to change.
            </p>
          </>
        }
      />

      <button
        className="iphone-shop-chat"
        type="button"
        aria-label="Chat with an iPhone Specialist"
        aria-expanded={chatOpen}
        onClick={() => setChatOpen((open) => !open)}
      >
        <img src="/images/store/specialist.png" alt="" />
      </button>

      {chatOpen && (
        <aside className="iphone-shop-chat-panel" aria-live="polite">
          <button
            type="button"
            aria-label="Close chat"
            onClick={() => setChatOpen(false)}
          >
            ×
          </button>
          <p>iPhone Specialist</p>
          <h2>How can we help?</h2>
          <span>
            Ask about choosing a model, comparing features, or finding ways to
            save.
          </span>
          <a href="#models-section" onClick={() => setChatOpen(false)}>
            Start shopping
          </a>
        </aside>
      )}

      {selectedProduct && (
        <div
          className="iphone-product-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProduct(null);
          }}
        >
          <section
            className="iphone-product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="iphone-product-modal-title"
          >
            <button
              className="iphone-product-modal-close"
              type="button"
              aria-label="Close"
              onClick={() => setSelectedProduct(null)}
            >
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt={`${selectedProduct.name} lineup`}
            />
            <div>
              <p>Take a closer look</p>
              <h2 id="iphone-product-modal-title">{selectedProduct.name}</h2>
              <span>
                From {selectedProduct.price} or {selectedProduct.monthly} for 24
                months.
              </span>
              <button type="button" onClick={() => setSelectedProduct(null)}>
                Continue
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
