/**
 * Removes Next.js caches and reinstalls dependencies to fix corrupted builds.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const projectRoot = path.join(__dirname, "..");

function removeDir(dir) {
  const target = path.join(projectRoot, dir);
  fs.rmSync(target, { recursive: true, force: true });
  console.log(`Removed ${dir}`);
}

try {
  removeDir(".next");
  removeDir("node_modules");
} catch (error) {
  console.warn("Failed to clean directories:", error);
}

console.log("Reinstalling dependencies...");
execSync("npm install", { stdio: "inherit", cwd: projectRoot });
console.log("Environment reset complete.");
