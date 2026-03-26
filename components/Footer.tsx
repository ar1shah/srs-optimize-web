import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="mb-3 flex items-center gap-2">
              <Image
                src="/SRSLogo.png"
                alt="SRS Consulting"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-lg font-bold tracking-tight">
                SRS Consulting
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted">
              Helping business owners delegate, automate, and build systems that
              support scalable growth.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Company
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="transition-colors hover:text-foreground"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#results"
                    className="transition-colors hover:text-foreground"
                  >
                    Results
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apply"
                    className="transition-colors hover:text-foreground"
                  >
                    Apply
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Legal
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>
                  <Link
                    href="/privacy"
                    className="transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="transition-colors hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
                Contact
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="transition-colors hover:text-foreground"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
