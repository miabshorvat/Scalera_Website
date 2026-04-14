"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/locale-context";

export function Header() {
  const { t, locale, toggleLocale } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { href: "/leistungen", label: t.nav.services },
    { href: "/vorgehen", label: t.nav.process },
    { href: "/ueber-uns", label: locale === "de" ? "\u00DCber uns" : "About" },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-navy-950/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-8">
        <Link href="/" className="inline-block">
          <Image
            src="/logo-full.png"
            alt="Scalera"
            width={180}
            height={45}
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-5 py-2.5 text-[15px] text-gray-400 transition-all hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleLocale}
            className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white"
          >
            {locale === "de" ? "EN" : "DE"}
          </button>
          <Link
            href="/kontakt"
            className="rounded-xl bg-white px-6 py-2.5 text-[15px] font-semibold text-navy-950 transition-all hover:bg-gray-200"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-[5px] lg:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-navy-950/98 backdrop-blur-2xl px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-lg text-gray-300 transition-all hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex items-center gap-4 border-t border-white/5 pt-6">
              <button
                onClick={toggleLocale}
                className="rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-400"
              >
                {locale === "de" ? "EN" : "DE"}
              </button>
              <Link
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-xl bg-white py-3 text-center text-base font-semibold text-navy-950"
              >
                {t.nav.cta}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
