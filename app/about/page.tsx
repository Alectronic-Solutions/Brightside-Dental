import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HeartHandshake,
  ReceiptText,
  MapPin,
  ShieldCheck,
  Award,
} from "lucide-react";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PhotoCollage } from "@/components/about/PhotoCollage";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Our Sacramento Dental Practice",
  description:
    "Meet the team behind Brightside Dental in Sacramento, CA. Dr. Angela Chen opened the practice in 2006 and still sees patients here every week.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  {
    image: IMAGES.team.drChen,
    name: "Dr. Angela Chen",
    title: "Lead Dentist and Founder",
    credentials:
      "DDS, UC San Francisco School of Dentistry · 20 years in practice · Member, ADA and CDA",
    bio: "Dr. Chen founded Brightside in 2006 with a focus on gentle, conservative care. She still personally calls patients the evening after major procedures to check in.",
  },
  {
    image: IMAGES.team.mariaReyes,
    name: "Maria Reyes, RDH",
    title: "Lead Dental Hygienist",
    credentials: "Registered Dental Hygienist · 12 years experience",
    bio: "Nervous patients often ask for Maria by name. She explains what she is doing as she goes and stops whenever you need a break.",
  },
  {
    image: IMAGES.team.jordanTran,
    name: "Jordan Tran",
    title: "Patient Care Coordinator",
    credentials: "Insurance and financing specialist",
    bio: "Jordan handles insurance and billing. He will check your benefits and go over the costs with you before you commit to anything.",
  },
];

const VALUES = [
  {
    Icon: HeartHandshake,
    title: "Comfort First",
    body: "Nitrous and oral sedation are available if you get nervous, and we keep warm blankets on hand. Nobody will rush you through a visit.",
  },
  {
    Icon: ReceiptText,
    title: "No-Surprise Billing",
    body: "Before we schedule anything, you get a written treatment plan with your insurance already applied, so you know what you will owe.",
  },
  {
    Icon: MapPin,
    title: "Community Roots",
    body: "We have been in Sacramento since 2006, and most of our team lives here too. Plenty of our patients are people we also run into at the grocery store.",
  },
];

const GALLERY = [
  { label: "Reception", image: IMAGES.office.reception, h: "h-52" },
  { label: "Treatment Room", image: IMAGES.office.treatmentRoom, h: "h-[17rem]" },
  { label: "Consultation Suite", image: IMAGES.office.consultation, h: "h-60" },
  { label: "Modern Equipment", image: IMAGES.office.equipment, h: "h-48" },
  { label: "Patient Lounge", image: IMAGES.office.waiting, h: "h-64" },
  { label: "Digital Imaging", image: IMAGES.office.imaging, h: "h-52" },
  { label: "Smile Results", image: IMAGES.office.smile1, h: "h-56" },
  { label: "Happy Patients", image: IMAGES.office.smile2, h: "h-60" },
];

