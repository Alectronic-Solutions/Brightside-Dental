import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ReviewCard, GoogleStars, GoogleG } from "@/components/reviews/ReviewCard";
import { TESTIMONIALS } from "@/lib/testimonials";
import { PRACTICE } from "@/lib/constants";

const FEATURED = TESTIMONIALS.slice(0, 6);

export function Testimonials() {
  return (
    <section className="bg-white section-y">
      <div className="container-page">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="text-3xl text-charcoal sm:text-[2.25rem]">
            What our patients are saying
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            Straight from Google — unedited, and nobody was paid to write them.
          </p>
        </AnimatedSection>

        {/* Rating summary */}
        <AnimatedSection delay={0.05} className="mt-8 flex items-center gap-3">
          <span className="text-3xl font-bold text-charcoal">{PRACTICE.googleRating}</span>
          <div>
            <GoogleStars count={5} />
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-warmgray">
              <GoogleG />
              {PRACTICE.reviewCount} Google reviews
            </p>
          </div>
        </AnimatedSection>

        {/* Static card grid — nothing moves, so nothing can jump */}
        <AnimatedSection delay={0.1} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((t, i) => (
            <ReviewCard key={i} t={t} />
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
          >
            See all {PRACTICE.reviewCount} reviews
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
