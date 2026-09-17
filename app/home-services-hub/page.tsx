import { HomeServicesLanding } from "@/components/home-hub/HomeServicesLanding";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Get Free Local Home Service Quotes",
  description:
    "Tell us what your home needs and your zip code, and we'll match you with vetted local contractors ready to quote your project. Free, fast, no obligation.",
  path: "/home-services-hub",
});

export default function HomeServicesHubPage() {
  return <HomeServicesLanding />;
}
