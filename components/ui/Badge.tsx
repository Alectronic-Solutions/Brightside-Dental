import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** muted variant for dark backgrounds */
  tone?: "teal" | "dark";
}

export function Badge({ children, className, tone = "teal" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium",
        tone === "teal"
          ? "bg-teal-light text-teal-dark"
          : "border-hair border-[rgba(255,255,255,0.16)] bg-white/5 text-teal-light",
        className,
      )}
    >
      {children}
    </span>
  );
}
