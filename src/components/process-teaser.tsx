"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function ProcessTeaser() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="divider-glow mx-auto mb-20 max-w-xl sm:mb-32 lg:mb-44" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.process.teaserLabel}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl">
            {t.process.title}
          </h2>
        </div>

        {/* Horizontale Schrittfolge */}
        <div className="mt-12 sm:mt-20 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Verbindungspfeil (nur Desktop, zwischen den Karten) */}
              {i < t.process.steps.length - 1 && (
                <div className="absolute -right-2 top-8 z-10 hidden text-accent-500/40 lg:block">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
              <div className="glass glass-hover h-full rounded-2xl p-5 sm:p-6 transition-all duration-300">
                <div className="text-2xl font-bold text-gradient-accent">{step.number}</div>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <Link
            href="/vorgehen"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-gray-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            {t.hero.ctaSecondary}
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
