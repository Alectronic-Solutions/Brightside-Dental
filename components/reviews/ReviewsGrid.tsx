"use client";

import { useMemo, useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/cn";

const FILTERS = [
  { id: "all", label: "All" },
  ...SERVICES.map((s) => ({ id: s.slug, label: s.name })),
];

export function ReviewsGrid() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? TESTIMONIALS
        : TESTIMONIALS.filter((t) => t.service === active),
    [active],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter reviews by service">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
            className={cn(
              "rounded-md border-hair px-4 py-2 text-sm font-medium transition-colors",
              active === f.id
                ? "border-teal bg-teal text-white"
                : "border-subtle bg-white text-warmgray hover:border-teal/40 hover:text-teal-dark",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <AnimatedSection
        key={active}
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((t, i) => (
          <ReviewCard key={`${t.name}-${i}`} t={t} />
        ))}
      </AnimatedSection>
    </div>
  );
}
