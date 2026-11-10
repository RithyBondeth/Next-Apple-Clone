import type { Metadata } from "next";

import { IPhonePage } from "./_components";

/** Page metadata for the iPhone section */
export const metadata: Metadata = {
  title: "iPhone — Apple UI Study",
  description:
    "Explore the latest iPhone lineup, features, accessories, and ways to buy.",
};

/** iPhone page route */
export default function IPhoneRoute() {
  return <IPhonePage />;
}
