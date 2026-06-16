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
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-[rgba(0,0,0,0.08)] border-y-hair border-subtle">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-charcoal sm:text-lg">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-md border-hair transition-colors",
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
                  <p className="max-w-2xl pb-6 leading-relaxed text-warmgray">
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
