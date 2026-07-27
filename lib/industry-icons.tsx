import { Scale, ShieldCheck, Home, Landmark, Building2, GraduationCap, type LucideIcon } from "lucide-react";
import type { Industry } from "@/lib/constants";

export const industryIcons: Record<Industry["slug"], LucideIcon> = {
  legal: Scale,
  "financial-services": Landmark,
  insurance: ShieldCheck,
  "home-services": Home,
  "real-estate": Building2,
  education: GraduationCap,
};
