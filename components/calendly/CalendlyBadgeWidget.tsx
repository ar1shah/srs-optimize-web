"use client";

import { useEffect } from "react";

interface CalendlyBadgeWidgetProps {
  url: string;
  text?: string;
  color?: string;
  textColor?: string;
}

export default function CalendlyBadgeWidget({
  url,
  text = "Book a Strategy Call",
  color = "#c9a84c",
  textColor = "#0a0a0a",
}: CalendlyBadgeWidgetProps) {
  useEffect(() => {
    if (!url) return;

    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    const initBadge = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({ url, text, color, textColor });
      }
    };

    if (existingScript && window.Calendly) {
      initBadge();
      return;
    }

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initBadge;
    document.head.appendChild(script);
  }, [url, text, color, textColor]);

  if (!url) return null;
  return null;
}
