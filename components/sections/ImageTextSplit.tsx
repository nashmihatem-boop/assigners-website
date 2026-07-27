import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ImageTextSplit({
  index,
  eyebrow,
  title,
  copy,
  visual,
  reverse = false,
  children,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  visual: React.ReactNode;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[&>*:first-child]:order-2")}>
      <div className="flex flex-col gap-4">
        <SectionLabel index={index}>{eyebrow}</SectionLabel>
        <h2 className="max-w-lg font-heading text-3xl font-bold leading-tight text-[var(--color-navy)] sm:text-4xl">{title}</h2>
        <p className="max-w-lg text-base leading-relaxed text-[var(--color-muted)]">{copy}</p>
        {children}
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[var(--color-border)]">{visual}</div>
    </div>
  );
}
