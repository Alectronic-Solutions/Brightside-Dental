import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SERVICES, getService, PRACTICE, SITE_URL } from "@/lib/constants";
import { getServiceContent } from "@/lib/service-content";
import { IMAGES } from "@/lib/images";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Lodi, CA`,
    description: `${service.description} ${service.name} at Brightside Dental in Lodi, CA. ${service.tagline}.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

const SECTIONS = [
  { id: "what-to-expect", label: "What to expect" },
  { id: "who-its-for", label: "Who this is for" },
  { id: "before-after", label: "Before & after" },
  { id: "faqs", label: "FAQs" },
  { id: "related", label: "Related services" },
];

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const content = getServiceContent(slug);
  if (!service || !content) notFound();

  const related = SERVICES.filter((s) => s.slug !== service.slug);

  const serviceImageMap: Record<string, { src: string; alt: string }> = {
    "general-dentistry": IMAGES.services.general,
    "cosmetic-dentistry": IMAGES.services.cosmetic,
    "dental-implants": IMAGES.services.implants,
    invisalign: IMAGES.services.invisalign,
    "emergency-dentistry": IMAGES.services.emergency,
  };
  const heroImage = serviceImageMap[slug];

  /* JSON-LD: FAQ schema */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  /* JSON-LD: BreadcrumbList */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${SITE_URL}/services/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        label="Services"
        title={service.name}
        subtitle={service.tagline}
        bgImage={heroImage}
      >
        <Button href="#what-to-expect" variant="ghost">
          Explore this service
        </Button>
      </PageHero>

      {/* Mobile sticky CTA bar — hidden on lg+ where sidebar shows */}
      <div className="fixed bottom-0 inset-x-0 z-40 flex items-center gap-3 border-t border-subtle bg-white/95 px-4 py-3 backdrop-blur-sm lg:hidden">
        <Button href="/contact" size="lg" className="flex-1 group">
          Book This Service
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden="true" />
        </Button>
        <a
          href={PRACTICE.phoneHref}
          aria-label={`Call us at ${PRACTICE.phone}`}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-md border-hair border-teal text-teal transition-colors hover:bg-teal-light"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>

      <section className="bg-offwhite pb-24 pt-16 md:py-24 lg:section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sticky sidebar — desktop only */}
          <aside className="hidden lg:block lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-2xl border-hair border-subtle bg-white p-6 shadow-card">
              <p className="caption text-teal-dark">On this page</p>
              <nav className="mt-4 space-y-1" aria-label="Page sections">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-warmgray transition-colors hover:bg-teal-light hover:text-teal-dark"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 border-t-hair border-subtle pt-6">
                <Button href="/contact" className="w-full">
                  Book This Service
                </Button>
              </div>

              <dl className="mt-6 space-y-4 border-t-hair border-subtle pt-6 text-sm">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <div>
                    <dt className="font-medium text-charcoal">Office hours</dt>
                    {Object.entries(PRACTICE.hours).map(([d, t]) => (
                      <dd key={d} className="text-warmgray">
                        {d}: {t}
                      </dd>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                  <a
                    href={PRACTICE.phoneHref}
                    className="font-medium text-teal-dark hover:text-teal"
                  >
                    {PRACTICE.phone}
                  </a>
                </div>
              </dl>
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0">
            <AnimatedSection>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-light text-teal-dark">
                  <ServiceIcon
                    name={service.icon}
                    className="h-6 w-6"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </span>
                <h2 className="text-2xl font-semibold text-charcoal sm:text-3xl">
                  {service.name}
                </h2>
              </div>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-warmgray">
                {content.intro}
              </p>
            </AnimatedSection>

            {/* What to expect */}
            <div id="what-to-expect" className="scroll-mt-28 pt-16">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">
                  What to expect
                </h3>
              </AnimatedSection>
              <div className="mt-8 space-y-px overflow-hidden rounded-2xl border-hair border-subtle bg-[rgba(0,0,0,0.06)]">
                {content.steps.map((step, i) => (
                  <AnimatedSection
                    key={step.title}
                    delay={i * 0.05}
                    className="flex gap-5 bg-white p-6"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-charcoal">
                        {step.title}
                      </h4>
                      <p className="mt-1.5 leading-relaxed text-warmgray">
                        {step.detail}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Who it's for */}
            <div id="who-its-for" className="scroll-mt-28 pt-16">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">
                  Who this is for
                </h3>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {content.forYou.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border-hair border-subtle bg-white p-5"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-teal text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Before / after */}
            <div id="before-after" className="scroll-mt-28 pt-16">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">
                  Before &amp; after
                </h3>
                <p className="mt-3 max-w-2xl text-warmgray">
                  Drag the handle to compare. Representative results. Your
                  treatment plan is tailored to you.
                </p>
                <div className="mt-8">
                  <BeforeAfter
                    beforeLabel={content.beforeLabel}
                    afterLabel={content.afterLabel}
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* FAQs */}
            <div id="faqs" className="scroll-mt-28 pt-16">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">
                  Frequently asked questions
                </h3>
                <div className="mt-8">
                  <Accordion items={content.faqs} />
                </div>
              </AnimatedSection>
            </div>

            {/* Related */}
            <div id="related" className="scroll-mt-28 pt-16">
              <AnimatedSection>
                <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">
                  Related services
                </h3>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/services/${r.slug}`}
                      className="group flex items-center gap-4 rounded-xl border-hair border-subtle bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal-light text-teal-dark">
                        <ServiceIcon
                          name={r.icon}
                          className="h-5 w-5"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-charcoal">
                          {r.name}
                        </span>
                        <span className="block truncate text-sm text-warmgray">
                          {r.tagline}
                        </span>
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-teal transition-transform group-hover:translate-x-[3px]" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Bottom booking CTA */}
            <AnimatedSection className="mt-16 overflow-hidden rounded-2xl bg-navy p-8 text-center sm:p-10">
              <h3 className="text-2xl font-semibold text-white">
                Ready to get started?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-white/70">
                Book your {service.name.toLowerCase()} appointment today.
                Same-week openings available.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" className="group w-full sm:w-auto">
                  Book an Appointment
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden="true" />
                </Button>
                <Button
                  href={PRACTICE.phoneHref}
                  variant="outline-white"
                  className="w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {PRACTICE.phone}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
