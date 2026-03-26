import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for SRS Consulting.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background pt-32 pb-20 text-foreground">
        <Container narrow>
          <p className="mb-10 rounded-lg border border-border bg-surface/50 px-4 py-3 text-sm text-muted">
            This is a placeholder policy. Please consult a legal professional
            before publishing.
          </p>

          <header className="mb-12 border-b border-border pb-8">
            <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: March 2026</p>
          </header>

          <article className="space-y-12 text-[15px] leading-relaxed text-muted">
            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Acceptance of Terms
              </h2>
              <p>
                Placeholder: state that by accessing or using the website and
                services, the user agrees to these terms and to any incorporated
                policies (for example, privacy or acceptable use). Describe how
                updates are communicated and when revised terms take effect.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Services
              </h2>
              <p>
                Placeholder: summarize what SRS Consulting provides, any
                eligibility requirements, acceptable use rules, and that
                services are offered subject to availability and agreement. Add
                specifics about deliverables, timelines, or client obligations as
                your counsel advises.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Payment Terms
              </h2>
              <p>
                Placeholder: outline fees, invoicing, taxes, late payment,
                refunds, and currency. If you sell subscriptions or retainers,
                include renewal, cancellation, and chargeback handling as
                appropriate for your business model.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Limitation of Liability
              </h2>
              <p>
                Placeholder: your lawyer will draft enforceable caps and
                exclusions (for example, indirect or consequential damages) within
                the limits of applicable law. This stub is not legal advice and
                should not be published without review.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Disclaimer
              </h2>
              <p>
                Placeholder: disclaim warranties to the extent permitted (for
                example, services provided &quot;as is&quot;), and clarify that
                general information on the site is not professional or legal
                advice unless you explicitly offer regulated services under
                defined terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Governing Law
              </h2>
              <p>
                Placeholder: specify the jurisdiction whose laws govern the
                agreement and, if applicable, the venue or forum for disputes
                (including arbitration clauses only if intended and properly
                drafted).
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a
                  href="mailto:hello@srsoptimize.com"
                  className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-hover hover:decoration-accent"
                >
                  hello@srsoptimize.com
                </a>
                .
              </p>
            </section>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
