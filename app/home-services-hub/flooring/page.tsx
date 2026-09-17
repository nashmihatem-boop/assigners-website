import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Flooring Installation Quotes",
  description:
    "Get matched with vetted local flooring contractors. Enter your zip code for free, no-obligation flooring installation quotes.",
  path: "/home-services-hub/flooring",
});

export default function FlooringQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="flooring-installation"
      eyebrow="Flooring"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local flooring pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local contractors ready to quote your flooring project."
    />
  );
}
