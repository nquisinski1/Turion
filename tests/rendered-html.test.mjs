import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const routeFile = (route) => new URL(`../dist${route === "/" ? "/index.html" : `${route}/index.html`}`, import.meta.url);
const render = (route = "/") => readFile(routeFile(route), "utf8");

test("renders the TURION institutional site", async () => {
  const html = await render();
  assert.match(html, /<title>TURION \| Advisory &amp; Capital<\/title>/i);
  assert.match(html, /Capital exige mais do que acesso/i);
  assert.match(html, /Exige critério/i);
  assert.match(html, /A qualidade da relação com o capital começa na qualidade da oportunidade/i);
  assert.match(html, /href="\/travel\/"/);
  assert.match(html, /href="\/fitness\/"/);
  assert.match(html, /href="\/health\/"/);
  assert.match(html, /api\.leadconnectorhq\.com\/widget\/form\/61iIYgpvcfo22fkrMxDX/i);
  assert.match(html, /não realiza empréstimos, análise de crédito ou atividades privativas/i);
});

test("uses institutional language without prohibited or promotional vocabulary", async () => {
  const pages = await Promise.all(["/", "/travel", "/fitness", "/health"].map(render));
  const publicLanguage = pages.join("\n");

  assert.doesNotMatch(publicLanguage, /Turion Global|Vitality|Travel Capital|Fitness Capital|Private Bank|advisory independente|arquitetura|garantimos|melhores oportunidades|revolucionário|exclusivo|líder do mercado/i);
  assert.doesNotMatch(publicLanguage, /<img\b/i);
  assert.doesNotMatch(publicLanguage, /\.(?:jpe?g|webp)(?:["')?])/i);
});

test("applies the approved v8 system", async () => {
  const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");
  const brand = await readFile(new URL("../src/components/BrandMark.astro", import.meta.url), "utf8");

  assert.match(css, /--onyx:\s*#0a0a0a/i);
  assert.match(css, /--blue-slate:\s*#536878/i);
  assert.match(css, /--alabaster:\s*#e5e4e2/i);
  assert.match(brand, /M4 8H31V64/);
  assert.match(brand, /M33 8H60V22/);
});

for (const [route, title, thesis, service] of [
  ["/travel", "Turion Travel", "O turismo converte confiança futura em compromisso presente", "Ciclo de caixa e recebíveis"],
  ["/fitness", "Turion Fitness", "Recorrência não é apenas receita", "Expansão e capacidade"],
  ["/health", "Turion Health", "Em Health, capital e responsabilidade avançam juntos", "Tecnologia e capacidade"],
]) {
  test(`renders the complete ${title} division`, async () => {
    const html = await render(route);
    assert.match(html, new RegExp(`<title>${title}`));
    assert.match(html, new RegExp(thesis));
    assert.match(html, new RegExp(service));
    assert.match(html, /Conversa reservada/);
  });
}

test("uses the same institutional navigation on all pages", async () => {
  for (const route of ["/", "/travel", "/fitness", "/health"]) {
    const html = await render(route);
    assert.match(html, />Advisory &amp; Capital</);
    assert.match(html, />Travel</);
    assert.match(html, />Fitness</);
    assert.match(html, />Health</);
    assert.match(html, />Contato</);
  }
});

test("keeps the review site protected from search indexing", async () => {
  const html = await render();
  assert.match(html, /<meta name="robots" content="noindex, nofollow"/i);
});

test("preserves the legacy vitality route as a redirect", async () => {
  const html = await render("/vitality");
  assert.match(html, /url=\/health\//i);
});
