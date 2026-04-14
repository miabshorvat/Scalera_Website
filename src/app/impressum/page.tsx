import Link from "next/link";

export const metadata = {
  title: "Impressum – Scalera",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-navy-950">
      <div className="mx-auto max-w-3xl px-6 py-32 lg:py-44">
        <Link
          href="/"
          className="group mb-16 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {"Zur\u00FCck zur Startseite"}
        </Link>

        <h1 className="text-4xl font-bold text-white sm:text-5xl">Impressum</h1>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-gray-400">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">{"Angaben gem\u00E4\u00DF \u00A7 5 TMG"}</h2>
            <p>{"Laura Kufner \u2013 Digitale Struktur- & Prozessberatung"}<br />{"Rinnen\u00E4ckerstr. 24"}<br />71332 Waiblingen</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Inhaberin</h2>
            <p>Laura Kufner</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Kontakt</h2>
            <p>E-Mail: laura.kufner@scalera-hq.com</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Umsatzsteuer-ID</h2>
            <p>{"Umsatzsteuer-Identifikationsnummer gem\u00E4\u00DF \u00A7 27a Umsatzsteuergesetz:"}<br />Wird nachgetragen.</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">{"Haftung f\u00FCr Inhalte"}</h2>
            <p>{"Als Diensteanbieter sind wir gem\u00E4\u00DF \u00A7 7 Abs. 1 TMG f\u00FCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \u00A7\u00A7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \u00FCbermittelte oder gespeicherte fremde Informationen zu \u00FCberwachen oder nach Umst\u00E4nden zu forschen, die auf eine rechtswidrige T\u00E4tigkeit hinweisen."}</p>
            <p className="mt-3">{"Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\u00FChrt. Eine diesbez\u00FCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\u00F6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."}</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">{"Haftung f\u00FCr Links"}</h2>
            <p>{"Unser Angebot enth\u00E4lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\u00F6nnen wir f\u00FCr diese fremden Inhalte auch keine Gew\u00E4hr \u00FCbernehmen. F\u00FCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\u00F6gliche Rechtsverst\u00F6\u00DFe \u00FCberpr\u00FCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar."}</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Urheberrecht</h2>
            <p>{"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\u00E4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\u00DFerhalb der Grenzen des Urheberrechtes bed\u00FCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
