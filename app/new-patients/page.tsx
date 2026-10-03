import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PatientIcon3D, type PatientIconName } from "@/components/ui/PatientIcon3D";
import { IMAGES } from "@/lib/images";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Patients | Welcome to Brightside Dental",
  description:
    "New to Brightside Dental in Sacramento, CA? Learn what to expect on your first visit, our accepted insurance plans, CareCredit financing, and how to access the patient portal.",
  alternates: { canonical: "/new-patients" },
};

const TIMELINE: { icon: PatientIconName; title: string; detail: string }[] = [
  {
    icon: "calendar",
    title: "Book online or call",
    detail: "Pick a time that works for you. We confirm every request within one hour during office hours.",
  },
  {
    icon: "clipboard",
    title: "Fill out forms",
    detail: "We'll email you a secure link to complete your paperwork before you arrive. No clipboard in the waiting room.",
  },
  {
    icon: "exam",
    title: "Your first appointment",
    detail: "A full exam, digital X-rays, and a cleaning. Then we go over anything we found and what it would cost.",
  },
  {
    icon: "reminder",
    title: "Ongoing care",
    detail: "After that, you get appointment reminders by text and can reschedule or see your records in the patient portal.",
  },
];

const PLANS = [
  { name: "Delta Dental", note: "Most PPO plans" },
  { name: "Cigna", note: "PPO plans" },
  { name: "Aetna", note: "Dental PPO" },
  { name: "MetLife", note: "PPO plans" },
  { name: "BlueCross BlueShield", note: "Most dental PPO plans" },
  { name: "United Concordia", note: "PPO and TRICARE Dental" },
];

const COVERAGE_NOTES = [
  {
    title: "We file your claims",
    detail: "Claims go straight to your insurer from our office, so you are not waiting on a reimbursement check.",
  },
  {
    title: "Benefits checked first",
    detail: "Before any treatment we confirm your annual maximum and how much of it you have left.",
  },
  {
    title: "Cleanings often covered",
    detail: "Many PPO plans pay for two cleanings a year in full, along with exams and X-rays.",
  },
];

const BRING_LIST = [
  "A photo ID",
  "Your dental insurance card",
  "A list of the medications you take",
  "Your previous dentist's name, so we can request recent X-rays",
];

