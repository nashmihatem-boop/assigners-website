import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-navy)] text-white/70">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo variant="full" theme="dark" height={52} href="/" />
            <p className="max-w-xs text-sm leading-relaxed text-white/50">{siteConfig.description}</p>
          </div>

          <FooterColumn title="Solutions" links={footerNav.products} />
          <FooterColumn title="Company" links={footerNav.company} />

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/40">Get In Touch</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
              <li>
                Sales:{" "}
                <a className="hover:text-white" href={`mailto:${process.env.SALES_EMAIL || "sales@assigners.com"}`}>
                  {process.env.SALES_EMAIL || "sales@assigners.com"}
                </a>
              </li>
              <li>
                General:{" "}
                <a className="hover:text-white" href={`mailto:${siteConfig.infoEmail}`}>
                  {siteConfig.infoEmail}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a className="hover:text-white" href={`tel:${siteConfig.businessPhoneHref}`}>
                  {siteConfig.businessPhone}
                </a>
              </li>
              <li>
                {siteConfig.businessAddressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
              <li>{siteConfig.officeHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            © {year} {siteConfig.legalEntity}. Assigners is a brand of {siteConfig.legalEntity}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/40">
            {footerNav.legal.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
            <a href="/sitemap" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-[11px] leading-relaxed text-white/30">
          Availability, pricing, targeting, qualification criteria, delivery terms, and campaign requirements vary by program. Calls,
          transfers, and leads are not guaranteed to result in conversions.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/40">{title}</h3>
      <ul className="flex flex-col gap-2.5 text-sm text-white/60">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
