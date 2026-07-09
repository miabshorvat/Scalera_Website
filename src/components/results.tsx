"use client";

import { useLocale } from "@/lib/locale-context";

export function Results() {
  const { t } = useLocale();

  return (
    <section className="relative py-14 sm:py-20 lg:py-24">
      <div className="divider-glow mx-auto mb-10 max-w-xl sm:mb-14 lg:mb-16" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.results.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.results.title}
          </h2>
        </div>

        <div className="reveal-stagger mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.results.items.map((item, i) => (
            <div
              key={i}
              className="glass glass-hover group flex gap-4 sm:gap-5 rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-300"
            >
              <div className="mt-0.5 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border border-accent-500/20 bg-accent-500/10 transition-colors group-hover:bg-accent-500/20">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-sm sm:text-base leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
