"use client";

import { type ReactNode, useEffect } from "react";
import { footerColumns } from "@/utils/constants/footer-columns";

export function Footer({
  className = "site-footer",
  footnotes,
}: {
  className?: string;
  footnotes?: ReactNode;
}) {
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

  return (
    <footer className={className}>
      <div className="footer-inner">
        {footnotes && (
          <section className="footnotes" aria-label="Footnotes">
            {footnotes}
          </section>
        )}

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
  );
}
