import { cn } from "@/lib/utils";

export function SectionLabel({ index, children, className }: { index: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-blue)]", className)}>
      <span aria-hidden className="h-px w-6 bg-[var(--color-blue)]" />
      {index} {children}
    </div>
  );
}
