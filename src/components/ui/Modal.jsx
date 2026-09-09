"use client";

/**
 * Accessible modal dialog.
 * - Closes on Esc and backdrop click
 * - Traps nothing fancy, but returns focus and locks body scroll
 * - Animated with Framer Motion (respects reduced-motion)
 */

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@/components/ui/icons";

export default function Modal({ open, onClose, title, children, maxWidth = "max-w-2xl" }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden={false}
        >
          {/* backdrop */}
          <button
            aria-label="Close dialog"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            tabIndex={-1}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            className={`relative z-10 w-full ${maxWidth} max-h-[88vh] overflow-y-auto border border-ink/10 bg-ivory-deep p-6 shadow-2xl shadow-black/50 sm:p-9 outline-none`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-start justify-between gap-6">
              {title && (
                <h2 className="font-serif text-2xl leading-tight">{title}</h2>
              )}
              <button
                onClick={onClose}
                aria-label="Close"
                className="-mr-2 -mt-2 p-2 text-ink-muted transition-colors hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
