"use client";

import { LocaleProvider } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { ServicesPreview } from "@/components/services-preview";
import { Problems } from "@/components/problems";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ServicesPreview />
        <Problems />
        <CtaSection />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
