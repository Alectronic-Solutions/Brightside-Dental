import type { Metadata } from "next";
import Image from "next/image";
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
  title: "About Our Lodi Dental Practice",
  description:
    "Meet the team behind Brightside Dental in Lodi, CA. Led by Dr. Angela Chen, we have delivered calm, modern, judgment-free dental care to San Joaquin County since 2006.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  {
    image: IMAGES.team.drChen,
    name: "Dr. Angela Chen",
    title: "Lead Dentist and Founder",
    credentials:
      "DDS, UC San Francisco School of Dentistry · 18 years practice · Member, ADA and CDA",
    bio: "Dr. Chen founded Brightside in 2006 with a focus on gentle, conservative care. She still personally calls patients the evening after major procedures to check in.",
  },
  {
    image: IMAGES.team.mariaReyes,
    name: "Maria Reyes, RDH",
    title: "Lead Dental Hygienist",
    credentials: "Registered Dental Hygienist · 12 years experience",
    bio: "Maria is the reason so many nervous patients keep coming back. She is patient, thorough, and has a gift for making cleanings genuinely relaxing.",
  },
  {
    image: IMAGES.team.jordanTran,
    name: "Jordan Tran",
    title: "Patient Care Coordinator",
    credentials: "Insurance and financing specialist",
    bio: "Jordan handles the part everyone dreads: insurance and billing. He will find your benefits and lay out the costs before you commit to anything.",
  },
];

const VALUES = [
  {
    Icon: HeartHandshake,
    title: "Comfort First",
    body: "An anxiety-free environment with sedation and nitrous options, warm blankets, and a team that never rushes you. We treat the person, not just the tooth.",
  },
  {
    Icon: ReceiptText,
    title: "No-Surprise Billing",
    body: "You get an upfront treatment plan with a written estimate and your insurance applied before we schedule anything. No mystery charges, ever.",
  },
  {
    Icon: MapPin,
    title: "Community Roots",
    body: "We have served Lodi and San Joaquin County since 2006. This is our home too, and we treat our patients like the neighbors they are.",
  },
];

const GALLERY = [
  { label: "Reception", image: IMAGES.office.reception, h: "h-52" },
  { label: "Treatment Room", image: IMAGES.office.treatmentRoom, h: "h-68" },
  { label: "Consultation Suite", image: IMAGES.office.consultation, h: "h-60" },
  { label: "Modern Equipment", image: IMAGES.office.equipment, h: "h-48" },
  { label: "Patient Lounge", image: IMAGES.office.waiting, h: "h-64" },
  { label: "Front Entrance", image: IMAGES.office.exterior, h: "h-52" },
  { label: "Smile Results", image: IMAGES.office.smile1, h: "h-56" },
  { label: "Happy Patients", image: IMAGES.office.smile2, h: "h-60" },
];

const CERTS = [
  { label: "ADA", Icon: Award },
  { label: "CDA", Icon: Award },
  { label: "OSHA Compliant", Icon: ShieldCheck },
  { label: "HIPAA Compliant", Icon: ShieldCheck },
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
        {/* Gradient overlay — dark on left, fades right */}
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
          <AnimatedSection>
            <SectionLabel tone="light">Our Story</SectionLabel>
            <h1 className="mt-3 text-display font-bold text-white">
              We opened Brightside Dental in 2006 with a single belief.
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-[1.75] text-white/65">
              That going to the dentist should not feel like a punishment.
              Two decades later, that belief still shapes everything: from how
              we greet you at the door to how we explain a treatment plan in
              plain language, with no pressure and no surprises.
            </p>
            <div className="mt-10 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              <Stat value={`${PRACTICE.yearsInPractice} yrs`} label="In practice" />
              <Stat value={PRACTICE.patientsServed} label="Patients served" />
              <Stat value={`${PRACTICE.googleRating}★`} label="Google rating" />
            </div>
          </AnimatedSection>

          {/* Right: photo collage — each image staggers in independently */}
          <PhotoCollage />
        </div>
      </section>

      {/* Meet the team */}
      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>Meet the Team</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              The people who will know you by name
            </h2>
            <p className="mt-4 text-lg text-warmgray">
              A small, consistent team means you see familiar faces every visit,
              not a rotating cast of strangers.
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

                <div className="p-6">
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
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Three things we refuse to compromise on
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, i) => (
              <AnimatedSection
                key={value.title}
                delay={i * 0.08}
                className="rounded-2xl border-hair border-subtle bg-offwhite p-7 transition-shadow hover:shadow-card"
              >
                <value.Icon className="h-7 w-7 text-teal" strokeWidth={1.5} />
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
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>Take a Look Around</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              An office that feels nothing like a clinic
            </h2>
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
                  src={item.image.src}
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
        heading="Come see the difference for yourself."
        subtext="The best way to understand how we are different is to experience it. Book your first visit today."
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
