"use client";

import { formatPrice } from "@/config/site";

const CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "women", label: "Women" },
  { slug: "men", label: "Men" },
  { slug: "accessories", label: "Accessories" },
];

/** Swatch background for a colour name (best-effort mapping). */
const COLOR_HEX = {
  Black: "#14130f",
  "Ink Black": "#14130f",
  Ivory: "#efe9dd",
  White: "#f7f5f0",
  Champagne: "#e6d6b8",
  Camel: "#b48a5c",
  Charcoal: "#3a3a3a",
  Stone: "#a99e8c",
  Oat: "#d8ccb4",
  "Fog Grey": "#9a9a94",
  Navy: "#232a38",
  Greige: "#a89f8d",
  Olive: "#5b5c43",
  Slate: "#4a4f57",
  Tan: "#a9743f",
  Cognac: "#8a4f2d",
  Chocolate: "#43301f",
  Brown: "#5a4636",
  Bordeaux: "#5a2230",
  "Pale Blue": "#c7d3da",
  Sand: "#cdbfa5",
};

export default function FilterControls({ facets, value, onChange }) {
  const { category, sizes, colors, maxPrice } = value;

  const toggle = (key, item) => {
    const set = new Set(value[key]);
    set.has(item) ? set.delete(item) : set.add(item);
    onChange({ ...value, [key]: [...set] });
  };

  return (
    <div className="space-y-9">
      {/* Category */}
      <fieldset>
        <legend className="kicker mb-3">Category</legend>
        <div className="space-y-1.5">
          {CATEGORIES.map((c) => (
            <label key={c.slug} className="flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="radio"
                name="category"
                checked={category === c.slug}
                onChange={() => onChange({ ...value, category: c.slug })}
                className="h-3.5 w-3.5 accent-ink"
              />
              {c.label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Size */}
      <fieldset>
        <legend className="kicker mb-3">Size</legend>
        <div className="flex flex-wrap gap-2">
          {facets.sizes.map((s) => {
            const active = sizes.includes(s);
            return (
              <button
                key={s}
                type="button"
                aria-pressed={active}
                onClick={() => toggle("sizes", s)}
                className={`min-w-[44px] border px-3 py-2 text-xs transition-colors ${
                  active ? "border-ink bg-ink text-ivory" : "border-ink/25 hover:border-ink"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Colour */}
      <fieldset>
        <legend className="kicker mb-3">Colour</legend>
        <div className="space-y-1.5">
          {facets.colors.map((c) => {
            const active = colors.includes(c);
            return (
              <label key={c} className="flex cursor-pointer items-center gap-2.5 text-sm">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggle("colors", c)}
                  className="h-3.5 w-3.5 accent-ink"
                />
                <span
                  className="inline-block h-3.5 w-3.5 rounded-full border border-ink/20"
                  style={{ background: COLOR_HEX[c] || "#ccc" }}
                  aria-hidden
                />
                {c}
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Price */}
      <fieldset>
        <legend className="kicker mb-3">Max price</legend>
        <input
          type="range"
          min={facets.priceMin}
          max={facets.priceMax}
          step={500}
          value={maxPrice}
          onChange={(e) => onChange({ ...value, maxPrice: Number(e.target.value) })}
          className="w-full accent-ink"
          aria-label="Maximum price"
        />
        <p className="mt-2 text-xs tabular-nums text-ink-muted">
          Up to {formatPrice(maxPrice)}
        </p>
      </fieldset>
    </div>
  );
}
