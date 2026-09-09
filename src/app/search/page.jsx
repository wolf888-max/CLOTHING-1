import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/layout/PageHeader";
import SearchResults from "@/components/search/SearchResults";

export const metadata = pageMetadata({
  title: "Search",
  path: "/search",
  description: "Search the Libas Clothing collection.",
});

export default function SearchPage() {
  return (
    <>
      <PageHeader kicker="Find" title="Search" align="center" />
      <Suspense fallback={<div className="container-luxe py-20 text-center text-ink-muted">Searching…</div>}>
        <SearchResults />
      </Suspense>
    </>
  );
}
