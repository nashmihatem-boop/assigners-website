import { Scale, ShieldCheck, Home, Landmark, type LucideIcon } from "lucide-react";
import type { Industry } from "@/lib/constants";

export const industryIcons: Record<Industry["slug"], LucideIcon> = {
  legal: Scale,
  "financial-services": Landmark,
  insurance: ShieldCheck,
  "home-services": Home,
};
