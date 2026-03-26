"use client";

import { useEffect, useRef } from "react";

interface CalendlyInlineEmbedProps {
  url: string;
  className?: string;
}

export default function CalendlyInlineEmbed({
  url,
  className = "",
}: CalendlyInlineEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    const initWidget = () => {
      if (window.Calendly && el) {
        el.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: el });
      }
    };

    if (existingScript && window.Calendly) {
      initWidget();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initWidget;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [url]);

  const isPlaceholder = url.includes("YOUR_LINK_HERE");

  if (isPlaceholder) {
    return (
      <div
        className={`flex min-h-[600px] items-center justify-center rounded-2xl border border-dashed border-border-light bg-surface ${className}`}
      >
        <div className="text-center">
          <p className="text-lg font-medium text-muted">
            Calendly Booking Widget
          </p>
          <p className="mt-2 text-sm text-muted/60">
            Set <code className="text-accent">NEXT_PUBLIC_CALENDLY_URL</code> in
            your <code>.env.local</code> to activate
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden rounded-2xl ${className}`}
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
