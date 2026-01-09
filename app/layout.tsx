import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
