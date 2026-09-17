import { ProductTemplate } from "@/components/sections/ProductTemplate";
import { getProduct } from "@/lib/products";
import { buildMetadata } from "@/lib/metadata";

const product = getProduct("inbound-calls");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/inbound-calls",
});

export default function InboundCallsPage() {
  return <ProductTemplate product={product} />;
}
