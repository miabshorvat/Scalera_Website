"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-abstract.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </div>

      {/* Glow effects on top of image */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute left-1/3 top-1/4 h-[600px] w-[600px] rounded-full bg-accent-500/10 blur-[120px] animate-gradient-shift" />
      <div className="absolute bottom-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-accent-600/8 blur-[100px] animate-gradient-shift" style={{ animationDelay: "4s" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-6 sm:py-40 lg:px-8 lg:py-48">
        <div className="max-w-5xl">
          <div className="animate-fade-in-up mb-6 sm:mb-8 inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 sm:px-5 sm:py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-300">
              {t.hero.badge}
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-[clamp(2rem,6vw,5.5rem)] font-bold leading-[1.08] tracking-tight text-white">
            {t.hero.title}
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-5 sm:mt-8 max-w-3xl text-base sm:text-xl leading-relaxed text-gray-300 sm:leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="animate-fade-in-up-delay-3 mt-8 sm:mt-12 flex flex-col gap-3 sm:flex-row sm:gap-5">
            <Link
              href="/kontakt"
              className="btn-shine group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-navy-950 transition-all hover:bg-gray-100"
            >
              {t.hero.cta}
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/vorgehen"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-gray-200 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
