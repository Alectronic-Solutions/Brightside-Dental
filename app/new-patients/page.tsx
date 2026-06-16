import type { Metadata } from "next";
import {
  CalendarCheck,
  FileText,
  Stethoscope,
  RefreshCw,
  CreditCard,
  Wallet,
  Download,
  Lock,
  FolderOpen,
  CalendarClock,
  Receipt,
  MessageSquare,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "New Patients — Welcome to Brightside Dental",
  description:
    "New to Brightside Dental in Lodi, CA? Learn what to expect on your first visit, our accepted insurance plans, CareCredit financing, and how to access the patient portal.",
  alternates: { canonical: "/new-patients" },
};

const TIMELINE = [
  {
    Icon: CalendarCheck,
    title: "Book online or call",
    detail: "Pick a time that works for you. We confirm every request within one hour during office hours.",
  },
  {
    Icon: FileText,
    title: "Fill out forms",
    detail: "We'll email you a secure link to complete your paperwork before you arrive — no clipboard in the waiting room.",
  },
  {
    Icon: Stethoscope,
    title: "Your first appointment",
    detail: "A full exam, digital X-rays, a cleaning, and a clear treatment plan — all explained in plain language.",
  },
  {
    Icon: RefreshCw,
    title: "Ongoing care",
    detail: "Automatic reminders, easy rescheduling, and patient-portal access keep your care effortless from here on.",
  },
];

const INSURANCE = [
  {
    q: "Delta Dental",
    a: "We're in-network with most Delta Dental PPO plans. Preventive visits (cleanings, exams, X-rays) are typically covered at 100%.",
  },
  {
    q: "Cigna",
    a: "Cigna PPO plans are accepted. We'll verify your annual maximum and remaining benefits before treatment so there are no surprises.",
  },
  {
    q: "Aetna",
    a: "Aetna dental PPO is welcome here. Many plans cover two cleanings per year fully, plus a share of restorative work.",
  },
  {
    q: "MetLife",
    a: "We accept MetLife PPO plans and will file your claims directly so you don't have to chase reimbursement.",
  },
  {
    q: "BlueCross BlueShield",
    a: "Most BCBS dental PPO plans are accepted. Coverage varies by employer plan. We will confirm your specifics ahead of your visit.",
  },
  {
    q: "United Concordia",
    a: "United Concordia PPO plans, including TRICARE Dental, are accepted. We're proud to care for military families in San Joaquin County.",
  },
];

