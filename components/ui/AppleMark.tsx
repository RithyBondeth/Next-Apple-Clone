"use client";

/**
 * Apple logo mark component.
 * Renders the Apple SVG logo with optional inverted styling for dark backgrounds.
 *
 * @param inverted - When true, applies inverted styling for dark backgrounds
 */
export default function AppleMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      className={inverted ? "apple-mark apple-mark-inverted" : "apple-mark"}
      src="/apple.svg"
      alt="Apple"
    />
  );
}
