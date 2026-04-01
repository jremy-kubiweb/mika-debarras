import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MiKa Débarras Lyon — Vide Maison, Cave & Appartement";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          padding: "72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #f97316, #fb923c)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(249,115,22,0.15)",
            border: "1px solid rgba(249,115,22,0.4)",
            borderRadius: "24px",
            padding: "8px 20px",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#fb923c", fontSize: "16px", fontWeight: 600 }}>
            📍 Irigny — Grand Lyon — Rhône
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "58px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          MiKa Débarras
          <br />
          <span style={{ color: "#fb923c" }}>Lyon & Région</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            marginBottom: "48px",
            maxWidth: "700px",
          }}
        >
          Vide maison · Vide cave · Succession · Devis gratuit 24h
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {["111 communes couvertes", "Intervention sous 48h", "Équipe assurée", "Éco-responsable"].map(
            (text) => (
              <div
                key={text}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "12px",
                  padding: "10px 20px",
                  color: "#e2e8f0",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                {text}
              </div>
            )
          )}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "72px",
            color: "#64748b",
            fontSize: "18px",
          }}
        >
          mika-debarras.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
