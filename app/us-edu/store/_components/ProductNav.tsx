"use client";

import { productLinks } from "@/utils/constants/store";

export function ProductNav() {
  return (
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
  );
}
