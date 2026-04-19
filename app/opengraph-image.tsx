import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";

/**
 * Auto-generated Open Graph image at /opengraph-image
 * (Next.js convention: this file becomes the OG/Twitter card for the route).
 *
 * Rendered by satori → terminal-styled "screenshot" reusing the site's palette
 * and JetBrains Mono so the preview feels continuous with the live page.
 */

export const alt =
  "Đào Huy Phương — Full-stack Developer & Freelancer · Nhận làm Website & Phần mềm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette mirrors the site's CSS variables — kept literal because satori
// doesn't resolve `var(--…)` at render time.
const C = {
  bg: "#08090a",
  elev: "#0f1011",
  border: "#1f2024",
  fg: "#e5e7eb",
  fgMuted: "#9ca3af",
  fgDim: "#6b7280",
  green: "#4ade80",
  blue: "#60a5fa",
  purple: "#c084fc",
  cyan: "#22d3ee",
  amber: "#fbbf24",
  red: "#f87171",
};

/**
 * Pull JetBrains Mono TTF straight from Google Fonts. The `text` param tells
 * Google to subset the font to only the glyphs we actually render — keeps
 * the OG response small and fast.
 */
async function loadGoogleFont(weight: 400 | 700, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const match = css.match(
    /src: url\((https:\/\/[^)]+)\) format\('(?:opentype|truetype|woff2?)'\)/
  );
  if (!match) throw new Error("Could not parse Google Fonts CSS");
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error("Failed to fetch font binary");
  return res.arrayBuffer();
}

export default async function Image() {
  const promptPath = "~/portfolio";
  const services = ["web-development/", "software/", "ai-integration/"];
  const stack = "Next.js · React · Vue · Golang · Laravel · Python";
  const tagline = "Full-stack Developer";
  const role = "Freelancer";
  const cta = "Nhận làm Website & Phần mềm";
  const status = "Available for hire";
  const domain = "huyphuong.dev";

  // All glyphs we'll actually render — fed to Google's font subsetter.
  const allText =
    [
      promptPath,
      personal.name,
      tagline,
      role,
      cta,
      stack,
      status,
      domain,
      ...services,
      "$ whoami > ls services/ cat stack.txt _",
      "Đào Huy Phương",
      "portfolio.sh — zsh",
    ].join(" ") +
    " 0123456789!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~";

  const [regular, bold] = await Promise.all([
    loadGoogleFont(400, allText),
    loadGoogleFont(700, allText),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: C.bg,
          padding: "50px",
          fontFamily: "JetBrains Mono",
          // Subtle scanline / grid background using two layered radial gradients.
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(74,222,128,0.08), transparent 50%), radial-gradient(circle at 80% 100%, rgba(96,165,250,0.06), transparent 50%)",
        }}
      >
        {/* Terminal window */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            borderRadius: "16px",
            border: `1px solid ${C.border}`,
            backgroundColor: C.elev,
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
          }}
        >
          {/* Title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 20px",
              backgroundColor: "#0a0b0c",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <div
              style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: C.red }}
            />
            <div
              style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: C.amber }}
            />
            <div
              style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: C.green }}
            />
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                color: C.fgDim,
                fontSize: 18,
              }}
            >
              portfolio.sh — zsh
            </div>
          </div>

          {/* Terminal body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "44px 50px",
              gap: "18px",
              fontSize: 26,
              lineHeight: 1.35,
              color: C.fg,
            }}
          >
            {/* whoami */}
            <Prompt path={promptPath} command="whoami" />
            <div style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}>
              <span style={{ color: C.cyan, marginRight: "12px" }}>{">"}</span>
              <span style={{ fontSize: 64, fontWeight: 700, color: C.fg }}>
                {personal.name}
              </span>
            </div>
            <div style={{ display: "flex", marginLeft: "20px", fontSize: 28 }}>
              <span style={{ color: C.cyan, marginRight: "12px" }}>{">"}</span>
              <span style={{ color: C.purple, fontWeight: 700 }}>{tagline}</span>
              <span style={{ color: C.fgDim, margin: "0 12px" }}>·</span>
              <span style={{ color: C.amber, fontWeight: 700 }}>{role}</span>
            </div>

            <div style={{ height: 12, display: "flex" }} />

            {/* ls services */}
            <Prompt path={promptPath} command="ls services/" />
            <div
              style={{
                display: "flex",
                marginLeft: "20px",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ color: C.cyan }}>{">"}</span>
              {services.map((s) => (
                <span key={s} style={{ color: C.blue }}>
                  {s}
                </span>
              ))}
            </div>

            <div style={{ height: 12, display: "flex" }} />

            {/* cat stack */}
            <Prompt path={promptPath} command="cat stack.txt" />
            <div style={{ display: "flex", marginLeft: "20px" }}>
              <span style={{ color: C.cyan, marginRight: "12px" }}>{">"}</span>
              <span style={{ color: C.fg }}>{stack}</span>
            </div>

            <div style={{ flex: 1, display: "flex" }} />

            {/* CTA + cursor */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: C.fgDim, fontSize: 22 }}>{promptPath}</span>
              <span style={{ color: C.green, marginLeft: 12, fontSize: 22 }}>$</span>
              <span style={{ color: C.fg, marginLeft: 12, fontSize: 22 }}>echo</span>
              <span style={{ color: C.amber, marginLeft: 12, fontSize: 22 }}>
                &quot;{cta}&quot;
              </span>
              <span
                style={{
                  marginLeft: 14,
                  width: 14,
                  height: 26,
                  backgroundColor: C.green,
                  display: "flex",
                }}
              />
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 22,
            color: C.fgDim,
            fontSize: 22,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: C.green }}>●</span>
            <span style={{ color: C.fg }}>{domain}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: C.green, fontWeight: 700 }}>{status}</span>
            <span style={{ color: C.fgDim }}>·</span>
            <span>vi · en</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: regular, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}

/** Single `path $ command` prompt line — repeated 3× in the body. */
function Prompt({ path, command }: { path: string; command: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span style={{ color: C.fgDim }}>{path}</span>
      <span style={{ color: C.green, marginLeft: 12 }}>$</span>
      <span style={{ color: C.fg, marginLeft: 12 }}>{command}</span>
    </div>
  );
}
