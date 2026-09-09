"use client";

/**
 * Lightweight entrance wrappers.
 *
 * These used to run scroll-triggered Framer Motion animations. That left
 * sections blank whenever hydration was slow or an IntersectionObserver
 * callback was delayed. They are now CSS-only: content is ALWAYS rendered
 * visible, with a one-shot fade/rise that plays on mount and always
 * finishes (animation-fill-mode: both). Nothing can get stuck hidden.
 *
 * The component API (Reveal / RevealGroup / RevealItem / RevealImage) is
 * unchanged so callers don't need edits.
 */

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
  // accepted for backwards-compat, no longer used:
  y, once, amount,
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={`reveal-mount ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({ children, className = "", stagger = 0.06 }) {
  // Stagger is applied by RevealItem via its index; keep the wrapper simple.
  return <div className={className} data-stagger={stagger}>{children}</div>;
}

export function RevealItem({ children, className = "", index = 0, y }) {
  return (
    <div
      className={`reveal-mount ${className}`}
      style={{ animationDelay: `${0.05 * (index || 0)}s` }}
    >
      {children}
    </div>
  );
}

/**
 * Image wrapper — relative + overflow-hidden container with a soft mount fade.
 * Pass an <Image fill /> (or any absolutely positioned media) as the child.
 */
export function RevealImage({ children, className = "", delay = 0 }) {
  return (
    <div
      className={`reveal-mount relative overflow-hidden ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
