import type { Metadata } from "next";
import "./globals.css";
import PipelineScene from "@/components/PipelineScene";

export const metadata: Metadata = {
  title: "SatWave | Recycling Company",
  description: "SatWave turns waste intelligence into measurable impact for recycling teams and municipalities.",
  keywords: ["recycling", "waste intelligence", "circular economy", "satellite monitoring", "environmental data"],
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
              transform: "translateX(-50%) scale(1.4)",
              width: "140vw",
              height: "140vh",
              maxWidth: "2000px",
              maxHeight: "2000px",
              zIndex: 1,
              overflow: "hidden",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            <PipelineScene />
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
