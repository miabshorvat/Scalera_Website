// ─────────────────────────────────────────────────────────────
//  Zentrale Stelle für Kontakt- und Buchungsdaten.
//  Diese Werte tauchen auf der Kontaktseite, im Footer und in den
//  Meta-Tags auf. Leere Felder werden automatisch ausgeblendet.
// ─────────────────────────────────────────────────────────────

interface SiteConfig {
  name: string;
  url: string;
  contact: { phone: string; email: string; linkedin: string; location: string };
  bookingUrl: string;
}

export const site: SiteConfig = {
  name: "Scalera",
  url: "https://scalera-hq.com",

  contact: {
    phone: "", // bewusst leer, keine Telefonnummer online
    email: "laura.kufner@scalera-hq.com",
    linkedin: "https://www.linkedin.com/company/scalerahq/",
    location: "", // bewusst leer, wird ausgeblendet
  },

  // Calendly-Buchungslink. Leer lassen = Kalender wird ausgeblendet, nur Formular bleibt.
  bookingUrl: "https://calendly.com/laura-kufner-scalera-hq/30min",
};
