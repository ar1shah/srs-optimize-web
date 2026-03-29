import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import CalendlyInlineEmbed from "@/components/calendly/CalendlyInlineEmbed";
import FAQAccordion from "@/components/apply/FAQAccordion";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Apply to Work With SRS Consulting",
  description:
    "Book a strategy call with SRS Consulting to identify where your business should delegate, automate, and systemize next.",
};

const faqItems = [
  {
    question: "What happens on the call?",
    answer:
      "We'll diagnose your biggest bottlenecks, identify what should be delegated or automated, and determine whether SRS is the right fit to help you build those systems.",
  },
  {
    question: "Is this consulting or done-for-you?",
    answer:
      "It's a blend. We consult on strategy and also help implement — from hiring VAs to building SOPs to setting up automations.",
  },
  {
    question: "Do you help hire VAs?",
    answer:
      "Yes. We source, vet, and help you hire VAs through platforms like Upwork, then help onboard and integrate them into your workflow.",
  },
  {
    question: "Do you help with onboarding and systems?",
    answer:
      "Absolutely. We build SOP-driven onboarding, plug VAs into your existing tools, and set up the processes so delegation sticks.",
  },
  {
    question: "Who is this best for?",
    answer:
      "Business owners who already have traction — agencies, consultants, coaches, service businesses — and want to scale without adding unnecessary overhead.",
  },
  {
    question: "What does pricing usually look like?",
    answer:
      "Engagements typically start around $3,000 depending on scope. Pricing can be based on implementation, value created, or VA placement structure.",
  },
  {
    question: "Is this only for online businesses?",
    answer:
      "Primarily, yes — online businesses, agencies, consultants, and service-based companies. But if you have backend operations that can be improved with delegation and automation, we can likely help.",
  },
];

const forYou = [
  "Your business already has traction",
  "You are doing too much manually",
  "You want leverage, not more chaos",
  "You are open to delegating, building systems, and using automation",
];

const notForYou = [
  "Brand new businesses with no traction",
  "People looking for cheap random VA labor",
  "People unwilling to implement",
];

export default function ApplyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header minimal />

      {/* Hero */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <Container narrow>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Find out how to delegate more, automate smarter, and scale your
              business without adding unnecessary overhead
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              On this strategy call, we&apos;ll look at where your business is
              bottlenecked, what should be handled by VAs, what can be automated,
              and what systems need to be built next.
            </p>
          </div>
        </Container>
      </section>

      {/* Video */}
      <section className="pb-12 sm:pb-16">
        <Container narrow>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-border-light bg-surface-light">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6 text-accent"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-muted">
                Founder Video Coming Soon
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm leading-relaxed text-muted">
            Watch this short video to understand how SRS works and whether this
            is the right fit for you.
          </p>
        </Container>
      </section>

      {/* Booking */}
      <section id="book" className="pb-20 sm:pb-28">
        <Container narrow>
          <SectionHeading
            title="Book Your Strategy Call"
            subtitle="Select a time below to schedule your free strategy session."
            className="mb-12"
          />
          <CalendlyInlineEmbed url={siteConfig.calendlyUrl} />
        </Container>
      </section>

      {/* Qualification */}
      <section className="border-t border-border py-20 sm:py-28">
        <Container narrow>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-5 text-lg font-semibold">
                This is for you if:
              </h3>
              <ul className="flex flex-col gap-3">
                {forYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-accent">✓</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-semibold">Not for:</h3>
              <ul className="flex flex-col gap-3">
                {notForYou.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 text-muted/50">✕</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Results — testimonials */}
      <ClientTestimonials />

      {/* Repeated CTA */}
      <section className="py-20 sm:py-28">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to scale?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Apply to work with SRS and book your strategy call.
            </p>
            <div className="mt-8">
              <Button href="#book" size="lg">
                Book Your Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-20 sm:py-28">
        <Container narrow>
          <SectionHeading
            title="Frequently Asked Questions"
            className="mb-12"
          />
          <FAQAccordion items={faqItems} />
        </Container>
      </section>

      {/* Disclaimer */}
      <section className="py-10">
        <Container narrow>
          <p className="text-center text-xs leading-relaxed text-muted/60">
            Results vary. SRS Consulting makes no guarantees of specific
            outcomes. Strategy calls are free and carry no obligation.
          </p>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
