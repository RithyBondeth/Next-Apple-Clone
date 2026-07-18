"use client";

import { chapterItems } from "@/utils/constants/iphone";

export function ChapterNav() {
  return (
    <nav className="iphone-chapter-nav" aria-label="iPhone">
      <div className="iphone-chapter-track">
        {chapterItems.map(([label, image, badge], index) => (
          <a href={index < 5 ? "#lineup" : "#essentials"} key={label}>
            <span className="iphone-chapter-image">
              <img src={image} alt="" />
            </span>
            <span className="iphone-chapter-label">{label}</span>
            {badge && <span className="iphone-chapter-badge">{badge}</span>}
          </a>
        ))}
      </div>
    </nav>
  );
}
