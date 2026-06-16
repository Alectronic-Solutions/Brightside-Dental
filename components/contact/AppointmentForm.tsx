"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SERVICES, PRACTICE } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface FormValues {
  fullName: string;
  dob: string;
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

const inputBase =
  "w-full rounded-md border-hair bg-white px-4 py-2.5 text-charcoal placeholder:text-warmgray/60 transition-colors focus:outline-none focus:ring-2 focus:ring-teal/40";

function makeConfirmationCode() {
  return "BD-" + Math.random().toString(36).slice(2, 6).toUpperCase();
}

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
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
    await new Promise((r) => setTimeout(r, 900));
    setConfirmationCode(makeConfirmationCode());
    setSubmittedEmail(data.email);
    setSubmitted(true);
  };

  const fieldError = (name: keyof FormValues) =>
    errors[name] ? "border-red-400 focus:ring-red-300" : "border-subtle";

  return (
    <div className="rounded-2xl border-hair border-subtle bg-offwhite p-6 shadow-card sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="py-4"
          >
            {/* Check + headline */}
            <div className="flex flex-col items-center text-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 14 }}
                className="grid h-16 w-16 place-items-center rounded-full bg-teal text-white"
              >
                <Check className="h-8 w-8" strokeWidth={2.5} />
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="mt-5 text-2xl font-semibold text-charcoal">
                  Appointment request received
                </h3>
                <p className="mt-2 text-warmgray">
                  A confirmation has been sent to{" "}
                  <span className="font-medium text-charcoal">{submittedEmail}</span>
                </p>
              </motion.div>
            </div>

            {/* Confirmation card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 rounded-xl border-hair border-teal/30 bg-teal-light px-6 py-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-teal-dark/60">
                  Confirmation
                </span>
                <span className="font-mono text-lg font-semibold text-teal-dark">
                  {confirmationCode}
                </span>
              </div>
              <p className="mt-2 text-sm text-teal-dark/70">
                Save this number. Reference it if you need to reschedule or have questions.
              </p>
            </motion.div>

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 space-y-3"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-warmgray">
                What happens next
              </p>
              {[
                { Icon: Clock, text: "We review your request and check availability — usually within the hour." },
                { Icon: Phone, text: "Our team calls or texts you to confirm your appointment time." },
                { Icon: Mail, text: "You receive a calendar invite and new patient forms by email." },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border-hair border-subtle bg-white p-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-teal/10 text-teal">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <p className="text-sm leading-relaxed text-warmgray">{text}</p>
                </div>
              ))}
            </motion.div>

            {/* Contact fallback */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-6 text-center text-sm text-warmgray"
            >
              Need to reach us now?{" "}
              <a href={PRACTICE.phoneHref} className="font-medium text-teal-dark hover:underline">
                {PRACTICE.phone}
              </a>
            </motion.p>

            <div className="mt-7 text-center">
              <Button
                variant="outline"
                onClick={() => {
                  reset();
                  setSubmitted(false);
                }}
              >
                Submit another request
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
                Fill this out and we&apos;ll be in touch within the hour.
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

            {/* DOB + phone */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Date of Birth">
                <input
                  type="date"
                  className={cn(inputBase, "border-subtle")}
                  {...register("dob")}
                />
              </Field>
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
            </div>

            {/* Email */}
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

            {/* Current patient radios */}
            <Field label="Are you a current patient?">
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
            </Field>

            {/* Preferred day + time */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Preferred Day">
                <select
                  className={cn(inputBase, "border-subtle")}
                  {...register("preferredDay")}
                >
                  <option value="mon-thu">Mon–Thu</option>
                  <option value="friday">Friday</option>
                  <option value="either">Either</option>
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
                className={cn(inputBase, "resize-y border-subtle")}
                {...register("message")}
              />
            </Field>

            {/* Consent */}
            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 accent-teal"
                  {...register("consent", {
                    required:
                      "Please acknowledge the notice to continue",
                  })}
                />
                <span className="text-sm text-warmgray">
                  I understand this form is for appointment requests only and is
                  not a secure medical communication channel.
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1.5 text-sm text-red-500">
                  {errors.consent.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending…" : "Request Appointment"}
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
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
        {required && <span className="text-teal"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-sm text-red-500">{error}</span>}
    </label>
  );
}
