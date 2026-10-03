"use client";

import { useState, useCallback, useId, cloneElement, isValidElement, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICES, PRACTICE } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  currentPatient: "yes" | "no";
  preferredDay: "mon-thu" | "friday" | "either";
  preferredTime: "morning" | "afternoon";
  service: string;
  insurance: string;
  message: string;
  consent: boolean;
}

/**
 * Where requests go. Set NEXT_PUBLIC_FORM_ENDPOINT to any form service that
 * accepts a JSON POST (Formspree, Basin, Getform, a serverless function...).
 * Without it, the form opens the visitor's email app with the request filled
 * in and addressed to the office, so requests still arrive.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

const DAY_LABELS: Record<FormValues["preferredDay"], string> = {
  "mon-thu": "Mon to Thu",
  friday: "Friday",
  either: "Any weekday",
};

const inputBase =
  "w-full rounded-md border-hair bg-white px-4 py-3 text-charcoal placeholder:text-warmgray/60 transition-colors focus:outline-none focus:ring-2 focus:ring-teal/40 min-h-[48px]";

function serviceLabel(value: string) {
  if (value === "general-checkup") return "General checkup";
  if (value === "not-sure") return "Not sure yet";
  return SERVICES.find((s) => s.slug === value)?.name ?? value;
}

function summarize(data: FormValues) {
  return [
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Current patient: ${data.currentPatient === "yes" ? "Yes" : "No"}`,
    `Preferred day: ${DAY_LABELS[data.preferredDay]}`,
    `Preferred time: ${data.preferredTime === "morning" ? "Morning" : "Afternoon"}`,
    `Service: ${serviceLabel(data.service)}`,
    `Insurance: ${data.insurance || "Not provided"}`,
    "",
    data.message ? `Message:\n${data.message}` : "",
  ].join("\n");
}

type SentVia = "service" | "email";

export function AppointmentForm() {
  const [sentVia, setSentVia] = useState<SentVia | null>(null);
  const [sendError, setSendError] = useState(false);
  const focusSuccess = useCallback((node: HTMLHeadingElement | null) => { node?.focus(); }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      currentPatient: "no",
      preferredDay: "either",
      preferredTime: "morning",
      service: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSendError(false);
    const subject = `Appointment request: ${data.fullName}`;

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: subject,
            name: data.fullName,
            phone: data.phone,
            email: data.email,
            currentPatient: data.currentPatient,
            preferredDay: DAY_LABELS[data.preferredDay],
            preferredTime: data.preferredTime,
            service: serviceLabel(data.service),
            insurance: data.insurance,
            message: data.message,
          }),
        });
        if (!res.ok) throw new Error(`Form service responded ${res.status}`);
        setSentVia("service");
      } catch {
        setSendError(true);
      }
      return;
    }

    window.location.href = `mailto:${PRACTICE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summarize(data))}`;
    setSentVia("email");
  };

  const fieldError = (name: keyof FormValues) =>
    errors[name] ? "border-red-400 focus:ring-red-300" : "border-subtle";

  const nextSteps =
    sentVia === "email"
      ? [
          { Icon: Mail, text: "Your email app should have opened with your request filled in. Press send to get it to us." },
          { Icon: Clock, text: "We reply during office hours, usually within the hour." },
          { Icon: Phone, text: "We will call or text to confirm a time that works for you." },
        ]
      : [
          { Icon: Clock, text: "We review requests during office hours, usually within the hour." },
          { Icon: Phone, text: "We will call or text to confirm a time that works for you." },
          { Icon: Mail, text: "New patients get a secure link to fill out forms before the visit." },
        ];

  return (
    <div className="rounded-2xl border-hair border-subtle bg-offwhite p-6 shadow-card sm:p-8">
      <AnimatePresence mode="wait">
        {sentVia ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="py-4"
          >
            <div className="flex flex-col items-center text-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 14 }}
                className="grid h-16 w-16 place-items-center rounded-full bg-teal text-white"
              >
                <Check className="h-8 w-8" strokeWidth={2.5} />
              </motion.span>
              <h3 ref={focusSuccess} tabIndex={-1} className="mt-5 text-2xl font-semibold text-charcoal">
                {sentVia === "email" ? "Almost done" : "Request received"}
              </h3>
              <p className="mt-2 max-w-sm text-warmgray">
                {sentVia === "email"
                  ? "Send the email that just opened and your request will reach our front desk."
                  : "Thanks. Our front desk has your request."}
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-warmgray">
                What happens next
              </p>
              {nextSteps.map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3 rounded-lg border-hair border-subtle bg-white p-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-teal/10 text-teal">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <p className="text-sm leading-relaxed text-warmgray">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-sm text-warmgray">
              {sentVia === "email" ? "Email app didn't open? " : "Need us sooner? "}
              Call{" "}
              <a href={PRACTICE.phoneHref} className="font-medium text-teal-dark hover:underline">
                {PRACTICE.phone}
              </a>
            </p>

            <div className="mt-7 text-center">
              <Button
                variant="outline"
                onClick={() => {
                  reset();
                  setSentVia(null);
                }}
              >
                Send another request
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
          >
            <div>
              <h2 className="text-2xl font-semibold text-charcoal">
                Request an appointment
              </h2>
              <p className="mt-1 text-sm text-warmgray">
                Tell us when works and we will call to confirm a time. For a
                dental emergency, call{" "}
                <a href={PRACTICE.phoneHref} className="font-medium text-teal-dark hover:underline">
                  {PRACTICE.phone}
                </a>
                .
              </p>
            </div>

            {/* Full name */}
            <Field label="Full Name" required error={errors.fullName?.message}>
              <input
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                className={cn(inputBase, fieldError("fullName"))}
                {...register("fullName", { required: "Please enter your name" })}
              />
            </Field>

            {/* Phone + email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Phone Number"
                required
                error={errors.phone?.message}
              >
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="(209) 555-0000"
                  className={cn(inputBase, fieldError("phone"))}
                  {...register("phone", {
                    required: "Please enter a phone number",
                    minLength: { value: 7, message: "That number looks too short" },
                  })}
                />
              </Field>
              <Field label="Email Address" required error={errors.email?.message}>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className={cn(inputBase, fieldError("email"))}
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </Field>
            </div>

            {/* Current patient radios */}
            <fieldset>
              <legend className="mb-1.5 text-sm font-medium text-charcoal">Are you a current patient?</legend>
              <div className="flex gap-3">
                {([
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ] as const).map((opt) => (
                  <label key={opt.value} className="flex-1">
                    <input
                      type="radio"
                      value={opt.value}
                      className="peer sr-only"
                      {...register("currentPatient")}
                    />
                    <span className="block cursor-pointer rounded-md border-hair border-subtle bg-white py-2.5 text-center text-sm font-medium text-warmgray transition-colors peer-checked:border-teal peer-checked:bg-teal-light peer-checked:text-teal-dark peer-focus-visible:ring-2 peer-focus-visible:ring-teal/40">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Preferred day + time */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Preferred Day">
                <select
                  className={cn(inputBase, "border-subtle")}
                  {...register("preferredDay")}
                >
                  <option value="mon-thu">Mon to Thu</option>
                  <option value="friday">Friday</option>
                  <option value="either">Any weekday</option>
                </select>
              </Field>
              <Field label="Preferred Time">
                <select
                  className={cn(inputBase, "border-subtle")}
                  {...register("preferredTime")}
                >
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                </select>
              </Field>
            </div>

            {/* Service */}
            <Field label="Service Needed" required error={errors.service?.message}>
              <select
                className={cn(inputBase, fieldError("service"))}
                defaultValue=""
                {...register("service", { required: "Please choose a service" })}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                <option value="general-checkup">General Checkup</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.name}
                  </option>
                ))}
                <option value="not-sure">Not Sure</option>
              </select>
            </Field>

            {/* Insurance */}
            <Field label="Insurance Provider">
              <input
                type="text"
                placeholder="e.g. Delta Dental (or leave blank)"
                className={cn(inputBase, "border-subtle")}
                {...register("insurance")}
              />
            </Field>

            {/* Message */}
            <Field label="Message / Reason for Visit">
              <textarea
                rows={4}
                placeholder="Tell us briefly what's going on…"
                className={cn(inputBase, "resize-none border-subtle")}
                {...register("message")}
              />
            </Field>

            {/* Consent */}
            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  className="mt-1 h-4 w-4 shrink-0 accent-teal"
                  {...register("consent", {
                    required: "Please check this box so we can contact you",
                  })}
                />
                <span className="text-sm text-warmgray">
                  I agree to be contacted by phone, text, or email about this
                  request. I will not include insurance ID numbers or detailed
                  medical history here.
                </span>
              </label>
              {errors.consent && (
                <p id="consent-error" role="alert" className="mt-1.5 text-sm text-red-700">
                  {errors.consent.message}
                </p>
              )}
            </div>

            {sendError && (
              <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                Your request did not go through. Please try again, or call us at{" "}
                <a href={PRACTICE.phoneHref} className="font-semibold underline">
                  {PRACTICE.phone}
                </a>
                .
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Send Request"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const id = useId();
  const control = isValidElement(children) ? cloneElement(children as ReactElement<Record<string, unknown>>, {
    id,
    "aria-required": required || undefined,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
  }) : children;
  return (
    <div className="block">
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-teal"> *</span>}
      </label>
      {control}
      {error && <span id={`${id}-error`} role="alert" className="mt-1.5 block text-sm text-red-700">{error}</span>}
    </div>
  );
}
