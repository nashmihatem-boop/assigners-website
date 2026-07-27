import { trustStats } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { StatCard } from "@/components/sections/StatCard";

export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {trustStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] text-[var(--color-muted)]">
          Figures reflect blended performance across active Assigners campaigns and are not a guarantee for any individual campaign —
          results vary by vertical, geography, and buyer follow-up.
        </p>
      </Container>
    </section>
  );
}
