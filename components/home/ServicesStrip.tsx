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
  "from-[#D6F0EC] to-white",
  "from-[#E8F0FA] to-white",
  "from-[#D4E4F7] to-white",
  "from-[#EEF6F5] to-white",
];

const BORDER_COLORS = [
  "#2D9E8F",
  "#1E7268",
  "#162C52",
  "#0E1F3D",
  "#2D9E8F",
];

export function ServicesStrip() {
  return (
    <section className="bg-offwhite section-y">
      <div className="container-page">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="text-3xl text-charcoal sm:text-[2.25rem]">
            Everything your family needs under one roof
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            One trusted team for cleanings, cosmetics, implants, and
            emergencies. No referrals, no starting over.
          </p>
        </AnimatedSection>

        {/* Mobile: horizontal scroll with snap. Desktop: 5-col grid */}
        <motion.div
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
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
              className="min-w-[260px] flex-shrink-0 snap-start sm:min-w-[280px] lg:min-w-0"
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full"
              >
                <motion.article
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border-hair border-subtle bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] transition-shadow group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]"
                >
                  {/* Color gradient top band */}
                  <div
                    className={`bg-gradient-to-br ${SERVICE_COLORS[i]} h-[3px] w-full`}
                  />

                  {/* Left border accent — appears on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 top-[3px] w-[3px] rounded-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ backgroundColor: BORDER_COLORS[i] }}
                  />

                  <div className="flex flex-1 flex-col p-6">
                    <ServiceIcon
                      name={service.icon}
                      className="h-7 w-7 text-teal"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-[1.05rem] font-semibold leading-snug text-charcoal">
                      {service.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-warmgray">
                      {service.tagline}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors group-hover:text-teal-dark">
                      Learn more
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
                        aria-hidden="true"
                      />
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
