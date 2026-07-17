import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const sourceFiles = [
  "app/AppleHome.tsx",
  "app/iphone/IPhonePage.tsx",
  "app/iphone/page.tsx",
  "app/globals.css",
  "app/layout.tsx",
  "app/page.tsx",
];

const remoteAssetPatterns = [
  /(?:src|poster)\s*=\s*["'`]\s*https?:\/\//i,
  /(?:image|backgroundImage)\s*:\s*["'`]\s*https?:\/\//i,
  /url\(\s*["']?\s*https?:\/\//i,
  /@font-face[\s\S]*?src\s*:\s*[^;]*https?:\/\//i,
];

const localAssetPattern =
  /["'`](\/[^"'`\s?#)]+\.(?:avif|gif|jpe?g|png|svg|webm|webp|woff2?))["'`)]/gi;

const referencedAssets = new Set();

for (const relativePath of sourceFiles) {
  const source = await readFile(new URL(relativePath, projectRoot), "utf8");

  for (const pattern of remoteAssetPatterns) {
    assert.doesNotMatch(
      source,
      pattern,
      `${relativePath} contains a remotely hosted asset`,
    );
  }

  for (const match of source.matchAll(localAssetPattern)) {
    referencedAssets.add(match[1]);
  }
}

assert.ok(referencedAssets.size > 0, "No local assets were found in the UI source");

await Promise.all(
  [...referencedAssets].map(async (assetPath) => {
    const publicAsset = new URL(`public${assetPath}`, projectRoot);
    await access(publicAsset);
  }),
);

console.log(`Verified ${referencedAssets.size} locally stored UI assets.`);
