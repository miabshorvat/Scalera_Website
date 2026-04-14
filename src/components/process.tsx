"use client";

import { useLocale } from "@/lib/locale-context";

export function Process() {
  const { t } = useLocale();

  return (
    <section id="process" className="relative py-20 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.process.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl xl:text-6xl">
            {t.process.title}
          </h2>
        </div>

        <div className="relative mt-14 sm:mt-24">
          <div className="absolute left-7 top-0 bottom-0 hidden w-px sm:left-10 lg:block">
            <div className="h-full bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {t.process.steps.map((step, i) => (
              <div
                key={i}
                className="group relative flex items-start gap-4 sm:gap-6 lg:gap-10"
              >
                <div className="relative z-10 flex h-14 w-14 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-navy-950 transition-all duration-300 group-hover:border-accent-500/30 group-hover:shadow-lg group-hover:shadow-accent-500/5">
                  <span className="text-lg sm:text-2xl font-bold text-gradient-accent">{step.number}</span>
                </div>
                <div className="glass glass-hover flex-1 rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-300 lg:p-10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-400 lg:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
