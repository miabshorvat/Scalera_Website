"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Starter() {
  const { t } = useLocale();

  return (
    <section className="relative py-14 sm:py-20 lg:py-24">
      <div className="divider-glow mx-auto mb-10 max-w-xl sm:mb-14 lg:mb-16" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.starter.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.starter.title}
          </h2>
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400">
            {t.starter.subtitle}
          </p>
        </div>

        {/* Hervorgehobene Angebots-Karte */}
        <div className="reveal relative mx-auto mt-10 sm:mt-14 max-w-4xl">
          {/* Accent-Glow hinter der Karte */}
          <div className="absolute -inset-4 rounded-[2rem] bg-accent-500/10 blur-3xl" aria-hidden />

          <div className="glass glass-hover relative overflow-hidden rounded-3xl border-accent-500/25 p-8 sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-500/15 blur-3xl" aria-hidden />

            <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Links: Beschreibung */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-sm font-semibold text-accent-300">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t.starter.label}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  {t.starter.cardTitle}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  {t.starter.cardText}
                </p>
              </div>

              {/* Rechts: Vorteile + CTA */}
              <div className="lg:border-l lg:border-white/10 lg:pl-12">
                <ul className="space-y-4">
                  {t.starter.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-accent-500/30 bg-accent-500/15">
                        <svg className="h-3.5 w-3.5 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-base font-medium text-gray-200">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className="btn-shine group mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-navy-950 transition-all hover:bg-gray-100 sm:w-auto"
                >
                  {t.starter.button}
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
