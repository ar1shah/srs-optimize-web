"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 sm:p-8 ${
        hover ? "transition-colors duration-200 hover:border-border-light" : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -3, transition: { duration: 0.2 } } : undefined}
    >
      {glow && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
