import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Honey Guy | Authentic Ethiopian Forest Honey",
  description:
    "Discover authentic Ethiopian forest honey harvested using traditional methods. Pure, raw, and delivered with honesty, quality, and care.",

  keywords: [
    "Ethiopian Honey",
    "Forest Honey",
    "Raw Honey",
    "Natural Honey",
    "Pure Honey",
    "The Honey Guy",
    "Ethiopia",
    "Organic Honey",
    "Beeswax Candles",
  ],

  authors: [{ name: "The Honey Guy" }],

  creator: "The Honey Guy",

  openGraph: {
    title: "The Honey Guy",
    description:
      "Authentic Ethiopian forest honey harvested with care and delivered exactly as nature intended.",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Honey Guy",
    description:
      "Authentic Ethiopian forest honey harvested with care and delivered exactly as nature intended.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFDF8] text-[#2B2117]">
        {children}
      </body>
    </html>
  );
}