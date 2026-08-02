"use client";

import Link from "next/link";
import { useState } from "react";
import LeadConnectorForm from "./LeadConnectorForm";
import { TurionLogo, TurionSymbol } from "./TurionBrand";
import { ecosystem, SiteConfig } from "./site-config";

const heroImages: Record<SiteConfig["key"], string> = {
  advisory: "/turion-institutional-hero.webp",
  travel: "/turion-travel-hero.webp",
  fitness: "/turion-fitness-hero.webp",
  health: "/turion-health-hero.webp",
};

const navigation = [
  { label: "Advisory & Capital", href: "/", key: "advisory" },
  { label: "Travel", href: "/travel", key: "travel" },
  { label: "Fitness", href: "/fitness", key: "fitness" },
  { label: "Health", href: "/health", key: "health" },
] as const;

function Header({ site }: { site: SiteConfig }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand-link" href="/" aria-label="TURION, página principal">
        <TurionLogo descriptor={site.descriptor} />
      </Link>

      <nav className={`site-nav${open ? " is-open" : ""}`} aria-label="Navegação principal">
        {navigation.map((item) => (
          <Link
            className={site.key === item.key ? "is-current" : ""}
            href={item.href}
            key={item.key}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </nav>

      <a className="header-cta" href="#contato">
        <span>Conversa reservada</span>
        <i aria-hidden="true">↘</i>
      </a>

      <button
        className={`menu-button${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="brand-hero" id="inicio">
      <Header site={site} />
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImages[site.key]})` }}
        aria-hidden="true"
      />
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow"><span>{site.code}</span>{site.eyebrow}</p>
        <h1>{site.hero}<em>{site.heroEmphasis}</em></h1>
        <p className="hero-lead">{site.lead}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contato">Apresentar uma oportunidade <span>↘</span></a>
          <a className="button button-secondary" href="#visao">Compreender nossa visão</a>
        </div>
      </div>
      <div className="hero-index">
        <span>{site.domain}</span>
        <span>Travel · Fitness · Health</span>
      </div>
    </section>
  );
}

function Thesis({ site }: { site: SiteConfig }) {
  return (
    <section className="thesis-section" id="visao">
      <div className="section-kicker"><span>01</span>{site.thesisLabel}</div>
      <div className="thesis-grid">
        <h2>{site.thesis}</h2>
        <div>
          <p className="lead-copy">{site.thesisBody}</p>
          <p>{site.pointOfView}</p>
        </div>
      </div>
    </section>
  );
}

function Experience({ site }: { site: SiteConfig }) {
  if (site.key !== "advisory") return null;

  return (
    <section className="experience-section">
      <div className="experience-number">11<span>+</span></div>
      <div>
        <p className="section-kicker section-kicker-light"><span>02</span>Quem somos</p>
        <h2>Experiência para reconhecer o que torna uma oportunidade consistente.</h2>
        <p>
          A experiência que dá origem à Turion foi construída ao longo de mais de 11 anos no setor financeiro,
          em contextos nacionais e internacionais. A empresa nasce para atuar como parceira dos setores que
          conhece, com proximidade suficiente para compreender desafios e disciplina suficiente para preparar
          cada interlocução.
        </p>
      </div>
    </section>
  );
}

function Solutions({ site }: { site: SiteConfig }) {
  return (
    <section className="solutions-section" id="atuacao">
      <div className="section-kicker section-kicker-light"><span>{site.key === "advisory" ? "03" : "02"}</span>{site.solutionsLabel}</div>
      <div className="section-heading">
        <h2>{site.solutionsTitle}</h2>
        <p>{site.solutionsIntro}</p>
      </div>
      <div className="solutions-grid">
        {site.solutions.map((solution) => (
          <article key={solution.code}>
            <span>{solution.code}</span>
            <h3>{solution.title}</h3>
            <p>{solution.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Audience({ site }: { site: SiteConfig }) {
  return (
    <section className="audience-section" id="publico">
      <div className="section-kicker"><span>{site.key === "advisory" ? "04" : "03"}</span>{site.audienceLabel}</div>
      <div className="section-heading section-heading-dark">
        <h2>{site.audienceTitle}</h2>
        <p>{site.audienceLead}</p>
      </div>
      <div className="audience-grid">
        {site.audiences.map((audience, index) => (
          <article key={audience.title}>
            <span>0{index + 1}</span>
            <h3>{audience.title}</h3>
            <p>{audience.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Method({ site }: { site: SiteConfig }) {
  return (
    <section className="method-section">
      <div className="method-intro">
        <p className="section-kicker section-kicker-light"><span>{site.key === "advisory" ? "05" : "04"}</span>Como atuamos</p>
        <h2>Do contexto à interlocução institucional.</h2>
        <p>O processo reduz ruído, organiza informação e preserva responsabilidades.</p>
      </div>
      <div className="method-grid">
        {site.method.map((step) => (
          <article key={step.code}>
            <span>{step.code}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Divisions({ current }: { current: SiteConfig }) {
  return (
    <section className="divisions-section" id="divisoes">
      <div className="section-kicker"><span>{current.key === "advisory" ? "06" : "05"}</span>Divisões</div>
      <div className="section-heading section-heading-dark">
        <h2>Especialização setorial. Uma única disciplina de capital.</h2>
        <p>Travel, Fitness e Health possuem ciclos, riscos e decisões próprias. A Turion lê cada oportunidade dentro da economia que produz seus resultados.</p>
      </div>
      <div className="division-grid">
        {ecosystem.map((vertical) => (
          <Link className={`division-card${vertical.key === current.key ? " is-current" : ""}`} href={vertical.path} key={vertical.key}>
            <span className="division-code">{vertical.code}</span>
            <TurionLogo descriptor={vertical.descriptor} compact />
            <p>{vertical.eyebrow}</p>
            <span className="division-action">{vertical.key === current.key ? "Divisão atual" : "Conhecer a divisão"} ↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Contact({ site }: { site: SiteConfig }) {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-copy">
        <p className="section-kicker"><span>07</span>Contato</p>
        <h2>{site.formTitle}</h2>
        <p>{site.formLead}</p>
        <dl>
          <div><dt>Direção institucional</dt><dd>Panamá · Brasil</dd></div>
          <div><dt>Contato</dt><dd>n.quisinski@turionadvisory.com</dd></div>
          <div><dt>Website</dt><dd>turionadvisory.com</dd></div>
        </dl>
      </div>
      <div className="contact-form-shell">
        <LeadConnectorForm />
        <div className="contact-next-steps">
          <strong>O que acontece depois do envio</strong>
          <p>A Turion realiza uma leitura inicial do contexto apresentado. Havendo aderência, entramos em contato para uma conversa reservada. O envio não representa aprovação, proposta de crédito ou compromisso de contratação.</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <TurionSymbol className="footer-symbol" />
        <strong>TURION</strong>
        <p>Advisory de capital para a economia da experiência.</p>
      </div>
      <div className="footer-nav">
        {navigation.map((item) => <Link href={item.href} key={item.key}>{item.label}</Link>)}
        <a href="#contato">Contato</a>
      </div>
      <section className="legal-disclosure" aria-label="Informações institucionais">
        <strong>Responsabilidades claras</strong>
        <p>
          A Turion atua em advisory de capital. Não realiza empréstimos, análise de crédito ou atividades privativas
          de instituições financeiras. Cada oportunidade é analisada, aprovada ou recusada pela instituição escolhida
          pelo cliente, segundo critérios próprios.
        </p>
        <p>
          Produtos e atividades reguladas são contratados e executados diretamente por instituições e profissionais
          habilitados. A Turion não garante aprovação, condições ou resultado.
        </p>
      </section>
      <div className="footer-bottom"><span>© 2026 TURION</span><span>{site.domain}</span><a href="#inicio">Voltar ao início ↑</a></div>
    </footer>
  );
}

export default function TurionSite({ site }: { site: SiteConfig }) {
  return (
    <main className={`turion-site theme-${site.key}`}>
      <Hero site={site} />
      <Thesis site={site} />
      <Experience site={site} />
      <Solutions site={site} />
      <Audience site={site} />
      <Method site={site} />
      <Divisions current={site} />
      <Contact site={site} />
      <Footer site={site} />
    </main>
  );
}
