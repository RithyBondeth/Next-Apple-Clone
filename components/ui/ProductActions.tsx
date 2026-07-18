"use client";

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
