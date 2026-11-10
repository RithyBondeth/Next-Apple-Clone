"use client";

/**
 * Reusable section heading with optional action link.
 * Used across iPhone page sections for consistent heading styling.
 *
 * @param title - Section heading text
 * @param link - Optional action link text (e.g., "Compare all models")
 */
export function SectionHeading({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <div className="iphone-section-heading iphone-reveal">
      <h2>{title}</h2>
      {link && <a href="#lineup">{link} <span aria-hidden="true">›</span></a>}
    </div>
  );
}
