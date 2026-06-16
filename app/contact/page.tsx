import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment in Lodi, CA",
  description:
    "Book your appointment at Brightside Dental in Lodi, CA. Request a visit online, find our hours and location at 1420 S Lower Sacramento Rd, or call (209) 555-0182.",
  alternates: { canonical: "/contact" },
};

const INSURERS = ["Delta Dental", "Cigna", "Aetna", "MetLife", "BlueCross"];

export default function ContactPage() {
  return (
    <>
      {/* Header band */}
      <section className="bg-navy pb-12 pt-32 md:pt-40">
        <div className="container-page">
          <SectionLabel tone="light">Contact</SectionLabel>
          <h1 className="display max-w-2xl text-[2.25rem] leading-[1.1] text-white sm:text-5xl">
            Book your visit. We will confirm within the hour.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Request an appointment below, or reach us directly. New patients are
            always welcome.
          </p>
        </div>
      </section>

      <section className="bg-offwhite section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left column */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="overflow-hidden rounded-2xl border-hair border-subtle shadow-card">
              <div className="relative grid h-64 place-items-center bg-navy">
                {/* faint map-grid texture */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.8) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-teal text-white">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <p className="font-medium text-white">{PRACTICE.address}</p>
                </div>
              </div>
              <div className="bg-white p-4">
                <Button
                  href={PRACTICE.mapsUrl}
                  variant="outline"
                  className="w-full"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border-hair border-subtle bg-white p-6 shadow-card">
              <div className="flex items-center gap-2 text-charcoal">
                <Clock className="h-5 w-5 text-teal" />
                <h2 className="text-lg font-semibold">Office Hours</h2>
              </div>
              <table className="mt-4 w-full text-sm">
                <tbody className="divide-y divide-[rgba(0,0,0,0.08)]">
                  {Object.entries(PRACTICE.hours).map(([days, time]) => (
                    <tr key={days}>
                      <td className="py-2.5 font-medium text-charcoal">
                        {days}
                      </td>
                      <td className="py-2.5 text-right text-warmgray">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={PRACTICE.phoneHref}
                className="group flex items-center gap-3 rounded-2xl border-hair border-subtle bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-light text-teal-dark">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-warmgray">
                    Call us
                  </span>
                  <span className="block font-semibold text-charcoal group-hover:text-teal-dark">
                    {PRACTICE.phone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${PRACTICE.email}`}
                className="group flex items-center gap-3 rounded-2xl border-hair border-subtle bg-white p-5 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-light text-teal-dark">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-warmgray">
                    Email us
                  </span>
                  <span className="block truncate font-semibold text-charcoal group-hover:text-teal-dark">
                    {PRACTICE.email}
                  </span>
                </span>
              </a>
            </div>

            {/* Insurance badge row */}
            <div className="rounded-2xl border-hair border-subtle bg-white p-6 shadow-card">
              <p className="text-sm font-medium text-charcoal">
                We accept most major PPO plans
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {INSURERS.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border-hair border-subtle bg-offwhite px-3 py-1.5 text-xs font-medium text-warmgray"
                  >
                    {name}
                  </span>
                ))}
                <span className="rounded-md bg-teal-light px-3 py-1.5 text-xs font-medium text-teal-dark">
                  + more
                </span>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
