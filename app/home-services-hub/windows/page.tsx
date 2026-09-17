import { ServiceQuoteContent } from "@/components/home-hub/ServiceQuoteContent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Window Replacement Quotes",
  description:
    "Get matched with vetted local window contractors. Enter your zip code for free, no-obligation window replacement quotes.",
  path: "/home-services-hub/windows",
});

export default function WindowsQuotePage() {
  return (
    <ServiceQuoteContent
      categorySlug="window-installation"
      eyebrow="Windows"
      heading={
        <>
          Get matched with <span className="text-gradient-brand">local window pros.</span>
        </>
      }
      subhead="Answer a few quick questions and we'll connect you with vetted local contractors ready to quote your window project."
    />
  );
}
