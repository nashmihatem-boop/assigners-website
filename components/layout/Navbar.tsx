"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setProductsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur transition-all duration-200",
          scrolled ? "border-[var(--color-border)] shadow-[0_2px_16px_-8px_rgba(10,15,44,0.12)]" : "border-transparent"
        )}
      >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-all duration-200 sm:px-8 lg:px-10" style={{ height: scrolled ? 64 : 80 }}>
        <Logo variant="full" height={scrolled ? 42 : 50} priority className="hidden sm:block" />
        <Logo variant="compact" height={40} className="sm:hidden" />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-blue)]"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  onClick={() => setProductsOpen((v) => !v)}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full w-72 rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-[0_16px_40px_-12px_rgba(10,15,44,0.18)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-3 hover:bg-[var(--color-surface)]"
                      >
                        <div className="text-sm font-semibold text-[var(--color-navy)]">{child.label}</div>
                        <div className="mt-0.5 text-xs text-[var(--color-muted)]">{child.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-blue)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/talk-to-sales" size="md">
            Talk to Sales
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-navy)] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-white lg:hidden"
          style={{ top: scrolled ? 64 : 80 }}
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-[var(--color-border)] py-3">
                <Link href={item.children ? item.children[0].href : item.href} className="text-base font-semibold text-[var(--color-navy)]">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 flex flex-col gap-2 pl-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="text-sm text-[var(--color-muted)]">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/talk-to-sales" size="lg" className="mt-6 w-full">
              Talk to Sales
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
