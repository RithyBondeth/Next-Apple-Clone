"use client";

/**
 * Product action buttons component.
 * Renders "Learn more" and secondary action (Buy/Shop) buttons.
 *
 * @param dark - When true, applies dark styling for dark backgrounds
 * @param secondaryLabel - Label for the secondary button (default: "Buy")
 */
export default function ProductActions({
  dark = false,
  secondaryLabel = "Buy",
}: {
  dark?: boolean;
  secondaryLabel?: string;
}) {
  return (
    <div className="product-actions">
      <a className="button-primary" href="#products">
        Learn more
      </a>
      <a
        className={dark ? "button-secondary dark" : "button-secondary"}
        href="#products"
      >
        {secondaryLabel}
      </a>
    </div>
  );
}
