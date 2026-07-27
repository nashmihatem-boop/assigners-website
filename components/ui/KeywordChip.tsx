import { cn } from "@/lib/utils";

export function KeywordChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[var(--color-border)] bg-white px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
