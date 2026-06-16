"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICE_COLORS = [
  "from-[#E8F7F5] to-white",
  "from-[#EEF2FF] to-white",
  "from-[#FFF7ED] to-white",
  "from-[#F0FDF4] to-white",
  "from-[#FDF2F8] to-white",
];

export function ServicesStrip() {
  return (
    <section className="bg-offwhite section-y">
      <div className="container-page">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-3xl text-charcoal sm:text-4xl">
            Everything your family needs under one roof
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            One trusted team for cleanings, cosmetics, implants, and
            emergencies. No referrals, no starting over.
          </p>
        </AnimatedSection>

        {/* Card grid */}
        <motion.div
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="min-w-[240px] flex-1 snap-start lg:min-w-0"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full"
              >
                <motion.article
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border-hair border-subtle bg-white shadow-card transition-shadow group-hover:shadow-card-hover"
                >
                  {/* Color gradient top band */}
                  <div
                    className={`bg-gradient-to-br ${SERVICE_COLORS[i]} h-2 w-full`}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon sits bare on the card, no box */}
                    <ServiceIcon
                      name={service.icon}
                      className="h-7 w-7 text-teal"
                      strokeWidth={1.6}
                    />
                    <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-charcoal">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-warmgray">
                      {service.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors group-hover:text-teal-dark">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
