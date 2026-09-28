import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Default share image for every page (link previews on LinkedIn, WhatsApp, Slack, X). Generated at build time.
export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #0b0a0a 0%, #153762 60%, #10213c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="150" height="100" viewBox="8 26 84 56">
            <path d="M 30 30 L 12 50 L 30 70" fill="none" stroke="#FF4D00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 70 30 L 88 50 L 70 70" fill="none" stroke="#FF4D00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="42" r="12" fill="#FFFFFF" />
            <path d="M 32 75 Q 50 50 68 75 Z" fill="#FFFFFF" />
          </svg>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>
            <span>Syntax</span>
            <span style={{ color: "#ff4103", marginLeft: -14 }}>Hires</span>
          </div>
        </div>
        <div style={{ marginTop: 44, fontSize: 46, fontWeight: 700, lineHeight: 1.2, maxWidth: 900 }}>
          Hire vetted remote developers and dedicated teams
        </div>
        <div style={{ marginTop: 24, fontSize: 28, color: "#c7d2e3" }}>
          Interview before you commit · Month-to-month · You own the code
        </div>
      </div>
    ),
    size,
  );
}
