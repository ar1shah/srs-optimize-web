import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SRS Consulting.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted">Last updated: March 2026</p>
          </header>

          <article className="space-y-12 text-[15px] leading-relaxed text-muted">
            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p>
                This section describes categories of information that a
                typical business website or service might collect—for example,
                contact details you submit through forms, account or billing
                information if applicable, and technical data such as IP
                address, device type, and general usage logs. Replace this text
                with an accurate description of what you actually collect.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <p>
                Placeholder: explain the purposes for processing—for instance,
                providing services, responding to inquiries, improving the site,
                security, analytics, and legal compliance. Your final policy
                should tie each use to a lawful basis where required (for
                example, consent, contract, or legitimate interests).
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Cookies
              </h2>
              <p>
                Placeholder: describe whether you use cookies, similar
                technologies, and any third-party tools (analytics, advertising,
                embedded content). Include how users can manage preferences and
                where to find more detail, or link to a separate cookie notice
                if you maintain one.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Third-Party Services
              </h2>
              <p>
                Placeholder: list or categorize vendors that may receive data on
                your behalf (hosting, email, CRM, payment processors, analytics,
                etc.) and note that their privacy practices are governed by
                their own policies.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Data Security
              </h2>
              <p>
                Placeholder: summarize reasonable safeguards you employ. Avoid
                overpromising; no method of transmission or storage is completely
                secure. Describe retention periods or criteria where relevant.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-heading text-xl font-semibold text-foreground">
                Contact Us
              </h2>
              <p>
                For questions about this privacy policy or your personal
                information, contact us at{" "}
                <a
                  href="mailto:hello@srsoptimize.com"
                  className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:text-accent-hover hover:decoration-accent"
                >
                  hello@srsoptimize.com
                </a>
                . Replace or supplement this with your official business address
                and any data protection contact required in your jurisdiction.
              </p>
            </section>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
