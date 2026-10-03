import { useId } from "react";
import type { ServiceIcon as ServiceIconName } from "@/lib/constants";

/**
 * Rendered 3D service icons, drawn as layered SVG (gradients, specular
 * highlights, extruded depth and a soft contact shadow) so they sit directly
 * on the page with no tile or circle behind them.
 */

const TOOTH =
  "M60 30C52 22 42 18 33 21C22 25 17 36 18 49C19 60 23 67 26 76C28 84 29 93 32 100C34 105 40 106 42 100C45 92 46 80 52 76C55 74 58 73 60 73C62 73 65 74 68 76C74 80 75 92 78 100C80 106 86 105 88 100C91 93 92 84 94 76C97 67 101 60 102 49C103 36 98 25 87 21C78 18 68 22 60 30Z";

const CROWN =
  "M60 22C53 15 44 12 37 15C29 19 27 28 28 37C29 44 32 49 36 52Q60 57 84 52C88 49 91 44 92 37C93 28 91 19 83 15C76 12 67 15 60 22Z";

const ARCH =
  "M18 84C17 48 36 22 60 22C84 22 103 48 102 84C102 89 86 89 86 84C86 58 75 40 60 40C45 40 34 58 34 84C34 89 18 89 18 84Z";

const PLUS = "M82 66h12v10h10v12h-10v10h-12v-10h-10v-12h10Z";

// Tooth imprints along the aligner arch: [x, y, angle, scale]
const ARCH_TEETH: [number, number, number, number][] = [
  [26.2, 76.7, -86, 1.25],
  [29.3, 58.9, -73, 1.15],
  [36.1, 44.8, -55, 1],
  [44.7, 35.9, -35, 0.9],
  [54.2, 31.6, -13, 0.85],
  [65.8, 31.6, 13, 0.85],
  [75.3, 35.9, 35, 0.9],
  [83.9, 44.8, 55, 1],
  [90.7, 58.9, 73, 1.15],
  [93.8, 76.7, 86, 1.25],
];

interface ServiceIcon3DProps {
  name: ServiceIconName;
  className?: string;
}

