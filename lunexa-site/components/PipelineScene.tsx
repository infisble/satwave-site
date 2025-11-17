"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getInitialMotionState } from "@/lib/motion";
import PipelineSceneCanvas from "./PipelineSceneCanvas";

const Spline = dynamic(() => import("./SplineClient"), {
  ssr: false,
  loading: () => <FallbackVisual />,
});

export default function PipelineScene() {
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneErrored, setSceneErrored] = useState(false);

  const ensureWebGL = useCallback(() => {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  }, []);

  useEffect(() => {
    if (!ensureWebGL()) {
      console.error("WebGL initialization failed, reloading...");
      setTimeout(() => window.location.reload(), 200);
    }
  }, [ensureWebGL]);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    fetch("/api/spline", {
      cache: "reload",
      signal: controller.signal,
    }).catch((error) => {
      if (!cancelled) {
        console.error("Failed to preload Spline scene:", error);
        setSceneErrored(true);
      }
    });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const renderSpline = () => {
    if (sceneErrored) {
      return null;
    }

    return (
      <div className="absolute inset-0" suppressHydrationWarning>
        <Spline
          scene="/api/spline"
          onLoad={() => setSceneReady(true)}
          onError={() => setSceneErrored(true)}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "120vh",
          }}
        />
      </div>
    );
  };

  return (
    <motion.div
      initial={getInitialMotionState(
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1 }
      )}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full h-full"
      suppressHydrationWarning
    >
      <div className="absolute inset-0" aria-hidden="true">
        <PipelineSceneCanvas />
      </div>

      {renderSpline()}

      {sceneErrored && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-dark-bg/80 text-center px-6"
          suppressHydrationWarning
        >
          <p className="text-white/60 text-sm mb-4">
            3D сцена временно недоступна. Попробуйте обновить страницу или проверьте, что WebGL включён в браузере.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
          >
            Обновить страницу
          </button>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/30 via-transparent to-dark-bg/60 pointer-events-none" suppressHydrationWarning />
    </motion.div>
  );
}

function FallbackVisual() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <PipelineSceneCanvas />
    </div>
  );
}
