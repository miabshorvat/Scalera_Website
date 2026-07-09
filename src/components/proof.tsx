"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale-context";

// Beweis-Block: echte Systeme statt Icons.
// TODO (Kunde): Die Bilder in t.proof.items[].image gegen echte Screenshots
// aus euren CRM-/Automatisierungs-/Reporting-Systemen austauschen.
// Aktuell dienen vorhandene Bilder als Platzhalter.
export function Proof() {
  const { t } = useLocale();

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="divider-glow mx-auto mb-20 max-w-xl sm:mb-32 lg:mb-44" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.proof.label}
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl xl:text-6xl">
            {t.proof.title}
          </h2>
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-400">
            {t.proof.subtitle}
          </p>
        </div>

        <div className="mt-12 sm:mt-20 space-y-6 sm:space-y-8">
          {t.proof.items.map((item, i) => (
            <div
              key={i}
              className={`grid items-center gap-6 sm:gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Bild */}
              <div className="glass group relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-navy-950/70 px-3 py-1 text-xs font-medium text-accent-300 backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>

              {/* Text */}
              <div className="px-1 sm:px-2">
                <h3 className="text-2xl font-bold text-white sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-600">{t.proof.note}</p>
      </div>
    </section>
  );
}
