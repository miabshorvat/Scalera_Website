"use client";

import { useLocale } from "@/lib/locale-context";
import { getIcon } from "./icons";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.services.label}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.services.title}
          </h2>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={i}
                className="glass glass-hover group relative rounded-2xl p-10 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-xl border border-accent-500/20 bg-accent-500/10 p-3.5">
                    <Icon className="h-7 w-7 text-accent-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
