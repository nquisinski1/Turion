import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const packageJson = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

test("uses Astro as the only site runtime", () => {
  assert.equal(packageJson.scripts.dev, "astro dev");
  assert.equal(packageJson.scripts.build, "astro build");
  assert.equal(packageJson.scripts.preview, "astro preview");
  assert.ok(packageJson.dependencies.astro);
  assert.equal(packageJson.dependencies.next, undefined);
  assert.equal(packageJson.dependencies.react, undefined);
  assert.equal(packageJson.dependencies["react-dom"], undefined);
});

test("builds a static site suitable for the existing hosting flow", () => {
  const config = readFileSync(new URL("../astro.config.mjs", import.meta.url), "utf8");
  assert.match(config, /output:\s*["']static["']/);
  assert.match(config, /trailingSlash:\s*["']always["']/);
});
