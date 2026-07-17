import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoogleStars, GoogleG } from "@/components/reviews/ReviewCard";
import { ReviewsGrid } from "@/components/reviews/ReviewsGrid";
import { PRACTICE } from "@/lib/constants";
import { TESTIMONIALS } from "@/lib/testimonials";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read real patient reviews of Brightside Dental in Lodi, CA, filterable by general dentistry, cosmetic dentistry, implants, Invisalign, and emergency care.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        label="Reviews"
        title="What patients say about Brightside"
        subtitle={`${TESTIMONIALS.length} real reviews from real patients, no incentives and no scripts. Filter by service to see what to expect.`}
        bgImage={{ src: IMAGES.office.waiting.src, alt: IMAGES.office.waiting.alt }}
      />

      <section className="bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="flex flex-col items-start justify-between gap-6 border-b border-subtle pb-10 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-charcoal">{PRACTICE.googleRating}</span>
              <div>
                <GoogleStars count={5} />
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-warmgray">
                  <GoogleG />
                  {PRACTICE.reviewCount} Google reviews
                </p>
              </div>
            </div>
            <a
              href={PRACTICE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
            >
              See all {PRACTICE.reviewCount} reviews on Google
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </AnimatedSection>

          <div className="mt-10">
            <ReviewsGrid />
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to write your own review?"
        subtext="Join hundreds of patients who trust Brightside Dental with their smiles."
      />
    </>
  );
}
