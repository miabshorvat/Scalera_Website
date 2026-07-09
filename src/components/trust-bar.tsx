"use client";

import { useLocale } from "@/lib/locale-context";

export function TrustBar() {
  const { t } = useLocale();
  // Chips verdoppeln, damit das Marquee nahtlos loopt.
  const chips = [...t.trust.chips, ...t.trust.chips];

  return (
    <section className="relative border-y border-white/5 bg-navy-950/60 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          {t.trust.label}
        </p>
        <div className="marquee mt-5 sm:mt-6">
          <div className="marquee__track">
            {chips.map((chip, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-300 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
          {/* zweite Spur für lückenlosen Loop */}
          <div className="marquee__track" aria-hidden>
            {chips.map((chip, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-300 backdrop-blur-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
