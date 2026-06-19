"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ExternalLink, Play, Pause } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/cn";
import { PRACTICE } from "@/lib/constants";

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const GoogleStars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        aria-hidden="true"
        className={cn(
          "h-4 w-4",
          i < count ? "fill-[#F9AB00] text-[#F9AB00]" : "fill-gray-200 text-gray-200",
        )}
      />
    ))}
  </div>
);

const TESTIMONIALS = [
  {
    quote: "I've been putting off dental work for years because of anxiety. Dr. Chen made the whole thing calm and judgment-free. She explained every step before doing it. I actually look forward to coming in now, which is something I never thought I'd say about a dentist.",
    name: "Sarah M.",
    location: "Lodi",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    quote: "Got a crown done in one visit with their CEREC machine. I didn't even need to take time off work. Walked in at noon, walked out at 2:30 with a permanent crown. That's just not something you expect from a dental office in Lodi.",
    name: "David R.",
    location: "Woodbridge",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    quote: "Switched to Brightside after my old dentist retired. Jordan in the front office went through my insurance line by line and actually found coverage I didn't know I had. The office looks like a spa, the team remembers your name, and there's zero pressure to do anything.",
    name: "Marisol G.",
    location: "Lodi",
    rating: 5,
    timeAgo: "3 weeks ago",
  },
];

const AUTO_INTERVAL = 7000;

const FADE = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const go = (next: number) => setIndex(next);
  const prev = () => go((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => go((index + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-white section-y">
      <div className="container-page">
        <AnimatedSection className="max-w-2xl">
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="text-3xl text-charcoal sm:text-[2.25rem]">
            What our patients are saying
          </h2>
          <p className="mt-4 text-lg text-warmgray">
            Real words from real patients. No incentives, no scripts.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-14">
          <div
            className="relative mx-auto max-w-2xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={index}
                  variants={FADE}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative flex flex-col rounded-2xl border-hair border-subtle bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.08)] sm:p-8"
                >
                  {/* Decorative large quote mark — 8% opacity teal, top-right */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-4 select-none font-serif text-[120px] leading-none text-teal"
                    style={{ opacity: 0.08 }}
                  >
                    &ldquo;
                  </span>

                  {/* Quote text */}
                  <p className="relative z-10 text-[0.97rem] leading-[1.8] text-charcoal/85 sm:text-[1.06rem] sm:leading-[1.85]">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-teal-light text-teal-dark">
                        <span className="text-base font-semibold" aria-hidden>
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">{t.name}</p>
                        <div className="flex items-center gap-1.5 text-xs text-warmgray">
                          <span>{t.location}</span>
                          <span aria-hidden>·</span>
                          <span>{t.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1.5">
                      <GoogleStars count={t.rating} />
                      <GoogleG />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-charcoal">{PRACTICE.googleRating}</span>
                <div>
                  <GoogleStars count={5} />
                  <p className="mt-0.5 text-xs text-warmgray">{PRACTICE.reviewCount} Google reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPaused((p) => !p)}
                  aria-label={paused ? "Resume auto-advance" : "Pause auto-advance"}
                  aria-pressed={paused}
                  className="grid h-10 w-10 place-items-center rounded-full border-hair border-subtle text-warmgray transition-colors hover:border-charcoal hover:text-charcoal"
                >
                  {paused ? (
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                </button>
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="grid h-10 w-10 place-items-center rounded-full border-hair border-subtle text-warmgray transition-colors hover:border-charcoal hover:text-charcoal"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="flex gap-1.5" role="tablist" aria-label="Review navigation">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === index}
                      onClick={() => go(i)}
                      aria-label={`Go to review ${i + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index ? "w-5 bg-teal" : "w-1.5 bg-subtle",
                      )}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="grid h-10 w-10 place-items-center rounded-full border-hair border-subtle text-warmgray transition-colors hover:border-charcoal hover:text-charcoal"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-5 text-center">
              <a
                href={PRACTICE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-dark transition-colors hover:text-teal"
              >
                See all reviews on Google
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