const CERTS = [
  { label: "ADA", Icon: Award },
  { label: "CDA", Icon: Award },
  { label: "OSHA Compliant", Icon: ShieldCheck },
  { label: "Invisalign Preferred Provider", Icon: Award },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-navy sm:min-h-[620px] md:min-h-[700px]">
        {/* Teal accent dash */}
        <span aria-hidden className="absolute left-0 top-[42%] z-10 hidden h-12 w-1 -translate-y-1/2 rounded-r-full bg-teal lg:block" />
        {/* Full-bleed background photo */}
        <Image
          src={IMAGES.office.treatmentRoom.src}
          alt={IMAGES.office.treatmentRoom.alt}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay: dark on left, fades right */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(14,31,61,0.97) 0%, rgba(14,31,61,0.85) 45%, rgba(14,31,61,0.4) 75%, rgba(14,31,61,0.2) 100%)",
          }}
        />
        {/* Teal glow accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 50% at 20% 60%, rgba(45,158,143,0.18), transparent 70%)",
          }}
        />

        <div className="container-page relative grid items-center gap-12 pb-16 pt-28 sm:pt-36 md:pb-32 md:pt-44 lg:grid-cols-2">
          {/* Left: text */}
          <AnimatedSection className="text-center lg:text-left">
            <SectionLabel tone="light" className="justify-center lg:justify-start">Our Story</SectionLabel>
            <h1 className="mt-3 text-balance text-display font-bold text-white">
              A Sacramento dental office since 2006
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-white/65 lg:mx-0">
              Dr. Angela Chen opened Brightside in Sacramento in 2006. We keep the team small, explain treatment in plain
              language, and give you a written estimate before anything is
              scheduled.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-10 border-t border-white/10 pt-8 lg:justify-start">
              <Stat value={`${PRACTICE.yearsInPractice} yrs`} label="In practice" />
              <Stat value={PRACTICE.patientsServed} label="Patients served" />
              <Stat value={`${PRACTICE.googleRating}★`} label="Google rating" />
            </div>
          </AnimatedSection>

          {/* Right: photo collage: each image staggers in independently */}
          <PhotoCollage />
        </div>
      </section>

      {/* Meet the team */}
      <section id="team" className="scroll-mt-24 bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Meet the Team</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              The people you will see at every visit
            </h2>
            <p className="mt-4 text-lg text-warmgray">
              We keep the team small, so you see the same faces each time you
              come in.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TEAM.map((member, i) => (
              <AnimatedSection
                key={member.name}
                delay={i * 0.08}
                className="group overflow-hidden rounded-2xl border-hair border-subtle bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                {/* Headshot */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-teal-dark">
                    {member.title}
                  </p>
                  <p className="mt-3 text-[0.8rem] leading-relaxed text-warmgray">
                    {member.credentials}
                  </p>
                  <p className="mt-4 leading-relaxed text-charcoal/78 text-[0.95rem]">
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Practice values */}
      <section className="bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">What We Stand For</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              What we won&apos;t cut corners on
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <AnimatedSection
                key={value.title}
                delay={i * 0.08}
                className="rounded-2xl border-hair border-subtle bg-offwhite p-7 text-center transition-shadow hover:shadow-card"
              >
                <value.Icon className="mx-auto h-7 w-7 text-teal" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-warmgray">
                  {value.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Office gallery with real images */}
      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="flex flex-col items-center gap-4 text-center">
            <div className="max-w-2xl">
              <SectionLabel className="justify-center">Take a Look Around</SectionLabel>
              <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
                Inside our Sacramento office
              </h2>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
            >
              See the full gallery
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>

          <AnimatedSection
            delay={0.1}
            className="mt-12 columns-2 gap-4 md:columns-4 [&>*]:mb-4"
          >
            {GALLERY.map((item) => (
              <div
                key={item.label}
                className={`relative ${item.h} break-inside-avoid overflow-hidden rounded-xl border-hair border-subtle`}
              >
                <Image
                  src={item.image.thumb}
                  alt={item.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* label overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/75 to-transparent p-3 pt-8">
                  <span className="block text-xs font-medium text-white/90">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-16">
        <div className="container-page">
          <AnimatedSection className="flex flex-col items-center gap-8">
            <p className="caption flex items-center gap-2 text-teal-dark">
              <ShieldCheck className="h-4 w-4" />
              Accredited and Compliant
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {CERTS.map((cert) => (
                <div
                  key={cert.label}
                  className="inline-flex items-center gap-2 rounded-md border-hair border-subtle bg-offwhite px-5 py-3 text-sm font-medium text-warmgray"
                >
                  <cert.Icon className="h-3.5 w-3.5 text-teal" />
                  {cert.label}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        heading="Meet the team in person"
        subtext="Book a first visit, or call if you would like to ask us something before you commit."
        variant="teal"
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="text-sm text-white/55">{label}</p>
    </div>
  );
}
