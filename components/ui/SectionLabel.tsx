import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: string;
  className?: string;
  /** lighten for dark backgrounds */
  tone?: "teal" | "light";
}

/**
 * A small uppercase tracking label rendered as a plain <p> — deliberately NOT
 * a floating pill above headings. Used as an eyebrow that sits inline with the
 * surrounding type rather than as a separate badge.
 */
export function SectionLabel({
  children,
  className,
  tone = "teal",
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "caption mb-3 flex items-center gap-2",
        tone === "teal" ? "text-teal-dark" : "text-teal",
        className,
      )}
    >
      {children}
    </p>
  );
}
