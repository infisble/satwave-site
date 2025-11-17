"use client";

import type { MotionProps } from "framer-motion";

/**
 * Returns the server-safe initial motion state so SSR markup stays visible.
 * On the server we fall back to the provided visible state, while on the client
 * we use the actual animation start values.
 */
export function getInitialMotionState<T extends MotionProps["initial"]>(
  clientState: T,
  serverVisibleState: T
): T {
  if (typeof window === "undefined") {
    return serverVisibleState;
  }
  return clientState;
}
