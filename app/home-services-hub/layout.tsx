import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function HomeServicesHubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[var(--color-border)] bg-white">
        <Container className="flex h-20 items-center justify-between">
          <Logo variant="full" height={40} href="/home-services-hub" />
          <Link
            href="https://www.assigners.com"
            className="font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-muted)] hover:text-[var(--color-blue)]"
          >
            For Businesses &amp; Contractors →
          </Link>
        </Container>
      </header>
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
