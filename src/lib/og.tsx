/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { rtlSegments } from "@/lib/arabic-shaping";

export const ogSize = { width: 1200, height: 630 };

const fontDir = join(process.cwd(), "assets/fonts");
const fontsPromise = Promise.all([
  readFile(join(fontDir, "Cairo-700.ttf")),
  readFile(join(fontDir, "Cairo-800.ttf")),
]);

const mimeByExt: Record<string, string> = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml" };

async function publicImageDataUri(publicPath: string): Promise<string> {
  const data = await readFile(join(process.cwd(), "public", publicPath));
  return `data:${mimeByExt[extname(publicPath)] ?? "image/png"};base64,${data.toString("base64")}`;
}

/** Satori has no bidi support: RTL words are pre-shaped and laid out right to left. */
function Words({ text, rtl, style }: { text: string; rtl: boolean; style: Record<string, string | number> }) {
  if (!rtl) return <div style={{ display: "flex", ...style }}>{text}</div>;
  return (
    <div style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", ...style }}>
      {rtlSegments(text).map((chunks, i) => (
        <div key={i} style={{ display: "flex", marginLeft: "0.28em" }}>
          {chunks.map((chunk, j) => (
            <span key={j}>{chunk}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export async function renderOgImage({
  title,
  subtitle,
  image,
  rtl,
  background = "#0f211d",
  accent = "#34d399",
}: {
  title: string;
  subtitle: string;
  image?: string;
  rtl: boolean;
  background?: string;
  accent?: string;
}) {
  const [bold, extraBold] = await fontsPromise;
  const imageSrc = image ? await publicImageDataUri(image) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: rtl ? "row-reverse" : "row",
          background,
          fontFamily: "Cairo",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: rtl ? "flex-end" : "flex-start",
            width: imageSrc ? 640 : 1200,
            padding: "64px 64px",
            textAlign: rtl ? "right" : "left",
          }}
        >
          <div style={{ display: "flex", fontSize: 30, fontWeight: 800, color: "#ffffff", letterSpacing: 1 }}>
            CDTA<span style={{ color: accent }}>.</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: rtl ? "flex-end" : "flex-start" }}>
            <div style={{ display: "flex", width: 72, height: 6, borderRadius: 3, background: accent, marginBottom: 28 }} />
            <Words text={title} rtl={rtl} style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.15, color: "#ffffff" }} />
            <Words text={subtitle} rtl={rtl} style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.35, color: accent, marginTop: 20 }} />
          </div>
          <Words
            text={rtl ? "حلول رقمية في الجزائر" : "Solutions digitales en Algérie"}
            rtl={rtl}
            style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.55)" }}
          />
        </div>
        {imageSrc && (
          <div style={{ display: "flex", width: 560, height: "100%", padding: rtl ? "40px 0 40px 40px" : "40px 40px 40px 0" }}>
            <img
              src={imageSrc}
              alt=""
              width={520}
              height={550}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 28 }}
            />
          </div>
        )}
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Cairo", data: bold, weight: 700, style: "normal" },
        { name: "Cairo", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
