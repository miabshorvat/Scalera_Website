"use client";

import Image from "next/image";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact";
import { CalendlyWidget } from "@/components/calendly-embed";
import { site } from "@/lib/site";

function KontaktContent() {
  const { t } = useLocale();

  const channels = [
    site.contact.email && {
      href: `mailto:${site.contact.email}`,
      label: site.contact.email,
      icon: "✉",
    },
    site.contact.linkedin && {
      href: site.contact.linkedin,
      label: "LinkedIn",
      icon: "in",
      external: true,
    },
    site.contact.location && { label: site.contact.location, icon: "◎" },
  ].filter(Boolean) as { href?: string; label: string; icon: string; external?: boolean }[];

  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-32">
          <div className="absolute inset-0">
            <Image src="/laptop-dark.webp" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-navy-950/85" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950" />
          </div>
          <div className="absolute inset-0 bg-grid" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                {t.contact.label}
              </span>
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                {t.contact.title}
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-gray-300">{t.contact.text}</p>

              {/* Reassurance */}
              <div className="mt-6 inline-flex items-start gap-3 rounded-xl border border-accent-500/20 bg-accent-500/5 px-4 py-3">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-accent-200">{t.contact.reassurance}</span>
              </div>

              {/* Direkte Kontaktwege */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-gray-300">
                {channels.map((c) =>
                  c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      <span className="text-accent-400">{c.icon}</span> {c.label}
                    </a>
                  ) : (
                    <span key={c.label} className="inline-flex items-center gap-2">
                      <span className="text-accent-400">{c.icon}</span> {c.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Kalender + Formular nebeneinander (Buchen schlägt Formular) */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
              <div className="lg:col-span-3">
                <CalendlyWidget />
              </div>
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
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
