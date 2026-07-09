"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/locale-context";
import { site } from "@/lib/site";

export function Contact() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-20 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-400">
              {t.contact.label}
            </span>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-400">
              {t.contact.text}
            </p>

            {/* Reassurance – nimmt die letzte Hürde */}
            <div className="mt-6 inline-flex items-start gap-3 rounded-xl border border-accent-500/20 bg-accent-500/5 px-4 py-3">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-accent-200">{t.contact.reassurance}</span>
            </div>

            {/* Direkte Kontaktwege */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
                {t.contact.directTitle}
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] text-gray-300">
                {site.contact.email && (
                  <li>
                    <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-3 transition-colors hover:text-white">
                      <span className="text-accent-400">✉</span> {site.contact.email}
                    </a>
                  </li>
                )}
                {site.contact.phone && (
                  <li>
                    <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 transition-colors hover:text-white">
                      <span className="text-accent-400">☎</span> {site.contact.phone}
                    </a>
                  </li>
                )}
                {site.contact.linkedin && (
                  <li>
                    <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition-colors hover:text-white">
                      <span className="text-accent-400">in</span> LinkedIn
                    </a>
                  </li>
                )}
                {site.contact.location && (
                  <li className="inline-flex items-center gap-3">
                    <span className="text-accent-400">◎</span> {site.contact.location}
                  </li>
                )}
              </ul>
            </div>

          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="glass flex h-full min-h-[350px] sm:min-h-[450px] items-center justify-center rounded-xl sm:rounded-2xl p-8 sm:p-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-accent-500/10">
                    <svg className="h-8 w-8 sm:h-10 sm:w-10 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-white">{t.contact.success}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="space-y-4 sm:space-y-5">
                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 sm:mb-2 block text-sm font-medium text-gray-300">
                        {t.contact.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-all focus:border-accent-500/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-accent-500/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 sm:mb-2 block text-sm font-medium text-gray-300">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-all focus:border-accent-500/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-accent-500/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 sm:mb-2 block text-sm font-medium text-gray-300">
                      {t.contact.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-all focus:border-accent-500/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-accent-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 sm:mb-2 block text-sm font-medium text-gray-300">
                      {t.contact.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full resize-none rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-sm sm:text-base text-white placeholder-gray-500 outline-none transition-all focus:border-accent-500/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-accent-500/40"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg sm:rounded-xl bg-white px-6 py-3.5 sm:px-8 sm:py-4 text-base font-semibold text-navy-950 transition-all hover:bg-gray-100 disabled:opacity-50"
                  >
                    {loading ? "..." : t.contact.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
