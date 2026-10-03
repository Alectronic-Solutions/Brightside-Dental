"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface FaqJumpNavProps {
  groups: { id: string; label: string; count: number }[];
}

/**
 * Sticky category bar for the FAQ page. Highlights the group currently in
 * view and, on phones, keeps the active pill scrolled into the visible strip.
 */
export function FaqJumpNav({ groups }: FaqJumpNavProps) {
  const [active, setActive] = useState(groups[0]?.id);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = groups
      .map((g) => document.getElementById(g.id))
      .filter((el): el is HTMLElement => el !== null);

    // A group counts as active once its top passes the upper third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [groups]);

  useEffect(() => {
    const list = listRef.current;
    const pill = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !pill) return;
    // Scroll the strip only, never the page.
    const target = pill.offsetLeft - (list.clientWidth - pill.offsetWidth) / 2;
    list.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <div className="sticky top-[68px] z-30 border-b-hair border-subtle bg-white/95 backdrop-blur-sm lg:top-[100px]">
      <nav aria-label="FAQ categories" className="container-page relative">
        <div
          ref={listRef}
          className="no-scrollbar relative -mx-5 overflow-x-auto px-5 py-3 sm:mx-0 sm:px-0"
        >
          {/* w-max + mx-auto centers the row when it fits and scrolls cleanly when it doesn't */}
          <div className="mx-auto flex w-max gap-2">
            {groups.map((g) => {
              const isActive = g.id === active;
              return (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  data-id={g.id}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActive(g.id)}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-md border-hair px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "border-teal bg-teal text-white"
                      : "border-subtle text-warmgray hover:border-teal/40 hover:text-teal-dark",
                  )}
                >
                  {g.label}
                  <span
                    className={cn(
                      "text-xs tabular-nums",
                      isActive ? "text-white/75" : "text-warmgray/70",
                    )}
                  >
                    {g.count}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        {/* Edge fades hint that the strip scrolls on narrow screens */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent lg:hidden"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent lg:hidden"
        />
      </nav>
    </div>
  );
}
