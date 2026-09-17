import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Roof Replacement Quotes",
  description:
    "Get matched with vetted local roofing contractors. Enter your zip code for free, no-obligation roof replacement quotes.",
  path: "/home-services-hub/roofing",
});

export default function RoofingQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="roof-installation-or-replacement"
      eyebrow="Roofing"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local roofing pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local contractors ready to quote your roofing project."
    />
  );
}
