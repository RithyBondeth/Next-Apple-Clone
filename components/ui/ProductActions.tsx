"use client";

/**
 * Product action buttons component.
 * Renders "Learn more" and secondary action (Buy/Shop) buttons.
 *
 * @param dark - When true, applies dark styling for dark backgrounds
 * @param secondaryLabel - Label for the secondary button (default: "Buy")
 * @param primaryHref - Destination for the primary action
 * @param secondaryHref - Destination for the secondary action
 */
export default function ProductActions({
  dark = false,
  secondaryLabel = "Buy",
  primaryHref = "#products",
  secondaryHref = "#products",
}: {
  dark?: boolean;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="product-actions">
      <a className="button-primary" href={primaryHref}>
        Learn more
      </a>
      <a
        className={dark ? "button-secondary dark" : "button-secondary"}
        href={secondaryHref}
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
