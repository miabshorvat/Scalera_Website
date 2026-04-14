"use client";

import { useLocale } from "@/lib/locale-context";

export function Results() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 lg:py-44">
      <div className="divider-glow mx-auto mb-32 max-w-xl lg:mb-44" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.results.label}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {t.results.title}
          </h2>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.results.items.map((item, i) => (
            <div
              key={i}
              className="glass glass-hover group flex gap-5 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 transition-colors group-hover:bg-accent-500/20">
                <svg className="h-5 w-5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-gray-400">
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
