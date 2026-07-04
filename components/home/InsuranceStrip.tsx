"use client";

import Image from "next/image";
import { CreditCard, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const INSURERS = [
  { name: "Delta Dental", logo: `${BASE_PATH}/logos/delta-dental.svg` },
  { name: "Cigna", logo: `${BASE_PATH}/logos/cigna.svg` },
  { name: "Aetna", logo: `${BASE_PATH}/logos/aetna.svg` },
  { name: "MetLife", logo: `${BASE_PATH}/logos/metlife.svg` },
  { name: "BlueCross BlueShield", logo: `${BASE_PATH}/logos/bluecross.svg` },
  { name: "United Concordia", logo: `${BASE_PATH}/logos/united-concordia.png` },
];

export function InsuranceStrip() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <AnimatedSection>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_1.8fr_auto] lg:items-center lg:gap-14">
            {/* Left */}
            <div>
              <h2 className="text-xl font-semibold text-charcoal">
                Most major PPO plans accepted
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-warmgray">
                Not sure if you&apos;re covered? We verify your benefits before
                your first visit, at no charge.
              </p>
            </div>

            {/* Center: insurer logos */}
            <div className="flex flex-wrap items-center gap-2">
              {INSURERS.map(({ name, logo }) => (
                <span
                  key={name}
                  className="flex h-11 items-center rounded-md border-hair border-subtle bg-offwhite px-3.5 py-2 transition-colors hover:border-teal/40"
                >
                  <Image
                    src={logo}
                    alt={name}
                    width={120}
                    height={28}
                    className="h-6 w-auto object-contain sm:h-7"
                  />
                </span>
              ))}
              <span className="rounded-md bg-teal-light px-3.5 py-2 text-sm font-medium text-teal-dark">
                + more
              </span>
            </div>

            {/* Right: CareCredit */}
            <div className="rounded-2xl border-hair border-teal/25 bg-teal-light p-5 sm:max-w-[240px]">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-teal" strokeWidth={1.6} aria-hidden="true" />
                <span className="font-semibold text-teal-dark">CareCredit</span>
              </div>
              <p className="mt-2 text-sm text-charcoal/70">
                0% financing for 12 months on qualifying treatment.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-teal-dark">
                <CheckCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Accepted here
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
