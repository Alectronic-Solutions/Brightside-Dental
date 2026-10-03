import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion } from "@/components/ui/Accordion";
import { FaqJumpNav } from "@/components/faq/FaqJumpNav";
import { SERVICES } from "@/lib/constants";
import { getServiceContent } from "@/lib/service-content";
import { IMAGES } from "@/lib/images";
import { GENERAL_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about insurance, financing, first visits, and every service we offer at Brightside Dental in Sacramento, CA.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  const serviceGroups = SERVICES.map((service) => ({
    service,
    content: getServiceContent(service.slug),
  })).filter((g) => g.content);

  const groups = [
    {
      id: "general",
      label: "General",
      title: "Insurance, cost, and getting started",
      href: null,
      items: GENERAL_FAQS,
    },
    ...serviceGroups.map(({ service, content }) => ({
      id: service.slug,
      label: service.name,
      title: service.tagline,
      href: `/services/${service.slug}`,
      items: content!.faqs,
    })),
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) => g.items).map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        label="FAQ"
        title="Frequently asked questions"
        subtitle="Answers to the questions patients ask us most about insurance, cost, first visits, and each of our services. If yours isn't here, call the office."
        bgImage={IMAGES.office.consultation.src}
      />

      <FaqJumpNav
        groups={groups.map(({ id, label, items }) => ({
          id,
          label,
          count: items.length,
        }))}
      />

      <div className="bg-offwhite py-14 sm:py-20 md:py-24">
        <div className="container-page grid gap-20 sm:gap-28">
          {groups.map(({ id, label, title, href, items }) => (
            <section
              key={id}
              id={id}
              aria-labelledby={`${id}-heading`}
              className="scroll-mt-24"
            >
              <AnimatedSection className="mx-auto max-w-2xl text-center">
                <SectionLabel className="justify-center">{label}</SectionLabel>
                <h2
                  id={`${id}-heading`}
                  className="text-balance text-2xl text-charcoal sm:text-3xl md:text-4xl"
                >
                  {title}
                </h2>
                {href && (
                  <Link
                    href={href}
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
                  >
                    More about {label}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </AnimatedSection>
              <AnimatedSection
                delay={0.1}
                className="mx-auto mt-8 w-full max-w-3xl sm:mt-10"
              >
                <Accordion items={items} defaultOpen={null} align="center" />
              </AnimatedSection>
            </section>
          ))}
        </div>
      </div>

      <CTABanner
        heading="Still have questions?"
        subtext="Call the office and someone at our front desk will walk you through it."
      />
    </>
  );
}
