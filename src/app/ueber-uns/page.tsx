"use client";

import Image from "next/image";
import Link from "next/link";
import { LocaleProvider, useLocale } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Footer } from "@/components/footer";

function UeberUnsContent() {
  const { t, locale } = useLocale();

  const values = locale === "de"
    ? [
        { title: "Umsetzung statt Theorie", description: "Wir liefern keine PowerPoint-Strategien. Wir bauen Systeme, die im Alltag funktionieren und echten Mehrwert schaffen." },
        { title: "Partnerschaftlich", description: "Wir arbeiten eng mit unseren Kunden zusammen, als verl\u00E4ngerter Arm Ihres Teams, nicht als externer Dienstleister." },
        { title: "Technisch fundiert", description: "Wir verstehen Technologie auf einer tiefen Ebene und setzen sie gezielt ein, keine Buzzwords, sondern funktionierende L\u00F6sungen." },
        { title: "Ergebnisorientiert", description: "Jedes Projekt hat klare Ziele und messbare Ergebnisse. Wir arbeiten so lange, bis die Systeme wirklich laufen." },
      ]
    : [
        { title: "Implementation over Theory", description: "We don't deliver PowerPoint strategies. We build systems that work in daily operations and create real value." },
        { title: "Partnership-Based", description: "We work closely with our clients, as an extension of your team, not as an external service provider." },
        { title: "Technically Founded", description: "We understand technology at a deep level and deploy it purposefully, no buzzwords, just working solutions." },
        { title: "Results-Oriented", description: "Every project has clear goals and measurable results. We work until the systems truly run." },
      ];

  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        {/* Hero with image */}
        <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-20">
          <div className="absolute inset-0">
            <Image src="/woman-coding.webp" alt="" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-navy-950/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/70 to-navy-950" />
          </div>
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute left-1/4 top-1/4 h-[460px] w-[460px] rounded-full bg-accent-500/25 blur-[130px] animate-gradient-shift" />
          <div className="absolute bottom-1/4 right-1/4 h-[380px] w-[380px] rounded-full bg-accent-600/20 blur-[120px] animate-gradient-shift" style={{ animationDelay: "4s" }} />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="reveal max-w-4xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                {locale === "de" ? "\u00DCber uns" : "About Us"}
              </span>
              <h1 className="mt-6 text-3xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-6xl">
                {locale === "de"
                  ? "Wir bauen Systeme, die Unternehmen voranbringen."
                  : "We build systems that move companies forward."}
              </h1>
              <p className="mt-8 text-xl leading-relaxed text-gray-300 sm:text-2xl sm:leading-relaxed">
                {locale === "de"
                  ? "Scalera wurde gegr\u00FCndet, um Unternehmen dabei zu helfen, manuelle Arbeit zu reduzieren und intelligente, skalierbare Strukturen aufzubauen. Wir kombinieren strategisches Prozessverst\u00E4ndnis mit technischer Umsetzungskompetenz."
                  : "Scalera was founded to help companies reduce manual work and build intelligent, scalable structures. We combine strategic process understanding with technical implementation expertise."}
              </p>
            </div>
          </div>
        </section>

        {/* Mission with image */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/about-dev.webp"
                  alt="Development workspace"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent-500/10 blur-[60px]" />
              </div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                  {locale === "de" ? "Unsere Mission" : "Our Mission"}
                </span>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {locale === "de"
                    ? "Weniger manuelle Arbeit. Mehr Wachstum."
                    : "Less manual work. More growth."}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-400">
                  {locale === "de"
                    ? "Wir glauben, dass Unternehmen zu viel Zeit mit administrativen Aufgaben verbringen, die automatisiert werden k\u00F6nnten. Unsere Mission ist es, diese Zeit zur\u00FCckzugeben, durch Systeme, die wirklich funktionieren."
                    : "We believe companies spend too much time on administrative tasks that could be automated. Our mission is to give that time back, through systems that truly work."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
                {locale === "de" ? "Unsere Werte" : "Our Values"}
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {locale === "de" ? "Woran wir glauben." : "What we believe in."}
              </h2>
            </div>

            <div className="reveal-stagger mt-16 grid gap-6 sm:grid-cols-2">
              {values.map((value, i) => (
                <div key={i} className="glass glass-hover group rounded-2xl p-10 transition-all duration-300">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent-500/20 bg-accent-500/10 text-lg font-bold text-gradient-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {locale === "de" ? "Lassen Sie uns zusammenarbeiten." : "Let's work together."}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">{t.cta.text}</p>
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

export default function UeberUns() {
  return (
    <LocaleProvider>
      <UeberUnsContent />
    </LocaleProvider>
  );
}
