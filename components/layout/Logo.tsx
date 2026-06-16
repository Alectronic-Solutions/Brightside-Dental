import Link from "next/link";
import { cn } from "@/lib/cn";

interface LogoProps {
  /** color theme — dark text for light bg, light text for dark bg */
  variant?: "dark" | "light";
  className?: string;
}

/**
 * Brightside Dental wordmark: a small geometric teal tooth mark + the name.
 * Rendered inline so it scales crisply and recolors per surface.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const wordColor = variant === "dark" ? "text-charcoal" : "text-white";

  return (
    <Link
      href="/"
      aria-label="Brightside Dental home"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-visible:outline-none",
        className,
      )}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal/10 transition-colors group-hover:bg-teal/15">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M12 5c-1.6-1.6-3.6-2.3-5.2-1.6C5 4.1 4 6 4 8.5c0 2.3.5 3.6 1.1 5.6.4 1.4.7 3 .9 4.5.2 1.4.9 2.2 1.7 2.2.9 0 1.3-.9 1.6-2.4.3-1.6.6-3.1 1.7-3.1s1.4 1.5 1.7 3.1c.3 1.5.7 2.4 1.6 2.4.8 0 1.5-.8 1.7-2.2.2-1.5.5-3.1.9-4.5C19.5 12.1 20 10.8 20 8.5c0-2.5-1-4.4-2.8-5.1C15.6 2.7 13.6 3.4 12 5Z"
            stroke="#2D9E8F"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="16.2" cy="7.6" r="1.4" fill="#2D9E8F" />
        </svg>
      </span>
      <span
        className={cn(
          "text-[1.05rem] font-semibold tracking-tightish",
          wordColor,
        )}
      >
        Brightside{" "}
        <span className="font-normal text-warmgray">
          {variant === "light" ? (
            <span className="text-white/70">Dental</span>
          ) : (
            "Dental"
          )}
        </span>
      </span>
    </Link>
  );
}
