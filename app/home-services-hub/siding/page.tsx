import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Siding Installation Quotes",
  description:
    "Get matched with vetted local siding contractors. Enter your zip code for free, no-obligation siding installation quotes.",
  path: "/home-services-hub/siding",
});

export default function SidingQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="siding-installation"
      eyebrow="Siding"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local siding pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local contractors ready to quote your siding project."
    />
  );
}
