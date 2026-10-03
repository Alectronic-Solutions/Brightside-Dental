import { useId } from "react";

/**
 * Rendered 3D icons for the contact page, built the same way as
 * ServiceIcon3D: layered SVG with gradients, extruded depth, specular
 * highlights and a soft contact shadow, so each one sits directly on the
 * page with no tile or circle behind it.
 */

export type ContactIconName = "phone" | "mail" | "clock" | "pin";

// Telephone handset drawn upright around the origin, cups facing left.
const HANDSET =
  "M18 -36Q26 0 18 36a8 8 0 0 1-8 8L-6 44a8 8 0 0 1-8-8L-14 26a6 6 0 0 1 6-6L4 20Q10 0 4 -20L-8 -20a6 6 0 0 1-6-6L-14 -36a8 8 0 0 1 8-8L10 -44a8 8 0 0 1 8 8Z";

const ENVELOPE_FRONT =
  "M14 56L60 83L106 56V94a10 10 0 0 1-10 10H24a10 10 0 0 1-10-10Z";

const PIN =
  "M60 100C54 88 31 69 31 46A29 29 0 0 1 89 46C89 69 66 88 60 100Z";

interface ContactIcon3DProps {
  name: ContactIconName;
  className?: string;
}

export function ContactIcon3D({ name, className }: ContactIcon3DProps) {
  const id = `ci${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
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
        <radialGradient id={`${id}-shadow`}>
          <stop offset="0" stopColor="#0E1F3D" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0E1F3D" stopOpacity="0" />
        </radialGradient>

        {/* Porcelain */}
        <radialGradient id={`${id}-porcelain`} cx="0.32" cy="0.22" r="0.95">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.5" stopColor="#F2F8F8" />
          <stop offset="0.82" stopColor="#D6E7E9" />
          <stop offset="1" stopColor="#A9C7CB" />
        </radialGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#6E979D" stopOpacity="0.5" />
        </linearGradient>

        {/* Glossy teal */}
        <linearGradient id={`${id}-teal`} x1="0.1" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#7FE0D2" />
          <stop offset="0.45" stopColor="#35AE9D" />
          <stop offset="1" stopColor="#1E7268" />
        </linearGradient>
        <linearGradient id={`${id}-teal-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#17645B" />
          <stop offset="1" stopColor="#0C3F3A" />
        </linearGradient>
        <linearGradient id={`${id}-teal-inside`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1E7268" />
          <stop offset="1" stopColor="#0F4A44" />
        </linearGradient>

        {/* Brushed metal */}
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

        {/* Coral */}
        <linearGradient id={`${id}-coral`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF9D8C" />
          <stop offset="0.55" stopColor="#F2614E" />
          <stop offset="1" stopColor="#D2402F" />
        </linearGradient>

        <clipPath id={`${id}-pin-clip`}>
          <path d={PIN} />
        </clipPath>
        <clipPath id={`${id}-pocket-clip`}>
          <path d={ENVELOPE_FRONT} />
        </clipPath>
      </defs>

      {name === "phone" && <Phone ref_={ref} />}
      {name === "mail" && <Mail id={id} ref_={ref} />}
      {name === "clock" && <Clock ref_={ref} />}
      {name === "pin" && <Pin id={id} ref_={ref} />}
    </svg>
  );
}

type RefFn = (key: string) => string;

function Phone({ ref_ }: { ref_: RefFn }) {
  const handset = "translate(56 60) rotate(-45) scale(1.08)";
  const waves = [
    "M65.8 25.3A38 38 0 0 1 92.7 52.2",
    "M68.9 13.7A50 50 0 0 1 104.3 49.1",
  ];
  return (
    <>
      <ellipse cx="56" cy="108" rx="34" ry="5" fill={ref_("shadow")} />
      {/* ringing waves */}
      {waves.map((d) => (
        <g key={d}>
          <path d={d} stroke="#0C3F3A" strokeOpacity="0.55" strokeWidth="7" strokeLinecap="round" fill="none" transform="translate(0 3)" />
          <path d={d} stroke={ref_("teal")} strokeWidth="7" strokeLinecap="round" fill="none" />
        </g>
      ))}
      {/* handset */}
      <path d={HANDSET} transform={`translate(0 6) ${handset}`} fill={ref_("teal-side")} />
      <path d={HANDSET} transform={handset} fill={ref_("teal")} />
      <path d={HANDSET} transform={handset} fill="none" stroke={ref_("rim")} strokeWidth="0.9" />
      <g transform={handset}>
        {/* glints on the earpiece and along the handle */}
        <path
          d="M-8 -39H9"
          stroke="#FFFFFF"
          strokeWidth="3.4"
          strokeLinecap="round"
          opacity="0.75"
          filter={ref_("blur-sm")}
        />
        <path
          d="M14 -26Q18 0 14 24"
          stroke="#FFFFFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
          filter={ref_("blur-sm")}
        />
      </g>
    </>
  );
}

function Mail({ id, ref_ }: { id: string; ref_: RefFn }) {
  return (
    <>
      <ellipse cx="60" cy="110" rx="44" ry="5" fill={ref_("shadow")} />
      {/* envelope back and open flap */}
      <rect x="14" y="44" width="92" height="60" rx="10" fill={ref_("teal-inside")} />
      <path
        d="M17 50L60 20L103 50Z"
        fill={ref_("teal-inside")}
        stroke="#1E7268"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* letter */}
      <rect x="28" y="28" width="64" height="62" rx="5" fill="#0C3F3A" opacity="0.35" filter={ref_("blur-sm")} />
      <rect x="28" y="26" width="64" height="62" rx="5" fill={ref_("porcelain")} />
      <rect x="36" y="35" width="30" height="5" rx="2.5" fill="#2D9E8F" opacity="0.85" />
      <rect x="36" y="45" width="48" height="3.6" rx="1.8" fill="#C9DEE0" />
      <rect x="36" y="53" width="40" height="3.6" rx="1.8" fill="#DDEBEC" />
      {/* front pocket */}
      <path d={ENVELOPE_FRONT} fill={ref_("teal-side")} transform="translate(0 4)" />
      <path d={ENVELOPE_FRONT} fill={ref_("teal")} />
      <g clipPath={`url(#${id}-pocket-clip)`}>
        <path d="M14 56L60 83L60 104H14Z" fill="#FFFFFF" opacity="0.1" />
      </g>
      <path d={ENVELOPE_FRONT} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      <path
        d="M18 59L60 84L102 59"
        stroke="#FFFFFF"
        strokeOpacity="0.55"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M19 68V94"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Clock({ ref_ }: { ref_: RefFn }) {
  const cx = 60;
  const cy = 62;
  const at = (deg: number, r: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
  };
  const hands: [number, number, number, string][] = [
    [300, 15, 4.6, "#0E1F3D"],
    [60, 22, 3.4, "#0E1F3D"],
  ];
  return (
    <>
      <ellipse cx="60" cy="110" rx="34" ry="5" fill={ref_("shadow")} />
      {/* feet */}
      <path d="M40 92L32 105M80 92L88 105" stroke="#2E3740" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 92L32 105M80 92L88 105" stroke={ref_("metal-dark")} strokeWidth="4.4" strokeLinecap="round" />
      {/* bells and handle */}
      <path d="M43 22Q60 12 77 22" stroke={ref_("metal-dark")} strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M22 37a14 14 0 0 1 28 0Z" transform="rotate(-38 36 37)" fill={ref_("metal")} />
      <path d="M70 37a14 14 0 0 1 28 0Z" transform="rotate(38 84 37)" fill={ref_("metal")} />
      {/* body */}
      <circle cx={cx} cy={cy + 5} r="38" fill={ref_("teal-side")} />
      <circle cx={cx} cy={cy} r="38" fill={ref_("teal")} />
      <circle cx={cx} cy={cy} r="38" fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {/* face */}
      <circle cx={cx} cy={cy + 1.5} r="30" fill="#0C3F3A" opacity="0.45" filter={ref_("blur-sm")} />
      <circle cx={cx} cy={cy} r="30" fill={ref_("porcelain")} />
      {Array.from({ length: 12 }, (_, i) => {
        const major = i % 3 === 0;
        return (
          <path
            key={i}
            d={`M${at(i * 30, major ? 25 : 26)}L${at(i * 30, major ? 20 : 23.5)}`}
            stroke={major ? "#1E7268" : "#9DBDC1"}
            strokeWidth={major ? 3 : 2}
            strokeLinecap="round"
          />
        );
      })}
      {/* hands */}
      {hands.map(([deg, len, w, color]) => (
        <g key={deg}>
          <path
            d={`M${cx} ${cy}L${at(deg, len)}`}
            stroke="#0E1F3D"
            strokeOpacity="0.2"
            strokeWidth={w}
            strokeLinecap="round"
            transform="translate(1 1.6)"
          />
          <path d={`M${cx} ${cy}L${at(deg, len)}`} stroke={color} strokeWidth={w} strokeLinecap="round" />
        </g>
      ))}
      <path d={`M${at(200, 6)}L${at(20, 24)}`} stroke={ref_("coral")} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="4" fill={ref_("coral")} />
      <circle cx={cx - 1} cy={cy - 1.2} r="1.3" fill="#FFFFFF" opacity="0.8" />
      {/* glass and body highlights */}
      <path
        d="M36 50A27 27 0 0 1 52 36"
        stroke="#FFFFFF"
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
        filter={ref_("blur-sm")}
      />
      <path
        d="M26 54A35 35 0 0 1 40 32"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Pin({ id, ref_ }: { id: string; ref_: RefFn }) {
  return (
    <>
      {/* ripple on the ground */}
      <ellipse cx="60" cy="100" rx="40" ry="10" fill="#2D9E8F" opacity="0.14" />
      <ellipse cx="60" cy="100" rx="26" ry="6.4" fill="none" stroke="#2D9E8F" strokeOpacity="0.4" strokeWidth="1.4" />
      <ellipse cx="60" cy="101" rx="13" ry="3.4" fill={ref_("shadow")} />
      {/* pin */}
      <path d={PIN} fill={ref_("teal-side")} transform="translate(3.5 3)" />
      <path d={PIN} fill={ref_("teal")} />
      <g clipPath={`url(#${id}-pin-clip)`}>
        <path
          d="M86 34C92 56 78 78 64 94"
          stroke="#0C3F3A"
          strokeWidth="9"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
          filter={ref_("blur-md")}
        />
      </g>
      <path d={PIN} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {/* porcelain center */}
      <circle cx="60" cy="47.5" r="12.5" fill="#0C3F3A" opacity="0.55" />
      <circle cx="60" cy="46" r="11.5" fill={ref_("porcelain")} />
      <ellipse cx="56.5" cy="42" rx="4" ry="2.2" fill="#FFFFFF" opacity="0.9" filter={ref_("blur-sm")} />
      <path
        d="M37 40C39 30 45 24 53 21"
        stroke="#FFFFFF"
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
        filter={ref_("blur-sm")}
      />
    </>
  );
}
