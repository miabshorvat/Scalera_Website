"use client";

import { useEffect } from "react";

// Aktiviert die Interaktivität der Seite:
// 1. Scroll-Reveal: .reveal / .reveal-stagger blenden beim Scrollen ein.
// 2. Cursor-Spotlight: ein Glow folgt der Maus über jeder .glass-Karte.
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ── 1. Scroll-Reveal ──
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger")
    );

    let observer: IntersectionObserver | undefined;
    if (reduce) {
      targets.forEach((el) => el.classList.add("reveal-in"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-in");
              observer!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      targets.forEach((el) => observer!.observe(el));
    }

    // ── 2. Cursor-Spotlight (Maus-Verfolgung, rAF-gedrosselt) ──
    let frame = 0;
    let lastCard: HTMLElement | null = null;
    let lastX = 0;
    let lastY = 0;

    function onPointerMove(e: PointerEvent) {
      const card = (e.target as HTMLElement)?.closest<HTMLElement>(".glass");
      lastCard = card;
      lastX = e.clientX;
      lastY = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    }

    function apply() {
      frame = 0;
      if (!lastCard) return;
      const rect = lastCard.getBoundingClientRect();
      lastCard.style.setProperty("--mx", `${lastX - rect.left}px`);
      lastCard.style.setProperty("--my", `${lastY - rect.top}px`);
    }

    if (!reduce) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
