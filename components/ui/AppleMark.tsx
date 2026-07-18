"use client";

export default function AppleMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      className={inverted ? "apple-mark apple-mark-inverted" : "apple-mark"}
      src="/apple.svg"
      alt="Apple"
    />
  );
}
