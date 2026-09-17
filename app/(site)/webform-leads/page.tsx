import { ProductTemplate } from "@/components/sections/ProductTemplate";
import { getProduct } from "@/lib/products";
import { buildMetadata } from "@/lib/metadata";

const product = getProduct("webform-leads");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/webform-leads",
});

export default function WebformLeadsPage() {
  return <ProductTemplate product={product} />;
}
