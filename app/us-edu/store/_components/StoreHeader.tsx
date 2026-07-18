"use client";

import Link from "next/link";
import AppleMark from "@/components/ui/AppleMark";
import { navItems } from "@/utils/constants/nav-items";

type StoreHeaderProps = {
  activeNav: string | null;
  setActiveNav: (value: string | null) => void;
  searchOpen: boolean;
  setSearchOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  bagOpen: boolean;
  setBagOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean | ((value: boolean) => boolean)) => void;
  mobileSubmenu: string | null;
  setMobileSubmenu: (value: string | null) => void;
  closeNavigation: () => void;
  navigationOpen: boolean;
};

export function StoreHeader({
  activeNav,
  setActiveNav,
  searchOpen,
  setSearchOpen,
  bagOpen,
  setBagOpen,
  menuOpen,
  setMenuOpen,
  mobileSubmenu,
  setMobileSubmenu,
  closeNavigation,
  navigationOpen,
}: StoreHeaderProps) {
  const activeMenu = navItems.find((item) => item.key === activeNav);
  const mobileMenu = navItems.find((item) => item.key === mobileSubmenu);

  return (
    <>
      <header
        className={
          navigationOpen
            ? "store-global-header is-open"
            : "store-global-header"
        }
        onMouseLeave={() => setActiveNav(null)}
      >
        <nav className="global-nav" aria-label="Global">
          <Link className="brand-link" href="/" aria-label="Apple UI home">
            <AppleMark inverted />
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
                  href={
                    item.key === "store"
                      ? "/us-edu/store"
                      : item.key === "iphone"
                      ? "/iphone"
                      : "#products"
                  }
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
                        <a
                          href={
                            activeMenu.key === "iphone"
                              ? "/iphone"
                              : "#products"
                          }
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
                            <a
                              href={
                                mobileMenu.key === "iphone"
                                  ? "/iphone"
                                  : "#products"
                              }
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
          className="store-nav-curtain"
          type="button"
          aria-label="Close navigation"
          onClick={closeNavigation}
        />
      )}
    </>
  );
}