const PORTAL_FEATURES: { icon: PatientIconName; label: string }[] = [
  { icon: "folder", label: "Records and X-rays" },
  { icon: "calendar", label: "Book or reschedule" },
  { icon: "receipt", label: "Pay a bill online" },
  { icon: "chat", label: "Message the office" },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        label="New Patients"
        title="New patient information"
        subtitle="How to book, what to fill out ahead of time, and what happens at your first appointment. We go over costs with you before any treatment is scheduled."
        bgImage={IMAGES.office.reception.src}
        variant="centered"
      >
        <Button href="/contact" size="lg">
          Book Your First Visit
        </Button>
        <Button href={PRACTICE.phoneHref} size="lg" variant="ghost">
          Call {PRACTICE.phone}
        </Button>
      </PageHero>

      {/* First visit timeline */}
      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Your First Visit</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              Becoming a patient, step by step
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-warmgray">
              Plan on about an hour for the first appointment. Everything
              before it can be done from your phone.
            </p>
          </AnimatedSection>

          <div className="relative mt-12 sm:mt-16">
            {/* dashed connector running behind the icons on desktop */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[60px] hidden border-t-hair border-dashed border-teal/40 lg:block"
            />
            <ol className="mx-auto grid max-w-md gap-10 sm:max-w-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4 lg:gap-6">
            {TIMELINE.map((step, i) => (
              <AnimatedSection
                as="li"
                key={step.title}
                delay={i * 0.08}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto w-fit bg-offwhite px-4">
                  <PatientIcon3D
                    name={step.icon}
                    className="h-20 w-20 drop-shadow-[0_10px_14px_rgba(14,31,61,0.10)] sm:h-[104px] sm:w-[104px] lg:h-[120px] lg:w-[120px]"
                  />
                </div>
                <p className="caption mt-3 text-teal-dark sm:mt-4">Step {i + 1}</p>
                <h3 className="mt-1.5 text-lg font-semibold text-charcoal sm:text-xl">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-warmgray">
                  {step.detail}
                </p>
              </AnimatedSection>
            ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="scroll-mt-24 bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <PatientIcon3D name="shield" className="mx-auto mb-4 h-20 w-20 sm:h-24 sm:w-24" />
            <SectionLabel className="justify-center">Insurance</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              Do you accept my insurance?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-warmgray">
              We are in-network with most major PPO plans. If yours is not
              listed, call us and we will check your benefits before you book.
            </p>
          </AnimatedSection>

          <AnimatedSection
            as="ul"
            delay={0.08}
            className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3"
          >
            {PLANS.map((plan) => (
              <li
                key={plan.name}
                className="flex flex-col items-center justify-center rounded-xl border-hair border-subtle bg-offwhite px-3 py-5 text-center transition-colors duration-200 hover:border-teal/40 hover:bg-teal-light/60 sm:px-5 sm:py-7"
              >
                <span className="text-[0.95rem] font-semibold leading-snug text-charcoal sm:text-lg">
                  {plan.name}
                </span>
                <span className="mt-1 text-xs text-warmgray sm:text-sm">
                  {plan.note}
                </span>
              </li>
            ))}
          </AnimatedSection>

          <AnimatedSection
            delay={0.12}
            className="mx-auto mt-10 grid max-w-4xl gap-8 sm:mt-14 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[rgba(0,0,0,0.08)]"
          >
            {COVERAGE_NOTES.map((note) => (
              <div key={note.title} className="text-center sm:px-6">
                <h3 className="font-semibold text-charcoal">{note.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-warmgray">
                  {note.detail}
                </p>
              </div>
            ))}
          </AnimatedSection>

          <AnimatedSection
            delay={0.16}
            className="mt-10 flex flex-col items-center gap-4 sm:mt-12"
          >
            <Button href="/contact" variant="outline">
              Verify My Benefits
            </Button>
            <Link
              href="/faq"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
            >
              More questions? See all FAQs
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Financing */}
      <section id="financing" className="scroll-mt-24 bg-teal-light section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Financing</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              Ways to pay over time
            </h2>
            <p className="mt-4 text-lg text-charcoal/70">
              If you would rather not pay for treatment all at once, there are
              two options.
            </p>
          </AnimatedSection>

          <div className="mx-auto mt-20 grid max-w-5xl gap-16 md:mt-24 md:grid-cols-2 md:gap-6">
            <AnimatedSection className="flex flex-col items-center rounded-2xl border-hair border-subtle bg-white px-6 pb-9 text-center shadow-card sm:px-10">
              <PatientIcon3D name="card" className="-mt-14 h-28 w-28 drop-shadow-[0_10px_14px_rgba(14,31,61,0.10)]" />
              <h3 className="mt-3 text-xl font-semibold text-charcoal sm:text-2xl">
                CareCredit
              </h3>
              <p className="mx-auto mt-3 max-w-sm leading-relaxed text-warmgray">
                A healthcare credit line you can use for any treatment we
                provide. Apply in minutes. Most decisions are instant.
              </p>
              <div className="mt-auto w-full pt-7">
                <div className="border-t-hair border-subtle pt-6">
                  <p className="text-3xl font-semibold tracking-tighter2 text-teal-dark">
                    0% interest
                  </p>
                  <p className="mt-1 text-sm text-warmgray">
                    for 12 months on qualifying treatment plans
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={0.08}
              className="flex flex-col items-center rounded-2xl bg-navy px-6 pb-9 text-center shadow-card sm:px-10"
            >
              <PatientIcon3D name="coins" className="-mt-14 h-28 w-28 drop-shadow-[0_10px_14px_rgba(0,0,0,0.25)]" />
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                In-House Payment Plans
              </h3>
              <p className="mx-auto mt-3 max-w-sm leading-relaxed text-white/70">
                We run these plans ourselves, so there is no outside lender and
                no hard credit check. The cost of your treatment is split into
                monthly payments.
              </p>
              <div className="mt-auto w-full pt-7">
                <div className="border-t-hair border-subtle-dark pt-6">
                  <p className="text-3xl font-semibold tracking-tighter2 text-teal">
                    $99 down
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    then monthly payments over the length of your treatment
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Before you arrive */}
      <section className="bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Before You Arrive</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              Paperwork and what to bring
            </h2>
          </AnimatedSection>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
            <AnimatedSection className="flex flex-col items-center rounded-2xl border-hair border-subtle bg-offwhite px-6 py-9 text-center sm:px-10 sm:py-11">
              <PatientIcon3D name="clipboard" className="h-20 w-20 sm:h-24 sm:w-24" />
              <h3 className="mt-4 text-xl font-semibold text-charcoal sm:text-2xl">
                New patient forms
              </h3>
              <p className="mx-auto mt-3 max-w-sm leading-relaxed text-warmgray">
                Once your visit is booked, we email you a secure link to fill
                out your health history and insurance details at home. It takes
                about ten minutes.
              </p>
              <p className="mx-auto mt-5 inline-flex max-w-sm items-center gap-2.5 text-left text-sm text-charcoal/80">
                <PatientIcon3D name="lock" className="h-8 w-8 shrink-0" />
                <span>Sent through our secure patient system, not regular email.</span>
              </p>
              <div className="mt-auto pt-7">
                <Button href="/contact">Book Your First Visit</Button>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={0.08}
              className="flex flex-col items-center rounded-2xl border-hair border-subtle bg-offwhite px-6 py-9 text-center sm:px-10 sm:py-11"
            >
              <PatientIcon3D name="folder" className="h-20 w-20 sm:h-24 sm:w-24" />
              <h3 className="mt-4 text-xl font-semibold text-charcoal sm:text-2xl">
                What to bring
              </h3>
              <ul className="mt-5 w-full max-w-sm divide-y divide-[rgba(0,0,0,0.08)] border-y-hair border-subtle text-left">
                {BRING_LIST.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 py-3 text-[0.95rem] text-charcoal/85">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Patient portal */}
      <section className="bg-offwhite pb-16 sm:pb-24 md:pb-28">
        <div className="container-page">
          <AnimatedSection className="relative overflow-hidden rounded-2xl bg-navy">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 85% 50%, rgba(45,158,143,0.22), rgba(14,31,61,0) 70%)",
              }}
            />
            <div className="relative grid gap-10 px-5 py-10 sm:p-10 md:grid-cols-[1fr_1.1fr] md:items-center md:p-12 lg:p-14">
              <div className="text-center md:text-left">
                <SectionLabel tone="light" className="justify-center md:justify-start">Patient Portal</SectionLabel>
                <h2 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                  Manage your care from anywhere
                </h2>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/70 md:mx-0">
                  Check your records, request an appointment, pay a bill, or
                  send the office a message from your phone or computer.
                </p>
                <Button href={PRACTICE.patientPortalUrl || "/contact"} className="mt-7">
                  {PRACTICE.patientPortalUrl ? "Log In to the Portal" : "Ask About Portal Access"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              <ul className="grid grid-cols-2 gap-3 sm:gap-4">
                {PORTAL_FEATURES.map((f) => (
                  <li
                    key={f.label}
                    className="flex flex-col items-center rounded-xl border-hair border-subtle-dark bg-white/[0.04] px-3 pb-5 pt-4 text-center sm:px-4 sm:pb-6"
                  >
                    <PatientIcon3D name={f.icon} className="h-16 w-16 sm:h-20 sm:w-20" />
                    <span className="mt-2 text-sm leading-snug text-white/85 sm:text-[0.95rem]">
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        heading="Ready to become a patient?"
        subtext="Request a time online and we will call to confirm, usually within the hour during office hours."
        variant="minimal"
      />
    </>
  );
}
