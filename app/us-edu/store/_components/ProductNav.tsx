"use client";

import { productLinks } from "@/utils/constants/store";

/**
 * Product category navigation for the education store.
 * Shows product thumbnails with labels in a horizontal scrollable row.
 */
export function ProductNav() {
  return (
    <nav
      className="education-product-nav"
      aria-label="Shop product categories"
    >
      <div>
        {productLinks.map(([label, image]) => (
          <a
            href={
              label === "iPhone"
                ? "/us-edu/shop/buy-iphone"
                : "#products"
            }
            key={label}
          >
            <img src={image} alt="" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
