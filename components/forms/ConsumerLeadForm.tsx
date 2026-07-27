"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle, MapPin, MessageSquare, ShieldCheck, ArrowLeft } from "lucide-react";
import { consumerLeadSchema, type ConsumerLeadInput, projectTimings } from "@/lib/validation";
import { FormField, inputClass } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { formatUSPhone } from "@/lib/utils";

const TOTAL_STEPS = 2;

export function ConsumerLeadForm({
  industry,
  category,
  categories,
}: {
  industry: string;
  category: string;
  categories: string[];
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ConsumerLeadInput>({
    resolver: zodResolver(consumerLeadSchema),
    defaultValues: { industry, category },
  });

  const phoneField = register("phone");
  const selectedCategory = watch("category") || category;

  const goToStep2 = async () => {
    if (await trigger(["category", "zipCode", "projectTiming"])) setStep(2);
  };

  const onSubmit = async (data: ConsumerLeadInput) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/consumer-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong submitting your request. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-[var(--color-border)] bg-white p-8 text-center shadow-lg sm:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white">
          <CheckCircle2 className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="font-heading text-2xl font-bold text-[var(--color-navy)]">You&rsquo;re all set.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
          We&rsquo;ve received your {selectedCategory.toLowerCase()}{" "}request. A local service provider matched to your area may
          reach out shortly to follow up.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-lg">
        <div className="h-1.5 w-full bg-[var(--color-surface)]">
          <div
            className="h-full bg-gradient-brand transition-all duration-300"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-2 text-[var(--color-muted)]">
            <MessageSquare className="h-4 w-4" aria-hidden />
            <span className="text-xs font-medium">Contact for price</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-3 flex flex-col gap-4">
            {/* Honeypot field — hidden from real users, bots tend to fill every field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="cl-website">Website</label>
              <input id="cl-website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>
            <input type="hidden" {...register("industry")} />

            {step === 1 && (
              <>
                <FormField label="Service" htmlFor="category" error={errors.category?.message}>
                  {categories.length > 1 ? (
                    <select id="category" className={inputClass(!!errors.category)} defaultValue={category} {...register("category")}>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <>
                      <div className={inputClass(false) + " flex items-center bg-[var(--color-surface)] text-[var(--color-navy)]"}>
                        Learning Center
                      </div>
                      <input type="hidden" {...register("category")} />
                    </>
                  )}
                </FormField>

                <FormField label="Zip Code" htmlFor="zipCode" required error={errors.zipCode?.message}>
                  <div className="relative">
                    <MapPin
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]"
                      aria-hidden
                    />
                    <input
                      id="zipCode"
                      inputMode="numeric"
                      maxLength={5}
                      placeholder="Zip code"
                      className={inputClass(!!errors.zipCode) + " pl-10"}
                      {...register("zipCode")}
                    />
                  </div>
                </FormField>

                <FormField label="When do you need this done?" htmlFor="projectTiming" required error={errors.projectTiming?.message}>
                  <select id="projectTiming" className={inputClass(!!errors.projectTiming)} defaultValue="" {...register("projectTiming")}>
                    <option value="" disabled>
                      Select a timeframe
                    </option>
                    {projectTimings.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </FormField>

                <Button type="button" size="lg" className="w-full" onClick={goToStep2}>
                  Request a Quote
                </Button>
                <Button type="button" size="lg" variant="secondary" className="w-full" onClick={goToStep2}>
                  Send a Message
                </Button>

                <p className="text-center text-xs text-[var(--color-muted)]">It&rsquo;s free, with no obligation to hire.</p>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">Almost done</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">Where should we send your {selectedCategory.toLowerCase()}{" "}quotes?</p>
                </div>

                <FormField label="Full Name" htmlFor="name" required error={errors.name?.message}>
                  <input id="name" className={inputClass(!!errors.name)} {...register("name")} />
                </FormField>

                <FormField label="Phone (U.S. only)" htmlFor="cl-phone" required error={errors.phone?.message}>
                  <input
                    id="cl-phone"
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

                <FormField label="Email" htmlFor="cl-email" required error={errors.email?.message}>
                  <input id="cl-email" type="email" className={inputClass(!!errors.email)} {...register("email")} />
                </FormField>

                {submitError && (
                  <div role="alert" className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {submitError}
                  </div>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />{" "}Submitting…
                    </>
                  ) : (
                    "Get My Free Quotes"
                  )}
                </Button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-navy)]"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden />{" "}Back
                </button>
              </>
            )}
          </form>

          <div className="mt-5 flex items-start gap-2 border-t border-[var(--color-border)] pt-5">
            <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--color-muted)]" aria-hidden />
            <p className="text-[11px] leading-relaxed text-[var(--color-muted)]">
              By submitting, you agree to be contacted by phone, text, or email about your project, including by automated
              means, even if your number is on a do-not-call list. Consent is not a condition of purchase. See our{" "}
              <a href="/privacy-policy" className="text-[var(--color-blue)] underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/tcpa" className="text-[var(--color-blue)] underline">
                TCPA Compliance
              </a>{" "}
              page for details.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-[var(--color-surface)] p-5">
        <div className="flex items-center gap-2">
          <Logo variant="icon" height={16} href={null} />
          <span className="text-sm font-bold text-[var(--color-navy)]">Assigners Commitment</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
          Your request is only shared with a service provider matched to your project and service area — never sold as part
          of a bulk or resold list.
        </p>
      </div>
    </div>
  );
}
