"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

export function Intro() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              {t.intro.label}
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {t.intro.title}
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-gray-400 sm:text-xl sm:leading-relaxed">
              {t.intro.text}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { stat: t.intro.stat1, label: t.intro.stat1Label },
                { stat: t.intro.stat2, label: t.intro.stat2Label },
                { stat: t.intro.stat3, label: t.intro.stat3Label },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-gradient-accent sm:text-4xl">
                    {item.stat}
                  </div>
                  <div className="mt-2 text-xs text-gray-400 sm:text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/team-brainstorm.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/20 to-transparent" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent-500/10 blur-[60px]" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-accent-600/10 blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
