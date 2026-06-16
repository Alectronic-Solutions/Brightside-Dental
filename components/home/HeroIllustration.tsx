"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Abstract, geometric tooth/smile illustration built entirely in SVG.
 * Not clip art — a stylized tooth silhouette with teal accent strokes,
 * orbiting accent lines, and a gentle float on the whole composition.
 */
export function HeroIllustration() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
    >
      {/* soft radial teal glow behind the mark */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(45,158,143,0.35), rgba(45,158,143,0) 62%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
      >
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="h-full w-full"
          aria-hidden
        >
          {/* concentric guide rings */}
          <circle
            cx="200"
            cy="200"
            r="168"
            stroke="rgba(45,158,143,0.18)"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="200"
            r="128"
            stroke="rgba(45,158,143,0.28)"
            strokeWidth="0.5"
          />

          {/* main tooth body — geometric facets */}
          <g>
            <path
              d="M200 96c-26-26-58-37-84-26-26 11-42 41-42 81 0 37 8 58 18 90 6 23 11 48 14 72 4 23 14 35 27 35 14 0 21-14 26-38 5-26 9-50 27-50s22 24 27 50c5 24 12 38 26 38 13 0 23-12 27-35 3-24 8-49 14-72 10-32 18-53 18-90 0-40-16-70-42-81-26-11-58 0-84 26Z"
              fill="#162C52"
              stroke="#2D9E8F"
              strokeWidth="1"
            />
            {/* inner facet highlight */}
            <path
              d="M200 132c-18-18-40-25-58-17-18 8-29 28-29 56 0 28 6 44 14 68"
              stroke="rgba(232,247,245,0.55)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M200 132c18-18 40-25 58-17 18 8 29 28 29 56 0 28-6 44-14 68"
              stroke="rgba(45,158,143,0.65)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* center seam */}
            <path
              d="M200 110v220"
              stroke="rgba(45,158,143,0.35)"
              strokeWidth="0.5"
              strokeDasharray="3 5"
            />
          </g>

          {/* sparkle accent */}
          <g stroke="#2D9E8F" strokeWidth="1.25" strokeLinecap="round">
            <path d="M300 120v22M289 131h22" />
          </g>
          <circle cx="108" cy="150" r="3" fill="#2D9E8F" />
        </svg>
      </motion.div>

      {/* orbiting accent dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        style={{ transformOrigin: "0 -150px" }}
      />

      {/* floating rating chip */}
      <motion.div
        className="absolute -left-2 top-12 rounded-xl border-hair border-subtle-dark bg-navy-mid/90 px-4 py-3 shadow-card backdrop-blur"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
      >
        <p className="text-xs font-medium text-teal-light">Google Rating</p>
        <p className="text-lg font-semibold text-white">4.9 ★</p>
      </motion.div>

      {/* floating "accepting patients" chip */}
      <motion.div
        className="absolute -right-1 bottom-16 flex items-center gap-2 rounded-xl border-hair border-subtle-dark bg-navy-mid/90 px-4 py-3 shadow-card backdrop-blur"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
        </span>
        <p className="text-xs font-medium text-white">Accepting new patients</p>
      </motion.div>
    </motion.div>
  );
}