export function ServiceIcon3D({ name, className }: ServiceIcon3DProps) {
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
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
        <filter id={`${id}-blur-md`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        <filter id={`${id}-blur-lg`} x="-50%" y="-100%" width="200%" height="300%">
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0" stopColor="#0E1F3D" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0E1F3D" stopOpacity="0" />
        </radialGradient>

        {/* Porcelain */}
        <radialGradient id={`${id}-porcelain`} cx="0.36" cy="0.26" r="0.86">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#F2F8F8" />
          <stop offset="0.78" stopColor="#CFE2E4" />
          <stop offset="1" stopColor="#97BABF" />
        </radialGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#6E979D" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id={`${id}-bounce`} cx="0.5" cy="1" r="0.6">
          <stop offset="0" stopColor="#2D9E8F" stopOpacity="0.45" />
          <stop offset="1" stopColor="#2D9E8F" stopOpacity="0" />
        </radialGradient>

        {/* Teal gem facets, lit from the upper left */}
        <linearGradient id={`${id}-gem-1`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D8FBF5" />
          <stop offset="1" stopColor="#7FDCCF" />
        </linearGradient>
        <linearGradient id={`${id}-gem-2`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8FE6DA" />
          <stop offset="1" stopColor="#3DB5A4" />
        </linearGradient>
        <linearGradient id={`${id}-gem-3`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3DB5A4" />
          <stop offset="1" stopColor="#21806F" />
        </linearGradient>
        <linearGradient id={`${id}-gem-4`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1E7268" />
          <stop offset="1" stopColor="#0F4A44" />
        </linearGradient>

        {/* Brushed titanium */}
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#56626E" />
          <stop offset="0.28" stopColor="#C9D3DB" />
          <stop offset="0.4" stopColor="#F7FAFC" />
          <stop offset="0.62" stopColor="#9EABB6" />
          <stop offset="1" stopColor="#46525E" />
        </linearGradient>
        <linearGradient id={`${id}-metal-dark`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3A444E" />
          <stop offset="0.4" stopColor="#8A97A3" />
          <stop offset="1" stopColor="#2E3740" />
        </linearGradient>

        {/* Clear aligner */}
        <linearGradient id={`${id}-glass`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="0.55" stopColor="#E3F6F3" stopOpacity="0.92" />
          <stop offset="1" stopColor="#A9E0D8" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`${id}-glass-side`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6CC7BA" stopOpacity="0.85" />
          <stop offset="1" stopColor="#1E7268" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id={`${id}-imprint`} cx="0.4" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#C4E9E3" />
        </radialGradient>

        {/* Coral cross */}
        <linearGradient id={`${id}-coral`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF9D8C" />
          <stop offset="0.55" stopColor="#F2614E" />
          <stop offset="1" stopColor="#D2402F" />
        </linearGradient>

        <clipPath id={`${id}-tooth-clip`}>
          <path d={TOOTH} />
        </clipPath>
        <clipPath id={`${id}-crown-clip`}>
          <path d={CROWN} />
        </clipPath>
      </defs>

      {name === "tooth" && <Tooth id={id} ref_={ref} />}

      {name === "sparkles" && (
        <>
          <ellipse cx="54" cy="108" rx="26" ry="5" fill={ref("shadow")} />
          <Gem cx={54} cy={58} h={42} w={36} waist={8} ref_={ref} />
          <Gem cx={93} cy={24} h={14} w={11} waist={3} ref_={ref} />
          <Gem cx={95} cy={84} h={8} w={6.5} waist={1.8} ref_={ref} />
          <circle
            cx="49"
            cy="44"
            r="4"
            fill="#FFFFFF"
            opacity="0.9"
            filter={ref("blur-sm")}
          />
        </>
      )}

      {name === "anchor" && (
        <>
          <ellipse cx="60" cy="110" rx="18" ry="4" fill={ref("shadow")} />
          {/* screw core */}
          <path
            d="M47 60h26l-4 38c-.5 5-3.5 8-9 8s-8.5-3-9-8Z"
            fill={ref("metal-dark")}
          />
          {/* threads, tapering toward the tip */}
          {[64, 71, 78, 85, 92, 99].map((y, i) => {
            const half = 17 - i * 1.6;
            return (
              <g key={y}>
                <path
                  d={`M${60 - half} ${y + 2.4}L${60 + half} ${y - 1.2}a2.1 2.1 0 0 1 0 4.2L${60 - half} ${y + 6.6}a2.1 2.1 0 0 1 0-4.2Z`}
                  fill={ref("metal")}
                />
                <path
                  d={`M${60 - half + 1} ${y + 2.6}L${60 + half - 1} ${y - 0.8}`}
                  stroke="#FFFFFF"
                  strokeOpacity="0.55"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
          {/* abutment collar */}
          <rect x="45" y="51" width="30" height="10" rx="3" fill={ref("metal")} />
          <rect x="47" y="52" width="26" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.6" />
          {/* crown */}
          <path d={CROWN} fill={ref("porcelain")} />
          <g clipPath={ref("crown-clip")}>
            <ellipse cx="60" cy="58" rx="30" ry="9" fill={ref("bounce")} />
            <path
              d="M60 22C60 30 59 34 57 38"
              stroke="#8FB3B8"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
              filter={ref("blur-sm")}
            />
          </g>
          <path d={CROWN} fill="none" stroke={ref("rim")} strokeWidth="1" />
          <path
            d="M34 34C34 25 38 19 44 18"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter={ref("blur-sm")}
          />
        </>
      )}

      {name === "smile" && (
        <>
          <ellipse cx="60" cy="102" rx="40" ry="5" fill={ref("shadow")} />
          {/* tray wall */}
          <path d={ARCH} transform="translate(0 8)" fill={ref("glass-side")} />
          <path
            d={ARCH}
            transform="translate(0 4)"
            fill="#4FB3A5"
            opacity="0.55"
          />
          {/* tray top */}
          <path d={ARCH} fill={ref("glass")} />
          {ARCH_TEETH.map(([x, y, a, s]) => (
            <g key={`${x}-${y}`} transform={`translate(${x} ${y}) rotate(${a}) scale(${s})`}>
              <ellipse rx="4.6" ry="3.3" fill={ref("imprint")} stroke="#2D9E8F" strokeOpacity="0.28" strokeWidth="0.6" />
              <ellipse cx="-1.2" cy="-1" rx="1.8" ry="1" fill="#FFFFFF" opacity="0.95" />
            </g>
          ))}
          <path d={ARCH} fill="none" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="0.8" />
          <path
            d="M22 70C23 46 38 27 58 25"
            stroke="#FFFFFF"
            strokeWidth="2.6"
            strokeLinecap="round"
            fill="none"
            filter={ref("blur-sm")}
          />
        </>
      )}

      {name === "zap" && (
        <>
          <g transform="translate(4 8) scale(0.8)">
            <Tooth id={id} ref_={ref} />
            {/* crack */}
            <path
              d="M60 30L55 43L64 52L56 66"
              stroke="#5E848A"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M61.4 31L56.6 43.2L65.4 52.2L57.6 66.4"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.9"
            />
          </g>
          {/* coral cross */}
          <ellipse cx="88" cy="108" rx="15" ry="3.5" fill={ref("shadow")} />
          <path
            d={PLUS}
            transform="translate(0 5)"
            fill="#A93324"
            stroke="#A93324"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d={PLUS}
            fill={ref("coral")}
            stroke={ref("coral")}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M84 72V77M76 80H86"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.75"
            filter={ref("blur-sm")}
          />
        </>
      )}
    </svg>
  );
}

type RefFn = (key: string) => string;

function Tooth({ id, ref_ }: { id: string; ref_: RefFn }) {
  return (
    <>
      <ellipse cx="60" cy="108" rx="30" ry="5" fill={ref_("shadow")} />
      <path d={TOOTH} fill={ref_("porcelain")} />
      <g clipPath={`url(#${id}-tooth-clip)`}>
        {/* teal bounce light on the roots */}
        <ellipse cx="60" cy="112" rx="40" ry="26" fill={ref_("bounce")} />
        {/* groove between the cusps */}
        <path
          d="M60 30C60 37 59 42 56 47"
          stroke="#8FB3B8"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
          filter={ref_("blur-sm")}
        />
        {/* shade down the right side */}
        <path
          d="M98 30C104 48 96 66 90 84"
          stroke="#7FA4AA"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
          filter={ref_("blur-md")}
        />
      </g>
      <path d={TOOTH} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {/* specular highlights */}
      <path
        d="M25 50C24 38 29 28 38 26"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter={ref_("blur-sm")}
      />
      <ellipse
        cx="80"
        cy="30"
        rx="6"
        ry="3"
        transform="rotate(-20 80 30)"
        fill="#FFFFFF"
        opacity="0.85"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Gem({
  cx,
  cy,
  h,
  w,
  waist,
  ref_,
}: {
  cx: number;
  cy: number;
  h: number;
  w: number;
  waist: number;
  ref_: RefFn;
}) {
  const T = `${cx} ${cy - h}`;
  const B = `${cx} ${cy + h}`;
  const L = `${cx - w} ${cy}`;
  const R = `${cx + w} ${cy}`;
  const C = `${cx} ${cy}`;
  const tl = `${cx - waist} ${cy - waist}`;
  const tr = `${cx + waist} ${cy - waist}`;
  const br = `${cx + waist} ${cy + waist}`;
  const bl = `${cx - waist} ${cy + waist}`;
  const facets: [string, string][] = [
    [`M${C}L${T}L${tl}Z`, "gem-1"],
    [`M${C}L${T}L${tr}Z`, "gem-2"],
    [`M${C}L${R}L${tr}Z`, "gem-2"],
    [`M${C}L${R}L${br}Z`, "gem-4"],
    [`M${C}L${B}L${br}Z`, "gem-4"],
    [`M${C}L${B}L${bl}Z`, "gem-3"],
    [`M${C}L${L}L${bl}Z`, "gem-3"],
    [`M${C}L${L}L${tl}Z`, "gem-1"],
  ];
  return (
    <g strokeLinejoin="round">
      {facets.map(([d, fill]) => (
        <path key={d} d={d} fill={ref_(fill)} stroke={ref_(fill)} strokeWidth="0.6" />
      ))}
    </g>
  );
}
