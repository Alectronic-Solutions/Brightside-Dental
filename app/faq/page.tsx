import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion, type AccordionItemData } from "@/components/ui/Accordion";
import { SERVICES } from "@/lib/constants";
import { getServiceContent } from "@/lib/service-content";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about insurance, financing, first visits, and every service we offer at Brightside Dental in Lodi, CA.",
  alternates: { canonical: "/faq" },
};

const GENERAL_FAQS: AccordionItemData[] = [
  {
    q: "What insurance do you accept?",
    a: "We're in-network with most major PPO plans, including Delta Dental, Cigna, Aetna, MetLife, BlueCross BlueShield, and United Concordia (including TRICARE Dental). We verify your benefits before you're ever billed and file claims directly, so you don't have to chase reimbursement. Don't see your plan listed? Call us — we work with most PPO plans.",
  },
  {
    q: "What if I don't have dental insurance?",
    a: "Cost should never be the reason you put off treatment. We offer CareCredit, a healthcare credit line with 0% interest for 12 months on qualifying treatment plans, plus in-house payment plans with no third party and no hard credit check — just $99 down and manageable monthly payments tailored to your treatment.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "Book online or by phone and we'll confirm within an hour. Before you arrive, we email a secure link so you can complete your paperwork without a clipboard in the waiting room. Your first appointment includes a full exam, digital X-rays, a cleaning, and a clear, written treatment plan explained in plain language, with your insurance already applied.",
  },
  {
    q: "Do you see dental emergencies?",
    a: "Yes. We keep time open every day for emergencies like a toothache, a broken tooth, or a lost crown, and same-day appointments are usually available. Call us as soon as something happens and we'll get you in.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours' notice if you need to reschedule so we can offer that time to another patient. Life happens — if something comes up last minute, just call the office and we'll work with you.",
  },
  {
    q: "Do you treat children as well as adults?",
    a: "Yes, we welcome the whole family. Many of our patients have been coming since childhood, and our hygienists are especially good with nervous first-timers of any age.",
  },
];

export default function FAQPage() {
  const serviceGroups = SERVICES.map((service) => ({
    service,
    content: getServiceContent(service.slug),
  })).filter((g) => g.content);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...GENERAL_FAQS,
      ...serviceGroups.flatMap((g) => g.content!.faqs),
    ].map((faq) => ({
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
        subtitle="Answers to what patients ask us most — about insurance and cost, your first visit, and every service we offer. Can't find what you need? Just call the office."
        bgImage={{ src: IMAGES.office.consultation.src, alt: IMAGES.office.consultation.alt }}
      />

      {/* Jump nav */}
      <div className="border-b-hair border-subtle bg-white">
        <div className="container-page">
          <nav
            aria-label="FAQ categories"
            className="no-scrollbar flex gap-2 overflow-x-auto py-4"
          >
            <a
              href="#general"
              className="shrink-0 rounded-md border-hair border-subtle px-4 py-2 text-sm font-medium text-warmgray transition-colors hover:border-teal/40 hover:text-teal-dark"
            >
              General
            </a>
            {serviceGroups.map(({ service }) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="shrink-0 rounded-md border-hair border-subtle px-4 py-2 text-sm font-medium text-warmgray transition-colors hover:border-teal/40 hover:text-teal-dark"
              >
                {service.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <section id="general" className="scroll-mt-24 bg-offwhite section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <AnimatedSection>
            <SectionLabel>General</SectionLabel>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Insurance, cost, and getting started
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Accordion items={GENERAL_FAQS} defaultOpen={null} />
          </AnimatedSection>
        </div>
      </section>

      {serviceGroups.map(({ service, content }, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 section-y ${i % 2 === 0 ? "bg-white" : "bg-offwhite"}`}
        >
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <AnimatedSection>
              <SectionLabel>{service.name}</SectionLabel>
              <h2 className="text-3xl text-charcoal sm:text-4xl">
                {service.tagline}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <Accordion items={content!.faqs} defaultOpen={null} />
            </AnimatedSection>
          </div>
        </section>
      ))}

      <CTABanner
        heading="Still have questions?"
        subtext="Call the office and we'll walk you through it — no phone tree, just a person who can actually answer."
      />
    </>
  );
}
