import type { Metadata } from "next";
import { Inter, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | VA Systems, Delegation & Automation for Growing Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "SRS Consulting helps business owners identify what to delegate or automate, hire and integrate VAs, and install systems that support scalable growth.",
  metadataBase: new URL(`https://${siteConfig.domain}`),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | VA Systems, Delegation & Automation for Growing Businesses`,
    description:
      "SRS Consulting helps business owners identify what to delegate or automate, hire and integrate VAs, and install systems that support scalable growth.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | VA Systems, Delegation & Automation`,
    description:
      "Helping business owners delegate, automate, and build systems for scalable growth.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${manrope.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
