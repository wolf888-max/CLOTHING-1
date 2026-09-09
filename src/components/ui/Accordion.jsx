"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "@/components/ui/icons";

/**
 * Accordion list.
 * items = [{ q, a }] or [{ title, content }]
 */
export default function Accordion({ items = [], defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        const title = item.q ?? item.title;
        const body = item.a ?? item.content;
        return (
          <div key={i}>
            <h3>
              <button
                id={`${baseId}-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-panel-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-serif text-lg sm:text-xl">{title}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${baseId}-panel-${i}`}
                  role="region"
                  aria-labelledby={`${baseId}-btn-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-muted">
                    {body}
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
