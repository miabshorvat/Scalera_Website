"use client";

import Image from "next/image";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";

function KontaktContent() {
  const { locale } = useLocale();

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-28 pb-0 sm:pt-32 lg:pt-44">
          <div className="absolute inset-0">
            <Image src="/laptop-dark.webp" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-navy-950/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950" />
          </div>
          <div className="absolute inset-0 bg-grid" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                {locale === "de" ? "Kontakt" : "Contact"}
              </span>
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                {locale === "de" ? "Lassen Sie uns sprechen." : "Let\u2019s talk."}
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-gray-300">
                {locale === "de"
                  ? "Erz\u00E4hlen Sie uns von Ihren Herausforderungen. Wir melden uns innerhalb von 24 Stunden bei Ihnen."
                  : "Tell us about your challenges. We\u2019ll get back to you within 24 hours."}
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function Kontakt() {
  return (
    <LocaleProvider>
      <KontaktContent />
    </LocaleProvider>
  );
}
