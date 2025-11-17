/**
 * Removes the .next build directory before running dev/build commands.
 * This prevents corrupted caches from causing blank screens or syntax errors.
 */
const fs = require("fs");
const path = require("path");

const nextDir = path.join(__dirname, "..", ".next");

try {
  fs.rmSync(nextDir, { recursive: true, force: true });
  console.log("Cleared .next cache");
} catch (error) {
  console.warn("Failed to remove .next directory:", error);
}
