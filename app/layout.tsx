import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3006";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: baseUrl,
    title: "Apple UI Study — Product Homepage",
    description:
      "A responsive Next.js interface study inspired by the layout and interaction design of Apple’s homepage.",
    icons: {
      icon: "/apple.svg",
      shortcut: "/apple.svg",
    },
    openGraph: {
      title: "Apple UI Study",
      description: "A polished, responsive product homepage built with Next.js.",
      type: "website",
      images: [new URL("/og.png", baseUrl).toString()],
    },
    twitter: {
      card: "summary_large_image",
      title: "Apple UI Study",
      description: "A polished, responsive product homepage built with Next.js.",
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
