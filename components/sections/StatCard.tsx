export function StatCard({ value, label, note }: { value: string; label: string; note?: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-4">
      <div className="font-heading text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">{value}</div>
      <div className="text-sm text-[var(--color-muted)]">{label}</div>
      {note && <div className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-muted)]/70">{note}</div>}
    </div>
  );
}
