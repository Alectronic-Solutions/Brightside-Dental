import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

export function VisitUs() {
  return (
    <section className="bg-white section-y">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Visit Us</SectionLabel>
          <h2 className="text-balance text-3xl text-charcoal sm:text-[2.25rem]">
            Right here in Sacramento
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            A short drive from Elk Grove, Roseville, Folsom, and West Sacramento.
          </p>
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="mt-12 grid overflow-hidden rounded-3xl border-hair border-subtle bg-offwhite shadow-card lg:grid-cols-[1.4fr_1fr]"
        >
          <div className="relative h-72 sm:h-80 lg:h-auto lg:min-h-[420px]">
            <iframe
              title={`Map of ${PRACTICE.address}`}
              src={PRACTICE.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center gap-7 p-8 text-center sm:p-10">
            <div>
              <MapPin className="mx-auto h-5 w-5 text-teal" aria-hidden="true" />
              <p className="mt-2 font-semibold text-charcoal">{PRACTICE.address}</p>
              <p className="text-warmgray">Serving the greater Sacramento area</p>
            </div>

            <div>
              <Clock className="mx-auto h-5 w-5 text-teal" aria-hidden="true" />
              <dl className="mx-auto mt-2 max-w-[260px] space-y-1.5 text-sm">
                {Object.entries(PRACTICE.hours).map(([days, time]) => (
                  <div key={days} className="flex justify-between gap-4">
                    <dt className="font-medium text-charcoal">{days}</dt>
                    <dd className="text-warmgray">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-3">
              <Button href={PRACTICE.mapsUrl} variant="outline" className="w-full">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </Button>
              <Button href={PRACTICE.phoneHref} className="w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {PRACTICE.phone}
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
