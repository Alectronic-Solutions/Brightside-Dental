"use client";

import { CreditCard, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const INSURERS = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "BlueCross",
  "United Concordia",
];

export function InsuranceStrip() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <AnimatedSection>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.8fr_auto] lg:gap-14">
            {/* Left */}
            <div>
              <h2 className="text-xl font-semibold text-charcoal">
                We work with most major insurance plans
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-warmgray">
                Not sure if you are covered? We will verify your benefits
                before your first visit at no charge.
              </p>
            </div>

            {/* Center: insurer grid */}
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
              {INSURERS.map((name) => (
                <div
                  key={name}
                  className="flex h-12 items-center justify-center rounded-lg border-hair border-subtle bg-offwhite px-2 text-center text-[0.78rem] font-medium text-warmgray"
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Right: CareCredit */}
            <div className="rounded-2xl border-hair border-teal/25 bg-teal-light p-5 lg:max-w-[200px]">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-teal" strokeWidth={1.6} />
                <span className="font-semibold text-teal-dark">CareCredit</span>
              </div>
              <p className="mt-2 text-sm text-charcoal/70">
                0% financing options available on qualifying treatment.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-teal-dark">
                <CheckCircle className="h-3.5 w-3.5" />
                Accepted here
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
