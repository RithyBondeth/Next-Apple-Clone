"use client";

import { promoCards } from "@/utils/constants/promo-cards";

import AppleMark from "@/components/ui/AppleMark";
import ProductActions from "@/components/ui/ProductActions";

export function PromoCards() {
  return (
    <section
      className="promo-grid"
      id="products"
      aria-label="Featured products"
    >
      {promoCards.map((card) => (
        <article
          className={`promo-card reveal-item ${
            card.theme === "dark" ? "promo-dark" : ""
          }`}
          key={card.title}
          data-reveal
        >
          <img
            className="promo-art"
            src={card.image}
            alt=""
            loading="lazy"
          />
          <div className="promo-copy">
            <h3>
              {(card.title === "Apple Watch" ||
                card.title === "Trade In" ||
                card.title === "Apple Card") && (
                <AppleMark inverted={card.theme === "dark"} />
              )}
              {card.title}
            </h3>
            {card.eyebrow && (
              <span className="promo-eyebrow">{card.eyebrow}</span>
            )}
            <p>{card.copy}</p>
            <ProductActions dark={card.theme === "dark"} />
          </div>
        </article>
      ))}
    </section>
  );
}
