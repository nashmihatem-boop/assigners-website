import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const ogImageSize = { width: 1200, height: 630 };

export function generateBrandOgImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo/assigners-logo-full-dark.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0f2c",
          backgroundImage: "linear-gradient(135deg, #0a0f2c 0%, #1c2350 60%, #241a4d 100%)",
          padding: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={440} height={131} alt="" />
        <div
          style={{
            marginTop: 56,
            fontSize: 42,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: 940,
            lineHeight: 1.3,
            display: "flex",
          }}
        >
          Web Form Leads, Warm Transfers & Inbound Calls
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 26,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            display: "flex",
          }}
        >
          Assigned by campaign criteria. Delivered in real time.
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
