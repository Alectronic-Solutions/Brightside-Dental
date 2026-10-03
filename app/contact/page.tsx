import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "lucide-react";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ContactIcon3D } from "@/components/ui/ContactIcon3D";
import { InsuranceBadges } from "@/components/ui/InsuranceBadges";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Book an Appointment in Sacramento, CA",
  description:
    "Book your appointment at Brightside Dental in Sacramento, CA. Request a visit online, find our hours and location, or call (209) 366-4287.",
  alternates: { canonical: "/contact" },
};

const SERVICE_AREAS = [
  "Sacramento",
  "Elk Grove",
  "Roseville",
  "Folsom",
  "West Sacramento",
  "Rancho Cordova",
  "Citrus Heights",
];

export default function ContactPage() {
  return (
    <>
      {/* Header band */}
      <section className="relative overflow-hidden bg-navy pb-12 pt-28 md:pt-40">
        <Image
          src={IMAGES.office.reception.src}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
        <div aria-hidden className="absolute inset-0 bg-navy/75" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 65% at 50% 50%, rgba(45,158,143,0.18), transparent 70%)",
          }}
        />
        <div className="container-page relative text-center">
          <SectionLabel tone="light" className="justify-center">Contact</SectionLabel>
          <h1 className="mx-auto mt-3 max-w-2xl text-balance text-display-sm font-bold text-white">
            Book an appointment
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-white/70">
            Send a request below and we will call to confirm a time, usually
            within the hour during office hours. In pain right now? Call us
            directly.
          </p>
        </div>
      </section>

      <section className="bg-offwhite section-y">
        {/* On phones the left column dissolves (display: contents) so the
            order classes put call/email first, then the form, then the rest. */}
        <div className="container-page grid gap-6 lg:grid-cols-2 lg:gap-14">
          <div className="contents lg:flex lg:min-w-0 lg:flex-col lg:gap-6">
            {/* Contact info */}
            <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-none lg:grid-cols-1 xl:grid-cols-2">
              <ContactCard
                href={PRACTICE.phoneHref}
                icon="phone"
                label="Call us"
                value={PRACTICE.phone}
              />
              <ContactCard
                href={`mailto:${PRACTICE.email}`}
                icon="mail"
                label="Email us"
                value={PRACTICE.email}
              />
            </div>

            {/* Hours */}
            <div className="order-3 rounded-2xl border-hair border-subtle bg-white p-6 shadow-card lg:order-none">
              <div className="flex flex-col items-center gap-1 text-center text-charcoal">
                <ContactIcon3D name="clock" className="h-14 w-14" />
                <h2 className="text-lg font-semibold">Office Hours</h2>
              </div>
              <table className="mx-auto mt-4 w-full max-w-sm text-sm">
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

            {/* Map: flexes on desktop so this column ends level with the form */}
            <div className="order-4 flex flex-col overflow-hidden rounded-2xl border-hair border-subtle shadow-card lg:order-none lg:flex-1">
              <div className="relative h-64 lg:h-auto lg:min-h-40 lg:flex-1">
                <iframe
                  title={`Map of ${PRACTICE.address}`}
                  src={PRACTICE.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-4">
                <Button
                  href={PRACTICE.mapsUrl}
                  variant="outline"
                  className="w-full"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  View Sacramento in Google Maps
                </Button>
              </div>
            </div>

            {/* Insurance */}
            <div className="order-5 rounded-2xl border-hair border-subtle bg-white p-6 text-center shadow-card lg:order-none">
              <h2 className="text-lg font-semibold text-charcoal">
                Most major PPO plans accepted
              </h2>
              <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-warmgray">
                We verify your benefits before your first visit, at no charge.
              </p>
              <InsuranceBadges className="mt-5" />
            </div>
          </div>

          {/* Form */}
          <div className="order-2 min-w-0 lg:order-none lg:[&>div]:h-full">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-page">
          <div className="rounded-2xl border-hair border-subtle bg-offwhite p-8 md:p-10">
            <div className="flex flex-col items-center gap-4 text-center">
              <ContactIcon3D name="pin" className="h-20 w-20" />
              <div>
                <SectionLabel className="justify-center">Local to Sacramento</SectionLabel>
                <h2 className="mt-2 text-xl font-semibold text-charcoal sm:text-2xl">
                  Serving the following areas
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-warmgray">
                  We see patients from Sacramento and the nearby towns below. If you
                  live within about 30 minutes of the office, we are an easy
                  drive.
                </p>
                <ul className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Areas we serve">
                  {SERVICE_AREAS.map((area) => (
                    <li
                      key={area}
                      className="rounded-md border-hair border-subtle bg-white px-4 py-2 text-sm font-medium text-charcoal shadow-sm"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: "phone" | "mail";
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-w-0 flex-col items-center rounded-2xl border-hair border-subtle bg-white p-5 text-center shadow-card transition-shadow hover:shadow-card-hover"
    >
      <ContactIcon3D
        name={icon}
        className="h-16 w-16 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="mt-2 block text-xs font-medium uppercase tracking-wide text-warmgray">
        {label}
      </span>
      <span className="mt-0.5 block max-w-full font-semibold text-charcoal [overflow-wrap:anywhere] group-hover:text-teal-dark xl:text-[15px]">
        {value}
      </span>
    </a>
  );
}
