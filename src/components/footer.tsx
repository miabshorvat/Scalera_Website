"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Footer() {
  const { t, locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block -mt-20">
              <Image
                src="/logo-full.png"
                alt="Scalera"
                width={800}
                height={200}
                className="h-48 w-auto lg:h-56"
              />
            </Link>
            <p className="-mt-8 max-w-sm text-base leading-relaxed text-gray-500">
              {t.footer.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
              {t.footer.services}
            </h4>
            <ul className="mt-5 space-y-3">
              {t.services.items.map((service, i) => (
                <li key={i}>
                  <Link
                    href="/leistungen"
                    className="text-[15px] text-gray-500 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
              {t.footer.company}
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/ueber-uns" className="text-[15px] text-gray-500 transition-colors hover:text-white">
                  {locale === "de" ? "\u00DCber uns" : "About"}
                </Link>
              </li>
              <li>
                <Link href="/vorgehen" className="text-[15px] text-gray-500 transition-colors hover:text-white">
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-[15px] text-gray-500 transition-colors hover:text-white">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
              Legal
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/impressum" className="text-[15px] text-gray-500 transition-colors hover:text-white">
                  {t.footer.impressum}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-[15px] text-gray-500 transition-colors hover:text-white">
                  {t.footer.datenschutz}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-glow mt-16 mb-8" />

        <p className="text-center text-sm text-gray-600">
          &copy; {year} Scalera. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