const PORTAL_FEATURES = [
  { Icon: FolderOpen, label: "View your records & X-rays" },
  { Icon: CalendarClock, label: "Request & reschedule appointments" },
  { Icon: Receipt, label: "Pay bills securely online" },
  { Icon: MessageSquare, label: "Message the office anytime" },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        label="New Patients"
        title="Welcome to Brightside. Let's make this easy."
        subtitle="Your first visit sets the tone for everything that follows. We have stripped out the friction: the long forms, the unclear costs, the rushed exams. Your first appointment will feel calm, clear, and unhurried."
        bgImage={{ src: IMAGES.office.reception.src, alt: IMAGES.office.reception.alt }}
      />

      {/* First visit timeline */}
      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>Your First Visit</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              From booking to your brightest smile, in four steps
            </h2>
          </AnimatedSection>

          <div className="relative mt-14">
            {/* connecting line on desktop */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden h-px bg-[rgba(0,0,0,0.08)] lg:block"
            />
            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {TIMELINE.map((step, i) => (
                <AnimatedSection
                  key={step.title}
                  delay={i * 0.08}
                  className="relative"
                >
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-xl border-hair border-subtle bg-white text-teal shadow-card">
                    <step.Icon className="h-6 w-6" strokeWidth={1.6} />
                    <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-teal text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-warmgray">
                    {step.detail}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance accordion */}
      <section className="bg-white section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <AnimatedSection>
            <SectionLabel>Insurance</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Do you accept my insurance?
            </h2>
            <p className="mt-4 leading-relaxed text-warmgray">
              We are in-network with most major PPO plans and file claims for
              you directly. Do not see yours below? Call us. We work with most
              PPO plans and will verify your benefits before you book.
            </p>
            <Button href="/contact" variant="outline" className="mt-6">
              Verify My Benefits
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion items={INSURANCE} defaultOpen={null} />
            <p className="mt-6 text-sm text-warmgray">
              Do not see yours? Call us. We work with most PPO plans.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Financing */}
      <section className="bg-teal-light section-y">
        <div className="container-page">
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>Financing</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Care you need, on a plan that fits
            </h2>
            <p className="mt-4 text-lg text-charcoal/70">
              Cost should never be the reason you put off treatment. We offer two
              flexible ways to spread it out.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <AnimatedSection className="rounded-2xl border-hair border-subtle bg-white p-8 shadow-card">
              <CreditCard className="h-8 w-8 text-teal" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold text-charcoal">
                CareCredit
              </h3>
              <p className="mt-3 leading-relaxed text-warmgray">
                A healthcare credit line you can use for any treatment we
                provide. Apply in minutes. Most decisions are instant.
              </p>
              <p className="mt-5 text-2xl font-semibold text-teal-dark">
                0% interest for 12 months
              </p>
              <p className="text-sm text-warmgray">
                on qualifying treatment plans
              </p>
            </AnimatedSection>

            <AnimatedSection
              delay={0.08}
              className="rounded-2xl border-hair border-subtle bg-navy p-8 shadow-card"
            >
              <Wallet className="h-8 w-8 text-teal" strokeWidth={1.5} />
              <h3 className="mt-5 text-xl font-semibold text-white">
                In-House Payment Plans
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">
                No third party, no hard credit check. We split your treatment
                into manageable monthly payments, handled right here.
              </p>
              <p className="mt-5 text-2xl font-semibold text-teal-light">
                $99 down, low monthly payments
              </p>
              <p className="text-sm text-white/60">
                tailored to your treatment plan
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* New patient forms */}
      <section className="bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="overflow-hidden rounded-2xl border-hair border-subtle bg-offwhite">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
              <div>
                <SectionLabel>Before You Arrive</SectionLabel>
                <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
                  New patient forms
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-warmgray">
                  Save time in the waiting room. Download your forms ahead of
                  time, or let us email you a secure link to complete everything
                  online before your visit.
                </p>
                <p className="mt-4 flex items-start gap-2 text-sm text-warmgray">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  Your information is protected under HIPAA. We never share your
                  records without your written consent, and all online forms are
                  encrypted end to end.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/contact" size="lg">
                  <Download className="h-4 w-4" />
                  Download Forms (PDF)
                </Button>
                <Button href="/contact" size="lg" variant="outline">
                  Email Me a Secure Link
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Patient portal */}
      <section className="bg-offwhite pb-20 md:pb-28">
        <div className="container-page">
          <AnimatedSection className="overflow-hidden rounded-2xl bg-navy">
            <div className="grid gap-10 p-8 md:grid-cols-2 md:items-center md:p-12">
              <div>
                <SectionLabel tone="light">Patient Portal</SectionLabel>
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Manage your care from anywhere
                </h2>
                <p className="mt-4 leading-relaxed text-white/70">
                  Everything you need, in one secure place. No phone tag, no
                  paperwork. Access it from your phone, day or night.
                </p>
                <Button href="/contact" className="mt-7">
                  Access Patient Portal
                  <span aria-hidden>→</span>
                </Button>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {PORTAL_FEATURES.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-start gap-3 rounded-xl border-hair border-subtle-dark bg-white/5 p-4"
                  >
                    <f.Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-sm text-white/85">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        heading="Ready to become a patient?"
        subtext="Booking takes two minutes, and we'll confirm within the hour. We can't wait to meet you."
      />
    </>
  );
}
