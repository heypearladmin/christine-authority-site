import { ImageResponse } from "next/og";

export const alt = "Christine Andreasen | Seattle Luxury Real Estate Advisor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1C1C1C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          position: "relative",
        }}
      >
        {/* Gold rule */}
        <div
          style={{
            width: 56,
            height: 1,
            background: "#C9A96E",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontFamily: "serif",
            fontSize: 52,
            color: "#F5F0E8",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Christine Andreasen
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#C9A96E",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Seattle Luxury Real Estate
        </div>
        <div
          style={{
            fontSize: 16,
            color: "#F5F0E880",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Christine &amp; Company · eXp Realty
        </div>
      </div>
    ),
    { ...size }
  );
}
