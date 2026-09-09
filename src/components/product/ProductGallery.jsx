"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@/components/ui/icons";

/**
 * Image gallery: thumbnail rail + large image. Click the large image to open
 * a full-screen zoom. On desktop, hovering the main image pans a zoomed view.
 */
export default function ProductGallery({ images = [], name }) {
  const [active, setActive] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex flex-col-reverse gap-3 sm:flex-row">
        {/* Thumbnails */}
        <div className="flex gap-3 sm:flex-col">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
              className={`relative h-20 w-16 shrink-0 overflow-hidden bg-ivory-deep transition-opacity sm:h-24 sm:w-20 ${
                i === active ? "ring-1 ring-ink" : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div
          className="group relative aspect-[3/4] flex-1 cursor-zoom-in overflow-hidden bg-ivory-deep"
          onMouseMove={onMove}
          onMouseLeave={() => setOrigin("50% 50%")}
          onClick={() => setZoomOpen(true)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={images[active]}
                alt={`${name} — image ${active + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.6]"
                style={{ transformOrigin: origin }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Full-screen zoom */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomOpen(false)}
          >
            <button
              aria-label="Close"
              className="absolute right-5 top-5 p-2 text-ink"
              onClick={() => setZoomOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative h-full max-h-[90vh] w-full max-w-4xl">
              <Image
                src={images[active]}
                alt={`${name} — enlarged`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
