"use client";

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
