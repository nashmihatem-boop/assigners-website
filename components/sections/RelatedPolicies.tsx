import Link from "next/link";
import { legalPages } from "@/lib/constants";

export function RelatedPolicies({ currentHref }: { currentHref: string }) {
  const others = legalPages.filter((p) => p.href !== currentHref);

  return (
    <div className="mt-14 border-t border-[var(--color-border)] pt-8">
      <h2 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">Related Policies</h2>
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
        {others.map((p) => (
          <Link key={p.href} href={p.href} className="text-sm text-[var(--color-blue)] underline underline-offset-2 hover:text-[var(--color-blue-dark)]">
            {p.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
