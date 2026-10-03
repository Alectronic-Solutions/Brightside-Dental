"use client";

import { CreditCard, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { InsuranceBadges } from "@/components/ui/InsuranceBadges";

export function InsuranceStrip() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <AnimatedSection>
          <div className="flex flex-col items-center gap-8 text-center">
            <div>
              <h2 className="text-xl font-semibold text-charcoal sm:text-2xl">
                Most major PPO plans accepted
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-warmgray sm:text-base">
                Not sure if you&apos;re covered? We verify your benefits before
                your first visit, at no charge.
              </p>
            </div>

            <InsuranceBadges className="max-w-3xl" />

            {/* CareCredit */}
            <div className="w-full max-w-sm rounded-2xl border-hair border-teal/25 bg-teal-light p-5">
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="h-5 w-5 text-teal" strokeWidth={1.6} aria-hidden="true" />
                <span className="font-semibold text-teal-dark">CareCredit</span>
              </div>
              <p className="mt-2 text-sm text-charcoal/70">
                0% financing for 12 months on qualifying treatment.
              </p>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-teal-dark">
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
