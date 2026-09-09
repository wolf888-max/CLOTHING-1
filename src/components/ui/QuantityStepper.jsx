"use client";

import { Minus, Plus } from "@/components/ui/icons";
import { clamp } from "@/lib/utils";

/** Accessible quantity control. */
export default function QuantityStepper({ value, onChange, min = 1, max = 99, size = "md" }) {
  const pad = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const set = (n) => onChange(clamp(n, min, max));

  return (
    <div className="inline-flex items-center border border-ink/25">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => set(value - 1)}
        disabled={value <= min}
        className={`${pad} grid place-items-center text-ink transition-colors hover:bg-ink hover:text-ivory disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink`}
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        aria-label="Quantity"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseInt(e.target.value, 10) || min)}
        className="w-12 border-x border-ink/25 bg-transparent py-2 text-center text-sm tabular-nums [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => set(value + 1)}
        disabled={value >= max}
        className={`${pad} grid place-items-center text-ink transition-colors hover:bg-ink hover:text-ivory disabled:opacity-30`}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
