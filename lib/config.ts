export const siteConfig = {
  name: "SRS Consulting",
  domain: "srsoptimize.com",
  tagline: "Systems, Talent, and Automation for Growing Businesses",
  email: "hello@srsoptimize.com",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/YOUR_LINK_HERE",
  calendlyBadgeUrl: process.env.NEXT_PUBLIC_CALENDLY_BADGE_URL || "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Results", href: "/#results" },
  { label: "Apply", href: "/apply" },
] as const;
