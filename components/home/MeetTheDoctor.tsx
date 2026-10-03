import Image from "next/image";
import { ArrowRight, GraduationCap, Award, HeartPulse } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";
import { PRACTICE } from "@/lib/constants";

const CREDENTIALS = [
  { Icon: GraduationCap, text: "DDS, UC San Francisco School of Dentistry" },
  { Icon: Award, text: "Member, American and California Dental Associations" },
  { Icon: HeartPulse, text: `${PRACTICE.yearsInPractice} years treating families in Sacramento` },
];

export function MeetTheDoctor() {
  return (
    <section className="bg-white section-y">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <AnimatedSection className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_2px_4px_rgba(14,31,61,0.04),0_24px_56px_-16px_rgba(14,31,61,0.3)]">
            <Image
              src={IMAGES.team.drChen.src}
              alt={IMAGES.team.drChen.alt}
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          {/* Founded badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl border-hair border-subtle bg-white px-5 py-3 text-center shadow-card lg:left-auto lg:right-6 lg:translate-x-0">
            <p className="text-2xl font-semibold text-teal-dark">{PRACTICE.founded}</p>
            <p className="text-xs font-medium text-warmgray">Opened Brightside</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="text-center lg:text-left">
          <SectionLabel className="justify-center lg:justify-start">Meet Your Dentist</SectionLabel>
          <h2 className="text-balance text-3xl text-charcoal sm:text-[2.25rem]">
            Dr. Angela Chen
          </h2>
          <p className="mt-2 font-medium text-teal-dark">Lead Dentist and Founder</p>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warmgray lg:mx-0">
            Dr. Chen opened Brightside in {PRACTICE.founded} and still sees
            patients here four days a week. She prefers conservative treatment,
            shows you your X-rays and photos before recommending anything, and
            calls patients herself the evening after a major procedure.
          </p>

          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left lg:mx-0">
            {CREDENTIALS.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-charcoal/80">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-light text-teal-dark">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/about#team" variant="outline" className="group w-full sm:w-auto">
              Meet the Whole Team
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden="true" />
            </Button>
            <Button href="/contact" className="w-full sm:w-auto">
              Book With Dr. Chen
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
