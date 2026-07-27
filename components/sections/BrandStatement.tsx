import { Container } from "@/components/ui/Container";

export function BrandStatement({ title, subhead }: { title: React.ReactNode; subhead: string }) {
  return (
    <section className="relative flex min-h-[22rem] w-full flex-col items-center justify-center overflow-hidden bg-[var(--color-navy)] py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gradient-brand-soft blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-brand-soft blur-3xl"
      />
      <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#38BDF8]">— Assigners</span>
        <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-lg text-base leading-relaxed text-white/60">{subhead}</p>
      </Container>
    </section>
  );
}
