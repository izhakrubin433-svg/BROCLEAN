import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Broclean Cleaning Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #f1f3f5 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Silver top bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 6,
          background: "linear-gradient(90deg, #9ca3af, #d1d5db, #9ca3af)",
        }} />

        {/* BROCLEAN watermark */}
        <div style={{
          position: "absolute",
          fontSize: 220, fontWeight: 900, letterSpacing: "0.08em",
          color: "rgba(156,163,175,0.06)",
          transform: "rotate(-15deg)",
        }}>
          BROCLEAN
        </div>

        {/* Logo */}
        <div style={{
          width: 120, height: 120,
          background: "#111827",
          borderRadius: 28,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 32,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          border: "2px solid #d1d5db",
        }}>
          <span style={{ color: "white", fontSize: 64, fontWeight: 900 }}>B</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: 64, fontWeight: 900, color: "#111827", marginBottom: 16 }}>
          Broclean
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 32, color: "#6b7280", marginBottom: 40 }}>
          שירותי ניקיון מקצועיים
        </div>

        {/* Silver divider */}
        <div style={{
          width: 200, height: 2, marginBottom: 40,
          background: "linear-gradient(90deg, transparent, #9ca3af, #d1d5db, #9ca3af, transparent)",
        }} />

        {/* Tags */}
        <div style={{ display: "flex", gap: 16 }}>
          {["משרדים", "בניינים", "קליניקות", "24/6"].map((tag) => (
            <div key={tag} style={{
              background: "#f8f9fa", border: "1px solid #d1d5db",
              borderRadius: 50, padding: "10px 24px",
              fontSize: 22, color: "#374151", fontWeight: 600,
            }}>
              {tag}
            </div>
          ))}
        </div>

        {/* Phone */}
        <div style={{
          position: "absolute", bottom: 40,
          fontSize: 24, color: "#9ca3af", fontWeight: 500,
        }}>
          050-232-8041 · broclean-clean.com
        </div>

        {/* Silver bottom bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 6,
          background: "linear-gradient(90deg, #9ca3af, #d1d5db, #9ca3af)",
        }} />
      </div>
    ),
    { ...size }
  );
}
