"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function CtaSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 lg:py-44">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/handshake.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/80" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/15 via-transparent to-accent-600/10" />
          </div>

          <div className="relative border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm sm:p-16 lg:p-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl sm:leading-relaxed">
              {t.cta.text}
            </p>
            <Link
              href="/kontakt"
              className="group mt-10 inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 text-base font-semibold text-navy-950 transition-all hover:bg-gray-100 sm:text-lg"
            >
              {t.cta.button}
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
