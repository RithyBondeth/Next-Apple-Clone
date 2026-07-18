"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import AppleMark from "@/components/ui/AppleMark";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { footerColumns } from "@/utils/constants/footer-columns";
import { navItems } from "@/utils/constants/nav-items";
import type { Detail } from "@/utils/types";

import { ChapterNav } from "./ChapterNav";
import { ConsiderSection } from "./ConsiderSection";
import { DetailModal } from "./DetailModal";
import { DirectorySection } from "./DirectorySection";
import { EssentialsSection } from "./EssentialsSection";
import { IncentiveSection } from "./IncentiveSection";
import { LineupSection } from "./LineupSection";
import { PartnersSection } from "./PartnersSection";
import { PrivacySection } from "./PrivacySection";
import { TourSection } from "./TourSection";

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

export function IPhonePage() {
  const [detail, setDetail] = useState<Detail | null>(null);
  const [tourOpen, setTourOpen] = useState(false);
  const [activePartner, setActivePartner] = useState("mac");
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useScrollReveal();

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

          <ChapterNav />
        </section>

        <LineupSection />
        <TourSection onTourOpen={() => setTourOpen(true)} />
        <IncentiveSection onDetail={(item) => setDetail(item)} />
        <ConsiderSection onDetail={(item) => setDetail(item)} />
        <PrivacySection />
        <EssentialsSection />
        <PartnersSection
          activePartner={activePartner}
          onPartnerChange={setActivePartner}
        />
        <DirectorySection />
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

      <DetailModal
        detail={detail}
        tourOpen={tourOpen}
        onClose={() => {
          setDetail(null);
          setTourOpen(false);
        }}
        dialogRef={dialogRef}
      />
    </div>
  );
}
