import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Scalera – Prozessautomatisierung & skalierbare Systeme",
  description:
    "Wir automatisieren administrative Prozesse und bauen skalierbare Systeme. Von CRM und Recruiting bis Backoffice und KI-Workflows.",
  keywords: [
    "Prozessautomatisierung",
    "KI Automatisierung KMU",
    "digitale Prozesse optimieren",
    "CRM Aufbau Unternehmen",
    "Workflow Automatisierung",
    "Backoffice Automatisierung",
  ],
  openGraph: {
    title: "Scalera – Prozessautomatisierung & skalierbare Systeme",
    description:
      "Wir reduzieren manuelle Arbeit in Unternehmen um bis zu 50% durch intelligente Systeme.",
    type: "website",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
