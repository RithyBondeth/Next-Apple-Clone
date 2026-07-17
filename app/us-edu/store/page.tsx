import type { Metadata } from "next";
import { EducationStore } from "./EducationStore";

export const metadata: Metadata = {
  title: "College Student Offer 2026 — Education Store",
  description:
    "Shop education pricing on Mac, iPad, Apple Watch, accessories, and more.",
};

export default function EducationStorePage() {
  return <EducationStore />;
}
