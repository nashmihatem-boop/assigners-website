import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Solar Installation Quotes",
  description:
    "Get matched with vetted local solar installers. Enter your zip code for free, no-obligation solar panel installation quotes.",
  path: "/home-services-hub/solar",
});

export default function SolarQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="solar-panel-installation"
      eyebrow="Solar"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local solar pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local installers ready to quote your solar project."
    />
  );
}
