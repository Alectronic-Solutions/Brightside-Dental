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
  "In-house financing and CareCredit accepted",
  "Most major insurance plans accepted",
  "Digital X-rays and same-day crowns (CEREC)",
  "Nitrous oxide and sedation options available",
  "HIPAA-compliant patient portal",
];

export function WhyBrightside() {
  return (
    <section className="bg-teal-light section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: stat grid + photo */}
        <AnimatedSection>
          <SectionLabel>Why Brightside</SectionLabel>
          <h2 className="max-w-md text-3xl text-charcoal sm:text-4xl">
            Care that earns its reputation, one visit at a time
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border-hair border-[rgba(30,114,104,0.18)] bg-[rgba(30,114,104,0.10)]">
            {STATS.map((stat) => (
              <div key={stat.label} className="group bg-teal-light p-6 transition-colors hover:bg-white sm:p-8">
                <p className="text-3xl font-semibold tracking-tightish text-teal-dark sm:text-[2.5rem]">
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
              className="h-48 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </AnimatedSection>

        {/* Right: differentiators */}
        <AnimatedSection delay={0.1}>
          <ul className="space-y-4">
            {DIFFERENTIATORS.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-xl bg-white/60 p-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-teal text-white">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-[1.05rem] text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  );
}
