export type Locale = "de" | "en";

const translations = {
  de: {
    nav: {
      services: "Leistungen",
      process: "Vorgehen",
      contact: "Kontakt",
      cta: "Erstgespräch anfragen",
    },
    hero: {
      title: "Wir automatisieren administrative Prozesse und bauen skalierbare Systeme.",
      subtitle:
        "Von CRM und Recruiting bis Backoffice und KI-Workflows – wir reduzieren manuelle Arbeit und schaffen klare, digitale Strukturen.",
      cta: "Erstgespräch anfragen",
      ctaSecondary: "Leistungen entdecken",
    },
    intro: {
      label: "Wer wir sind",
      title: "Prozessverständnis trifft Umsetzungskompetenz.",
      text: "Wir kombinieren Prozessverständnis, technisches Know-how und Umsetzungskompetenz, um Systeme zu bauen, die im Alltag wirklich funktionieren. Wir beraten nicht nur – wir konzipieren, implementieren und optimieren.",
      stat1: "50%",
      stat1Label: "weniger manuelle Arbeit",
      stat2: "100%",
      stat2Label: "Umsetzung, nicht nur Beratung",
      stat3: "24/7",
      stat3Label: "automatisierte Prozesse",
    },
    services: {
      label: "Was wir bieten",
      title: "Leistungen, die Ihr Unternehmen voranbringen.",
      items: [
        {
          title: "CRM- & Vertriebsstrukturen",
          description:
            "Wir bauen CRM-Systeme, die Ihren Vertrieb strukturieren, Leads automatisch qualifizieren und Ihr Team entlasten – statt nur Daten zu sammeln.",
          icon: "chart",
        },
        {
          title: "HR- & Recruiting-Workflows",
          description:
            "Vom Bewerbungseingang bis zum Onboarding: Wir automatisieren Ihre HR-Prozesse und schaffen klare Abläufe für wachsende Teams.",
          icon: "users",
        },
        {
          title: "Backoffice-Automatisierung",
          description:
            "Rechnungen, Berichte, Freigaben – wir eliminieren repetitive Verwaltungsaufgaben und schaffen Systeme, die im Hintergrund arbeiten.",
          icon: "cog",
        },
        {
          title: "KI-gestützte Prozessketten",
          description:
            "Wir integrieren KI dort, wo sie echten Mehrwert schafft: in Datenanalyse, Entscheidungsunterstützung und intelligenter Automatisierung.",
          icon: "brain",
        },
        {
          title: "Daten- & Reporting-Systeme",
          description:
            "Strukturierte Daten, automatisierte Reports und Dashboards, die Ihnen echte Entscheidungsgrundlagen liefern – keine Zahlenfriedhöfe.",
          icon: "data",
        },
      ],
    },
    problems: {
      label: "Typische Herausforderungen",
      title: "Kommt Ihnen das bekannt vor?",
      items: [
        "\u201EWir verlieren zu viel Zeit durch manuelle Prozesse.\u201C",
        "\u201EUnsere Tools sind nicht miteinander verbunden.\u201C",
        "\u201EUns fehlt eine klare Struktur im Tagesgesch\u00E4ft.\u201C",
        "\u201EWir nutzen KI \u2013 aber ohne echten Nutzen.\u201C",
        "\u201EWachstum erzeugt bei uns Chaos statt Effizienz.\u201C",
        "\u201EAdministrative Aufgaben bremsen unser operatives Gesch\u00E4ft.\u201C",
      ],
      cta: "Diese Probleme lösen wir.",
    },
    process: {
      label: "Unsere Vorgehensweise",
      title: "Strukturiert von der Analyse bis zur Optimierung.",
      steps: [
        {
          number: "01",
          title: "Analyse",
          description: "Bestehende Prozesse und Systeme verstehen, Engpässe identifizieren.",
        },
        {
          number: "02",
          title: "Konzeption",
          description: "Skalierbare Strukturen und Workflows entwerfen.",
        },
        {
          number: "03",
          title: "Umsetzung",
          description: "Systeme implementieren und in den Alltag integrieren.",
        },
        {
          number: "04",
          title: "Automatisierung",
          description: "Prozesse intelligent verknüpfen und automatisieren.",
        },
        {
          number: "05",
          title: "Optimierung",
          description: "Kontinuierliche Verbesserung im laufenden Betrieb.",
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
        { title: "Mehr Effizienz", description: "Schnellere Durchlaufzeiten, weniger Overhead, mehr Output bei gleichen Ressourcen." },
      ],
    },
    cta: {
      title: "Bereit für funktionierende Systeme?",
      text: "Wir bauen keine Theorie – wir bauen funktionierende Systeme, die im Alltag Zeit sparen und Wachstum ermöglichen.",
      button: "Erstgespräch anfragen",
    },
    contact: {
      label: "Kontakt",
      title: "Lassen Sie uns sprechen.",
      text: "Erzählen Sie uns von Ihren Herausforderungen. Wir melden uns innerhalb von 24 Stunden.",
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen",
      message: "Ihre Nachricht",
      messagePlaceholder: "Beschreiben Sie kurz Ihre aktuelle Situation und was Sie verbessern möchten...",
      submit: "Nachricht senden",
      success: "Vielen Dank! Wir melden uns in Kürze bei Ihnen.",
    },
    footer: {
      tagline: "Wir reduzieren manuelle Arbeit in Unternehmen durch intelligente Systeme, die wirklich genutzt werden.",
      services: "Leistungen",
      company: "Unternehmen",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      services: "Services",
      process: "Process",
      contact: "Contact",
      cta: "Book a Call",
    },
    hero: {
      title: "We automate administrative processes and build scalable systems.",
      subtitle:
        "From CRM and recruiting to back-office and AI workflows – we reduce manual work and create clear, digital structures.",
      cta: "Book a Call",
      ctaSecondary: "Explore Services",
    },
    intro: {
      label: "Who We Are",
      title: "Process understanding meets implementation expertise.",
      text: "We combine process understanding, technical know-how and implementation expertise to build systems that truly work in daily operations. We don't just consult – we design, implement and optimize.",
      stat1: "50%",
      stat1Label: "less manual work",
      stat2: "100%",
      stat2Label: "implementation, not just consulting",
      stat3: "24/7",
      stat3Label: "automated processes",
    },
    services: {
      label: "What We Offer",
      title: "Services that drive your business forward.",
      items: [
        {
          title: "CRM & Sales Structures",
          description:
            "We build CRM systems that structure your sales, automatically qualify leads and free up your team – instead of just collecting data.",
          icon: "chart",
        },
        {
          title: "HR & Recruiting Workflows",
          description:
            "From application intake to onboarding: We automate your HR processes and create clear workflows for growing teams.",
          icon: "users",
        },
        {
          title: "Back-Office Automation",
          description:
            "Invoices, reports, approvals – we eliminate repetitive administrative tasks and build systems that work in the background.",
          icon: "cog",
        },
        {
          title: "AI-Powered Process Chains",
          description:
            "We integrate AI where it creates real value: in data analysis, decision support and intelligent automation.",
          icon: "brain",
        },
        {
          title: "Data & Reporting Systems",
          description:
            "Structured data, automated reports and dashboards that provide real decision-making foundations – not data graveyards.",
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
      cta: "We solve these problems.",
    },
    process: {
      label: "Our Approach",
      title: "Structured from analysis to optimization.",
      steps: [
        {
          number: "01",
          title: "Analysis",
          description: "Understand existing processes and systems, identify bottlenecks.",
        },
        {
          number: "02",
          title: "Design",
          description: "Create scalable structures and workflows.",
        },
        {
          number: "03",
          title: "Implementation",
          description: "Build systems and integrate them into daily operations.",
        },
        {
          number: "04",
          title: "Automation",
          description: "Intelligently connect and automate processes.",
        },
        {
          number: "05",
          title: "Optimization",
          description: "Continuous improvement in ongoing operations.",
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
        { title: "More Efficiency", description: "Faster throughput, less overhead, more output with the same resources." },
      ],
    },
    cta: {
      title: "Ready for systems that work?",
      text: "We don't build theory – we build functioning systems that save time and enable growth in daily operations.",
      button: "Book a Call",
    },
    contact: {
      label: "Contact",
      title: "Let's talk.",
      text: "Tell us about your challenges. We'll get back to you within 24 hours.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Your Message",
      messagePlaceholder: "Briefly describe your current situation and what you'd like to improve...",
      submit: "Send Message",
      success: "Thank you! We'll get back to you shortly.",
    },
    footer: {
      tagline: "We reduce manual work in companies through intelligent systems that are actually used.",
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
