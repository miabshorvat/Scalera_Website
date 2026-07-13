import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://scalera-hq.com"; // TODO: finale Domain prüfen
const TITLE = "Scalera | Weniger Verwaltung. Mehr Wachstum.";
const DESCRIPTION =
  "Scalera entwickelt Systeme, die Unternehmen dauerhaft Verwaltungsaufwand sparen. Von CRM über Automatisierung bis KI. Systeme, die im Alltag wirklich genutzt werden.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Prozessautomatisierung",
    "KI Automatisierung KMU",
    "CRM Aufbau Unternehmen",
    "Workflow Automatisierung",
    "Backoffice Automatisierung",
    "Verwaltungsaufwand reduzieren",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Scalera",
    // OG-Bild wird von src/app/opengraph-image.tsx generiert und automatisch verlinkt.
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="ambient" aria-hidden />
        {children}
      </body>
    </html>
  );
}
