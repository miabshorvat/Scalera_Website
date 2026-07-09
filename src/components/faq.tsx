"use client";

import { useLocale } from "@/lib/locale-context";

export function Faq() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="divider-glow mx-auto mb-20 max-w-xl sm:mb-32 lg:mb-44" />

      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.faq.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="mt-12 sm:mt-16 space-y-3 sm:space-y-4">
          {t.faq.items.map((item, i) => (
            <details
              key={i}
              className="glass group rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 open:border-accent-500/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base sm:text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  className="h-5 w-5 shrink-0 text-accent-400 transition-transform duration-300 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
