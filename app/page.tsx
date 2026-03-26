"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const trustPoints = [
  "Real operator experience with VAs",
  "Systems + implementation focus",
  "Built for growing businesses",
  "Results-backed approach",
  "Trusted by founders & operators",
];

const problems = [
  "Too many repetitive tasks still sit on the founder",
  "No clear delegation system",
  "VAs hired badly or not integrated well",
  "No SOPs, no clear backend process",
  "AI tools exist but are not wired into real workflows",
  "Growth creates more chaos, not more leverage",
];

const services = [
  {
    title: "VA Strategy",
    bullets: [
      "Identify what should be delegated",
      "Define roles and responsibilities",
      "Structure the org around leverage",
    ],
  },
  {
    title: "VA Hiring & Placement",
    bullets: [
      "Source candidates through Upwork and similar channels",
      "Help vet and hire the right people",
      "Reduce costly bad hires",
    ],
  },
  {
    title: "Onboarding & Integration",
    bullets: [
      "Build SOP-driven onboarding",
      "Plug VAs into existing workflows",
      "Make delegation actually stick",
    ],
  },
  {
    title: "AI + Automation",
    bullets: [
      "Identify repetitive workflows",
      "Implement useful AI tools and automations",
      "Reduce manual work and speed up operations",
    ],
  },
];

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "Understand the business, bottlenecks, and current workflow",
  },
  {
    num: "02",
    title: "Identify Leverage",
    desc: "Map what should be delegated, systemized, or automated",
  },
  {
    num: "03",
    title: "Build",
    desc: "Recruit VAs, create SOPs, install tools, implement systems",
  },
  {
    num: "04",
    title: "Integrate",
    desc: "Train, refine, and operationalize everything into the business",
  },
];

const proofCards = [
  "Freed up 20+ hours/week by offloading admin and follow-up",
  "Installed a VA-powered system for lead handling and customer support",
  "Built backend processes that removed repetitive bottlenecks",
  "Improved response time and operational output across the board",
];

const audiences = [
  "Agency owners",
  "Consultants & coaches",
  "Online service businesses",
  "Founders & operators with growing backend complexity",
  "Businesses with traction but limited by capacity",
];

const differentiators = [
  "Identifies the right tasks first",
  "Helps define the role clearly",
  "Recruits the right person",
  "Installs systems and onboarding",
  "Adds automation where useful",
  "Focuses on leverage and ROI, not busywork",
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
        <Container narrow className="relative z-10 py-20 text-center sm:py-28">
          <motion.p
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Systems, Talent, and Automation for Growing Businesses
          </motion.p>
          <motion.h1
            className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Scale your business without scaling overhead
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            SRS Consulting helps business owners identify what should be
            delegated or automated, hire and integrate VAs, and install backend
            systems that create leverage.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <Button href="/apply" size="lg">
              Book a Strategy Call
            </Button>
            <Button href="/#how-it-works" variant="secondary" size="lg">
              See How It Works
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-surface">
        <Container className="py-6">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {trustPoints.map((point) => (
              <span
                key={point}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {point}
              </span>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Problem"
            title="Most owners stay stuck because they are still the bottleneck"
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                className="rounded-xl border border-border bg-surface-light p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <p className="text-sm leading-relaxed text-muted">{problem}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="The Solution"
            title="We help install leverage across your business"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title}>
                <h3 className="mb-4 text-lg font-bold text-accent">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="The Process" title="How it works" />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span className="text-4xl font-bold text-accent/30">
                  {step.num}
                </span>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-4 top-5 hidden h-px w-8 bg-border-light lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Results */}
      <section id="results" className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Results"
            title="Real outcomes from real operators"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {proofCards.map((quote) => (
              <Card key={quote} className="border-l-2 border-l-accent/40">
                <p className="text-lg font-medium leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
              </Card>
            ))}
          </div>
          <motion.p
            className="mt-8 text-center text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Screenshots and detailed case studies coming soon.
          </motion.p>
        </Container>
      </section>

      {/* Who This Is For */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Ideal Fit" title="Who this is for" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <motion.div
                key={a}
                className="rounded-xl border border-border bg-surface p-5 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <p className="text-sm font-medium">{a}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-8 text-center text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Best fit for businesses already generating revenue and looking to
            scale efficiently.
          </motion.p>
        </Container>
      </section>

      {/* Differentiator */}
      <section className="bg-surface py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why SRS"
            title="This is not generic VA outsourcing"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <ul className="space-y-4">
              {differentiators.map((d, i) => (
                <motion.li
                  key={d}
                  className="flex items-start gap-3 text-muted"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm leading-relaxed">{d}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="flex items-center rounded-2xl border-l-4 border-accent bg-surface-light p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-xl font-medium leading-relaxed">
                &ldquo;We don&rsquo;t just place VAs. We build the system around
                them so delegation actually works.&rdquo;
              </blockquote>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-surface-light py-20 sm:py-28">
        <Container narrow className="text-center">
          <SectionHeading
            title="Find out what your business should delegate, automate, or systemize next"
            subtitle="Book a strategy call to diagnose bottlenecks, identify leverage points, and see whether SRS is the right fit."
          />
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Button href="/apply" size="lg">
              Apply Now
            </Button>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
