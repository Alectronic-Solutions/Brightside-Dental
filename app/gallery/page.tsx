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
    "Take a look around Brightside Dental in Lodi, CA. See our office, meet the team, and browse smile transformations across our services.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="A closer look at Brightside Dental"
        subtitle="Take a walk through our office, meet the people who will be taking care of you, and see the kind of results our patients leave with."
        bgImage={{ src: IMAGES.office.consultation.src, alt: IMAGES.office.consultation.alt }}
      />

      <section className="bg-white section-y">
        <div className="container-page">
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>Around the Practice</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              A closer look at the space and the people in it
            </h2>
            <p className="mt-4 text-lg text-warmgray">
              Filter by office or team to see where — and with whom — you will
              be spending your visit.
            </p>
          </AnimatedSection>

          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="max-w-2xl">
            <SectionLabel>Smile Transformations</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Drag to see the difference
            </h2>
            <p className="mt-4 text-lg text-warmgray">
              A look at the kind of change each service is built to deliver.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const content = getServiceContent(service.slug);
              if (!content) return null;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.06}>
                  <BeforeAfter
                    beforeLabel={content.beforeLabel}
                    afterLabel={content.afterLabel}
                  />
                  <div className="mt-4 flex items-center justify-between">
                    <div>
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
        heading="See it for yourself"
        subtext="The best way to know if we're the right fit is to come in and meet the team."
      />
    </>
  );
}
