"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

export function Intro() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              {t.intro.label}
            </span>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl">
              {t.intro.title}
            </h2>
            <p className="mt-5 sm:mt-8 text-base sm:text-lg leading-relaxed text-gray-400 lg:text-xl lg:leading-relaxed">
              {t.intro.text}
            </p>

            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { stat: t.intro.stat1, label: t.intro.stat1Label },
                { stat: t.intro.stat2, label: t.intro.stat2Label },
                { stat: t.intro.stat3, label: t.intro.stat3Label },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass glass-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-gradient-accent lg:text-4xl">
                    {item.stat}
                  </div>
                  <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-400 lg:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
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
