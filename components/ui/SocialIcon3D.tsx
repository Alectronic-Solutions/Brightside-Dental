import { useId } from "react";

/**
 * Rendered 3D social icons in each platform's own colors, built the same way
 * as PatientIcon3D: layered SVG with gradients, extruded depth, specular
 * highlights and a soft contact shadow.
 */

export type SocialIconName = "instagram" | "facebook";

// Facebook "f", drawn on a 24 unit grid and scaled into the badge.
const FB_F =
  "M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.03.28-1.73 1.76-1.73Z";

interface SocialIcon3DProps {
  name: SocialIconName;
  className?: string;
}

export function SocialIcon3D({ name, className }: SocialIcon3DProps) {
  const id = `si${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const ref = (key: string) => `url(#${id}-${key})`;

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id={`${id}-blur-sm`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="1" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.25" />
        </linearGradient>

        {/* Instagram */}
        <radialGradient id={`${id}-ig`} cx="0.28" cy="1.02" r="1.25">
          <stop offset="0" stopColor="#FFE08A" />
          <stop offset="0.1" stopColor="#FDD574" />
          <stop offset="0.4" stopColor="#FD5949" />
          <stop offset="0.6" stopColor="#D6249F" />
          <stop offset="0.92" stopColor="#4F5BD5" />
        </radialGradient>
        <linearGradient id={`${id}-ig-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#B8471F" />
          <stop offset="0.5" stopColor="#9C1670" />
          <stop offset="1" stopColor="#3A2F94" />
        </linearGradient>
        <clipPath id={`${id}-ig-clip`}>
          <rect x="14" y="10" width="92" height="92" rx="26" />
        </clipPath>

        {/* Facebook */}
        <radialGradient id={`${id}-fb`} cx="0.35" cy="0.25" r="0.9">
          <stop offset="0" stopColor="#5AAEFF" />
          <stop offset="0.55" stopColor="#1877F2" />
          <stop offset="1" stopColor="#0B55C4" />
        </radialGradient>
        <linearGradient id={`${id}-fb-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0A4AA8" />
          <stop offset="1" stopColor="#062E6E" />
        </linearGradient>
        <clipPath id={`${id}-fb-clip`}>
          <circle cx="60" cy="56" r="46" />
        </clipPath>
      </defs>

      {name === "instagram" && <Instagram id={id} ref_={ref} />}
      {name === "facebook" && <Facebook id={id} ref_={ref} />}
    </svg>
  );
}

type RefFn = (key: string) => string;

function Instagram({ id, ref_ }: { id: string; ref_: RefFn }) {
  const glyph = (
    <>
      <rect x="34" y="30" width="52" height="52" rx="15" fill="none" strokeWidth="7" />
      <circle cx="60" cy="56" r="12.5" fill="none" strokeWidth="7" />
      <circle cx="75.5" cy="40.5" r="4.2" strokeWidth="0" />
    </>
  );
  return (
    <>
      <ellipse cx="60" cy="112" rx="42" ry="5" fill={ref_("shadow")} />
      <rect x="14" y="16" width="92" height="92" rx="26" fill={ref_("ig-side")} />
      <rect x="14" y="10" width="92" height="92" rx="26" fill={ref_("ig")} />
      <g clipPath={`url(#${id}-ig-clip)`}>
        <rect x="14" y="10" width="92" height="40" fill={ref_("gloss")} opacity="0.55" />
      </g>
      <rect x="14" y="10" width="92" height="92" rx="26" fill="none" stroke={ref_("rim")} strokeWidth="1.2" />
      {/* camera glyph */}
      <g stroke="#5A0E3E" fill="#5A0E3E" opacity="0.35" transform="translate(0 3)">
        {glyph}
      </g>
      <g stroke="#FFFFFF" fill="#FFFFFF">
        {glyph}
      </g>
      <path
        d="M22 36C22 24 28 18 40 17"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Facebook({ id, ref_ }: { id: string; ref_: RefFn }) {
  const f = "translate(19.9 25.2) scale(3.4)";
  return (
    <>
      <ellipse cx="60" cy="112" rx="40" ry="5" fill={ref_("shadow")} />
      <circle cx="60" cy="62" r="46" fill={ref_("fb-side")} />
      <circle cx="60" cy="56" r="46" fill={ref_("fb")} />
      <g clipPath={`url(#${id}-fb-clip)`}>
        <rect x="14" y="10" width="92" height="38" fill={ref_("gloss")} opacity="0.5" />
        <path d={FB_F} transform={`translate(0 3) ${f}`} fill="#06306E" opacity="0.4" />
        <path d={FB_F} transform={f} fill="#FFFFFF" />
      </g>
      <circle cx="60" cy="56" r="46" fill="none" stroke={ref_("rim")} strokeWidth="1.2" />
      <path
        d="M24 42C28 28 38 19 50 16"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        filter={ref_("blur-sm")}
      />
    </>
  );
}
