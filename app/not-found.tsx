import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or may have moved.",
  path: "/404",
  noIndex: true,
});

const helpfulLinks = [
  { label: "Coverage by State", href: "/coverage" },
  { label: "Learning Center", href: "/learning-center" },
  { label: "Tactical Wisdom Guides", href: "/tactical-wisdom" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Full Sitemap", href: "/sitemap" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <span className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">404</span>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            We couldn&rsquo;t find <span className="text-gradient-brand">that page.</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
            The page you&rsquo;re looking for doesn&rsquo;t exist, may have moved, or the link might be outdated.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg">
              Back to Homepage
            </Button>
            <Button href="/talk-to-sales" size="lg" variant="secondary">
              Talk to Sales
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl border-t border-[var(--color-border)] pt-10">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
            Or find your way from here
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {helpfulLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--color-navy)] transition-colors hover:border-[var(--color-blue)]/40 hover:text-[var(--color-blue)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
