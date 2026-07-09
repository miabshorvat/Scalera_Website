"use client";

import { useLocale } from "@/lib/locale-context";

export function TrustBar() {
  const { t } = useLocale();

  return (
    <section className="relative border-y border-white/5 bg-navy-950/60 py-8 sm:py-10">
      <div className="reveal mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          {t.trust.label}
        </p>
        <div className="reveal-stagger mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {t.trust.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-300 backdrop-blur-sm transition-colors hover:border-accent-500/30 hover:text-white"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
