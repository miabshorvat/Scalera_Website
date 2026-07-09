"use client";

import { LocaleProvider } from "@/lib/locale-context";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Intro } from "@/components/intro";
import { Proof } from "@/components/proof";
import { ServicesPreview } from "@/components/services-preview";
import { Problems } from "@/components/problems";
import { ProcessTeaser } from "@/components/process-teaser";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Intro />
        <Proof />
        <ServicesPreview />
        <Problems />
        <ProcessTeaser />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
