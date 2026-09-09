"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { sizeGuide } from "@/data/content";

function SizeTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-ink/20">
            {data.columns.map((c) => (
              <th key={c} className="py-3 pr-4 font-sans text-[11px] font-medium uppercase tracking-luxe text-ink-muted">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i} className="border-b border-ink/10">
              {row.map((cell, j) => (
                <td key={j} className={`py-3 pr-4 tabular-nums ${j === 0 ? "font-medium text-ink" : "text-ink-muted"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** The size-guide body — reused on the FAQ page and inside the modal. */
export function SizeGuideContent() {
  const [tab, setTab] = useState("womenswear");
  return (
    <div>
      <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-ink-muted">
        {sizeGuide.intro}
      </p>

      <div className="mb-5 inline-flex border border-ink/20">
        {[
          ["womenswear", "Womenswear"],
          ["menswear", "Menswear"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2.5 text-[11px] font-medium uppercase tracking-luxe transition-colors ${
              tab === key ? "bg-ink text-ivory" : "text-ink-muted hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <SizeTable data={sizeGuide[tab]} />

      <h4 className="mb-3 mt-8 font-serif text-lg">How to measure</h4>
      <dl className="space-y-3">
        {sizeGuide.howToMeasure.map(([term, def]) => (
          <div key={term} className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr]">
            <dt className="text-[13px] font-medium text-ink">{term}</dt>
            <dd className="text-[14px] leading-relaxed text-ink-muted">{def}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Trigger + modal. Drop anywhere: <SizeGuideModal /> */
export default function SizeGuideModal({ triggerClassName = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`link-underline text-[12px] font-medium uppercase tracking-luxe text-ink-muted hover:text-ink ${triggerClassName}`}
      >
        Size guide
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Size guide" maxWidth="max-w-3xl">
        <SizeGuideContent />
      </Modal>
    </>
  );
}
