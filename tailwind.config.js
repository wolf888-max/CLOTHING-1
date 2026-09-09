/**
 * Libas Clothing — Tailwind theme
 * "Urban Athlete" — dark-first monochrome. Charcoal grounds (#212121 family),
 * a full range of greys through to near-white type. Sleek, contemporary, high
 * contrast — no colour, all tone.
 *
 * NOTE: token names are kept for continuity —
 *   `ivory`  = the dark background family (page + raised surfaces)
 *   `ink`    = the light foreground family (text / lines)
 *   `gold`   = mid-grey accent (was the metallic accent slot)
 *   `wine`   = graphite secondary (sale tags, small emphasis)
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Foreground (light) — text, icons, hairlines
        ink: {
          DEFAULT: "#ECECEC", // primary text — near-white
          soft: "#C4C4C4",
          muted: "#9E9E9E", // secondary text (~6.3:1 on bg) — palette light grey
        },
        // Background (dark) — page + raised surfaces
        ivory: {
          DEFAULT: "#1C1C1C", // page background — charcoal (#212121 family)
          deep: "#262626", // raised surface (cards, footer, panels)
          soft: "#333333", // hover / third level
        },
        // Accent slot — mid grey
        gold: {
          DEFAULT: "#9E9E9E",
          dark: "#7A7A7A",
          light: "#C4C4C4",
        },
        // Secondary — graphite
        wine: {
          DEFAULT: "#3A3A3A",
          light: "#4A4A4A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      maxWidth: {
        container: "1400px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        marquee: "marquee 26s linear infinite",
        "ken-burns": "ken-burns 14s ease-out forwards",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
