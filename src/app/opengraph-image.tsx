import { ImageResponse } from "next/og";

// Generiertes OG-/Social-Vorschaubild (Link-Karte in LinkedIn, WhatsApp, Slack …).
// Wird beim Build statisch erzeugt. Farben aus dem Design-System (globals.css).
export const alt = "Scalera. Weniger Verwaltung. Mehr Wachstum.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#06080f",
          backgroundImage:
            "radial-gradient(circle at 78% 22%, rgba(14,165,233,0.28), transparent 45%), radial-gradient(circle at 20% 85%, rgba(2,132,199,0.18), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wortmarke */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "9999px",
              backgroundColor: "#38bdf8",
            }}
          />
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.14em",
            }}
          >
            SCALERA
          </div>
        </div>

        {/* Claim */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            Weniger Verwaltung.
          </div>
          <div
            style={{
              fontSize: "104px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#38bdf8",
            }}
          >
            Mehr Wachstum.
          </div>
        </div>

        {/* Fußzeile */}
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            color: "#94a3b8",
            letterSpacing: "0.02em",
          }}
        >
          CRM · Automatisierung · KI
        </div>
      </div>
    ),
    { ...size }
  );
}
