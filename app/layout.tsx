import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/constants";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Web Form Leads, Warm Transfers & Inbound Calls | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo/assigners-icon-32.png",
    apple: "/logo/assigners-icon-180.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-navy)] focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
