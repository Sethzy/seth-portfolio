import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "docs/project-covers/agentic-gtm-cover.html");
const rawPath = path.join(root, ".next/project-covers/agentic-gtm-cover-raw.png");
const outputPath = path.join(root, "public/projects/agentic-gtm-cover.png");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

await mkdir(path.dirname(rawPath), { recursive: true });

await new Promise((resolve, reject) => {
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1800,998",
    `--screenshot=${rawPath}`,
    pathToFileURL(htmlPath).href
  ]);

  let stderr = "";
  chrome.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
  });
  chrome.on("error", reject);
  chrome.on("close", (code) => {
    if (code === 0) {
      resolve();
    } else {
      reject(new Error(stderr || `Chrome exited with code ${code}`));
    }
  });
});

await sharp(rawPath)
  .resize(1300, 720, { fit: "cover" })
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
  .toFile(outputPath);

console.log(outputPath);
