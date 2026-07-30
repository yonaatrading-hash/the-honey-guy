import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
  metadataBase: new URL("https://the-honey-guy.vercel.app"),

  title: {
    default: "The Honey Guy | Authentic Ethiopian Forest Honey",
    template: "%s | The Honey Guy",
  },

  description:
    "Authentic Ethiopian forest honey harvested from traditional forest hives. Pure, raw, and delivered with honesty, quality, and care.",

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

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "The Honey Guy | Authentic Ethiopian Forest Honey",
    description:
      "Discover authentic Ethiopian forest honey harvested with care and respect for nature.",
    url: "https://the-honey-guy.vercel.app",
    siteName: "The Honey Guy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 1200,
        alt: "The Honey Guy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Honey Guy | Authentic Ethiopian Forest Honey",
    description:
      "Pure Ethiopian forest honey delivered straight from nature.",
    images: ["/favicon.png"],
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
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}