import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SatWave | AI-Powered Crypto Trading Platform",
  description: "Democratizing institutional crypto strategies with transparent AI. Automate decisions, reduce risk, and maximize returns with SatWave's intelligent trading assistant.",
  keywords: ["AI trading", "crypto", "automated trading", "risk management", "blockchain", "fintech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen" suppressHydrationWarning>
        <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
          {/* Dark gradient background */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse at top, #0a1e14 0%, #051409 50%, #000000 100%)",
              zIndex: 0,
            }}
          />

          {/* Spline 3D Planet */}
          <div
            className="spline-wrapper"
            style={{
              position: "fixed",
              top: "-15%",
              left: "50%",
              transform: "translateX(-50%) scale(1.5)",
              width: "140vw",
              height: "140vh",
              maxWidth: "2000px",
              maxHeight: "2000px",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://my.spline.design/holographicearthwithdynamiclines-Jvtm4IAVrBcq00bvfc8tiTIS/"
              title="Spline 3D Planet"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "calc(100% + 80px)",
                border: "none",
                pointerEvents: "none",
                opacity: 0.7,
              }}
            />
          </div>

          {/* All UI content */}
          <div style={{ position: "relative", zIndex: 2 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
