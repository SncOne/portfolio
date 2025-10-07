import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Türker Gürel · Flutter Developer";
  const subtitle =
    searchParams.get("subtitle") ?? "Crafting calm, polished digital products.";

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "Geist Sans, Inter, sans-serif",
          background: "#0f172a",
          color: "#e2e8f0",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "70%",
          }}
        >
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.5em",
              fontSize: 20,
              color: "#94a3b8",
            }}
          >
            Türker Gürel
          </span>
          <h1
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 600,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#cbd5f5",
          }}
        >
          <span>{subtitle}</span>
          <span style={{ letterSpacing: "0.4em", textTransform: "uppercase" }}>
            Flutter
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
