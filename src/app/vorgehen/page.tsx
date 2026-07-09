"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Footer } from "@/components/footer";
import { Results } from "@/components/results";

function VorgehenContent() {
  const { t, locale } = useLocale();

  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* Hero with image */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-20">
          <div className="absolute inset-0">
            <Image src="/dashboard-presentation.webp" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-navy-950/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950" />
          </div>
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute left-1/4 top-1/4 h-[460px] w-[460px] rounded-full bg-accent-500/25 blur-[130px] animate-gradient-shift" />
          <div className="absolute bottom-1/4 right-1/4 h-[380px] w-[380px] rounded-full bg-accent-600/20 blur-[120px] animate-gradient-shift" style={{ animationDelay: "4s" }} />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                {t.process.label}
              </span>
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                {t.process.title}
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-gray-300">
                {locale === "de"
                  ? "Unser Prozess ist klar definiert, aber flexibel genug, um sich an Ihre Situation anzupassen. Sie wissen von Anfang an, was passiert und was es kostet."
                  : "Our process is clearly defined, yet flexible enough to adapt to your situation. You know from the start what happens and what it costs."}
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {(locale === "de"
                  ? ["Kostenloses Erstgespräch", "Festpreis statt offener Stunden", "Betreuung nach dem Go-Live"]
                  : ["Free intro call", "Fixed price, not open hours", "Support after go-live"]
                ).map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-sm font-medium text-accent-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute left-10 top-0 bottom-0 hidden w-px lg:block">
                <div className="h-full bg-gradient-to-b from-accent-500/50 via-accent-500/20 to-transparent" />
              </div>

              <div className="reveal-stagger space-y-6 lg:space-y-8">
                {t.process.steps.map((step, i) => (
                  <div key={i} className="group relative flex items-start gap-6 lg:gap-10">
                    <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-navy-950 transition-all duration-300 group-hover:border-accent-500/30 group-hover:shadow-lg group-hover:shadow-accent-500/5">
                      <span className="text-2xl font-bold text-gradient-accent">{step.number}</span>
                    </div>
                    <div className="glass glass-hover flex-1 rounded-2xl p-8 transition-all duration-300 lg:p-10">
                      <h2 className="text-xl font-bold text-white lg:text-2xl">{step.title}</h2>
                      <p className="mt-3 text-base leading-relaxed text-gray-400 lg:text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Results />

        {/* CTA with image */}
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
                  {locale === "de" ? "Bereit f\u00FCr den ersten Schritt?" : "Ready for the first step?"}
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  {locale === "de"
                    ? "Wir analysieren Ihre aktuelle Situation und zeigen Ihnen konkrete M\u00F6glichkeiten."
                    : "We'll analyze your current situation and show you concrete possibilities."}
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

export default function Vorgehen() {
  return (
    <LocaleProvider>
      <VorgehenContent />
    </LocaleProvider>
  );
}
