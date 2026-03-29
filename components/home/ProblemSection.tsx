"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface Problem {
  headline: string;
  body: string;
  icon: ReactNode;
}

const problems: Problem[] = [
  {
    headline: "Founder is the bottleneck",
    body: "Too many repetitive tasks still sit on you — eating hours that should go toward growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    headline: "No delegation system",
    body: "Work piles up because there is no clear framework for what to hand off or to whom.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 8l-3 3m0-3l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    headline: "Bad VA hires",
    body: "VAs are hired without a process and never properly integrated into day-to-day operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    headline: "Missing SOPs & processes",
    body: "No playbooks, no documented workflows — everything lives in the founder's head.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
        <path d="M12 11v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    headline: "AI tools, zero integration",
    body: "You have subscriptions to AI products but none of them are wired into real workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v6m6 12h4a2 2 0 002-2v-4m-6 6H5a2 2 0 01-2-2v-4m12 6v-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M3 9h6m6 6h6M3 9v6m18-6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    headline: "Growth = more chaos",
    body: "Scaling up amplifies the mess instead of creating leverage — more people, more fires.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08 + 0.1,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

const reducedCardVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.04, duration: 0.3 },
  }),
};

export default function ProblemSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Most owners stay stuck because they are still the bottleneck"
          subtitle="These six patterns keep founders trapped in the day-to-day instead of building for scale."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.headline}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-light p-6 transition-colors duration-200 hover:border-border-light"
              variants={prefersReduced ? reducedCardVariants : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              whileHover={
                prefersReduced ? undefined : { y: -4, transition: { duration: 0.2 } }
              }
            >
              {/* hover gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-500/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* icon tile */}
                <motion.div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent"
                  variants={prefersReduced ? undefined : iconVariants}
                  custom={i}
                  whileHover={
                    prefersReduced
                      ? undefined
                      : { scale: 1.1, rotate: -3, transition: { type: "spring", stiffness: 300, damping: 15 } }
                  }
                >
                  {problem.icon}
                </motion.div>

                <h3 className="mb-1.5 text-base font-bold tracking-tight">
                  {problem.headline}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {problem.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* scroll cue */}
        <motion.a
          href="#the-solution"
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span>There is a better way</span>
          <motion.svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4"
            animate={
              prefersReduced
                ? undefined
                : { y: [0, 4, 0] }
            }
            transition={
              prefersReduced
                ? undefined
                : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.a>
      </Container>
    </section>
  );
}
