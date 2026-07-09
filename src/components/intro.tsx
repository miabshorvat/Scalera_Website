"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

export function Intro() {
  const { t } = useLocale();

  return (
    <section className="relative py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="reveal">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              {t.intro.label}
            </span>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              {t.intro.title}
            </h2>
            <p className="mt-5 sm:mt-8 text-base sm:text-lg leading-relaxed text-gray-400 lg:text-xl lg:leading-relaxed">
              {t.intro.text}
            </p>

            <div className="reveal-stagger mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              {t.intro.capabilities.map((item) => (
                <div
                  key={item.title}
                  className="glass glass-hover flex items-start gap-4 rounded-xl sm:rounded-2xl p-4 sm:p-5 transition-all duration-300"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent-500/20 bg-accent-500/10">
                    <svg className="h-4 w-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-semibold text-white">{item.title}</div>
                    <div className="mt-0.5 text-xs sm:text-sm text-gray-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="reveal relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/team-brainstorm.webp"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/20 to-transparent" />
            </div>
            <div className="absolute -right-8 -top-8 hidden h-40 w-40 rounded-full bg-accent-500/10 blur-[60px] sm:block" />
            <div className="absolute -bottom-8 -left-8 hidden h-40 w-40 rounded-full bg-accent-600/10 blur-[60px] sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
