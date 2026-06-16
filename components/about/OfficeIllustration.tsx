"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Abstract geometric "calm office" illustration — layered panels suggesting a
 * reception desk, a window with plants, and a treatment chair, all in the
 * brand palette. Built in SVG, no clip art.
 */
export function OfficeIllustration() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[460px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <svg viewBox="0 0 460 380" fill="none" className="w-full" aria-hidden>
        {/* back wall panel */}
        <rect
          x="20"
          y="20"
          width="420"
          height="300"
          rx="20"
          fill="#F8F9FA"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="0.5"
        />

        {/* window */}
        <rect x="52" y="52" width="150" height="120" rx="10" fill="#E8F7F5" />
        <line x1="127" y1="52" x2="127" y2="172" stroke="#2D9E8F" strokeWidth="0.5" opacity="0.5" />
        <line x1="52" y1="112" x2="202" y2="112" stroke="#2D9E8F" strokeWidth="0.5" opacity="0.5" />

        {/* sun */}
        <circle cx="170" cy="86" r="14" fill="#2D9E8F" opacity="0.85" />

        {/* plant */}
        <g>
          <rect x="232" y="128" width="34" height="44" rx="5" fill="#162C52" />
          <path
            d="M249 128c-10-8-12-26-4-38 4 12 8 18 10 28"
            stroke="#2D9E8F"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M249 128c8-6 14-22 8-36-6 10-12 16-12 26"
            stroke="#1E7268"
            strokeWidth="1"
            fill="none"
          />
        </g>

        {/* framed art */}
        <rect x="300" y="60" width="110" height="84" rx="8" fill="#fff" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
        <path d="M312 128l24-30 18 18 14-16 22 28z" fill="#E8F7F5" />
        <circle cx="386" cy="80" r="7" fill="#2D9E8F" opacity="0.7" />

        {/* reception desk / counter */}
        <rect x="40" y="210" width="380" height="80" rx="14" fill="#162C52" />
        <rect x="40" y="210" width="380" height="26" rx="13" fill="#0E1F3D" />
        {/* monitor on desk */}
        <rect x="300" y="178" width="64" height="40" rx="6" fill="#0E1F3D" stroke="#2D9E8F" strokeWidth="0.5" />
        <rect x="326" y="218" width="12" height="6" fill="#0E1F3D" />

        {/* teal accent line on counter */}
        <rect x="60" y="250" width="120" height="6" rx="3" fill="#2D9E8F" opacity="0.6" />
      </svg>

      {/* floating "since 2006" chip */}
      <motion.div
        className="absolute -bottom-4 left-2 rounded-xl border-hair border-subtle bg-white px-4 py-3 shadow-card sm:left-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
      >
        <p className="text-xs font-medium text-warmgray">Serving Lodi since</p>
        <p className="text-xl font-semibold text-teal-dark">2006</p>
      </motion.div>
    </motion.div>
  );
}
