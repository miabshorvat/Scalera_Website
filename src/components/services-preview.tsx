"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { getIcon } from "./icons";

export function ServicesPreview() {
  const { t, locale } = useLocale();
  const preview = t.services.items.slice(0, 3);

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="divider-glow mx-auto mb-20 max-w-xl sm:mb-32 lg:mb-44" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.services.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl xl:text-6xl">
            {t.services.title}
          </h2>
        </div>

        <div className="mt-12 sm:mt-20 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={i}
                className="glass glass-hover group relative rounded-xl sm:rounded-2xl p-6 sm:p-10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-accent-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 sm:mb-6 inline-flex rounded-lg sm:rounded-xl border border-accent-500/20 bg-accent-500/10 p-2.5 sm:p-3.5">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-accent-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <Link
            href="/leistungen"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-gray-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            {locale === "de" ? "Alle Leistungen ansehen" : "View all services"}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
