import { generateBrandOgImage, ogImageSize } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Assigners — Web Form Leads, Warm Transfers & Inbound Calls";
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return generateBrandOgImage();
}
