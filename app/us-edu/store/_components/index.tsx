"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { footerColumns } from "@/utils/constants/footer-columns";
import { navItems } from "@/utils/constants/nav-items";
import { shelves } from "@/utils/constants/store";

import { EducationHero } from "./EducationHero";
import { ProductNav } from "./ProductNav";
import { QuickLinks } from "./QuickLinks";
import { StoreHeader } from "./StoreHeader";
import { StoreShelf } from "./StoreShelf";

/**
 * Education store page component.
 * Renders the full education store experience with header, hero, product shelves, and footer.
 */
export function EducationStore() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useScrollReveal();

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

  const navigationOpen = Boolean(
    navItems.find((item) => item.key === activeNav) || searchOpen || bagOpen || menuOpen,
  );

  return (
    <div className="education-store-page">
      <div className="education-switcher">
        <div>
          <a href="/us-edu/store">Education Store Home</a>
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
        <EducationHero />

        <ProductNav />

        <div id="products">
          {shelves.map((shelf) => (
            <StoreShelf key={shelf.title} {...shelf} />
          ))}
        </div>

        <QuickLinks />
      </main>

      <footer className="site-footer education-footer">
        <div className="footer-inner">
          <section className="footnotes" aria-label="Footnotes">
            <p>
              ◊ Available for Qualified Purchasers only. Qualified Purchasers
              receive an Apple Gift Card when they purchase an eligible Mac or
              iPad (&ldquo;Eligible Product&rdquo;) at a Qualifying Location through August
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
