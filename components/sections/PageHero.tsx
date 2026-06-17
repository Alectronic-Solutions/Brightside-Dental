"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PageHeroProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  /** Optional Unsplash/CDN image to use as a subtle background texture */
  bgImage?: { src: string; alt: string };
}

export function PageHero({ label, title, subtitle, children, bgImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Optional background photo at low opacity */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage.src}
            alt={bgImage.alt}
            fill
            priority
            quality={80}
            className="object-cover object-center opacity-[0.14]"
            sizes="100vw"
          />
        </div>
      )}

      {/* Radial teal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 70% 30%, rgba(45,158,143,0.16), rgba(14,31,61,0) 70%)",
        }}
      />

      {/* Faint grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Bottom fade to page bg */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-offwhite/20 to-transparent"
      />

      <div className="container-page relative pb-14 pt-28 sm:pt-32 md:pb-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-3xl"
        >
          {label && <SectionLabel tone="light">{label}</SectionLabel>}
          <h1 className="display mt-3 text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.25rem] md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-[0.97rem] leading-[1.75] text-white/65 sm:mt-5 sm:text-[1.05rem]">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7 sm:mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
