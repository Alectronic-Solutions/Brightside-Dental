"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CountUp } from "@/components/ui/CountUp";
import { IMAGES } from "@/lib/images";

const STATS = [
  { value: 4.9, decimals: 1, suffix: "★", label: "Google Rating" },
  { value: 18, decimals: 0, suffix: "", label: "Years in Practice" },
  { value: 8400, decimals: 0, suffix: "+", label: "Patients Served" },
  { value: 0, decimals: 0, suffix: "", label: "Same-Day Emergencies", literal: "Same-Day" },
];

const DIFFERENTIATORS = [
  "In-house financing and CareCredit accepted. Apply in minutes, zero interest for 12 months.",
  "Most major PPO insurance plans filed directly on your behalf",
  "CEREC same-day crowns. Digital impressions. No goopy molds.",
  "Nitrous oxide and oral sedation for nervous patients",
  "HIPAA-compliant patient portal: records, bills, messages, all online",
];

export function WhyBrightside() {
  return (
    <section className="relative bg-teal-light section-y">
      {/* Diagonal stripe overlay at 4% opacity */}
      <div
        aria-hidden
        className="diagonal-stripe pointer-events-none absolute inset-0 opacity-[0.04]"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: stat grid + photo */}
        <AnimatedSection>
          <SectionLabel>Why Brightside</SectionLabel>
          <h2 className="max-w-md text-3xl text-charcoal sm:text-[2.25rem]">
            Care that earns its reputation, one visit at a time
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border-hair border-[rgba(30,114,104,0.18)] bg-[rgba(30,114,104,0.10)]">
            {STATS.map((stat) => (
              <div key={stat.label} className="group bg-white/70 p-5 transition-colors duration-200 hover:bg-white sm:p-8">
                <p className="text-2xl font-semibold tracking-tightish text-teal-dark sm:text-stat">
                  {stat.literal ? (
                    stat.literal
                  ) : (
                    <CountUp
                      to={stat.value}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  )}
                </p>
                <p className="mt-2 text-sm font-medium text-charcoal/65">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Office photo below stats */}
          <div className="mt-6 overflow-hidden rounded-2xl shadow-card">
            <Image
              src={IMAGES.office.reception.src}
              alt={IMAGES.office.reception.alt}
              width={IMAGES.office.reception.width}
              height={IMAGES.office.reception.height}
              loading="lazy"
              className="h-48 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>

        {/* Right: differentiators */}
        <AnimatedSection delay={0.1}>
          <h3 className="text-xl font-semibold text-charcoal">
            What sets us apart
          </h3>
          <ul className="mt-6 divide-y divide-[rgba(30,114,104,0.12)]">
            {DIFFERENTIATORS.map((item) => (
              <li key={item} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-teal text-white">
                  <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-[1.02rem] leading-relaxed text-charcoal/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
