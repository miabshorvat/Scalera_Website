"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Footer } from "@/components/footer";
import { getIcon } from "@/components/icons";

function LeistungenContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-20">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-500/8 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                {t.services.label}
              </span>
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                {t.services.title}
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-gray-300">
                {locale === "de"
                  ? "Jedes Unternehmen ist anders. Unsere Leistungen passen wir an Ihre spezifischen Anforderungen an, immer mit dem Ziel, messbare Ergebnisse zu liefern."
                  : "Every company is different. We tailor our services to your specific requirements, always with the goal of delivering measurable results."}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - clean cards without images */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal-stagger grid gap-6 lg:grid-cols-2">
              {t.services.items.map((service, i) => {
                const Icon = getIcon(service.icon);
                return (
                  <div
                    key={i}
                    className="glass glass-hover group relative overflow-hidden rounded-2xl p-6 sm:p-10 transition-all duration-300 lg:p-12"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-6 inline-flex rounded-xl border border-accent-500/20 bg-accent-500/10 p-4">
                        <Icon className="h-8 w-8 text-accent-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-gray-400">
                        {service.description}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm text-gray-300"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 flex items-start gap-2 text-base font-semibold text-accent-300">
                        <svg className="mt-1 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {service.result}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0">
                <Image src="/handshake.webp" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-navy-950/80" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/15 via-transparent to-accent-600/10" />
              </div>
              <div className="relative border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm sm:p-12 lg:p-20">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  {locale === "de"
                    ? "Passt eine Leistung zu Ihrem Unternehmen?"
                    : "Does a service fit your company?"}
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  {locale === "de"
                    ? "Lassen Sie uns gemeinsam herausfinden, wo wir den gr\u00F6\u00DFten Hebel f\u00FCr Sie setzen k\u00F6nnen."
                    : "Let's find out together where we can create the biggest impact for you."}
                </p>
                <Link
                  href="/kontakt"
                  className="group mt-10 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-navy-950 transition-all hover:bg-gray-100"
                >
                  {t.nav.cta}
                  <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function Leistungen() {
  return (
    <LocaleProvider>
      <LeistungenContent />
    </LocaleProvider>
  );
}
