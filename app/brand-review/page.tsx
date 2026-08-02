import type { Metadata } from "next";
import Link from "next/link";
import { TurionLogo, TurionSymbol } from "../TurionBrand";

export const metadata: Metadata = {
  title: "Revisão de marca",
  robots: { index: false, follow: false },
};

const divisions = ["TRAVEL", "FITNESS", "HEALTH"];

export default function BrandReviewPage() {
  return (
    <main className="brand-review">
      <header className="review-header">
        <TurionLogo />
        <Link href="/">Voltar ao site ↗</Link>
      </header>

      <section className="review-intro">
        <p>Monograma · rota v8 · marca oficial</p>
        <h1>Duas partes. Uma direção.</h1>
        <div className="review-symbol"><TurionSymbol /></div>
      </section>

      <section className="monogram-meaning">
        <article><span>01</span><strong>Empresa</strong><p>O negócio, seu contexto e a decisão que precisa ser construída.</p></article>
        <article><span>02</span><strong>União</strong><p>A leitura comum que transforma necessidade e possibilidade em direção.</p></article>
        <article><span>03</span><strong>Capital</strong><p>Instituições e provedores que avaliam cada oportunidade com critérios próprios.</p></article>
      </section>

      <section className="review-section review-lockups">
        <div className="review-label"><span>01</span><p>Assinaturas</p></div>
        <div className="lockup-grid">
          <article className="lockup-primary"><TurionLogo /></article>
          {divisions.map((division) => <article key={division}><TurionLogo descriptor={division} /></article>)}
        </div>
        <div className="monogram-pattern" aria-label="Padrão gráfico derivado do monograma">
          {Array.from({ length: 18 }).map((_, index) => <TurionSymbol key={index} />)}
        </div>
        <div className="monogram-reductions">
          <p>Teste de redução</p>
          <div><TurionSymbol className="size-64" /><span>64 px</span></div>
          <div><TurionSymbol className="size-32" /><span>32 px</span></div>
          <div><TurionSymbol className="size-16" /><span>16 px</span></div>
        </div>
      </section>

      <section className="review-section">
        <div className="review-label"><span>02</span><p>Paleta institucional</p></div>
        <div className="palette-grid">
          <article className="swatch-onyx"><strong>Onyx</strong><span>#0A0A0A</span></article>
          <article className="swatch-slate"><strong>Blue Slate</strong><span>#536878</span></article>
          <article className="swatch-alabaster"><strong>Alabaster Grey</strong><span>#E5E4E2</span></article>
        </div>
      </section>

      <section className="review-section">
        <div className="review-label"><span>03</span><p>Cartão de visita</p></div>
        <div className="card-stage">
          <article className="business-card card-front">
            <div className="card-pattern" aria-hidden="true">
              {Array.from({ length: 35 }).map((_, index) => <TurionSymbol key={index} />)}
            </div>
            <TurionLogo />
            <span>Advisory & Capital</span>
          </article>
          <article className="business-card card-back">
            <div className="card-person"><strong>Nina Quisinski</strong><span>Founder & Diretora</span></div>
            <TurionSymbol />
            <address><span>M</span> +507 6569 4992<br /><span>E</span> n.quisinski@turionadvisory.com<br /><span>W</span> turionadvisory.com</address>
          </article>
        </div>
      </section>

      <section className="review-section">
        <div className="review-label"><span>04</span><p>Assinatura de e-mail</p></div>
        <div className="signature-surround">
          <div className="signature-stage">
            <div className="signature-mark"><TurionSymbol /></div>
            <div className="signature-person"><strong>Nina Quisinski</strong><span>Founder & Diretora</span></div>
            <div className="signature-contact"><span>+507 6569 4992</span><span>n.quisinski@turionadvisory.com</span><span>turionadvisory.com</span></div>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="review-label"><span>05</span><p>Identidade digital</p></div>
        <div className="linkedin-banner">
          <div className="banner-safe-area" aria-hidden="true" />
          <div className="banner-identity"><TurionLogo /><p>Advisory &amp; Capital</p><span>Company · Union · Capital</span></div>
          <div className="banner-pattern" aria-hidden="true">{Array.from({ length: 28 }).map((_, index) => <TurionSymbol key={index} />)}</div>
          <span className="banner-divisions">Travel · Fitness · Health</span>
        </div>
        <div className="digital-assets">
          <article><div className="profile-icon"><TurionSymbol /></div><strong>Perfil LinkedIn</strong><span>400 × 400 px</span></article>
          <article><div className="favicon-preview favicon-dark"><TurionSymbol /></div><strong>Favicon reverso</strong><span>SVG + PNG</span></article>
          <article><div className="favicon-preview favicon-light"><TurionSymbol /></div><strong>Favicon positivo</strong><span>SVG</span></article>
        </div>
      </section>

      <footer className="review-footer">
        <p>Marca oficial aprovada. Ainda não liberada para registro, produção ou publicação.</p>
        <Link href="/">Analisar o site completo ↗</Link>
      </footer>
    </main>
  );
}
