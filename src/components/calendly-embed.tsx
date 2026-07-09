"use client";

import Script from "next/script";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/locale-context";

// Theme-Farben aus dem Design-System (globals.css), als Calendly-URL-Parameter
// fest eingebacken – so passt das Widget zum dunklen Look, egal was im
// Calendly-Dialog eingestellt ist. Hex ohne "#".
const BG = "0b0f1a"; // navy-900 – leicht abgesetzte Karte auf navy-950
const TEXT = "e2e8f0"; // gray-200 – heller Text auf Dunkel
const PRIMARY = "0ea5e9"; // accent-500 – Buttons & Links

export function CalendlyEmbed() {
  const { t } = useLocale();

  if (!site.bookingUrl) return null;

  const url =
    `${site.bookingUrl}?hide_gdpr_banner=1` +
    `&background_color=${BG}&text_color=${TEXT}&primary_color=${PRIMARY}`;

  return (
    <section className="relative py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
            {t.contact.bookTitle}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-white lg:text-4xl">
            {t.contact.bookText}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">{t.contact.reassurance}</p>
        </div>

        <div className="glass overflow-hidden rounded-2xl border border-white/10 p-1 sm:p-2">
          <div
            className="calendly-inline-widget"
            data-url={url}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
