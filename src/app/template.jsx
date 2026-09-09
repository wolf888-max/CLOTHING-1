/**
 * Route transition. `template.jsx` re-mounts on every navigation, so this
 * wrapper's CSS entrance animation replays on each page change.
 *
 * Pure CSS — no Framer Motion in the critical render path, so the page can
 * never be left invisible waiting on hydration. The animation uses
 * fill-mode: both and always finishes.
 */
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
