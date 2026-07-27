export function StepCard({
  index,
  title,
  description,
  prefix = "Step",
}: {
  index: string;
  title: string;
  description: string;
  prefix?: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]/40">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]">
        {prefix} {index}
      </span>
      <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
    </div>
  );
}
