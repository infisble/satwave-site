"use server";

import { revalidatePath } from "next/cache";
import redis from "@/lib/redis";
import { SPLINE_SCENE_CACHE_KEY } from "@/lib/cacheKeys";

type Payload = {
  path?: string;
};

function sanitizePath(path: unknown): string {
  if (typeof path !== "string" || path.trim() === "") {
    return "/";
  }
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as Payload;
    const targetPath = sanitizePath(body.path);

    revalidatePath(targetPath);
    if (redis) {
      await redis.del(SPLINE_SCENE_CACHE_KEY);
    }

    return Response.json({
      success: true,
      revalidatedPath: targetPath,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Cache refresh failed:", error);
    return Response.json(
      {
        success: false,
        error: "Unable to refresh cache. Check server logs for details.",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = sanitizePath(searchParams.get("path"));
  revalidatePath(path);
  if (redis) {
    await redis.del(SPLINE_SCENE_CACHE_KEY);
  }

  return Response.json({
    success: true,
    revalidatedPath: path,
    timestamp: new Date().toISOString(),
  });
}
