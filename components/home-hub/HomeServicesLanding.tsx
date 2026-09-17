import Link from "next/link";
import { AppWindow, Sun, Home as HomeIcon, Layers, CloudRain, ShowerHead, SquareStack } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TrustSection } from "@/components/home-hub/TrustSection";

export const HOME_SERVICES: { name: string; slug: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { name: "Windows", slug: "windows", icon: AppWindow },
  { name: "Solar", slug: "solar", icon: Sun },
  { name: "Roofing", slug: "roofing", icon: HomeIcon },
  { name: "Siding", slug: "siding", icon: Layers },
  { name: "Gutters", slug: "gutters", icon: CloudRain },
  { name: "Bathrooms", slug: "bathrooms", icon: ShowerHead },
  { name: "Flooring", slug: "flooring", icon: SquareStack },
];

export function HomeServicesLanding() {
  return (
    <>
      <section className="bg-white pb-16 pt-14 sm:pb-20 sm:pt-20">
        <Container>
          <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-[var(--color-blue)]">
            Home Services
          </span>
          <h1 className="mt-4 max-w-2xl font-heading text-4xl font-bold leading-[1.08] text-[var(--color-navy)] sm:text-5xl">
            Get matched with <span className="text-gradient-brand">trusted local pros</span> for your home project.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Tell us what you need and your zip code — we&rsquo;ll connect you with vetted local contractors ready to quote your
            project. Free, fast, and no obligation to hire.
          </p>

          <div className="mt-10">
            <h2 className="font-heading text-lg font-bold text-[var(--color-navy)]">What do you need done?</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {HOME_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/home-services-hub/${service.slug}`}
                    className="flex flex-col items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white p-4 text-center transition-colors hover:border-[var(--color-blue)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-surface)] text-[var(--color-blue)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="text-xs font-medium leading-tight text-[var(--color-navy)]">{service.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <TrustSection />
    </>
  );
}
