import { useId } from "react";

/**
 * Rendered 3D icons for the new patient page, built the same way as
 * ServiceIcon3D: layered SVG with gradients, extruded depth, specular
 * highlights and a soft contact shadow, so each one sits directly on the
 * page with no tile or circle behind it.
 */

export type PatientIconName =
  | "calendar"
  | "clipboard"
  | "exam"
  | "reminder"
  | "shield"
  | "card"
  | "coins"
  | "lock"
  | "folder"
  | "receipt"
  | "chat";

const TOOTH =
  "M60 30C52 22 42 18 33 21C22 25 17 36 18 49C19 60 23 67 26 76C28 84 29 93 32 100C34 105 40 106 42 100C45 92 46 80 52 76C55 74 58 73 60 73C62 73 65 74 68 76C74 80 75 92 78 100C80 106 86 105 88 100C91 93 92 84 94 76C97 67 101 60 102 49C103 36 98 25 87 21C78 18 68 22 60 30Z";

const SHIELD =
  "M60 12C71 19 83 23 97 24C98 58 91 85 60 105C29 85 22 58 23 24C37 23 49 19 60 12Z";

const FOLDER_BACK =
  "M16 34a8 8 0 0 1 8-8h20.5a6 6 0 0 1 4.6 2.2L54 34h42a8 8 0 0 1 8 8v52a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8Z";

const FOLDER_FRONT =
  "M12 54a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8.6l-3.4 40A8 8 0 0 1 96.6 102H23.4a8 8 0 0 1-8-7.4Z";

const BUBBLE_BACK =
  "M60 20h34a14 14 0 0 1 14 14v12a14 14 0 0 1-12 13.9V70L85 60H60a14 14 0 0 1-14-14V34a14 14 0 0 1 14-14Z";

const BUBBLE_FRONT =
  "M26 42h38a14 14 0 0 1 14 14v16a14 14 0 0 1-14 14H38l-14 12v-12.4A14 14 0 0 1 12 72V56a14 14 0 0 1 14-14Z";

const PHONE_BUBBLE =
  "M64 32h34a12 12 0 0 1 12 12v10a12 12 0 0 1-12 12H74l-12 9v-9.6A12 12 0 0 1 52 54V44a12 12 0 0 1 12-12Z";

// Receipt with a torn, zigzag bottom edge.
const RECEIPT = (() => {
  const left = 26;
  const right = 86;
  const bottom = 100;
  const teeth = 6;
  const step = (right - left) / teeth;
  let d = `M${left + 6} 14H${right - 6}a6 6 0 0 1 6 6V${bottom}`;
  for (let i = 0; i < teeth; i++) {
    const x = right - step * (i + 0.5);
    d += `L${x.toFixed(2)} ${bottom - 6}L${(right - step * (i + 1)).toFixed(2)} ${bottom}`;
  }
  d += `V20a6 6 0 0 1 6-6Z`;
  return d;
})();

const CHECK = "M-5.5 0.5L-1.6 4.4L5.6 -3.6";

interface PatientIcon3DProps {
  name: PatientIconName;
  className?: string;
}

