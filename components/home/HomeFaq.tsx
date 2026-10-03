import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Accordion } from "@/components/ui/Accordion";
import { GENERAL_FAQS } from "@/lib/faqs";

export function HomeFaq() {
  return (
    <section className="bg-offwhite section-y">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Common Questions</SectionLabel>
          <h2 className="text-balance text-3xl text-charcoal sm:text-[2.25rem]">
            Before you book
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            The questions new patients ask us most often.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <Accordion items={GENERAL_FAQS.slice(0, 4)} defaultOpen={null} />
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-8 text-center">
          <Link
            href="/faq"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
          >
            See all questions
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
              aria-hidden="true"
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
