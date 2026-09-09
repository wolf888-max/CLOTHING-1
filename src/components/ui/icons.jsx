/**
 * Inline SVG icon set — no external icon dependency.
 * Consistent 1.5px stroke, 24px grid, currentColor.
 * Usage: <Search className="h-5 w-5" />
 */

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function Menu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function X(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Search(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function Heart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20.5 4.5 13a4.5 4.5 0 0 1 6.4-6.3l1.1 1 1.1-1a4.5 4.5 0 0 1 6.4 6.3z" />
    </svg>
  );
}

export function HeartFilled(props) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M12 20.5 4.5 13a4.5 4.5 0 0 1 6.4-6.3l1.1 1 1.1-1a4.5 4.5 0 0 1 6.4 6.3z" />
    </svg>
  );
}

export function Bag(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 8h12l1 12H5z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function Minus(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function Plus(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronDown(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...base} {...props}>
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function Star(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="m12 2 2.9 6.3 6.8.8-5 4.7 1.3 6.7L12 18l-6 3.5 1.3-6.7-5-4.7 6.8-.8z" />
    </svg>
  );
}

export function Mail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 15l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22s7-6 7-12a7 7 0 0 0-14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Truck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function Leaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4S9 4 5.5 11 4 20 4 20s6-1.5 9-4.5S20 4 20 4z" />
      <path d="M4 20c4-8 9-11 13-13" />
    </svg>
  );
}

export function Scissors(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 8l12 8M8 16 20 8M8 8l6 4" />
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </svg>
  );
}

export function WhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={24} height={24} {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.06 1.6 5.82L2 22l4.4-1.15a9.9 9.9 0 0 0 5.64 1.72h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.94 1.34-.5.05-.97.24-3.27-.68-2.75-1.08-4.5-3.9-4.63-4.08-.14-.18-1.12-1.49-1.12-2.85 0-1.36.71-2.02.97-2.3.25-.27.55-.34.73-.34l.53.01c.17.01.4-.06.62.48.24.55.8 1.9.87 2.04.07.14.12.3.02.48-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.17-.18.7-.81.88-1.09.18-.28.36-.23.61-.14.25.09 1.6.75 1.87.89.28.14.46.2.53.32.07.11.07.66-.17 1.34z" />
    </svg>
  );
}

export function Instagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={24} height={24} {...props}>
      <path d="M14 9h3l.4-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.8 0 14.7 0 12.3 0 10.7 1.5 10.7 4.2V6H8v3h2.7v9H14z" />
    </svg>
  );
}

export function Pinterest(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={24} height={24} {...props}>
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.1-2 .1-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3-2.3 3-5 0-2.1-1.4-3.6-3.9-3.6-2.9 0-4.6 2.1-4.6 4.4 0 .8.2 1.4.6 1.8.2.2.2.3.1.5l-.2.8c0 .3-.2.4-.5.2-1.3-.5-1.9-2-1.9-3.6 0-2.7 2.3-5.9 6.8-5.9 3.6 0 6 2.6 6 5.4 0 3.7-2 6.4-5 6.4-1 0-2-.5-2.3-1.2l-.6 2.5c-.2.8-.7 1.7-1 2.3A10 10 0 1 0 12 2z" />
    </svg>
  );
}

export function TikTok(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={24} height={24} {...props}>
      <path d="M16 3c.3 2.3 1.6 3.7 3.8 3.9v2.6c-1.3.1-2.5-.3-3.8-1v6.9c0 4.3-3.2 6.6-6.7 5.9-3-.6-4.9-3.4-4.4-6.4.5-3 3.3-4.9 6.2-4.4v2.8c-.4-.1-.9-.2-1.4-.1-1.3.1-2.3 1.2-2.2 2.6.1 1.3 1.2 2.3 2.5 2.2 1.4-.1 2.4-1.2 2.4-2.7V3z" />
    </svg>
  );
}

export function YouTube(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden width={24} height={24} {...props}>
      <path d="M23 12s0-3.3-.4-4.8c-.2-.9-.9-1.5-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-9 .4c-.9.3-1.6.9-1.8 1.8C1 8.7 1 12 1 12s0 3.3.4 4.8c.2.9.9 1.5 1.8 1.8 1.7.4 9 .4 9 .4s7.3 0 9-.4c.9-.3 1.6-.9 1.8-1.8.4-1.5.4-4.8.4-4.8zM9.8 15.3V8.7l6 3.3z" />
    </svg>
  );
}
