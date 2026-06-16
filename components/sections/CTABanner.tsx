"use client";

import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PRACTICE } from "@/lib/constants";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export function CTABanner({
  heading = "Ready for a smile you are proud of?",
  subtext = "New patients welcome. Same-week appointments available. No insurance? No problem.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy section-y">
      {/* Top glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 70% at 50% -10%, rgba(45,158,143,0.28), rgba(14,31,61,0) 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
          backgroundSize: "52px 52px",
        }}
      />

      <AnimatedSection className="container-page relative text-center">
        {/* Decorative teal line */}
        <div className="mx-auto mb-8 h-px w-16 bg-teal/60" />

        <h2 className="display mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.8rem]">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">{subtext}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg" className="group">
            Book Online
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button href={PRACTICE.phoneHref} size="lg" variant="outline-white">
            <Phone className="h-4 w-4" />
            Call {PRACTICE.phone}
          </Button>
        </div>

        {/* Trust footnote */}
        <p className="mt-8 text-sm text-white/35">
          {PRACTICE.googleRating} stars on Google &middot; {PRACTICE.reviewCount} patient reviews
        </p>
      </AnimatedSection>
    </section>
  );
}
