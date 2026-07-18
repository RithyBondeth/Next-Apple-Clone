import type { Metadata } from "next";
import { IPhonePage } from "./_components";

export const metadata: Metadata = {
  title: "iPhone — Apple UI Study",
  description:
    "Explore the latest iPhone lineup, features, accessories, and ways to buy.",
};

export default function IPhoneRoute() {
  return <IPhonePage />;
}
