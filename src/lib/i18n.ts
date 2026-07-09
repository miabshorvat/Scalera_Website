export type Locale = "de" | "en";

const translations = {
  de: {
    // Roter Faden – Positionierung, die überall durchscheint
    positioning:
      "Scalera entwickelt Systeme, die Unternehmen dauerhaft Verwaltungsaufwand sparen – von CRM über Automatisierung bis KI.",
    nav: {
      services: "Leistungen",
      process: "Vorgehen",
      contact: "Kontakt",
      cta: "Kostenlose Prozessanalyse",
    },
    hero: {
      badge: "Weniger Verwaltung. Mehr Wachstum.",
      title: "Ihr Unternehmen soll wachsen. Nicht Ihre Verwaltung.",
      subtitle:
        "Wir entwickeln CRM-, Automatisierungs- und KI-Systeme, die Ihrem Team jede Woche Stunden manueller Arbeit sparen – und im Alltag wirklich genutzt werden.",
      cta: "Kostenlose Prozessanalyse",
      ctaSecondary: "So arbeiten wir",
    },
    // Trust-Leiste direkt unter Hero – ehrlicher erster Beweis (keine erfundenen Logos)
    trust: {
      label: "Bereits umgesetzt – Eigenentwicklungen & Demo-Systeme",
      chips: [
        "CRM-Systeme",
        "KI-Agenten",
        "ERP (Odoo / Frappe)",
        "WhatsApp-Automatisierung",
        "Dashboards",
        "Recruiting-Workflows",
      ],
    },
    intro: {
      label: "Wer wir sind",
      title: "Prozessverständnis trifft Umsetzungskompetenz.",
      text: "Wir kombinieren Prozessverständnis, technisches Know-how und Umsetzungskompetenz, um Systeme zu bauen, die im Alltag wirklich funktionieren. Wir beraten nicht nur – wir konzipieren, implementieren und optimieren.",
      // Fähigkeiten statt unbelegter Prozente
      capabilities: [
        { title: "Umsetzung statt Beratung", description: "Wir liefern laufende Systeme, keine Foliensätze." },
        { title: "Systeme, die im Alltag laufen", description: "Gebaut für das echte Tagesgeschäft, nicht für die Demo." },
        { title: "Betreuung nach dem Go-Live", description: "Wir bleiben dran, bis es zuverlässig läuft." },
      ],
    },
    services: {
      label: "Was wir bieten",
      title: "Leistungen, die Ihr Unternehmen voranbringen.",
      subtitle:
        "Jedes Unternehmen ist anders. Unsere Leistungen passen wir an Ihre Abläufe an – immer mit dem Ziel, messbare Ergebnisse zu liefern.",
      items: [
        {
          title: "CRM & Vertrieb",
          description:
            "Wir bauen CRM-Systeme, die Ihren Vertrieb strukturieren und Ihr Team entlasten – statt nur Daten zu sammeln.",
          bullets: ["Leadmanagement", "Angebotsprozess", "automatische Follow-Ups", "Aufgabenverwaltung", "Reporting"],
          result: "Ergebnis: kürzere Angebotszeiten und kein Lead, der verloren geht.",
          icon: "chart",
        },
        {
          title: "HR & Recruiting",
          description:
            "Vom Bewerbungseingang bis zum Onboarding: Wir automatisieren Ihre HR-Prozesse und schaffen klare Abläufe für wachsende Teams.",
          bullets: ["Bewerbungseingang", "Terminvereinbarung", "Onboarding", "automatische Dokumentenerstellung"],
          result: "Ergebnis: schnellere Time-to-Hire, weniger Koordinationsaufwand.",
          icon: "users",
        },
        {
          title: "Backoffice-Automatisierung",
          description:
            "Rechnungen, Freigaben, Dokumente – wir eliminieren repetitive Verwaltungsaufgaben und schaffen Systeme, die im Hintergrund arbeiten.",
          bullets: ["Rechnungen", "Freigaben", "Dokumente", "E-Mail-Automatisierung"],
          result: "Ergebnis: Stunden manueller Arbeit pro Woche zurück.",
          icon: "cog",
        },
        {
          title: "KI-gestützte Prozessketten",
          description:
            "Wir integrieren KI dort, wo sie echten Mehrwert schafft: in Datenanalyse, Entscheidungsunterstützung und intelligenter Automatisierung.",
          bullets: ["KI-Agenten", "Dokumenten-Verständnis", "intelligente Qualifizierung", "Entscheidungsunterstützung"],
          result: "Ergebnis: KI, die Arbeit abnimmt – nicht Spielerei.",
          icon: "brain",
        },
        {
          title: "Daten & Reporting",
          description:
            "Strukturierte Daten, automatisierte Reports und Dashboards, die Ihnen echte Entscheidungsgrundlagen liefern – keine Zahlenfriedhöfe.",
          bullets: ["Datenstruktur", "Dashboards", "automatisierte Reports", "Kennzahlen-Tracking"],
          result: "Ergebnis: Entscheidungen auf Basis aktueller Zahlen.",
          icon: "data",
        },
      ],
    },
    problems: {
      label: "Typische Herausforderungen",
      title: "Kommt Ihnen das bekannt vor?",
      items: [
        "„Wir verlieren zu viel Zeit durch manuelle Prozesse.“",
        "„Unsere Tools sind nicht miteinander verbunden.“",
        "„Uns fehlt eine klare Struktur im Tagesgeschäft.“",
        "„Wir nutzen KI – aber ohne echten Nutzen.“",
        "„Wachstum erzeugt bei uns Chaos statt Effizienz.“",
        "„Administrative Aufgaben bremsen unser operatives Geschäft.“",
      ],
      cta: "Diese Probleme lösen wir – so arbeiten wir",
    },
    // Kundenorientierter 5-Schritte-Ablauf (Sicherheit: „Was passiert nach dem Klick?")
    process: {
      label: "Unsere Vorgehensweise",
      title: "Klarer Ablauf. Keine Überraschungen.",
      teaserLabel: "In 5 Schritten zum laufenden System",
      steps: [
        {
          number: "01",
          title: "Kostenloses Erstgespräch",
          description: "30 Minuten, unverbindlich. Wir hören zu und verstehen Ihre Situation.",
        },
        {
          number: "02",
          title: "Prozessanalyse",
          description: "Wir finden gemeinsam die größten Zeitfresser in Ihrem Tagesgeschäft.",
        },
        {
          number: "03",
          title: "Lösungskonzept",
          description: "Konkreter Plan mit Festpreis – Sie wissen genau, was Sie bekommen und was es kostet.",
        },
        {
          number: "04",
          title: "Umsetzung",
          description: "Wir bauen das System und integrieren es in Ihren Alltag.",
        },
        {
          number: "05",
          title: "Betreuung",
          description: "Wir bleiben dran, bis alles zuverlässig läuft – auch nach dem Go-Live.",
        },
      ],
    },
    results: {
      label: "Ihre Vorteile",
      title: "Was Sie gewinnen.",
      items: [
        { title: "Weniger manuelle Arbeit", description: "Repetitive Aufgaben werden automatisiert – Ihr Team kann sich auf Wertschöpfung konzentrieren." },
        { title: "Weniger Fehler", description: "Standardisierte Prozesse reduzieren menschliche Fehlerquellen systematisch." },
        { title: "Klarere Abläufe", description: "Jeder weiß, was zu tun ist – transparente Prozesse statt unstrukturiertem Tagesgeschäft." },
        { title: "Bessere Skalierbarkeit", description: "Systeme, die mit Ihrem Unternehmen wachsen, ohne dass der Aufwand proportional steigt." },
        { title: "Sinnvoll eingesetzte KI", description: "KI, die echte Probleme löst – keine Spielerei, sondern messbare Effizienzgewinne." },
        { title: "Mehr Wachstum", description: "Weniger Zeit in der Verwaltung heißt mehr Zeit für das, was Ihr Unternehmen voranbringt." },
      ],
    },
    // NEU: FAQ – Einwände vorwegnehmen
    faq: {
      label: "Häufige Fragen",
      title: "Bevor Sie fragen.",
      items: [
        {
          q: "Wie lange dauert ein Projekt?",
          a: "Das hängt vom Umfang ab. Kleinere Automatisierungen laufen oft in wenigen Wochen, größere Systeme in einigen Monaten. Nach der Prozessanalyse bekommen Sie einen klaren Zeitplan.",
        },
        {
          q: "Mit welchen Systemen arbeitet ihr?",
          a: "Unter anderem CRM- und ERP-Systeme (z. B. Odoo, Frappe), Automatisierungstools (n8n, Make, Power Automate), WhatsApp-Automatisierung und moderne KI-Modelle – ausgewählt nach dem, was zu Ihnen passt.",
        },
        {
          q: "Was kostet ein Projekt?",
          a: "Jedes Projekt bekommt vorab einen Festpreis – keine offenen Stundenzettel. Typische Projektgrößen bewegen sich meist im Bereich von 20.000 bis 100.000 €, abhängig vom Umfang.",
        },
        {
          q: "Arbeitet ihr deutschlandweit?",
          a: "Ja. Wir arbeiten remote und deutschlandweit – auf Wunsch auch vor Ort für Workshops und Kick-offs.",
        },
        {
          q: "Brauche ich ein bestehendes CRM?",
          a: "Nein. Wir bauen ein passendes System auf oder verbinden Ihre bestehenden Tools – je nachdem, was sinnvoller ist.",
        },
        {
          q: "Wie läuft das Erstgespräch ab?",
          a: "30 Minuten, online oder vor Ort, kostenlos und unverbindlich. Wir hören zu, verstehen Ihre Abläufe und zeigen erste Ansatzpunkte. Kein Verkaufsdruck.",
        },
      ],
    },
    cta: {
      title: "Bereit für funktionierende Systeme?",
      text: "Wir bauen keine Theorie – wir bauen funktionierende Systeme, die im Alltag Zeit sparen und Wachstum ermöglichen.",
      button: "Kostenlose Prozessanalyse",
    },
    contact: {
      label: "Kontakt",
      title: "Lassen Sie uns sprechen.",
      text: "Erzählen Sie uns von Ihren Herausforderungen. Wir melden uns innerhalb von 24 Stunden.",
      reassurance: "Antwort innerhalb von 24 h · kostenlos · unverbindlich · 30 Min · online oder vor Ort",
      directTitle: "Direkter Draht",
      bookTitle: "Lieber direkt einen Termin?",
      bookText: "Wählen Sie einen Zeitpunkt, der Ihnen passt – Buchen schlägt Formular.",
      bookButton: "Termin auswählen",
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen",
      message: "Ihre Nachricht",
      messagePlaceholder: "Beschreiben Sie kurz Ihre aktuelle Situation und was Sie verbessern möchten...",
      submit: "Nachricht senden",
      success: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
    },
    footer: {
      tagline: "Scalera entwickelt Systeme, die Unternehmen dauerhaft Verwaltungsaufwand sparen – von CRM über Automatisierung bis KI.",
      services: "Leistungen",
      company: "Unternehmen",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    positioning:
      "Scalera builds systems that permanently reduce administrative overhead – from CRM to automation to AI.",
    nav: {
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Free Process Analysis",
    },
    hero: {
      badge: "Less admin. More growth.",
      title: "Your business should grow. Not your admin work.",
      subtitle:
        "We build CRM, automation and AI systems that save your team hours of manual work every week – and actually get used day to day.",
      cta: "Free Process Analysis",
      ctaSecondary: "How we work",
    },
    trust: {
      label: "Already built – in-house developments & demo systems",
      chips: [
        "CRM systems",
        "AI agents",
        "ERP (Odoo / Frappe)",
        "WhatsApp automation",
        "Dashboards",
        "Recruiting workflows",
      ],
    },
    intro: {
      label: "Who We Are",
      title: "Process understanding meets implementation expertise.",
      text: "We combine process understanding, technical know-how and implementation expertise to build systems that truly work in daily operations. We don't just consult – we design, implement and optimize.",
      capabilities: [
        { title: "Implementation, not consulting", description: "We deliver running systems, not slide decks." },
        { title: "Systems that run day to day", description: "Built for real operations, not just the demo." },
        { title: "Support after go-live", description: "We stay on it until it runs reliably." },
      ],
    },
    services: {
      label: "What We Offer",
      title: "Services that drive your business forward.",
      subtitle:
        "Every company is different. We tailor our services to your workflows – always with the goal of delivering measurable results.",
      items: [
        {
          title: "CRM & Sales",
          description:
            "We build CRM systems that structure your sales and free up your team – instead of just collecting data.",
          bullets: ["Lead management", "Quoting process", "automatic follow-ups", "task management", "reporting"],
          result: "Result: faster quotes and no lead falling through the cracks.",
          icon: "chart",
        },
        {
          title: "HR & Recruiting",
          description:
            "From application intake to onboarding: We automate your HR processes and create clear workflows for growing teams.",
          bullets: ["Application intake", "scheduling", "onboarding", "automatic document generation"],
          result: "Result: faster time-to-hire, less coordination overhead.",
          icon: "users",
        },
        {
          title: "Back-Office Automation",
          description:
            "Invoices, approvals, documents – we eliminate repetitive administrative tasks and build systems that work in the background.",
          bullets: ["Invoices", "approvals", "documents", "email automation"],
          result: "Result: hours of manual work back every week.",
          icon: "cog",
        },
        {
          title: "AI-Powered Process Chains",
          description:
            "We integrate AI where it creates real value: in data analysis, decision support and intelligent automation.",
          bullets: ["AI agents", "document understanding", "intelligent qualification", "decision support"],
          result: "Result: AI that takes work off your plate – not a gimmick.",
          icon: "brain",
        },
        {
          title: "Data & Reporting",
          description:
            "Structured data, automated reports and dashboards that provide real decision-making foundations – not data graveyards.",
          bullets: ["Data structure", "dashboards", "automated reports", "KPI tracking"],
          result: "Result: decisions based on current numbers.",
          icon: "data",
        },
      ],
    },
    problems: {
      label: "Common Challenges",
      title: "Does this sound familiar?",
      items: [
        '"We lose too much time on manual processes."',
        '"Our tools aren\'t connected to each other."',
        '"We lack a clear structure in daily operations."',
        '"We use AI – but without real value."',
        '"Growth creates chaos instead of efficiency."',
        '"Administrative tasks slow down our operations."',
      ],
      cta: "We solve these problems – see how we work",
    },
    process: {
      label: "Our Approach",
      title: "A clear process. No surprises.",
      teaserLabel: "Five steps to a running system",
      steps: [
        {
          number: "01",
          title: "Free intro call",
          description: "30 minutes, no obligation. We listen and understand your situation.",
        },
        {
          number: "02",
          title: "Process analysis",
          description: "Together we find the biggest time-wasters in your daily operations.",
        },
        {
          number: "03",
          title: "Solution concept",
          description: "A concrete plan with a fixed price – you know exactly what you get and what it costs.",
        },
        {
          number: "04",
          title: "Implementation",
          description: "We build the system and integrate it into your daily work.",
        },
        {
          number: "05",
          title: "Support",
          description: "We stay on it until everything runs reliably – even after go-live.",
        },
      ],
    },
    results: {
      label: "Your Benefits",
      title: "What you gain.",
      items: [
        { title: "Less Manual Work", description: "Repetitive tasks are automated – your team can focus on value creation." },
        { title: "Fewer Errors", description: "Standardized processes systematically reduce human error sources." },
        { title: "Clearer Workflows", description: "Everyone knows what to do – transparent processes instead of unstructured daily business." },
        { title: "Better Scalability", description: "Systems that grow with your company without proportionally increasing effort." },
        { title: "Meaningful AI Use", description: "AI that solves real problems – not gimmicks, but measurable efficiency gains." },
        { title: "More Growth", description: "Less time on admin means more time for what moves your business forward." },
      ],
    },
    faq: {
      label: "Frequently Asked",
      title: "Before you ask.",
      items: [
        {
          q: "How long does a project take?",
          a: "It depends on scope. Smaller automations often run within a few weeks, larger systems within a few months. After the process analysis you get a clear timeline.",
        },
        {
          q: "Which systems do you work with?",
          a: "Among others CRM and ERP systems (e.g. Odoo, Frappe), automation tools (n8n, Make, Power Automate), WhatsApp automation and modern AI models – chosen based on what fits you.",
        },
        {
          q: "What does a project cost?",
          a: "Every project gets a fixed price up front – no open-ended timesheets. Typical project sizes range from €20,000 to €100,000, depending on scope.",
        },
        {
          q: "Do you work across Germany?",
          a: "Yes. We work remotely and across Germany – and on-site for workshops and kick-offs when you prefer.",
        },
        {
          q: "Do I need an existing CRM?",
          a: "No. We build a suitable system or connect your existing tools – whichever makes more sense.",
        },
        {
          q: "How does the intro call work?",
          a: "30 minutes, online or on-site, free and without obligation. We listen, understand your workflows and show first starting points. No sales pressure.",
        },
      ],
    },
    cta: {
      title: "Ready for systems that work?",
      text: "We don't build theory – we build functioning systems that save time and enable growth in daily operations.",
      button: "Free Process Analysis",
    },
    contact: {
      label: "Contact",
      title: "Let's talk.",
      text: "Tell us about your challenges. We'll get back to you within 24 hours.",
      reassurance: "Reply within 24 h · free · no obligation · 30 min · online or on-site",
      directTitle: "Direct line",
      bookTitle: "Prefer to book directly?",
      bookText: "Pick a time that works for you – booking beats a form.",
      bookButton: "Pick a time",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Your Message",
      messagePlaceholder: "Briefly describe your current situation and what you'd like to improve...",
      submit: "Send Message",
      success: "Thank you! We'll get back to you shortly.",
    },
    footer: {
      tagline: "Scalera builds systems that permanently reduce administrative overhead – from CRM to automation to AI.",
      services: "Services",
      company: "Company",
      impressum: "Legal Notice",
      datenschutz: "Privacy Policy",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
};

export type Translations = (typeof translations)["de"];

export function getTranslations(locale: Locale): Translations {
  return translations[locale] as Translations;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  return "de";
}
