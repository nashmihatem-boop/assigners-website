import { cn } from "@/lib/utils";

export function FormField({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-[var(--color-navy)]">
        {label} {required && <span className="text-[var(--color-blue)]">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="font-mono text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

const fieldBase =
  "w-full rounded-lg border border-[var(--color-border)] bg-white px-3.5 py-2.5 text-sm text-[var(--color-navy)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/20";

export const inputClass = (hasError?: boolean) =>
  cn(fieldBase, hasError && "border-red-400 focus:border-red-500 focus:ring-red-500/20");
