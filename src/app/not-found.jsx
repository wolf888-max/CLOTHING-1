import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-luxe flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="kicker">Error 404</p>
      <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
        The page you&apos;re looking for has moved or no longer exists.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primary">
          Return home
        </Link>
        <Link href="/shop" className="btn-outline">
          Shop the collection
        </Link>
      </div>
    </div>
  );
}
