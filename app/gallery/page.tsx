import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { SERVICES } from "@/lib/constants";
import { getServiceContent } from "@/lib/service-content";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a look around Brightside Dental in Sacramento, CA. See our office, meet the team, and view before-and-after examples for each service.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="A closer look at Brightside Dental"
        subtitle="Photos of our office and team, plus before-and-after examples for each service."
        bgImage={IMAGES.office.consultation.src}
      />

      <section className="bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Around the Practice</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              A closer look at the space and the people in it
            </h2>
            <p className="mt-4 text-lg text-warmgray">
              Filter by office or team to see where you&apos;ll be and who
              you&apos;ll be seeing during your visit.
            </p>
          </AnimatedSection>

          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Smile Transformations</SectionLabel>
            <h2 className="text-balance text-3xl text-charcoal sm:text-4xl">
              Drag to see the difference
            </h2>
            <p className="mt-4 text-lg text-warmgray">
              Representative results for each of our services.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 [&>*]:min-w-0">
            {SERVICES.map((service, i) => {
              const content = getServiceContent(service.slug);
              if (!content || !IMAGES.beforeAfter[service.slug]) return null;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.06}>
                  <BeforeAfter
                    beforeLabel={content.beforeLabel}
                    afterLabel={content.afterLabel}
                    photos={IMAGES.beforeAfter[service.slug]}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="mt-4 flex flex-col items-center gap-2 text-center">
                    <div className="w-full">
                      <h3 className="text-lg font-semibold text-charcoal">
                        {service.name}
                      </h3>
                      <p className="text-sm text-warmgray">{service.tagline}</p>
                    </div>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
                    >
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Come by and meet us"
        subtext="Book a first visit and see the office in person."
      />
    </>
  );
}
