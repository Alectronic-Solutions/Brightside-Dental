"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CalendarCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PRACTICE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-navy">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Layered gradients for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(14,31,61,0.97) 0%, rgba(14,31,61,0.85) 50%, rgba(14,31,61,0.60) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 80% at 80% 40%, rgba(45,158,143,0.18), transparent 65%)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="container-page relative grid min-h-[90vh] items-center gap-16 pb-24 pt-36 lg:grid-cols-[58fr_42fr] lg:gap-12">
        {/* Left content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel tone="light">
              Lodi&apos;s Highest-Rated Dental Practice
            </SectionLabel>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="display mt-4 max-w-[18ch] text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.6rem]"
          >
            Your smile deserves more than a routine checkup.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[52ch] text-[1.1rem] leading-[1.75] text-white/65"
          >
            Brightside Dental combines clinical precision with a calm, modern
            experience. Accepting new patients with same-week appointments
            available.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" className="group">
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/about" size="lg" variant="ghost">
              Meet Our Team
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border-hair border-subtle-dark"
          >
            <TrustStat
              icon={<Star className="h-4 w-4 fill-teal text-teal" />}
              value={`${PRACTICE.googleRating}`}
              label="Google Rating"
            />
            <TrustStat
              icon={<CalendarCheck className="h-4 w-4 text-teal" />}
              value={`${PRACTICE.yearsInPractice} Yrs`}
              label="In Practice"
            />
            <TrustStat
              icon={<Users className="h-4 w-4 text-teal" />}
              value={PRACTICE.patientsServed}
              label="Patients Served"
            />
          </motion.div>
        </motion.div>

        {/* Right photo column */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          {/* Main photo */}
          <div className="relative overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={IMAGES.heroSecondary.src}
              alt={IMAGES.heroSecondary.alt}
              width={IMAGES.heroSecondary.width}
              height={IMAGES.heroSecondary.height}
              priority
              quality={90}
              className="w-full object-cover"
              sizes="(max-width: 1200px) 45vw, 520px"
            />
            {/* subtle dark gradient at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>

          {/* Floating rating chip */}
          <motion.div
            className="absolute -left-6 top-10 z-10 flex items-center gap-3 rounded-2xl border-hair border-subtle-dark bg-navy-mid/95 px-5 py-4 shadow-card backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal/15">
              <Star className="h-5 w-5 fill-teal text-teal" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-teal-light/80">
                Google Rating
              </p>
              <p className="text-lg font-semibold text-white">
                {PRACTICE.googleRating} / 5.0
              </p>
            </div>
          </motion.div>

          {/* Accepting patients chip */}
          <motion.div
            className="absolute -right-4 bottom-12 z-10 flex items-center gap-3 rounded-2xl border-hair border-subtle-dark bg-navy-mid/95 px-5 py-4 shadow-card backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
            </span>
            <p className="text-sm font-medium text-white">
              Accepting new patients
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8F9FA] to-transparent"
      />
    </section>
  );
}

function TrustStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 bg-white/5 px-5 py-5">
      <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50">
        {icon}
        {label}
      </span>
      <span className="text-2xl font-semibold text-white">{value}</span>
    </div>
  );
}
