import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
);
const tsconfig = JSON.parse(
  readFileSync(new URL("../tsconfig.json", import.meta.url), "utf8"),
);

test("uses the native Next.js runtime required by Hostinger", () => {
  assert.equal(packageJson.scripts.dev, "next dev --webpack");
  assert.equal(packageJson.scripts.build, "next build --webpack");
  assert.equal(packageJson.scripts.start, "next start");
});

test("keeps the Sites runtime available without making it the production build", () => {
  assert.match(packageJson.scripts["build:sites"], /vinext build/);
  assert.match(packageJson.scripts["dev:sites"], /vinext dev/);
});

test("type checks the Next.js app without compiling Cloudflare-only support files", () => {
  assert.equal(tsconfig.include.includes("**/*.ts"), false);
  assert.equal(tsconfig.include.includes("app/**/*.ts"), true);
  assert.equal(tsconfig.include.includes("app/**/*.tsx"), true);
});
