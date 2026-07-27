"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  buyerIntakeSchema,
  type BuyerIntakeInput,
  verticals,
  productInterests,
  monthlyVolumes,
  budgetRanges,
} from "@/lib/validation";
import { FormField, inputClass } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { formatUSPhone } from "@/lib/utils";

export function BuyerIntakeForm({
  defaultVertical,
  defaultProductInterest,
  defaultMonthlyVolume,
  defaultMessage,
}: {
  defaultVertical?: string;
  defaultProductInterest?: string;
  defaultMonthlyVolume?: string;
  defaultMessage?: string;
} = {}) {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BuyerIntakeInput>({
    resolver: zodResolver(buyerIntakeSchema),
    defaultValues: {
      vertical: verticals.find((v) => v === defaultVertical),
      productInterest: productInterests.find((p) => p === defaultProductInterest),
      monthlyVolume: monthlyVolumes.find((v) => v === defaultMonthlyVolume),
      message: defaultMessage ?? "",
    },
  });

  const phoneField = register("phone");

  const onSubmit = async (data: BuyerIntakeInput) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/sales-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");

      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong submitting your request. Please try again, or email us directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      {/* Honeypot field — hidden from real users, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input id="company_website" type="text" tabIndex={-1} autoComplete="off" {...register("company_website")} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Company Name" htmlFor="companyName" required error={errors.companyName?.message}>
          <input id="companyName" className={inputClass(!!errors.companyName)} {...register("companyName")} />
        </FormField>

        <FormField label="Your Name" htmlFor="contactName" required error={errors.contactName?.message}>
          <input id="contactName" className={inputClass(!!errors.contactName)} {...register("contactName")} />
        </FormField>

        <FormField label="Work Email" htmlFor="workEmail" required error={errors.workEmail?.message}>
          <input id="workEmail" type="email" className={inputClass(!!errors.workEmail)} {...register("workEmail")} />
        </FormField>

        <FormField label="Phone (U.S. only)" htmlFor="phone" required error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(555) 123-4567"
            maxLength={14}
            className={inputClass(!!errors.phone)}
            {...phoneField}
            onChange={(e) => {
              e.target.value = formatUSPhone(e.target.value);
              phoneField.onChange(e);
            }}
          />
        </FormField>

        <FormField label="Industry / Vertical" htmlFor="vertical" required error={errors.vertical?.message}>
          <select id="vertical" className={inputClass(!!errors.vertical)} defaultValue={defaultVertical ?? ""} {...register("vertical")}>
            <option value="" disabled>
              Select an industry
            </option>
            {verticals.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Solution Interest" htmlFor="productInterest" required error={errors.productInterest?.message}>
          <select
            id="productInterest"
            className={inputClass(!!errors.productInterest)}
            defaultValue={defaultProductInterest ?? ""}
            {...register("productInterest")}
          >
            <option value="" disabled>
              Select a solution
            </option>
            {productInterests.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Monthly Volume Needed" htmlFor="monthlyVolume" required error={errors.monthlyVolume?.message}>
          <select
            id="monthlyVolume"
            className={inputClass(!!errors.monthlyVolume)}
            defaultValue={defaultMonthlyVolume ?? ""}
            {...register("monthlyVolume")}
          >
            <option value="" disabled>
              Select expected volume
            </option>
            {monthlyVolumes.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Budget Range" htmlFor="budgetRange" required error={errors.budgetRange?.message}>
          <select id="budgetRange" className={inputClass(!!errors.budgetRange)} defaultValue="" {...register("budgetRange")}>
            <option value="" disabled>
              Select a budget range
            </option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Anything else we should know?" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={4}
          defaultValue={defaultMessage ?? ""}
          className={inputClass(!!errors.message)}
          {...register("message")}
        />
      </FormField>

      <div className="flex items-start gap-3">
        <input
          id="agreeToTerms"
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-[var(--color-border)] text-[var(--color-blue)] focus:ring-[var(--color-blue)]"
          {...register("agreeToTerms")}
        />
        <label htmlFor="agreeToTerms" className="text-sm text-[var(--color-muted)]">
          I agree to the{" "}
          <a href="/privacy-policy" className="text-[var(--color-blue)] underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="text-[var(--color-blue)] underline">
            Terms and Conditions
          </a>
          .
        </label>
      </div>
      {errors.agreeToTerms && (
        <p role="alert" className="-mt-4 font-mono text-xs text-red-600">
          {errors.agreeToTerms.message}
        </p>
      )}

      {submitError && (
        <div role="alert" className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {submitError}
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />{" "}Submitting…
          </>
        ) : (
          <>
            <CheckCircle2 className="h-4 w-4" />{" "}Talk to Sales
          </>
        )}
      </Button>
    </form>
  );
}
