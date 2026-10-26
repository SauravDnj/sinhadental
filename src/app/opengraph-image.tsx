import { ImageResponse } from "next/og";
import { clinic } from "@/data/clinic";
import { TOOTH_PATH } from "@/components/dental/illustrations";

export const alt = `${clinic.name}, dental clinic in Palanpur, Surat`;
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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "linear-gradient(135deg, #FCFDFD 0%, #EAF7F5 60%, #D3EDE9 100%)",
          color: "#07545B",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#087F8C", fontWeight: 600 }}>
            Palanpur, Surat
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>{clinic.name}</div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#17313A" }}>
            Calm, clearly explained dental care.
          </div>
          <div style={{ fontSize: 30, marginTop: 40, fontWeight: 700, color: "#087F8C" }}>{clinic.phone.display}</div>
        </div>
        <svg width="300" height="330" viewBox="0 0 100 110">
          <path d={TOOTH_PATH} fill="none" stroke="#087F8C" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
