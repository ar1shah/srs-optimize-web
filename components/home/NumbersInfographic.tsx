"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedNumber from "./AnimatedNumber";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const ACCENT = "#c9a84c";

const metrics = [
  {
    label: "Hours / Week Freed",
    value: 20,
    suffix: "+",
    trend: "+34%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "SOPs & Playbooks Built",
    value: 50,
    suffix: "+",
    trend: "+28%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
        <path d="M9 12h6M9 16h6M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "VAs Placed & Integrated",
    value: 120,
    suffix: "+",
    trend: "+41%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Automation Workflows",
    value: 200,
    suffix: "+",
    trend: "+52%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Client Satisfaction",
    value: 97,
    suffix: "%",
    trend: "+12%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
        <path d="M14 9V5a3 3 0 00-6 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 9H6a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2v-9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Response Time Improvement",
    value: 65,
    suffix: "%",
    trend: "+22%",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const chartPath = "M 0 80 C 30 75, 60 60, 90 55 C 120 50, 150 30, 180 35 C 210 40, 240 20, 270 15 C 300 10, 325 22, 348 12";
const chartLabels = ["Q1", "Q2", "Q3", "Q4"];

const tiles = [
  {
    title: "50+ SOPs & Playbooks",
    desc: "Operational IP built in-house, stress-tested across multiple client businesses.",
    visual: (
      <div className="mb-4 flex items-end gap-1">
        {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
          <motion.div
            key={i}
            className="w-3 rounded-sm bg-accent/30"
            initial={{ height: 0 }}
            whileInView={{ height: h * 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </div>
    ),
  },
  {
    title: "120+ VAs Placed Successfully",
    desc: "Sourced, vetted, and integrated into client workflows with SOP-driven onboarding.",
    visual: (
      <div className="mb-4 flex -space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface bg-gradient-to-br from-accent/40 to-accent/10 text-xs font-bold text-accent"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
          >
            VA
          </motion.div>
        ))}
        <motion.div
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-surface bg-accent/20 text-xs font-bold text-accent"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
        >
          +
        </motion.div>
      </div>
    ),
  },
  {
    title: "200+ Automations Installed",
    desc: "AI tools and workflow automations wired into real operations — not just demos.",
    visual: (
      <div className="mb-4 grid grid-cols-4 gap-1.5">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="h-5 rounded-sm bg-accent/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.6, 0.3, 0.8, 0.4] }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </div>
    ),
  },
];

function AnimatedChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      className="relative flex h-full min-h-[220px] flex-col rounded-2xl border border-border bg-surface p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs text-muted">Operational Efficiency</span>
        <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-accent">
          Growth
        </span>
      </div>
      <p className="text-2xl font-bold">
        +<AnimatedNumber value={65} suffix="%" />
      </p>

      <svg
        ref={ref}
        viewBox="0 0 360 100"
        className="mt-auto w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.25" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
        </defs>

        {[20, 40, 60, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="360"
            y2={y}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />
        ))}

        <motion.path
          d={`${chartPath} L 348 100 L 0 100 Z`}
          fill="url(#chartFill)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <motion.path
          d={chartPath}
          fill="none"
          stroke={ACCENT}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        />

        <motion.circle
          cx="348"
          cy="12"
          r="4"
          fill={ACCENT}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.3 }}
        />
        <motion.circle
          cx="348"
          cy="12"
          r="7"
          fill="none"
          stroke={ACCENT}
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.4, scale: 1 } : {}}
          transition={{ delay: 1.9, duration: 0.4 }}
        />

        {chartLabels.map((label, i) => (
          <text
            key={label}
            x={i * 90 + 45}
            y="98"
            textAnchor="middle"
            className="fill-muted text-[9px]"
          >
            {label}
          </text>
        ))}
      </svg>
    </motion.div>
  );
}

function MetricCard({
  metric,
  index,
}: {
  metric: (typeof metrics)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-border bg-surface p-4 transition-colors duration-200 hover:border-border-light"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-2 flex items-center gap-2">
          {metric.icon}
          <span className="text-xs text-muted">{metric.label}</span>
          <span className="ml-auto inline-flex items-center gap-0.5 text-[11px] font-medium text-emerald-400">
            {metric.trend}
            <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor">
              <path d="M6 2l4 5H2l4-5z" />
            </svg>
          </span>
        </div>
        <p className="text-2xl font-bold tracking-tight">
          <AnimatedNumber
            value={metric.value}
            suffix={metric.suffix}
            duration={1800 + index * 200}
          />
        </p>
      </div>
    </motion.div>
  );
}

function InfoTile({
  tile,
  index,
}: {
  tile: (typeof tiles)[number];
  index: number;
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-border-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.45 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        {tile.visual}
        <h3 className="text-base font-bold">{tile.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{tile.desc}</p>
      </div>
    </motion.div>
  );
}

export default function NumbersInfographic() {
  return (
    <section id="the-numbers" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The Numbers"
          title="Real results from real operators"
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1fr]">
          {/* Left: stacked metric cards in a 2-col grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.map((m, i) => (
              <MetricCard key={m.label} metric={m} index={i} />
            ))}
          </div>

          {/* Right: animated chart */}
          <AnimatedChart />
        </div>

        {/* Bottom: info tile grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tiles.map((tile, i) => (
            <InfoTile key={tile.title} tile={tile} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
