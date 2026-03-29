"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedHeroBackground from "@/components/home/AnimatedHeroBackground";
import NumbersInfographic from "@/components/home/NumbersInfographic";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

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

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <AnimatedHeroBackground />
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
      <ProblemSection />

      {/* Solution */}
      <SolutionSection />

      {/* Numbers Infographic */}
      <NumbersInfographic />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Results — testimonials */}
      <ClientTestimonials />

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
