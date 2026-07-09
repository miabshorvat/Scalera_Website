"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Problems() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="divider-glow mx-auto mb-20 max-w-xl sm:mb-32 lg:mb-44" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.problems.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl xl:text-6xl">
            {t.problems.title}
          </h2>
        </div>

        <div className="mt-12 sm:mt-20 grid gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((problem, i) => (
            <div
              key={i}
              className="glass glass-hover group relative rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-300"
            >
              <div className="absolute right-4 top-4 sm:right-6 sm:top-6 text-4xl sm:text-5xl font-bold text-white/[0.03]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="relative">
                <svg className="mb-3 sm:mb-4 h-4 w-4 sm:h-5 sm:w-5 text-accent-500/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <Link
            href="/vorgehen"
            className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-accent-400 transition-colors hover:text-accent-300"
          >
            {t.problems.cta}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
