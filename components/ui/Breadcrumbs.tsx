import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const full = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(full)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-[var(--color-muted)]">
          {full.map((item, i) => (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden />}
              {i === full.length - 1 ? (
                <span aria-current="page" className="text-[var(--color-navy)]">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-[var(--color-blue)]">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
