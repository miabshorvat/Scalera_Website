"use client";

import Script from "next/script";
import { site } from "@/lib/site";
import { useLocale } from "@/lib/locale-context";

// Theme-Farben aus dem Design-System als Calendly-URL-Parameter fest
// eingebacken. Hex ohne "#".
const BG = "0b0f1a"; // navy-900
const TEXT = "e2e8f0"; // gray-200
const PRIMARY = "0ea5e9"; // accent-500

// Kalender als Spalten-Baustein (ohne eigene Section) für das
// Nebeneinander von Kalender und Formular auf der Kontaktseite.
export function CalendlyWidget() {
  const { t } = useLocale();

  if (!site.bookingUrl) return null;

  const url =
    `${site.bookingUrl}?hide_gdpr_banner=1` +
    `&background_color=${BG}&text_color=${TEXT}&primary_color=${PRIMARY}`;

  return (
    <div className="reveal">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {t.contact.bookTitle}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-gray-400">{t.contact.bookText}</p>

      <div className="glass mt-6 overflow-hidden rounded-2xl border border-white/10 p-1 sm:p-2">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: "320px", height: "680px" }}
        />
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
