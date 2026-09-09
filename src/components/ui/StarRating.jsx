import { Star } from "@/components/ui/icons";
import { formatRating } from "@/lib/utils";

/** Read-only star rating with a numeric label. */
export default function StarRating({ value = 0, showValue = true, className = "" }) {
  const rounded = Math.round(value);
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="flex text-gold" aria-hidden>
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={`h-3.5 w-3.5 ${n <= rounded ? "opacity-100" : "opacity-25"}`}
          />
        ))}
      </span>
      {showValue && (
        <span className="text-xs text-ink-muted tabular-nums">
          {formatRating(value)}
        </span>
      )}
      <span className="sr-only">{formatRating(value)} out of 5</span>
    </span>
  );
}
