import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const wordColor = variant === "dark" ? "text-charcoal" : "text-white";
  const subColor = variant === "dark" ? "text-warmgray" : "text-white/60";

  return (
    <Link
      href="/"
      aria-label="Brightside Dental home"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-visible:outline-none",
        className,
      )}
    >
      {/* Inline SVG tooth mark — no emoji, no broken image */}
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect width="36" height="36" rx="9" fill={variant === "dark" ? "rgba(45,158,143,0.10)" : "rgba(45,158,143,0.18)"} className="transition-colors group-hover:opacity-125" />
        <path
          d="M18 8.5c-2.4-2.4-5.4-3.4-7.8-2.4C7.6 7.3 6 10 6 13.7c0 3.4.7 5.4 1.6 8.4.6 2.1 1.1 4.5 1.4 6.8.3 2.1 1.4 3.3 2.6 3.3 1.4 0 2-.7 2.4-3.6.5-2.4.9-4.7 2.5-4.7s2 2.3 2.5 4.7c.4 2.2 1 3.6 2.4 3.6 1.2 0 2.3-1.2 2.6-3.3.3-2.3.8-4.7 1.4-6.8.9-3 1.6-5 1.6-8.4 0-3.7-1.6-6.4-4.2-7.6C20.4 5.1 20.4 5.1 18 8.5Z"
          stroke="#2D9E8F"
          strokeWidth="1.6"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="22.5" cy="11" r="2" fill="#2D9E8F" />
      </svg>

      <span className={cn("text-[1.05rem] font-semibold tracking-tightish", wordColor)}>
        Brightside{" "}
        <span className={cn("font-normal", subColor)}>Dental</span>
      </span>
    </Link>
  );
}
