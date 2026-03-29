"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Audit",
    desc: "Understand the business, bottlenecks, and current workflow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Identify Leverage",
    desc: "Map what should be delegated, systemized, or automated",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="5" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 7.5L10.5 16M16.5 7.5L13.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Build",
    desc: "Recruit VAs, create SOPs, install tools, implement systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94L14.7 6.3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Integrate",
    desc: "Train, refine, and operationalize everything into the business",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: "easeOut" as const },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1 + 0.12,
      type: "spring" as const,
      stiffness: 260,
      damping: 20,
    },
  }),
};

const connectorVariants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { delay: i * 0.1 + 0.3, duration: 0.4, ease: "easeOut" as const },
  }),
};

const reducedCardVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function HowItWorksSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Process"
          title="How it works"
          subtitle="Four phases that take you from overwhelmed operator to leveraged owner."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <motion.div
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <motion.div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent"
                      variants={prefersReduced ? undefined : iconVariants}
                      custom={i}
                      whileHover={
                        prefersReduced
                          ? undefined
                          : { scale: 1.1, rotate: -3, transition: { type: "spring", stiffness: 300, damping: 15 } }
                      }
                    >
                      {step.icon}
                    </motion.div>
                    <span className="text-sm font-semibold text-accent/40">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </motion.div>

              {/* animated connector between steps (lg only) */}
              {i < steps.length - 1 && (
                <motion.div
                  className="absolute -right-3 top-1/2 hidden h-px w-6 origin-left bg-accent/30 lg:block"
                  variants={prefersReduced ? undefined : connectorVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i}
                />
              )}
            </div>
          ))}
        </div>

        {/* scroll cue */}
        <motion.a
          href="#results"
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span>See what clients are saying</span>
          <motion.svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4"
            animate={
              prefersReduced ? undefined : { y: [0, 4, 0] }
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
