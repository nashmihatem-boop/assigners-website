import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Gutter Installation Quotes",
  description:
    "Get matched with vetted local gutter contractors. Enter your zip code for free, no-obligation gutter installation quotes.",
  path: "/home-services-hub/gutters",
});

export default function GuttersQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="gutter-installation"
      eyebrow="Gutters"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local gutter pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local contractors ready to quote your gutter project."
    />
  );
}
