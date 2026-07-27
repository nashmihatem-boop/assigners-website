import { ChevronDown } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-[var(--color-border)] rounded-2xl border border-[var(--color-border)] bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-[var(--color-navy)] sm:text-base">
            {item.question}
            <ChevronDown className="h-4 w-4 shrink-0 text-[var(--color-muted)] transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
