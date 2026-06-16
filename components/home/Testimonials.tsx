"use client";

import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/cn";
import { PRACTICE } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const TESTIMONIALS = [
  {
    quote:
      "I have been putting off dental work for years out of anxiety. Dr. Chen made the entire process calming and judgment-free. I actually look forward to coming in now.",
    name: "Sarah M.",
    location: "Lodi",
    initials: "SM",
    dark: false,
  },
  {
    quote:
      "Got a crown done in one visit with their CEREC machine. I did not even need to take time off work. That is just not something you expect from a dental office.",
    name: "David R.",
    location: "Woodbridge",
    initials: "DR",
    dark: true,
  },
  {
    quote:
      "Switched to Brightside after my old dentist retired, and honestly it is the best thing that came from that. The office feels more like a spa than a clinic.",
    name: "Marisol G.",
    location: "Lodi",
    initials: "MG",
    dark: false,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white section-y">
      <div className="container-page">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="text-3xl text-charcoal sm:text-4xl">
            What our patients are saying
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            Real words from real patients. No incentives, no scripts.
          </p>
        </AnimatedSection>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE },
                },
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={cn(
                "flex flex-col rounded-2xl border-hair p-7 shadow-card transition-shadow hover:shadow-card-hover",
                t.dark
                  ? "border-subtle-dark bg-navy md:-mt-8"
                  : "border-subtle bg-white",
              )}
            >
              <div className="flex items-start justify-between">
                <Quote
                  className={cn(
                    "h-8 w-8",
                    t.dark ? "text-teal" : "text-teal/35",
                  )}
                  strokeWidth={1.5}
                />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-teal text-teal"
                    />
                  ))}
                </div>
              </div>

              <blockquote
                className={cn(
                  "mt-5 flex-1 text-[1.05rem] leading-[1.75]",
                  t.dark ? "text-white/88" : "text-charcoal",
                )}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3.5 border-t-hair pt-5"
                style={{
                  borderTopColor: t.dark
                    ? "rgba(255,255,255,0.10)"
                    : "rgba(0,0,0,0.08)",
                }}
              >
                {/* Avatar with initials */}
                <div
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold",
                    t.dark
                      ? "bg-teal/20 text-teal-light"
                      : "bg-teal-light text-teal-dark",
                  )}
                >
                  {t.initials}
                </div>
                <div>
                  <span
                    className={cn(
                      "block text-sm font-semibold",
                      t.dark ? "text-white" : "text-charcoal",
                    )}
                  >
                    {t.name}
                  </span>
                  <span
                    className={cn(
                      "block text-xs",
                      t.dark ? "text-white/55" : "text-warmgray",
                    )}
                  >
                    {t.location}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Google reviews badge row */}
        <AnimatedSection
          delay={0.15}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <div className="inline-flex items-center gap-3 rounded-xl border-hair border-subtle bg-offwhite px-5 py-3">
            {/* Google G mark */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden
              className="shrink-0"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div>
              <span className="block text-xs font-medium uppercase tracking-wide text-warmgray">
                Google Reviews
              </span>
              <span className="block text-sm font-semibold text-charcoal">
                {PRACTICE.googleRating} / 5.0 &nbsp;&middot;&nbsp; {PRACTICE.reviewCount} reviews
              </span>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-teal text-teal" />
              ))}
            </div>
          </div>

          <a
            href={PRACTICE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
          >
            Read all {PRACTICE.reviewCount} reviews
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
