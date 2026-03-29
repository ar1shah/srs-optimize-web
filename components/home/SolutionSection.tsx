"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

interface Service {
  title: string;
  bullets: string[];
  icon: ReactNode;
}

const services: Service[] = [
  {
    title: "VA Strategy",
    bullets: [
      "Identify what should be delegated",
      "Define roles and responsibilities",
      "Structure the org around leverage",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v3m0 14v3M4.93 4.93l2.12 2.12m9.9 9.9l2.12 2.12M2 12h3m14 0h3M4.93 19.07l2.12-2.12m9.9-9.9l2.12-2.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "VA Hiring & Placement",
    bullets: [
      "Source candidates through Upwork and similar channels",
      "Help vet and hire the right people",
      "Reduce costly bad hires",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Onboarding & Integration",
    bullets: [
      "Build SOP-driven onboarding",
      "Plug VAs into existing workflows",
      "Make delegation actually stick",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "AI + Automation",
    bullets: [
      "Identify repetitive workflows",
      "Implement useful AI tools and automations",
      "Reduce manual work and speed up operations",
    ],
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

const reducedCardVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05, duration: 0.3 },
  }),
};

export default function SolutionSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="the-solution" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Solution"
          title="We help install leverage across your business"
          subtitle="Strategy, talent, systems, and automation — integrated into your operations so you can step back and scale."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-light p-6 sm:p-8 transition-colors duration-200 hover:border-border-light"
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
                <motion.div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent"
                  variants={prefersReduced ? undefined : iconVariants}
                  custom={i}
                  whileHover={
                    prefersReduced
                      ? undefined
                      : { scale: 1.1, rotate: -3, transition: { type: "spring", stiffness: 300, damping: 15 } }
                  }
                >
                  {service.icon}
                </motion.div>

                <h3 className="mb-4 text-lg font-bold text-accent">
                  {service.title}
                </h3>

                <ul className="space-y-2.5">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent/60"
                      >
                        <path
                          d="M4 8l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* scroll cue */}
        <motion.a
          href="#the-numbers"
          className="mx-auto mt-16 flex flex-col items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span>See the results</span>
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
