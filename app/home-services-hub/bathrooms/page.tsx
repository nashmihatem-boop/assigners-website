import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Bathroom Remodeling Quotes",
  description:
    "Get matched with vetted local bathroom remodelers. Enter your zip code for free, no-obligation bathroom remodeling quotes.",
  path: "/home-services-hub/bathrooms",
});

export default function BathroomsQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="bathroom-remodeling"
      eyebrow="Bathrooms"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local bathroom pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local remodelers ready to quote your bathroom project."
    />
  );
}
