"use server";

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import redis from "@/lib/redis";
import { SPLINE_SCENE_CACHE_KEY } from "@/lib/cacheKeys";

const CACHE_TTL_SECONDS = 60 * 60; // 1 hour

async function readSplineFile() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "spline",
    "holographic-earth.splinecode"
  );
  return fs.readFile(filePath);
}

export async function GET() {
  try {
    if (redis) {
      const cached = await redis.get<string>(SPLINE_SCENE_CACHE_KEY);
      if (cached) {
        const buffer = Buffer.from(cached, "base64");
        return new NextResponse(buffer, {
          headers: {
            "Content-Type": "application/octet-stream",
            "Cache-Control": "public, max-age=3600, immutable",
          },
        });
      }
    }

    const file = await readSplineFile();

    if (redis) {
      await redis.set(SPLINE_SCENE_CACHE_KEY, file.toString("base64"), {
        ex: CACHE_TTL_SECONDS,
      });
    }

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch (error) {
    console.error("Failed to serve Spline file:", error);
    return NextResponse.json(
      { error: "Unable to load 3D scene" },
      { status: 500 }
    );
  }
}
