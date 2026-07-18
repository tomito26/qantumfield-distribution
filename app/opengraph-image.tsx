import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

/**
 * Branded Open Graph image (1200×630) rendered at build/request time via Next's
 * ImageResponse — no external dependencies. Reused for Twitter via
 * app/twitter-image.tsx. Guarantees a branded preview wherever a link is shared
 * or cited by an AI answer engine.
 */
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand token from tailwind.config.ts / globals.css.
const BRAND = "#0C4E1A";
const LEAF = "#84cc16";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${BRAND} 0%, #06340f 100%)`,
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: LEAF,
              color: BRAND,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            Q
          </div>
          <span style={{ fontSize: 34, fontWeight: 700 }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 900 }}
          >
            Global Waste, Recycling &amp; Environmental Solutions
          </span>
          <span style={{ fontSize: 30, color: "rgba(255,255,255,0.85)", maxWidth: 850 }}>
            Waste disposal · Recycling · Asset recovery · Environmental consulting
          </span>
        </div>

        <span style={{ fontSize: 26, color: LEAF, fontWeight: 600 }}>
          quantumfielddistribution.com
        </span>
      </div>
    ),
    { ...size }
  );
}
