import type { Metadata } from "next";

import { IphoneEducationShop } from "./_components/IphoneEducationShop";

export const metadata: Metadata = {
  title: "Shop iPhone for Education",
  description:
    "Explore the latest iPhone models, shopping guides, ways to save, accessories, setup, and support.",
  openGraph: {
    title: "Shop iPhone for Education",
    description:
      "Explore the latest iPhone lineup and everything that makes iPhone a great choice for education.",
    images: ["/images/buy-iphone/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop iPhone for Education",
    description:
      "Explore the latest iPhone lineup and everything that makes iPhone a great choice for education.",
    images: ["/images/buy-iphone/og.png"],
  },
};

export default function BuyIphoneEducationPage() {
  return <IphoneEducationShop />;
}
