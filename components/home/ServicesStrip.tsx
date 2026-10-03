"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SERVICES, type Service } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;
const MAX_TILT = 7; // degrees

const SERVICE_IMAGES: Record<string, { card: string; alt: string }> = {
  "general-dentistry": IMAGES.services.general,
  "cosmetic-dentistry": IMAGES.services.cosmetic,
  "dental-implants": IMAGES.services.implants,
  invisalign: IMAGES.services.invisalign,
  "emergency-dentistry": IMAGES.services.emergency,
};

// Layered navy-tinted shadows read as real depth rather than a flat grey blur.
const SHADOW_REST =
  "inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 1px rgba(14,31,61,0.04), 0 3px 6px rgba(14,31,61,0.05), 0 12px 24px -6px rgba(14,31,61,0.10), 0 24px 48px -16px rgba(14,31,61,0.14)";
const SHADOW_HOVER =
  "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 2px rgba(14,31,61,0.04), 0 8px 16px rgba(14,31,61,0.06), 0 24px 40px -8px rgba(14,31,61,0.16), 0 40px 72px -20px rgba(14,31,61,0.24)";

function ServiceCard({ service }: { service: Service }) {
  const reduceMotion = useReducedMotion();
  const image = SERVICE_IMAGES[service.slug];

  // Pointer position within the card, normalised to 0..1 (0.5 = centre).
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT, -MAX_TILT]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT, MAX_TILT]), spring);
  const imageX = useSpring(useTransform(px, [0, 1], [8, -8]), spring);
  const imageY = useSpring(useTransform(py, [0, 1], [6, -6]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.38), rgba(255,255,255,0) 45%)`;

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full rounded-2xl [perspective:1100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4 focus-visible:ring-offset-offwhite"
    >
      <motion.article
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={
          reduceMotion
            ? { boxShadow: SHADOW_REST }
            : { rotateX, rotateY, transformStyle: "preserve-3d", boxShadow: SHADOW_REST }
        }
        whileHover={
          reduceMotion
            ? { boxShadow: SHADOW_HOVER }
            : { y: -6, boxShadow: SHADOW_HOVER, transition: { duration: 0.25, ease: EASE } }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        className="relative flex h-full flex-col rounded-2xl border-hair border-subtle bg-white"
      >
        {/* Photo: lifts off the card surface and drifts against the tilt */}
        <div
          className="relative m-2 mb-0 aspect-[4/3] overflow-hidden rounded-xl bg-teal-light shadow-[0_6px_16px_-6px_rgba(14,31,61,0.35)]"
          style={reduceMotion ? undefined : { transform: "translateZ(28px)" }}
        >
          <motion.div
            className="absolute -inset-3"
            style={reduceMotion ? undefined : { x: imageX, y: imageY }}
          >
            <Image
              src={image.card}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 220px, 280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
          </motion.div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl ring-[0.5px] ring-inset ring-white/30"
          />
        </div>

        <div
          className="flex flex-1 flex-col items-center px-5 pb-6 pt-5 text-center">
          <h3 className="text-[1.05rem] font-semibold leading-snug text-charcoal">
            {service.name}
          </h3>
          <p className="mt-2 max-w-[24ch] flex-1 text-sm leading-relaxed text-warmgray">
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

        {/* Specular glare that follows the cursor */}
        {!reduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
            style={{ backgroundImage: glare, transform: "translateZ(40px)" }}
          />
        )}
      </motion.article>
    </Link>
  );
}

export function ServicesStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Mobile carousel: track which card is centred so the dots stay in sync.
  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - centre);
      if (distance < best) {
        best = distance;
        closest = i;
      }
    });
    setActive(closest);
  }

  function scrollToCard(i: number) {
    const track = trackRef.current;
    const el = track?.children[i] as HTMLElement | undefined;
    if (!track || !el) return;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-offwhite section-y">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <SectionLabel className="justify-center">Our Services</SectionLabel>
          <h2 className="text-balance text-[1.875rem] leading-tight text-charcoal sm:text-[2.25rem]">
            Dental care for the whole family, in one office
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-warmgray sm:text-lg">
            Cleanings, cosmetic work, implants, Invisalign, and emergency
            visits are all handled by the same team, so you rarely need a
            referral.
          </p>
        </AnimatedSection>

        {/* Phones: centred swipe carousel with a peek of the neighbouring cards.
            Tablets: centred wrapping grid. Desktop: single row of five.
            Extra vertical padding keeps the deep card shadows from being clipped. */}
        <motion.div
          ref={trackRef}
          onScroll={handleScroll}
          aria-label="Our services"
          className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc((100vw-min(78vw,320px))/2)] pb-10 pt-4 sm:mx-0 sm:mt-12 sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-4 lg:grid lg:grid-cols-5 lg:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
        >
          {SERVICES.map((service) => (
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
              className="w-[min(78vw,320px)] flex-shrink-0 snap-center sm:w-[calc(50%-12px)] md:w-[calc((100%-48px)/3)] lg:w-auto"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel position: phones only */}
        <div className="flex justify-center gap-1 sm:hidden">
          {SERVICES.map((service, i) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => scrollToCard(i)}
              aria-label={`Show ${service.name}`}
              aria-current={active === i ? "true" : undefined}
              className="grid h-8 w-8 place-items-center"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  active === i ? "w-6 bg-teal" : "w-1.5 bg-charcoal/20"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-center sm:mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal-dark"
          >
            Compare all services
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
