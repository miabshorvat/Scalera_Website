"use client";

import { LocaleProvider } from "@/lib/locale-context";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Intro } from "@/components/intro";
import { ServicesPreview } from "@/components/services-preview";
import { Problems } from "@/components/problems";
import { ProcessTeaser } from "@/components/process-teaser";
import { Faq } from "@/components/faq";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LocaleProvider>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Intro />
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
