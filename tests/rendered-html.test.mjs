import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the complete Turion Global institutional landing", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Turion Global \| Sector-native capital businesses<\/title>/i);
  assert.match(html, /One global brand/);
  assert.match(html, /Turion Travel Capital/);
  assert.match(html, /The partnership model/);
  assert.match(html, /Freedom at the edge/);
  assert.match(html, /not represented here as a bank/);
  assert.match(html, /aria-pressed="true"[^>]*>EN</i);
  assert.doesNotMatch(html, /<form\b/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("ships pre-launch search protection", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/i);
});
