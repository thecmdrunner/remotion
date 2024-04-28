import { execSync } from "child_process";

const nodeVersion = execSync("node -v");
const str = nodeVersion.toString().trim();
const version = str.match(/v([0-9]+)./);

if (!version) {
  console.log("Node not installed, skipping");
  process.exit(0);
}

const majorVersion = parseInt(version[1], 10);
if (majorVersion < 16) {
  console.log("Astro does not support this version, skipping build.");
  process.exit(0);
}

execSync("bunx astro build", {
  stdio: "inherit",
});
