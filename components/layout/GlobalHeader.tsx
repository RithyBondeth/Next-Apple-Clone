"use client";

import { useEffect, useState } from "react";

import AppleMark from "@/components/ui/AppleMark";
import { navItems } from "@/utils/constants/nav-items";

/**
 * Maps navigation item keys to their respective href paths.
 * Handles internal page links and anchor links.
 */
export const navHref = (key: string) => {
  if (key === "store") return "/us-edu/store";
  if (key === "iphone") return "/iphone";
  if (key === "entertainment") return "#entertainment";
  return "#products";
};

/**
 * Global site header with navigation, search, and shopping bag.
 * Supports desktop flyout menus, mobile drawer navigation, and overlay panels.
 */
export function GlobalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  const closeOverlays = () => {
    setMenuOpen(false);
    setMobileSubmenu(null);
    setActiveNav(null);
    setSearchOpen(false);
    setBagOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileSubmenu(null);
        setActiveNav(null);
        setSearchOpen(false);
        setBagOpen(false);
      }
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
          navigationOpen ? "global-header is-open" : "global-header"
        }
        onMouseLeave={() => setActiveNav(null)}
      >
        <nav className="global-nav" aria-label="Global">
          <a className="brand-link" href="#top" aria-label="Apple UI home">
            <AppleMark />
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
                  href={navHref(item.key)}
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
            id={`nav-menu-${activeMenu.key}`}
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
                        <a
                          href={
                            activeMenu.key === "iphone"
                              ? "/iphone"
                              : "#products"
                          }
                          onClick={closeOverlays}
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
        )}

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
              <input
                id="site-search"
                type="search"
                placeholder="Search apple.com"
                autoFocus
              />
              <button
                className="search-cancel"
                type="button"
                onClick={closeOverlays}
              >
                Cancel
              </button>
            </form>
            <p>Quick Links</p>
            {[
              "Find a Store",
              "Apple Vision Pro",
              "AirPods",
              "Apple Intelligence",
              "Apple Trade In",
            ].map((item) => (
              <a href="#products" onClick={closeOverlays} key={item}>
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
              <a href="#products" onClick={closeOverlays}>
                Sign in
              </a>{" "}
              to see if you have any saved items
            </p>
            <h3>My Profile</h3>
            <ul>
              {[
                ["orders", "Orders"],
                ["saves", "Your Saves"],
                ["account", "Account"],
                ["signin", "Sign in"],
              ].map(([icon, label]) => (
                <li key={label}>
                  <a href="#products" onClick={closeOverlays}>
                    <span
                      className={`profile-icon ${icon}`}
                      aria-hidden="true"
                    />
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
                  aria-label="Back to main menu"
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
                              href={
                                mobileMenu.key === "iphone"
                                  ? "/iphone"
                                  : "#products"
                              }
                              onClick={closeOverlays}
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
          onClick={closeOverlays}
        />
      )}
    </>
  );
}
