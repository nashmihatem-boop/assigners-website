export function LegalNotice({ children }: { children: React.ReactNode }) {
  return <div className="mb-10 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">{children}</div>;
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-heading text-lg font-bold text-[var(--color-navy)]">{title}</h2>
      {children}
    </div>
  );
}
