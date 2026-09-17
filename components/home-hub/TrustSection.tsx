import { ShieldCheck, Users, Gift, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Vetted, Local Pros",
    text: "Every contractor in our network is reviewed for licensing, insurance, and service-area coverage before they're eligible to receive your request.",
  },
  {
    icon: Users,
    title: "One Request, Multiple Quotes",
    text: "Submit your project once and hear back from qualified local pros ready to bid on your job — no cold-calling around town.",
  },
  {
    icon: Gift,
    title: "Free, No-Obligation",
    text: "There's no cost to submit a request, and you're never obligated to hire anyone who reaches out.",
  },
];

export function TrustSection() {
  return (
    <>
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand-soft text-[var(--color-blue)]">
                  <point.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{point.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{point.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-blue)]" aria-hidden />
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Assigners is a lead-matching service, not a contractor. All service providers are independent, and Assigners does not
                warrant or guarantee any work performed. It&rsquo;s the homeowner&rsquo;s responsibility to verify that a hired
                contractor carries the license and insurance required for the work being performed.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
