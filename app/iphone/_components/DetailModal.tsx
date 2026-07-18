"use client";

import type { RefObject } from "react";
import type { Detail } from "@/utils/types";

export function DetailModal({
  detail,
  tourOpen,
  onClose,
  dialogRef,
}: {
  detail: Detail | null;
  tourOpen: boolean;
  onClose: () => void;
  dialogRef: RefObject<HTMLDivElement | null>;
}) {
  if (!detail && !tourOpen) return null;

  return (
    <div
      className="iphone-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={tourOpen ? "iphone-modal iphone-tour-modal" : "iphone-modal"}
        role="dialog"
        aria-modal="true"
        aria-label={tourOpen ? "Guided Tour" : detail?.eyebrow}
        tabIndex={-1}
        ref={dialogRef}
      >
        <button
          className="iphone-modal-close"
          type="button"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>
        {tourOpen ? (
          <>
            <img src="/images/iphone/guided-tour.jpg" alt="" />
            <div className="iphone-tour-modal-copy">
              <span className="iphone-tour-play" aria-hidden="true">▶</span>
              <p>A Guided Tour of</p>
              <h2>iPhone 17 Pro, iPhone Air, and iPhone 17</h2>
              <p>
                Discover the newest iPhone lineup, from the most powerful
                Pro camera system to the remarkably thin iPhone Air.
              </p>
            </div>
          </>
        ) : detail ? (
          <>
            <img src={detail.image} alt="" />
            <div className="iphone-modal-copy">
              <p>{detail.eyebrow}</p>
              <h2>{detail.title}</h2>
              <p>{detail.copy}</p>
              <a href="#lineup" onClick={onClose}>
                Learn more <span aria-hidden="true">›</span>
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
