import { z } from "zod";

// U.S./NANP numbers only: optional +1 country code, area code and exchange code
// must start 2–9 (excludes N11 service codes and non-NANP inputs).
export const US_PHONE_REGEX = /^(?:\+?1[\s.-]?)?\(?([2-9]\d{2})\)?[\s.-]?([2-9]\d{2})[\s.-]?(\d{4})$/;

export const verticals = ["Legal", "Financial Services", "Insurance", "Home Services", "Other"] as const;

export const productInterests = [
  "Warm Transfers",
  "Inbound Calls",
  "Web Form Leads",
  "Revenue Share (Sell My Leads)",
  "Multiple Solutions",
  "Not Sure Yet",
] as const;

export const monthlyVolumes = [
  "Under 100",
  "100–500",
  "500–1,000",
  "1,000–5,000",
  "5,000+",
] as const;

export const budgetRanges = [
  "Under $5,000/mo",
  "$5,000–$15,000/mo",
  "$15,000–$50,000/mo",
  "$50,000+/mo",
  "Not sure yet",
] as const;

export const buyerIntakeSchema = z.object({
  companyName: z.string().trim().min(2, "Company name is required").max(120),
  contactName: z.string().trim().min(2, "Your name is required").max(120),
  workEmail: z.string().trim().email("Enter a valid work email"),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(US_PHONE_REGEX, "Enter a valid 10-digit U.S. phone number"),
  vertical: z.enum(verticals, { message: "Select an industry" }),
  productInterest: z.enum(productInterests, { message: "Select a solution" }),
  monthlyVolume: z.enum(monthlyVolumes, { message: "Select expected monthly volume" }),
  budgetRange: z.enum(budgetRanges, { message: "Select a budget range" }),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  agreeToTerms: z.literal(true, {
    message: "You must agree to the Privacy Policy and Terms to continue",
  }),
  company_website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type BuyerIntakeInput = z.infer<typeof buyerIntakeSchema>;

export const projectTimings = ["As soon as possible", "Within a month", "Just researching"] as const;

export const consumerLeadSchema = z.object({
  zipCode: z.string().trim().regex(/^\d{5}$/, "Enter a valid 5-digit zip code"),
  projectTiming: z.enum(projectTimings, { message: "Select a timeframe" }),
  name: z.string().trim().min(2, "Your name is required").max(120),
  phone: z
    .string()
    .trim()
    .max(20)
    .regex(US_PHONE_REGEX, "Enter a valid 10-digit U.S. phone number"),
  email: z.string().trim().email("Enter a valid email"),
  industry: z.string(),
  category: z.string(),
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ConsumerLeadInput = z.infer<typeof consumerLeadSchema>;
