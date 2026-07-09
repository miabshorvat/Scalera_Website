// ─────────────────────────────────────────────────────────────
//  ZENTRALE STELLE FÜR ECHTE DATEN – bitte ausfüllen / prüfen.
//  Diese Werte tauchen auf der Kontaktseite, im Footer und in den
//  Meta-Tags auf. Solange hier Platzhalter stehen, zeigt die Seite
//  ehrliche „noch nicht hinterlegt"-Fallbacks statt erfundener Daten.
// ─────────────────────────────────────────────────────────────

interface SiteConfig {
  name: string;
  url: string;
  contact: { phone: string; email: string; linkedin: string; location: string };
  bookingUrl: string;
}

export const site: SiteConfig = {
  name: "Scalera",
  url: "https://scalera-hq.com", // TODO: finale Domain prüfen

  contact: {
    // TODO: echte Telefonnummer eintragen (leer lassen = wird ausgeblendet)
    phone: "",
    email: "laura.kufner@scalera-hq.com",
    // TODO: echten LinkedIn-Link eintragen (leer lassen = wird ausgeblendet)
    linkedin: "",
    // TODO: Standort eintragen (z. B. "München, Deutschland")
    location: "Deutschland",
  },

  // TODO: Cal.com / Calendly-Link eintragen, z. B. "https://cal.com/scalera/erstgespraech"
  // Leer lassen = Kalender-Buchungsblock wird ausgeblendet, nur Formular bleibt.
  bookingUrl: "",
};