export function PatientIcon3D({ name, className }: PatientIcon3DProps) {
  const id = `pi${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
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
        <linearGradient id={`${id}-porcelain-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A6C4C8" />
          <stop offset="1" stopColor="#7A9FA5" />
        </linearGradient>
        <linearGradient id={`${id}-rim`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#6E979D" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id={`${id}-bounce`} cx="0.5" cy="1" r="0.6">
          <stop offset="0" stopColor="#2D9E8F" stopOpacity="0.4" />
          <stop offset="1" stopColor="#2D9E8F" stopOpacity="0" />
        </radialGradient>

        {/* Glossy teal */}
        <linearGradient id={`${id}-teal`} x1="0.1" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#7FE0D2" />
          <stop offset="0.45" stopColor="#35AE9D" />
          <stop offset="1" stopColor="#1E7268" />
        </linearGradient>
        <linearGradient id={`${id}-teal-soft`} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#B4F0E7" />
          <stop offset="1" stopColor="#4CBCAC" />
        </linearGradient>
        <linearGradient id={`${id}-teal-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#17645B" />
          <stop offset="1" stopColor="#0C3F3A" />
        </linearGradient>

        {/* Navy */}
        <linearGradient id={`${id}-navy`} x1="0.1" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#35598F" />
          <stop offset="0.5" stopColor="#1A3461" />
          <stop offset="1" stopColor="#0E1F3D" />
        </linearGradient>
        <linearGradient id={`${id}-navy-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0B1932" />
          <stop offset="1" stopColor="#050C1B" />
        </linearGradient>
        <linearGradient id={`${id}-screen`} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0" stopColor="#1E6F76" />
          <stop offset="0.55" stopColor="#123F5C" />
          <stop offset="1" stopColor="#0B1F3B" />
        </linearGradient>

        {/* Brushed metal */}
        <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#56626E" />
          <stop offset="0.28" stopColor="#C9D3DB" />
          <stop offset="0.4" stopColor="#F7FAFC" />
          <stop offset="0.62" stopColor="#9EABB6" />
          <stop offset="1" stopColor="#46525E" />
        </linearGradient>
        <linearGradient id={`${id}-metal-v`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F7FAFC" />
          <stop offset="0.45" stopColor="#B7C3CD" />
          <stop offset="1" stopColor="#5B6774" />
        </linearGradient>
        <linearGradient id={`${id}-metal-dark`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3A444E" />
          <stop offset="0.4" stopColor="#8A97A3" />
          <stop offset="1" stopColor="#2E3740" />
        </linearGradient>
        <radialGradient id={`${id}-mirror`} cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#F4FFFD" />
          <stop offset="0.45" stopColor="#A7E3DA" />
          <stop offset="1" stopColor="#2F7F80" />
        </radialGradient>

        {/* Gold */}
        <linearGradient id={`${id}-gold`} x1="0.1" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#FFF3C9" />
          <stop offset="0.5" stopColor="#F4C65E" />
          <stop offset="1" stopColor="#CC8D22" />
        </linearGradient>
        <linearGradient id={`${id}-gold-side`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8E5C10" />
          <stop offset="0.3" stopColor="#E6AE3E" />
          <stop offset="0.45" stopColor="#FBD98A" />
          <stop offset="0.7" stopColor="#C88A1F" />
          <stop offset="1" stopColor="#7C4F0C" />
        </linearGradient>

        {/* Coral */}
        <linearGradient id={`${id}-coral`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF9D8C" />
          <stop offset="0.55" stopColor="#F2614E" />
          <stop offset="1" stopColor="#D2402F" />
        </linearGradient>

        {/* Top-down gloss for flat faces */}
        <linearGradient id={`${id}-gloss`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        <clipPath id={`${id}-cal-clip`}>
          <rect x="16" y="24" width="88" height="76" rx="14" />
        </clipPath>
        <clipPath id={`${id}-tooth-clip`}>
          <path d={TOOTH} />
        </clipPath>
        <clipPath id={`${id}-card-clip`}>
          <rect x="14" y="46" width="82" height="52" rx="8" />
        </clipPath>
        <clipPath id={`${id}-screen-clip`}>
          <rect x="31" y="21" width="42" height="78" rx="8" />
        </clipPath>
      </defs>

      {name === "calendar" && <Calendar id={id} ref_={ref} />}
      {name === "clipboard" && <Clipboard ref_={ref} />}
      {name === "exam" && <Exam id={id} ref_={ref} />}
      {name === "reminder" && <Reminder id={id} ref_={ref} />}
      {name === "shield" && <Shield ref_={ref} />}
      {name === "card" && <Card id={id} ref_={ref} />}
      {name === "coins" && <Coins ref_={ref} />}
      {name === "lock" && <Lock ref_={ref} />}
      {name === "folder" && <Folder ref_={ref} />}
      {name === "receipt" && <Receipt ref_={ref} />}
      {name === "chat" && <Chat ref_={ref} />}
    </svg>
  );
}

type RefFn = (key: string) => string;

/** A raised round badge with a check mark, used on several icons. */
function CheckBadge({
  cx,
  cy,
  r,
  ref_,
  fill = "teal",
}: {
  cx: number;
  cy: number;
  r: number;
  ref_: RefFn;
  fill?: "teal" | "coral";
}) {
  const s = r / 9;
  return (
    <g>
      <circle cx={cx} cy={cy + r * 0.28} r={r} fill={fill === "teal" ? "#0C3F3A" : "#A93324"} />
      <circle cx={cx} cy={cy} r={r} fill={ref_(fill)} />
      <ellipse
        cx={cx - r * 0.25}
        cy={cy - r * 0.45}
        rx={r * 0.55}
        ry={r * 0.3}
        fill="#FFFFFF"
        opacity="0.45"
        filter={ref_("blur-sm")}
      />
      <path
        d={CHECK}
        transform={`translate(${cx} ${cy}) scale(${s})`}
        stroke="#FFFFFF"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
  );
}

function Calendar({ id, ref_ }: { id: string; ref_: RefFn }) {
  const cells: [number, number][] = [];
  [58, 71, 84].forEach((y) => [28, 44, 60, 76].forEach((x) => cells.push([x, y])));
  return (
    <>
      <ellipse cx="60" cy="110" rx="40" ry="5" fill={ref_("shadow")} />
      <rect x="16" y="31" width="88" height="76" rx="14" fill={ref_("porcelain-side")} />
      <rect x="16" y="24" width="88" height="76" rx="14" fill={ref_("porcelain")} />
      <g clipPath={`url(#${id}-cal-clip)`}>
        <rect x="16" y="24" width="88" height="24" fill={ref_("teal")} />
        <rect x="16" y="46" width="88" height="2.5" fill="#0C3F3A" opacity="0.28" />
        <rect x="16" y="24" width="88" height="12" fill={ref_("gloss")} opacity="0.7" />
        <ellipse cx="60" cy="104" rx="46" ry="16" fill={ref_("bounce")} />
      </g>
      {cells.map(([x, y]) =>
        x === 60 && y === 71 ? null : (
          <rect key={`${x}-${y}`} x={x} y={y} width="16" height="9" rx="3" fill="#D9EBEC" />
        ),
      )}
      <CheckBadge cx={68} cy={74} r={9.5} ref_={ref_} />
      <rect x="16" y="24" width="88" height="76" rx="14" fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {/* binder rings */}
      {[40, 80].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="33" rx="4.6" ry="3.4" fill="#0C3F3A" />
          <rect x={x - 3.5} y="13" width="7" height="22" rx="3.5" fill={ref_("metal")} />
        </g>
      ))}
      <path
        d="M21 58V88"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Clipboard({ ref_ }: { ref_: RefFn }) {
  const rows = [44, 60, 76];
  return (
    <>
      <ellipse cx="60" cy="110" rx="34" ry="5" fill={ref_("shadow")} />
      <rect x="24" y="22" width="72" height="84" rx="12" fill={ref_("teal-side")} />
      <rect x="24" y="16" width="72" height="84" rx="12" fill={ref_("teal")} />
      <rect x="24" y="16" width="72" height="84" rx="12" fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {/* paper */}
      <rect x="32" y="30" width="56" height="64" rx="5" fill="#0C3F3A" opacity="0.4" filter={ref_("blur-sm")} />
      <rect x="32" y="28" width="56" height="64" rx="5" fill={ref_("porcelain")} />
      {rows.map((y, i) => (
        <g key={y}>
          {i < 2 ? (
            <CheckBadge cx={42} cy={y} r={5} ref_={ref_} />
          ) : (
            <circle cx="42" cy={y} r="5" fill="none" stroke="#9DBDC1" strokeWidth="1.6" />
          )}
          <rect x="51" y={y - 4} width="29" height="4" rx="2" fill="#C9DEE0" />
          <rect x="51" y={y + 2} width="18" height="3" rx="1.5" fill="#DDEBEC" />
        </g>
      ))}
      {/* clip */}
      <rect x="42" y="11" width="36" height="15" rx="6" fill="#0C3F3A" opacity="0.45" transform="translate(0 2)" />
      <rect x="42" y="10" width="36" height="15" rx="6" fill={ref_("metal")} />
      <rect x="44.5" y="11.4" width="31" height="1.6" rx="0.8" fill="#FFFFFF" opacity="0.7" />
      <rect x="53" y="4" width="14" height="10" rx="5" fill="none" stroke={ref_("metal-v")} strokeWidth="3" />
      <path
        d="M28 34V86"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Exam({ id, ref_ }: { id: string; ref_: RefFn }) {
  return (
    <>
      <ellipse cx="54" cy="108" rx="30" ry="5" fill={ref_("shadow")} />
      <g transform="translate(4 10) scale(0.8)">
        <path d={TOOTH} fill={ref_("porcelain")} />
        <g clipPath={`url(#${id}-tooth-clip)`}>
          <ellipse cx="60" cy="112" rx="40" ry="26" fill={ref_("bounce")} />
          <path
            d="M60 30C60 37 59 42 56 47"
            stroke="#8FB3B8"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
            filter={ref_("blur-sm")}
          />
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
        <path
          d="M25 50C24 38 29 28 38 26"
          stroke="#FFFFFF"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          filter={ref_("blur-sm")}
        />
      </g>
      {/* dental mirror */}
      <ellipse cx="104" cy="112" rx="9" ry="2.5" fill={ref_("shadow")} />
      <path d="M91 82L109 108" stroke="#2E3740" strokeWidth="7" strokeLinecap="round" transform="translate(1 1.5)" />
      <path d="M91 82L109 108" stroke={ref_("metal")} strokeWidth="7" strokeLinecap="round" />
      <path d="M93 86L106 104.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M82 70L92 84" stroke={ref_("metal-v")} strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="64" r="15" fill={ref_("metal-dark")} transform="translate(1.2 2)" />
      <circle cx="80" cy="64" r="15" fill={ref_("metal")} />
      <circle cx="80" cy="64" r="12" fill={ref_("mirror")} />
      <path
        d="M72 58C74 54 78 52 82 52"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Reminder({ id, ref_ }: { id: string; ref_: RefFn }) {
  return (
    <>
      <ellipse cx="58" cy="110" rx="32" ry="5" fill={ref_("shadow")} />
      {/* phone */}
      <rect x="31" y="19" width="50" height="88" rx="13" fill={ref_("navy-side")} transform="translate(-4 0)" />
      <rect x="27" y="15" width="50" height="88" rx="13" fill={ref_("navy")} />
      <rect x="27" y="15" width="50" height="88" rx="13" fill="none" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="0.8" />
      <rect x="31" y="21" width="42" height="78" rx="8" fill={ref_("screen")} />
      <g clipPath={`url(#${id}-screen-clip)`}>
        <path d="M31 21H73L31 70Z" fill="#FFFFFF" opacity="0.08" />
        <rect x="37" y="80" width="22" height="4" rx="2" fill="#7FE0D2" opacity="0.3" />
        <rect x="37" y="88" width="14" height="4" rx="2" fill="#7FE0D2" opacity="0.2" />
      </g>
      <rect x="45" y="22" width="14" height="3.6" rx="1.8" fill="#050C1B" />
      {/* message bubble */}
      <path d={PHONE_BUBBLE} fill={ref_("porcelain-side")} transform="translate(0 5)" />
      <path d={PHONE_BUBBLE} fill={ref_("porcelain")} />
      <path d={PHONE_BUBBLE} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {[68, 81, 94].map((x) => (
        <g key={x}>
          <circle cx={x} cy="50" r="4.2" fill="#17645B" transform="translate(0 1)" />
          <circle cx={x} cy="49" r="4.2" fill={ref_("teal")} />
        </g>
      ))}
      {/* notification dot */}
      <circle cx="98" cy="30" r="7.5" fill="#A93324" transform="translate(0 2)" />
      <circle cx="98" cy="30" r="7.5" fill={ref_("coral")} />
      <ellipse cx="96" cy="27" rx="3.5" ry="2" fill="#FFFFFF" opacity="0.55" filter={ref_("blur-sm")} />
    </>
  );
}

function Shield({ ref_ }: { ref_: RefFn }) {
  return (
    <>
      <ellipse cx="60" cy="112" rx="30" ry="5" fill={ref_("shadow")} />
      <path d={SHIELD} fill={ref_("teal-side")} transform="translate(0 6)" />
      <path d={SHIELD} fill={ref_("teal")} />
      <path
        d={SHIELD}
        transform="translate(60 56) scale(0.8) translate(-60 -56)"
        fill={ref_("teal-soft")}
        stroke="#FFFFFF"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path d={SHIELD} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      <path
        d="M43 57L54 68L77 44"
        stroke="#0C3F3A"
        strokeOpacity="0.45"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="translate(0 3.5)"
      />
      <path
        d="M43 57L54 68L77 44"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M30 30C30 58 36 76 52 90"
        stroke="#FFFFFF"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Card({ id, ref_ }: { id: string; ref_: RefFn }) {
  return (
    <>
      <ellipse cx="58" cy="108" rx="42" ry="5" fill={ref_("shadow")} />
      <g transform="rotate(-12 60 66)">
        {/* card behind */}
        <rect x="26" y="34" width="82" height="52" rx="8" fill={ref_("navy-side")} transform="translate(0 4)" />
        <rect x="26" y="30" width="82" height="52" rx="8" fill={ref_("navy")} />
        <rect x="26" y="40" width="82" height="9" fill="#050C1B" opacity="0.65" />
        {/* front card */}
        <rect x="14" y="51" width="82" height="52" rx="8" fill={ref_("teal-side")} />
        <rect x="14" y="46" width="82" height="52" rx="8" fill={ref_("teal")} />
        <g clipPath={`url(#${id}-card-clip)`}>
          <path d="M14 46H70L40 98H14Z" fill="#FFFFFF" opacity="0.12" />
        </g>
        <rect x="14" y="46" width="82" height="52" rx="8" fill="none" stroke={ref_("rim")} strokeWidth="1" />
        {/* chip */}
        <rect x="24" y="58" width="17" height="13" rx="3" fill="#8E5C10" transform="translate(0 1)" />
        <rect x="24" y="58" width="17" height="13" rx="3" fill={ref_("gold")} />
        <path d="M24 64.5H41M32.5 58V71" stroke="#B57A17" strokeWidth="0.8" />
        {/* number and brand marks */}
        <rect x="24" y="80" width="12" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />
        <rect x="39" y="80" width="12" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />
        <rect x="54" y="80" width="12" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />
        <circle cx="78" cy="64" r="6" fill="#FFFFFF" opacity="0.55" />
        <circle cx="86" cy="64" r="6" fill="#FFFFFF" opacity="0.3" />
        <path
          d="M18 56C24 50 40 49 52 49"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
          filter={ref_("blur-sm")}
        />
      </g>
    </>
  );
}

/** One stack of coins, drawn from the bottom up. */
function CoinStack({
  cx,
  base,
  count,
  ref_,
}: {
  cx: number;
  base: number;
  count: number;
  ref_: RefFn;
}) {
  const rx = 13;
  const ry = 4.6;
  const t = 5;
  const step = 6.4;
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        const y = base - i * step;
        const side = `M${cx - rx} ${y}V${y + t}A${rx} ${ry} 0 0 0 ${cx + rx} ${y + t}V${y}Z`;
        return (
          <g key={i}>
            <path d={side} fill={ref_("gold-side")} />
            <ellipse cx={cx} cy={y} rx={rx} ry={ry} fill={ref_("gold")} />
            {i === count - 1 && (
              <>
                <ellipse
                  cx={cx}
                  cy={y}
                  rx={rx * 0.66}
                  ry={ry * 0.62}
                  fill="none"
                  stroke="#B57A17"
                  strokeOpacity="0.55"
                  strokeWidth="0.9"
                />
                <ellipse
                  cx={cx - 4}
                  cy={y - 1.4}
                  rx="4"
                  ry="1.3"
                  fill="#FFFFFF"
                  opacity="0.8"
                  filter={ref_("blur-sm")}
                />
              </>
            )}
          </g>
        );
      })}
    </g>
  );
}

function Coins({ ref_ }: { ref_: RefFn }) {
  return (
    <>
      <ellipse cx="60" cy="104" rx="46" ry="5.5" fill={ref_("shadow")} />
      <CoinStack cx={33} base={92} count={3} ref_={ref_} />
      <CoinStack cx={60} base={92} count={6} ref_={ref_} />
      <CoinStack cx={87} base={92} count={9} ref_={ref_} />
      {/* coin dropping onto the tallest stack */}
      <g transform="rotate(-24 88 26)">
        <ellipse cx="88" cy="29" rx="13" ry="13" fill="#8E5C10" />
        <ellipse cx="88" cy="26" rx="13" ry="13" fill={ref_("gold")} />
        <circle cx="88" cy="26" r="8.6" fill="none" stroke="#B57A17" strokeOpacity="0.6" strokeWidth="1" />
        <ellipse cx="84" cy="20" rx="4.5" ry="2.4" fill="#FFFFFF" opacity="0.75" filter={ref_("blur-sm")} />
      </g>
    </>
  );
}

function Lock({ ref_ }: { ref_: RefFn }) {
  return (
    <>
      <ellipse cx="60" cy="110" rx="32" ry="5" fill={ref_("shadow")} />
      {/* shackle */}
      <path
        d="M41 56V40a19 19 0 0 1 38 0V56"
        stroke="#2E3740"
        strokeWidth="9"
        fill="none"
        transform="translate(1.5 2)"
      />
      <path d="M41 56V40a19 19 0 0 1 38 0V56" stroke={ref_("metal")} strokeWidth="9" fill="none" />
      <path
        d="M44 40a16 16 0 0 1 10-14.6"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      {/* body */}
      <rect x="26" y="56" width="68" height="48" rx="12" fill={ref_("teal-side")} transform="translate(0 5)" />
      <rect x="26" y="52" width="68" height="48" rx="12" fill={ref_("teal")} />
      <rect x="26" y="52" width="68" height="16" rx="12" fill={ref_("gloss")} opacity="0.6" />
      <rect x="26" y="52" width="68" height="48" rx="12" fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {/* keyhole */}
      <g transform="translate(0 1)" fill="#FFFFFF" opacity="0.4">
        <circle cx="60" cy="72" r="6.5" />
        <rect x="57" y="74" width="6" height="14" rx="3" />
      </g>
      <circle cx="60" cy="72" r="6.5" fill="#0B2F3A" />
      <rect x="57" y="74" width="6" height="14" rx="3" fill="#0B2F3A" />
      <path
        d="M31 62V92"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Folder({ ref_ }: { ref_: RefFn }) {
  return (
    <>
      <ellipse cx="60" cy="110" rx="44" ry="5" fill={ref_("shadow")} />
      <path d={FOLDER_BACK} fill={ref_("teal-side")} />
      {/* x-ray film */}
      <g transform="rotate(6 66 52)">
        <rect x="40" y="18" width="52" height="50" rx="4" fill="#0B1932" />
        <rect x="40" y="18" width="52" height="50" rx="4" fill="none" stroke="#FFFFFF" strokeOpacity="0.2" />
        <path
          d={TOOTH}
          transform="translate(52 24) scale(0.24)"
          fill="#E6F4F3"
          opacity="0.85"
        />
        <path
          d={TOOTH}
          transform="translate(68 26) scale(0.22)"
          fill="#E6F4F3"
          opacity="0.6"
        />
      </g>
      {/* paper */}
      <g transform="rotate(-5 46 54)">
        <rect x="24" y="24" width="50" height="56" rx="4" fill={ref_("porcelain")} />
        <rect x="31" y="33" width="30" height="3.6" rx="1.8" fill="#C9DEE0" />
        <rect x="31" y="41" width="22" height="3" rx="1.5" fill="#DDEBEC" />
      </g>
      <path d={FOLDER_FRONT} fill="#0C3F3A" opacity="0.4" transform="translate(0 -2)" filter={ref_("blur-sm")} />
      <path d={FOLDER_FRONT} fill={ref_("teal")} />
      <path d={FOLDER_FRONT} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      <path
        d="M20 50H100"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Receipt({ ref_ }: { ref_: RefFn }) {
  return (
    <>
      <ellipse cx="62" cy="110" rx="36" ry="5" fill={ref_("shadow")} />
      <path d={RECEIPT} fill={ref_("porcelain-side")} transform="translate(3 3)" />
      <path d={RECEIPT} fill={ref_("porcelain")} />
      <path d={RECEIPT} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {[30, 42, 54].map((y) => (
        <g key={y}>
          <rect x="35" y={y} width="26" height="4" rx="2" fill="#C9DEE0" />
          <rect x="67" y={y} width="11" height="4" rx="2" fill="#C9DEE0" />
        </g>
      ))}
      <rect x="35" y="66" width="43" height="1" fill="#B8D0D3" />
      <rect x="35" y="73" width="18" height="5" rx="2.5" fill="#1E7268" opacity="0.8" />
      <rect x="64" y="73" width="14" height="5" rx="2.5" fill="#1E7268" opacity="0.8" />
      <CheckBadge cx={88} cy={88} r={14} ref_={ref_} />
      <path
        d="M30 24V80"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
        filter={ref_("blur-sm")}
      />
    </>
  );
}

function Chat({ ref_ }: { ref_: RefFn }) {
  return (
    <>
      <ellipse cx="58" cy="110" rx="40" ry="5" fill={ref_("shadow")} />
      {/* reply bubble */}
      <path d={BUBBLE_BACK} fill={ref_("porcelain-side")} transform="translate(0 5)" />
      <path d={BUBBLE_BACK} fill={ref_("porcelain")} />
      <path d={BUBBLE_BACK} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      <rect x="58" y="32" width="36" height="4" rx="2" fill="#C9DEE0" />
      <rect x="58" y="41" width="24" height="4" rx="2" fill="#DDEBEC" />
      {/* patient bubble */}
      <path d={BUBBLE_FRONT} fill={ref_("teal-side")} transform="translate(0 6)" />
      <path d={BUBBLE_FRONT} fill={ref_("teal")} />
      <path d={BUBBLE_FRONT} fill="none" stroke={ref_("rim")} strokeWidth="1" />
      {[30, 45, 60].map((x) => (
        <g key={x}>
          <circle cx={x} cy="65" r="4.6" fill="#0C3F3A" opacity="0.4" transform="translate(0 1.2)" />
          <circle cx={x} cy="64" r="4.6" fill="#FFFFFF" />
        </g>
      ))}
      <path
        d="M18 56C20 49 25 46 32 46"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
        filter={ref_("blur-sm")}
      />
    </>
  );
}
