import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Thank You",
  description: "Thanks for reaching out to Assigners — our team will follow up shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-white">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h1 className="max-w-lg font-heading text-4xl font-bold leading-tight text-[var(--color-navy)] sm:text-5xl">
          Thanks — we&rsquo;ve got your request.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-[var(--color-muted)]">
          A member of our sales team will review your campaign requirements and follow up on availability, typically within one
          business day.
        </p>
        <Button href="/" size="lg" variant="secondary">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
