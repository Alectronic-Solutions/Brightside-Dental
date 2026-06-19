import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "outline-white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal-dark shadow-[0_2px_8px_rgba(45,158,143,0.15)] hover:shadow-[0_8px_24px_rgba(45,158,143,0.32)] transition-shadow duration-200",
  outline:
    "border-hair border-teal text-teal hover:bg-teal-light bg-transparent",
  ghost:
    "text-white border-hair border-[rgba(255,255,255,0.25)] hover:border-[rgba(255,255,255,0.55)] hover:bg-white/5 bg-transparent",
  "outline-white":
    "border-hair border-white/70 text-white hover:bg-white hover:text-navy bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2.5 min-h-[42px]",
  md: "text-[0.95rem] px-5 py-3 min-h-[46px]",
  lg: "text-base px-7 py-3.5 min-h-[52px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type AsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type AsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

export function Button(props: AsButton | AsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as AsLink;
    // External / tel / mailto links use a plain anchor.
    const isInternal = href.startsWith("/") && !href.startsWith("//");
    if (isInternal) {
      return (
        <Link href={href} className={classes} {...(linkRest as object)}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...(linkRest as object)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
