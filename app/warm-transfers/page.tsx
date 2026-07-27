import { ProductTemplate } from "@/components/sections/ProductTemplate";
import { getProduct } from "@/lib/products";
import { buildMetadata } from "@/lib/metadata";

const product = getProduct("warm-transfers");

export const metadata = buildMetadata({
  title: product.metaTitle,
  description: product.metaDescription,
  path: "/warm-transfers",
});

export default function WarmTransfersPage() {
  return <ProductTemplate product={product} />;
}
