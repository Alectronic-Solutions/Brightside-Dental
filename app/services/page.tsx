import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/cn";


export const metadata: Metadata = {
  title: "Dental Services in Lodi, CA",
  description:
    "Explore Brightside Dental's services in Lodi, CA: general and cosmetic dentistry, dental implants, Invisalign, and same-day emergency care for the whole family.",
  alternates: { canonical: "/services" },
};

const SERVICE_IMAGES = [
  IMAGES.services.general,
  IMAGES.services.cosmetic,
  IMAGES.services.implants,
  IMAGES.services.invisalign,
  IMAGES.services.emergency,
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Services built around your life"
        subtitle="Comprehensive dental care under one roof. From the six-month cleaning that keeps things simple to the implant or smile makeover that changes everything. One team, every stage of life."
        bgImage={{ src: IMAGES.services.general.src, alt: IMAGES.services.general.alt }}
      />

      <section className="bg-offwhite section-y">
        <div className="container-page space-y-6">
          {SERVICES.map((service, i) => {
            const dark = i % 2 === 1;
            const img = SERVICE_IMAGES[i];
            return (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <article
                    className={cn(
                      "grid overflow-hidden rounded-2xl border-hair shadow-card transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-card-hover",
                      "sm:grid-cols-[200px_1fr_auto] sm:items-stretch",
                      dark
                        ? "border-subtle-dark bg-navy"
                        : "border-subtle bg-white",
                    )}
                  >
                    {/* Service image */}
                    <div className="relative hidden sm:block">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="200px"
                      />
                      {dark && (
                        <div className="absolute inset-0 bg-navy/40" />
                      )}
                    </div>

                    {/* text */}
                    <div className="p-7 md:p-9">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "grid h-10 w-10 place-items-center rounded-lg",
                            dark ? "bg-white/8 text-teal" : "bg-teal-light text-teal-dark",
                          )}
                        >
                          <ServiceIcon
                            name={service.icon}
                            className="h-5 w-5"
                            strokeWidth={1.6}
                          />
                        </div>
                        <h2
                          className={cn(
                            "text-xl font-semibold sm:text-2xl",
                            dark ? "text-white" : "text-charcoal",
                          )}
                        >
                          {service.name}
                        </h2>
                      </div>
                      <p
                        className={cn(
                          "mt-2 text-sm font-medium",
                          dark ? "text-teal-light" : "text-teal-dark",
                        )}
                      >
                        {service.tagline}
                      </p>
                      <p
                        className={cn(
                          "mt-3 max-w-xl leading-relaxed",
                          dark ? "text-white/65" : "text-warmgray",
                        )}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* cta */}
                    <div className="flex items-center px-7 py-7 md:px-9">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium",
                          dark ? "text-teal-light" : "text-teal",
                        )}
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <CTABanner
        heading="Not sure which service you need?"
        subtext="Tell us what is going on and we will point you in the right direction. No pressure, no obligation."
      />
    </>
  );
}
