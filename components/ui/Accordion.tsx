"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/cn";

export interface AccordionItemData {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  /** index open by default, or null for all closed */
  defaultOpen?: number | null;
  /** "center" renders each item as a centered card instead of a ruled list */
  align?: "left" | "center";
}

export function Accordion({
  items,
  defaultOpen = 0,
  align = "left",
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const centered = align === "center";

  return (
    <div
      className={
        centered
          ? "grid gap-3"
          : "divide-y divide-[rgba(0,0,0,0.08)] border-y-hair border-subtle"
      }
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={cn(
              centered &&
                "rounded-xl border-hair bg-white transition-shadow duration-300",
              centered &&
                (isOpen
                  ? "border-teal/40 shadow-card"
                  : "border-subtle hover:shadow-card"),
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={cn(
                  "flex w-full items-center gap-4",
                  centered
                    ? "relative justify-center px-12 py-5 text-center sm:px-16 sm:py-6"
                    : "justify-between py-5 text-left",
                )}
              >
                <span className="text-balance text-base font-medium text-charcoal sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "grid shrink-0 place-items-center rounded-md border-hair transition-colors",
                    centered
                      ? "absolute right-3 top-1/2 h-7 w-7 -translate-y-1/2 sm:right-5 sm:h-8 sm:w-8"
                      : "h-8 w-8",
                    isOpen
                      ? "border-teal bg-teal text-white"
                      : "border-subtle text-teal",
                  )}
                >
                  <Plus
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "leading-relaxed text-warmgray",
                      centered
                        ? "mx-auto max-w-xl px-6 pb-6 text-center sm:px-10 sm:pb-7"
                        : "max-w-2xl pb-6",
                    )}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
