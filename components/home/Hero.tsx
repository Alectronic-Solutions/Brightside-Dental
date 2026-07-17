"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Star, CalendarCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRACTICE } from "@/lib/constants";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const HERO_CLIPS = [
  { webm: "hero-dental.webm", mp4: "hero-dental.mp4" },
  { webm: "hero-dental-2.webm", mp4: "hero-dental-2.mp4" },
  { webm: "hero-dental-3.webm", mp4: "hero-dental-3.mp4" },
] as const;

// How much of the tail of each clip to cut off by starting the crossfade early,
// so viewers never see a clip's ending — just a smooth dissolve into the next one.
const CROSSFADE_S = 1.1;

// How far ahead of the crossfade to start buffering the next clip, so it's
// ready in time without forcing every clip to load up front on page load.
const PRELOAD_LEAD_S = 4;

function HeroVideoBackground() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [activeClip, setActiveClip] = useState(0);
  const [preloadedClips, setPreloadedClips] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handleChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const current = videoRefs.current[activeClip];
    if (!current) return;

    let switching = false;

    const nextIndex = (activeClip + 1) % HERO_CLIPS.length;

    const handleTimeUpdate = () => {
      const { duration, currentTime } = current;
      if (!duration || Number.isNaN(duration)) return;

      if (!switching && duration - currentTime <= PRELOAD_LEAD_S) {
        setPreloadedClips((prev) =>
          prev.has(nextIndex) ? prev : new Set(prev).add(nextIndex),
        );
      }

      if (switching) return;
      if (duration - currentTime <= CROSSFADE_S) {
        switching = true;
        const nextVideo = videoRefs.current[nextIndex];
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(() => {});
        }
        setActiveClip(nextIndex);
        // Let the crossfade finish before resetting this clip for its next turn.
        setTimeout(() => {
          current.pause();
          current.currentTime = 0;
        }, CROSSFADE_S * 1000 + 100);
      }
    };

    current.currentTime = 0;
    current.play().catch(() => {});
    current.addEventListener("timeupdate", handleTimeUpdate);
    return () => current.removeEventListener("timeupdate", handleTimeUpdate);
  }, [reducedMotion, activeClip]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  if (reducedMotion) {
    return (
      <div ref={sectionRef} className="absolute inset-0">
        <Image
          src={`${BASE_PATH}/videos/hero-dental-poster.jpg`}
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-[0.62]"
          sizes="100vw"
        />
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-x-0 -top-[10%] h-[120%]"
        style={{ y, scale }}
      >
        {HERO_CLIPS.map((clip, index) => {
          const shouldPreload = index === activeClip || preloadedClips.has(index);
          return (
            <video
              key={clip.mp4}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              muted
              playsInline
              preload={shouldPreload ? "auto" : "none"}
              poster={
                index === 0 ? `${BASE_PATH}/videos/hero-dental-poster.jpg` : undefined
              }
              className="absolute inset-0 h-full w-full object-cover object-center transition-opacity ease-in-out"
              style={{
                opacity: index === activeClip ? 0.62 : 0,
                transitionDuration: `${CROSSFADE_S * 1000}ms`,
              }}
            >
              <source src={`${BASE_PATH}/videos/${clip.webm}`} type="video/webm" />
              <source src={`${BASE_PATH}/videos/${clip.mp4}`} type="video/mp4" />
            </video>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-grain relative overflow-hidden bg-navy pt-[68px] sm:min-h-[92vh]">
      {/* Background video (parallax) */}
      <HeroVideoBackground />

      {/* Cinematic scrim — concentrated behind the text column, easing clear over the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(9,20,40,0.97) 0%, rgba(9,20,40,0.93) 30%, rgba(9,20,40,0.75) 48%, rgba(9,20,40,0.35) 68%, rgba(9,20,40,0.08) 88%)",
        }}
      />
      {/* Bottom-up scrim for CTA/trust-bar contrast */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(9,20,40,0.95) 0%, rgba(9,20,40,0.5) 35%, rgba(9,20,40,0.15) 70%, transparent 100%)",
        }}
      />
      {/* Teal accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 82% 35%, rgba(45,158,143,0.16), transparent 65%)",
        }}
      />
      {/* Vignette for filmic depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(14,31,61,0.25) 100%)",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className="container-page relative grid items-center gap-12 pb-16 pt-12 sm:min-h-[calc(92vh-68px)] sm:pb-20 md:pt-20 lg:pb-24">
        {/* Content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="flex max-w-2xl flex-col"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex w-fit items-center rounded-md border border-teal/30 bg-teal/20 px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm">
              Lodi&apos;s Highest-Rated Dental Practice
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-4 max-w-[18ch] text-display font-bold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.45)]"
          >
            Your smile deserves more than a{" "}
            <span className="relative inline-block">
              routine checkup
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-teal via-teal to-teal/40"
              />
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[52ch] text-[0.98rem] leading-[1.75] text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:mt-7 sm:text-[1.05rem]"
          >
            No lecture about flossing, no surprise bill at checkout — just
            straightforward dental care from a team that explains what&apos;s
            happening and why. Accepting new patients now.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" className="group">
              Book an Appointment
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </Button>
            <Button href="/about" size="lg" variant="ghost">
              Meet Our Team
            </Button>
          </motion.div>

          {/* Trust stats — frosted glass bar */}
          <motion.div variants={fadeUp} className="mt-10 sm:mt-14">
            <div className="flex items-stretch divide-x divide-white/[0.12] overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.04] backdrop-blur-sm">
              <TrustStat
                icon={<Star className="h-4 w-4 fill-teal text-teal" aria-hidden="true" />}
                value={`${PRACTICE.googleRating}`}
                label="Google Rating"
              />
              <TrustStat
                icon={<CalendarCheck className="h-4 w-4 text-teal" aria-hidden="true" />}
                value={`${PRACTICE.yearsInPractice} Yrs`}
                label="In Practice"
              />
              <TrustStat
                icon={<Users className="h-4 w-4 text-teal" aria-hidden="true" />}
                value={PRACTICE.patientsServed}
                label="Patients Served"
              />
            </div>
          </motion.div>

          {/* Accepting-patients indicator */}
          <motion.div variants={fadeUp} className="mt-5 sm:mt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-navy/70 px-3.5 py-2 backdrop-blur-sm sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
              <span className="text-xs font-medium text-white/90 sm:text-white/70">
                Accepting new patients · Same-week availability
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section — darkens first so no seam shows against the video */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, #F8F9FA 0%, rgba(9,20,40,0.7) 45%, transparent 100%)",
        }}
      />
    </section>
  );
}

function TrustStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-2 px-2.5 py-4 sm:px-6 sm:py-5">
      <span className="text-[0.62rem] font-medium uppercase tracking-[0.06em] text-white/45 sm:text-[0.68rem] sm:tracking-[0.09em]">
        {label}
      </span>
      <span className="flex items-center gap-1.5 whitespace-nowrap text-base font-semibold text-white sm:gap-2 sm:text-2xl">
        {icon}
        {value}
      </span>
    </div>
  );
}
