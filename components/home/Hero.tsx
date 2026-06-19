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
    <section className="hero-grain relative min-h-[100svh] overflow-hidden bg-navy pt-[68px] sm:min-h-[92vh]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.src}
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-[0.18]"
          sizes="100vw"
        />
      </div>

      {/* Layered gradients */}
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

      <div className="container-page relative grid min-h-[calc(100svh-68px)] items-center gap-12 pb-20 pt-12 sm:min-h-[calc(92vh-68px)] md:pt-20 lg:grid-cols-[58fr_42fr] lg:gap-12 lg:pb-24">
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
            className="mt-4 max-w-[18ch] text-display font-bold text-white"
          >
            Your smile deserves more than a{" "}
            <span className="relative inline-block">
              routine checkup
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-teal via-teal to-teal/40"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[52ch] text-[0.98rem] leading-[1.75] text-white/65 sm:mt-7 sm:text-[1.05rem]"
          >
            Brightside Dental combines clinical precision with a calm, modern
            experience. Accepting new patients with same-week appointments
            available.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" className="group">
              Book an Appointment
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Button>
            <Button href="/about" size="lg" variant="ghost">
              Meet Our Team
            </Button>
          </motion.div>

          {/* Trust stats — frosted glass bar */}
          <motion.div variants={fadeUp} className="mt-10 sm:mt-14">
            <div className="flex items-stretch divide-x divide-white/[0.12] overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm">
              <TrustStat
                icon={<Star className="h-4 w-4 fill-teal text-teal" aria-hidden="true" />}
                value={`${PRACTICE.googleRating}`}
                label="Google Rating"
              />
              <TrustStat
                icon={<CalendarCheck className="h-4 w-4 text-teal" aria-hidden="true" />}
                value={`${PRACTICE.yearsInPractice} Yrs`}
                label="In Practice"
              />
              <TrustStat
                icon={<Users className="h-4 w-4 text-teal" aria-hidden="true" />}
                value={PRACTICE.patientsServed}
                label="Patients Served"
              />
            </div>
          </motion.div>

          {/* Mobile accepting-patients indicator (floating chips are desktop-only) */}
          <motion.div variants={fadeUp} className="mt-4 flex items-center gap-2 lg:hidden">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            <span className="text-xs font-medium text-white/70">
              Accepting new patients · Same-week availability
            </span>
          </motion.div>
        </motion.div>

        {/* Right photo column — hidden on mobile */}
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
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>

          {/* Floating rating chip */}
          <motion.div
            className="absolute -left-6 top-10 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-mid/95 px-5 py-4 shadow-card backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal/15">
              <Star className="h-5 w-5 fill-teal text-teal" aria-hidden="true" />
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
            className="absolute -right-4 bottom-12 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-mid/95 px-5 py-4 shadow-card backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.85 }}
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
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
    <div className="flex flex-1 flex-col gap-2 px-4 py-4 sm:px-6 sm:py-5">
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.09em] text-white/45">
        {label}
      </span>
      <span className="flex items-center gap-2 text-lg font-semibold text-white sm:text-2xl">
        {icon}
        {value}
      </span>
    </div>
  );
}
