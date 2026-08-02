import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the TURION mother site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>TURION \| Advisory &amp; Capital<\/title>/i);
  assert.match(html, /Capital com contexto/);
  assert.match(html, /oportunidades com direção/i);
  assert.match(html, /Advisory &amp; Capital/);
  assert.match(html, /Mais de 11 anos/i);
  assert.match(html, /TURION/);
  assert.match(html, /href="\/travel"/);
  assert.match(html, /href="\/fitness"/);
  assert.match(html, /href="\/health"/);
  assert.match(html, /Conhecer a empresa\. Preparar a oportunidade\. Encontrar aderência\./);
  assert.match(html, /A decisão começa antes do capital/);
  assert.doesNotMatch(html, /advisory independente/i);
  assert.doesNotMatch(html, /Em desenvolvimento|Acesso ainda não disponível/);
  assert.match(html, /não realiza empréstimos, análise de crédito ou atividades privativas/i);
  assert.match(html, /Cada oportunidade é analisada, aprovada ou recusada/i);
  assert.match(html, /Do contexto à interlocução institucional/);
  assert.match(html, /O que acontece depois do envio/);
  assert.match(html, /api\.leadconnectorhq\.com\/widget\/form\/61iIYgpvcfo22fkrMxDX/i);
  assert.match(html, /data-height="646"/i);
  assert.doesNotMatch(html, /mailto:/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("keeps the public language precise and the photographic system intentional", async () => {
  const pages = await Promise.all(["/", "/travel", "/fitness", "/health"].map(async (path) => {
    const response = await render(path);
    assert.equal(response.status, 200);
    return response.text();
  }));

  const publicLanguage = pages.join("\n");
  assert.doesNotMatch(
    publicLanguage,
    /Turion Global|Vitality|Travel Capital|Fitness Capital|Private Bank|advisory independente|arquitetura|garantimos|melhores oportunidades/i,
  );

  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /--onyx:\s*#0a0a0a/i);
  assert.match(css, /--blue-slate:\s*#536878/i);
  assert.match(css, /--alabaster:\s*#e5e4e2/i);

  const [homeSource, siteSource] = await Promise.all([
    readFile(new URL("../app/TurionHome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/TurionSite.tsx", import.meta.url), "utf8"),
  ]);
  const activePhotography = `${homeSource}\n${siteSource}`;

  assert.match(activePhotography, /turion-institutional-hero\.webp/);
  assert.match(activePhotography, /turion-travel-hero\.webp/);
  assert.match(activePhotography, /turion-fitness-hero\.webp/);
  assert.match(activePhotography, /turion-health-hero\.webp/);
  assert.doesNotMatch(
    activePhotography,
    /travel-02\.jpg|travel-03\.jpg|fitness-02\.jpg|vitality-01\.jpg|vitality-02\.jpg|vitality-03\.jpg|global-02\.jpg|global-03\.jpg/,
  );
});

for (const route of [
  ["/travel", "Turion Travel", "O capital precisa compreender(?:<em>)?o tempo da viagem", "Hospitalidade e capacidade"],
  ["/fitness", "Turion Fitness", "Recorrência só se transforma em valor", "Equipamentos e expansão"],
  ["/health", "Turion Health", "Crescimento e confiança(?:<em>)?precisam avançar juntos", "Tecnologia e capacidade"],
]) {
  test(`renders the complete ${route[1]} vertical`, async () => {
    const response = await render(route[0]);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(`<title>${route[1]}`));
    assert.match(html, new RegExp(route[2]));
    assert.match(html, new RegExp(route[3]));
    assert.match(html, /api\.leadconnectorhq\.com\/widget\/form\/61iIYgpvcfo22fkrMxDX/i);
    assert.match(html, /data-height="646"/i);
    assert.doesNotMatch(html, /mailto:/i);
  });
}

test("uses the same institutional navigation on all four pages", async () => {
  for (const path of ["/", "/travel", "/fitness", "/health"]) {
    const response = await render(path);
    const html = await response.text();
    assert.match(html, />Advisory &amp; Capital</);
    assert.match(html, />Travel</);
    assert.match(html, />Fitness</);
    assert.match(html, />Health</);
    assert.match(html, />Contato</);
  }
});

test("ships pre-launch search protection", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/i);
});

test("renders the v8.1 monogram review without releasing production assets", async () => {
  const response = await render("/brand-review");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Duas partes\. Uma direção\./);
  assert.match(html, /Empresa/);
  assert.match(html, /União/);
  assert.match(html, /Capital/);
  assert.match(html, /Refinamento de escala aguardando aprovação visual/);

  const brandSource = await readFile(new URL("../app/TurionBrand.tsx", import.meta.url), "utf8");
  assert.match(brandSource, /M4 8H31V64/);
  assert.match(brandSource, /M33 8H60V22/);
  assert.match(brandSource, /scale\(\.84\)/);
  assert.doesNotMatch(brandSource, /M4 10C13 10 20 7/);
});
