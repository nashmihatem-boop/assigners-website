import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats input as a U.S. phone number as the user types, stripping any
 * non-digit characters (including foreign country codes) and capping at
 * 10 digits so international numbers can't be entered.
 */
export function formatUSPhone(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("1") && digits.length > 10) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
