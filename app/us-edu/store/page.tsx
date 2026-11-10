import type { Metadata } from "next";

import { EducationStore } from "./_components";

/** Page metadata for the education store */
export const metadata: Metadata = {
  title: "College Student Offer 2026 — Education Store",
  description:
    "Shop education pricing on Mac, iPad, Apple Watch, accessories, and more.",
};

/** Education store page route */
export default function EducationStorePage() {
  return <EducationStore />;
}
