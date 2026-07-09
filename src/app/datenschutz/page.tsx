import Link from "next/link";

export const metadata = {
  title: "Datenschutz – Scalera",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-navy-950">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32 lg:py-44">
        <Link
          href="/"
          className="group mb-16 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {"Zur\u00FCck zur Startseite"}
        </Link>

        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{"Datenschutzerkl\u00E4rung"}</h1>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-gray-400">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">1. Datenschutz auf einen Blick</h2>
            <h3 className="mb-2 font-medium text-white">Allgemeine Hinweise</h3>
            <p>{"Die folgenden Hinweise geben einen einfachen \u00DCberblick dar\u00FCber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\u00F6nlich identifiziert werden k\u00F6nnen."}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">2. Verantwortliche Stelle</h2>
            <p>{"Laura Kufner \u2013 Digitale Struktur- & Prozessberatung"}<br />Landauerstr. 7<br />70499 Stuttgart<br />E-Mail: laura.kufner@scalera-hq.com</p>
            <p className="mt-3">{"Verantwortliche Stelle ist die nat\u00FCrliche oder juristische Person, die allein oder gemeinsam mit anderen \u00FCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet."}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">3. Datenerfassung auf dieser Website</h2>
            <h3 className="mb-2 font-medium text-white">Kontaktformular</h3>
            <p>{"Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und f\u00FCr den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."}</p>
            <p className="mt-3">{"Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf\u00FCllung eines Vertrags zusammenh\u00E4ngt oder zur Durchf\u00FChrung vorvertraglicher Ma\u00DFnahmen erforderlich ist. In allen \u00FCbrigen F\u00E4llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO)."}</p>
            <p className="mt-3">{"Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur L\u00F6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\u00FCr die Datenspeicherung entf\u00E4llt. Zwingende gesetzliche Bestimmungen \u2013 insbesondere Aufbewahrungsfristen \u2013 bleiben unber\u00FChrt."}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">4. Hosting</h2>
            <h3 className="mb-2 font-medium text-white">Vercel</h3>
            <p>{"Wir hosten unsere Website bei Vercel Inc., 440 N Baxter St, Los Angeles, CA 90012, USA. Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von Vercel verarbeitet. Hierbei k\u00F6nnen auch personenbezogene Daten an den Mutterkonzern von Vercel in die USA \u00FCbermittelt werden."}</p>
            <p className="mt-3">{"Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer m\u00F6glichst zuverl\u00E4ssigen Darstellung unserer Website."}</p>
            <p className="mt-3">{"Details entnehmen Sie der Datenschutzerkl\u00E4rung von Vercel: https://vercel.com/legal/privacy-policy"}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">5. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="mb-2 font-medium text-white">Datenschutz</h3>
            <p>{"Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\u00F6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\u00E4rung."}</p>
            <p className="mt-3">{"Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten m\u00F6glich. Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr\u00FCckliche Zustimmung nicht an Dritte weitergegeben."}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">6. Ihre Rechte</h2>
            <p>{"Sie haben jederzeit das Recht auf unentgeltliche Auskunft \u00FCber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\u00E4nger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder L\u00F6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\u00F6nnen Sie sich jederzeit an uns wenden."}</p>
            <h3 className="mt-4 mb-2 font-medium text-white">{"Recht auf Einschr\u00E4nkung der Verarbeitung"}</h3>
            <p>{"Sie haben das Recht, die Einschr\u00E4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."}</p>
            <h3 className="mt-4 mb-2 font-medium text-white">Widerspruchsrecht</h3>
            <p>{"Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gr\u00FCnden, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Widerspruch einzulegen."}</p>
            <h3 className="mt-4 mb-2 font-medium text-white">{"Beschwerderecht bei der Aufsichtsbeh\u00F6rde"}</h3>
            <p>{"Im Falle von Verst\u00F6\u00DFen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh\u00F6rde zu."}</p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">{"7. SSL-/TLS-Verschl\u00FCsselung"}</h2>
            <p>{"Diese Seite nutzt aus Sicherheitsgr\u00FCnden und zum Schutz der \u00DCbertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschl\u00FCsselung. Eine verschl\u00FCsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Ehttp://\u201C auf \u201Ehttps://\u201C wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."}</p>
          </div>

          <p className="text-gray-600">Stand: April 2026</p>
        </div>
      </div>
    </div>
  );
}
