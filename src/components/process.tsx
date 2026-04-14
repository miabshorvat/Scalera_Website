"use client";

import { useLocale } from "@/lib/locale-context";

export function Process() {
  const { t } = useLocale();

  return (
    <section id="process" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.process.label}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.process.title}
          </h2>
        </div>

        <div className="relative mt-24">
          {/* Vertical line */}
          <div className="absolute left-10 top-0 bottom-0 hidden w-px lg:block">
            <div className="h-full bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />
          </div>

          <div className="space-y-6 lg:space-y-8">
            {t.process.steps.map((step, i) => (
              <div
                key={i}
                className="group relative flex items-start gap-6 lg:gap-10"
              >
                <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-navy-950 transition-all duration-300 group-hover:border-accent-500/30 group-hover:shadow-lg group-hover:shadow-accent-500/5">
                  <span className="text-2xl font-bold text-gradient-accent">{step.number}</span>
                </div>
                <div className="glass glass-hover flex-1 rounded-2xl p-8 transition-all duration-300 lg:p-10">
                  <h3 className="text-xl font-semibold text-white lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-400 lg:text-lg">
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
