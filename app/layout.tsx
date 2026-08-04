import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

// Self-hosted at build time: no render-blocking request to fonts.googleapis.com.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Pinch-zoom left enabled: capping it fails WCAG 1.4.4 and hurts low-vision users.
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  title: "G2M Church | Gospel Generation Ministry",
  description:
    "Building a generation rooted in truth. Join us in West Jakarta for worship, community, and spiritual growth.",
  keywords: [
    "church",
    "gospel",
    "ministry",
    "West Jakarta",
    "community",
    "worship",
    "spiritual growth",
  ],
  authors: [{ name: "G2M Church" }],
  openGraph: {
    title: "G2M Church | Gospel Generation Ministry",
    description: "Building a generation rooted in truth. Join us in West Jakarta.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`}>
      <head>
        {/* Warm up the YouTube thumbnail CDN before the sermons section scrolls in. */}
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
      </head>
      <body className="min-h-screen font-sans antialiased overflow-x-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
