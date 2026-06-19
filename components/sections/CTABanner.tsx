"use client";

import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PRACTICE } from "@/lib/constants";

type CTAVariant = "default" | "teal" | "minimal";

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  variant?: CTAVariant;
}

export function CTABanner({
  heading = "Ready for a smile you are proud of?",
  subtext = "New patients welcome. Same-week appointments available. No insurance? No problem.",
  variant = "default",
}: CTABannerProps) {
  const isTeal = variant === "teal";
  const isMinimal = variant === "minimal";

  return (
    <section
      className={`relative overflow-hidden section-y ${
        isTeal ? "bg-teal-dark" : "bg-navy"
      }`}
    >
      {/* Layered glows — default only */}
      {variant === "default" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% -5%, rgba(45,158,143,0.35), transparent 65%), radial-gradient(40% 50% at 80% 100%, rgba(45,158,143,0.14), transparent 60%)",
          }}
        />
      )}

      {/* Teal variant — navy overlay glow */}
      {isTeal && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% -5%, rgba(14,31,61,0.4), transparent 65%)",
          }}
        />
      )}

      {/* Minimal variant — single soft centered glow */}
      {isMinimal && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 120%, rgba(45,158,143,0.18), transparent 60%)",
          }}
        />
      )}

      {/* Subtle grid — default and contact only */}
      {!isMinimal && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
            backgroundSize: "52px 52px",
          }}
        />
      )}

      {/* Minimal variant — subtle top border */}
      {isMinimal && (
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />
      )}

      <AnimatedSection className="container-page relative text-center">
        {/* Decorative teal line — default only */}
        {variant === "default" && (
          <div className="mx-auto mb-8 h-px w-12 bg-gradient-to-r from-transparent via-teal to-transparent" />
        )}

        <h2
          className={`mx-auto max-w-2xl font-bold leading-[1.1] text-white ${
            isMinimal
              ? "text-display-sm tracking-[-0.03em]"
              : "text-display-sm"
          }`}
        >
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-white/60">{subtext}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href="/contact"
            size="lg"
            variant={isTeal ? "outline-white" : "primary"}
            className={`group w-full sm:w-auto ${
              isTeal ? "hover:!bg-white hover:!text-teal-dark" : ""
            }`}
          >
            Book Online
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
              aria-hidden="true"
            />
          </Button>
          <Button
            href={PRACTICE.phoneHref}
            size="lg"
            variant="outline-white"
            className="w-full sm:w-auto"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {PRACTICE.phone}
          </Button>
        </div>

        {/* Trust footnote */}
        <p className="mt-8 text-sm text-white/50">
          {PRACTICE.googleRating} stars on Google &middot; {PRACTICE.reviewCount} patient reviews
        </p>
      </AnimatedSection>
    </section>
  );
}
