"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.22, 1, 0.36, 1] as const;

type PageHeroVariant = "default" | "centered" | "contact";

interface PageHeroProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  variant?: PageHeroVariant;
  /** Optional Unsplash/CDN image to use as a subtle background texture */
  bgImage?: { src: string; alt: string };
}

const GLOW: Record<PageHeroVariant, string> = {
  default:
    "radial-gradient(55% 60% at 70% 30%, rgba(45,158,143,0.16), rgba(14,31,61,0) 70%)",
  centered:
    "radial-gradient(60% 70% at 50% 50%, rgba(45,158,143,0.18), rgba(14,31,61,0) 75%)",
  contact:
    "radial-gradient(55% 65% at 15% 80%, rgba(45,158,143,0.22), rgba(14,31,61,0) 70%)",
};

const GRID: Record<PageHeroVariant, string> = {
  default:
    "linear-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)",
  centered:
    "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
  contact:
    "linear-gradient(rgba(255,255,255,0.7) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.7) 0.5px, transparent 0.5px)",
};

const GRID_SIZE: Record<PageHeroVariant, string> = {
  default: "48px 48px",
  centered: "24px 24px",
  contact: "48px 48px",
};

export function PageHero({
  label,
  title,
  subtitle,
  children,
  bgImage,
  variant = "default",
}: PageHeroProps) {
  const isCentered = variant === "centered";

  return (
    <section
      className="relative overflow-hidden bg-navy"
      style={
        isCentered
          ? { clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }
          : undefined
      }
    >
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

      {/* Radial teal glow — position varies by variant */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: GLOW[variant] }}
      />

      {/* Grid / dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: GRID[variant],
          backgroundSize: GRID_SIZE[variant],
        }}
      />

      {/* Contact variant — vertical teal accent bar */}
      {variant === "contact" && (
        <span
          aria-hidden
          className="absolute left-0 top-1/2 h-16 w-1 -translate-y-1/2 rounded-r-full bg-teal"
        />
      )}

      {/* Bottom fade to page bg — skip on centered (clip-path handles the cut) */}
      {variant !== "centered" && (
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-offwhite/20 to-transparent"
        />
      )}

      <div
        className={`container-page relative pb-14 pt-28 sm:pt-32 md:pb-20 md:pt-40 ${
          isCentered ? "pb-20 md:pb-28" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
        >
          {label && <SectionLabel tone="light">{label}</SectionLabel>}
          <h1 className="mt-3 text-display-sm font-bold text-white">{title}</h1>
          {subtitle && (
            <p
              className={`mt-4 text-[0.97rem] leading-[1.75] text-white/65 sm:mt-5 sm:text-[1.05rem] ${
                isCentered ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-7 sm:mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
