import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceIcon3D } from "@/components/ui/ServiceIcon3D";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/cn";


export const metadata: Metadata = {
  title: "Dental Services in Sacramento, CA",
  description:
    "Explore Brightside Dental's services in Sacramento, CA: general and cosmetic dentistry, dental implants, Invisalign, and same-day emergency care for the whole family.",
  alternates: { canonical: "/services" },
};

const SERVICE_IMAGES = [
  IMAGES.services.general,
  IMAGES.services.cosmetic,
  IMAGES.services.implants,
  IMAGES.services.invisalign,
  IMAGES.services.emergency,
];

// Three cards on the first desktop row, two wider ones on the second.
const SPANS = [
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "sm:col-span-2 lg:col-span-3",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Our dental services"
        subtitle="Everything from six-month cleanings to implants and smile makeovers, handled by one team in our Sacramento office."
        bgImage={IMAGES.services.general.src}
      />

      <section className="bg-offwhite section-y">
        <div className="container-page">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">What we treat</SectionLabel>
            <h2 className="text-balance text-display-sm font-bold text-charcoal">
              Find the care you need
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-warmgray">
              Pick a service to see how a visit works, who it suits, and the
              questions patients ask us most often.
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-6">
            {SERVICES.map((service, i) => {
              const img = SERVICE_IMAGES[i];
              const wide = i >= 3;
              return (
                <AnimatedSection
                  key={service.slug}
                  delay={(i % 3) * 0.06}
                  className={cn("flex", SPANS[i])}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex w-full flex-col overflow-hidden rounded-2xl border-hair border-subtle bg-white text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-visible:-translate-y-1 focus-visible:shadow-card-hover"
                  >
                    <div
                      className={cn(
                        "relative h-44 overflow-hidden sm:h-48",
                        wide && "lg:h-56",
                      )}
                    >
                      <Image
                        src={img.card}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes={
                          wide
                            ? "(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                            : "(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
                        }
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/40 to-transparent"
                      />
                    </div>

                    <div className="relative flex flex-1 flex-col items-center px-6 pb-8 sm:px-8">
                      <ServiceIcon3D
                        name={service.icon}
                        className="-mt-14 h-24 w-24 drop-shadow-[0_10px_14px_rgba(14,31,61,0.10)] transition-transform duration-300 group-hover:-translate-y-1.5 sm:h-28 sm:w-28"
                      />
                      <h3 className="mt-3 text-xl font-semibold text-charcoal sm:text-[1.4rem]">
                        {service.name}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-teal-dark">
                        {service.tagline}
                      </p>
                      <p className="mx-auto mt-3 max-w-sm leading-relaxed text-warmgray">
                        {service.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-teal">
                        Learn more
                        <span className="sr-only"> about {service.name}</span>
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.1} className="pt-12 text-center sm:pt-14">
            <Link
              href="/faq"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
            >
              Have more questions? See all FAQs
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        heading="Not sure which service you need?"
        subtext="Tell us what is going on and we will suggest where to start. You do not have to commit to anything on the phone."
      />
    </>
  );
}
