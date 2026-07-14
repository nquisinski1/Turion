"use client";

import { useState } from "react";

type Locale = "en" | "pt" | "es";

const copy = {
  en: {
    preview: "Institutional preview · Americas-first, global by design",
    nav: ["Platform", "Verticals", "Partnership", "Governance"],
    navIds: ["platform", "verticals", "partnership", "governance"],
    navCta: "Explore the model",
    heroEyebrow: "Turion Global · Parent brand",
    heroTitleA: "One global brand.",
    heroTitleB: "Sector-native businesses.",
    heroBody:
      "Turion brings a common standard of governance, capital architecture and brand discipline to specialist businesses led with sector partners.",
    heroPrimary: "Explore the platform",
    heroSecondary: "See the partnership model",
    heroNote: "First vertical in formation: Turion Travel Capital",
    mapTitle: "Sector architecture",
    mapCore: "GLOBAL\nPLATFORM",
    mapTravel: "TRAVEL\nCAPITAL",
    mapFitness: "FITNESS\nCAPITAL",
    mapNext: "NEXT\nSECTOR",
    principles: [
      ["One", "master brand"],
      ["Sector-led", "market theses"],
      ["Partner-backed", "execution"],
      ["Evidence-led", "governance"],
    ],
    sectionPlatform: "The platform",
    platformTitle: "A shared operating core. Built to adapt by sector.",
    platformBody:
      "Turion Global protects what must remain consistent across the group, while each vertical earns the right to look, speak and operate with sector relevance.",
    platformCards: [
      ["Brand system", "One name architecture, shared standards and a controlled visual language."],
      ["Capital architecture", "A repeatable framework for structuring opportunities with appropriate specialists."],
      ["Governance", "Clear decision rights, reporting discipline and evidence-gated public claims."],
      ["Partner network", "Sector operators contribute insight, access and accountable execution."],
    ],
    sectionVerticals: "Vertical portfolio",
    verticalsTitle: "Distinct enough to lead. Connected enough to scale.",
    verticalsBody:
      "Every vertical receives its own sector expression and partner layer—without fragmenting the Turion name.",
    travelStatus: "Founding vertical",
    travelTitle: "Travel Capital",
    travelBody:
      "A specialist platform for the travel economy, connecting sector insight, structured opportunities and experienced operating partners.",
    travelTokens: ["Navy + heritage gold", "Travel-specific symbol", "Turion governance core"],
    fitnessStatus: "Next vertical",
    fitnessTitle: "Fitness Capital",
    fitnessBody:
      "A proposed vertical for the fitness and wellness economy. Thesis, partner and regulated perimeter remain subject to approval.",
    fitnessTokens: ["Mineral + copper", "Performance-led voice", "Turion governance core"],
    futureStatus: "Expansion framework",
    futureTitle: "Future sectors",
    futureBody:
      "New verticals launch only when a credible thesis, qualified partner and governance case are approved.",
    futureTokens: ["Sector-defined accent", "Controlled naming", "Stage-gated launch"],
    architectureTitle: "The branded-house rule",
    architectureBody:
      "The parent mark stays constant. The sector descriptor, accent palette and approved partner signature create distinction.",
    lockupPartner: "SECTOR PARTNER",
    lockupCaption: "Controlled co-signature zone · partner name never replaces or alters the Turion master mark",
    sectionPartnership: "The partnership model",
    partnershipTitle: "The vertical is built together. Accountability stays explicit.",
    partnershipBody:
      "A partner brings lived sector expertise. Turion provides the group platform. Shared decisions sit inside a documented governance structure.",
    columns: [
      {
        n: "01",
        title: "Turion Global",
        label: "Platform owner",
        items: ["Master brand and standards", "Governance framework", "Capital architecture", "Group reporting discipline"],
      },
      {
        n: "02",
        title: "Sector partner",
        label: "Vertical co-builder",
        items: ["Sector thesis and intelligence", "Industry relationships", "Commercial execution", "Vertical performance"],
      },
      {
        n: "03",
        title: "Shared council",
        label: "Decision layer",
        items: ["Strategic priorities", "Risk and compliance gates", "Investment or market decisions", "Claims and reputation review"],
      },
    ],
    sectionSystem: "How a vertical is formed",
    systemTitle: "A disciplined path from sector thesis to market presence.",
    steps: [
      ["Identify", "Define the opportunity and why Turion should enter."],
      ["Partner", "Validate the operator, incentives and decision rights."],
      ["Build", "Create the proposition, operating model and vertical brand."],
      ["Activate", "Launch only after legal, evidence and readiness gates."],
    ],
    sectionGovernance: "Brand governance",
    governanceTitle: "Freedom at the edge. Control at the core.",
    governanceBody:
      "The system gives every vertical enough character to be credible in its market—while protecting the institutional trust of the group.",
    rules: [
      ["Fixed", "TURION name, master wordmark, governance principles, typography family and institutional tone."],
      ["Flexible", "Sector descriptor, accent color, supporting symbol, imagery system and vertical narrative."],
      ["Permissioned", "Partner name, logo, biography, regulated claims, results, endorsements and public case studies."],
    ],
    ctaEyebrow: "Building the Turion portfolio",
    ctaTitle: "A global platform, one credible vertical at a time.",
    ctaBody:
      "Turion Travel Capital is the founding case. Further verticals will be announced only after partner, legal and brand approval.",
    ctaButton: "Review the architecture",
    disclosureTitle: "Institutional status",
    disclosure:
      "Turion Global is presented as a strategic brand architecture in development. It is not represented here as a bank, licensed investment adviser, fund manager or deposit-taking institution. Regulated activities, where applicable, must be delivered only by duly authorized entities and partners.",
    footerStatus: "Institutional pre-launch · July 2026",
    footerLine: "Global platform · Sector-native verticals · Partner-led execution",
    footerLegal: "© 2026 Turion Global. Brand and legal review in progress.",
  },
  pt: {
    preview: "Prévia institucional · Foco inicial nas Américas, visão global",
    nav: ["Plataforma", "Verticais", "Parceria", "Governança"],
    navIds: ["platform", "verticals", "partnership", "governance"],
    navCta: "Explorar o modelo",
    heroEyebrow: "Turion Global · Marca-mãe",
    heroTitleA: "Uma marca global.",
    heroTitleB: "Negócios nativos de cada setor.",
    heroBody:
      "A Turion leva um padrão comum de governança, arquitetura de capital e disciplina de marca a negócios especializados, liderados em conjunto com parceiros setoriais.",
    heroPrimary: "Explorar a plataforma",
    heroSecondary: "Ver o modelo de parceria",
    heroNote: "Primeira vertical em formação: Turion Travel Capital",
    mapTitle: "Arquitetura setorial",
    mapCore: "PLATAFORMA\nGLOBAL",
    mapTravel: "TRAVEL\nCAPITAL",
    mapFitness: "FITNESS\nCAPITAL",
    mapNext: "PRÓXIMO\nSETOR",
    principles: [
      ["Uma", "marca-mãe"],
      ["Setorial", "teses de mercado"],
      ["Com parceiros", "execução"],
      ["Com evidências", "governança"],
    ],
    sectionPlatform: "A plataforma",
    platformTitle: "Um núcleo operacional comum. Adaptável a cada setor.",
    platformBody:
      "A Turion Global protege o que deve permanecer consistente em todo o grupo, enquanto cada vertical conquista o direito de parecer, falar e operar com relevância setorial.",
    platformCards: [
      ["Sistema de marca", "Uma arquitetura de nomes, padrões compartilhados e linguagem visual controlada."],
      ["Arquitetura de capital", "Estrutura replicável para organizar oportunidades com especialistas adequados."],
      ["Governança", "Direitos de decisão claros, disciplina de reporte e afirmações públicas baseadas em evidências."],
      ["Rede de parceiros", "Operadores setoriais contribuem com conhecimento, acesso e execução responsável."],
    ],
    sectionVerticals: "Portfólio de verticais",
    verticalsTitle: "Distintas para liderar. Conectadas para escalar.",
    verticalsBody:
      "Cada vertical recebe expressão setorial e camada própria de parceria — sem fragmentar o nome Turion.",
    travelStatus: "Vertical fundadora",
    travelTitle: "Travel Capital",
    travelBody:
      "Uma plataforma especializada na economia de viagens, conectando visão setorial, oportunidades estruturadas e parceiros operacionais experientes.",
    travelTokens: ["Azul-marinho + dourado clássico", "Símbolo próprio de viagem", "Núcleo de governança Turion"],
    fitnessStatus: "Próxima vertical",
    fitnessTitle: "Fitness Capital",
    fitnessBody:
      "Vertical proposta para a economia de fitness e bem-estar. Tese, parceiro e perímetro regulatório permanecem sujeitos a aprovação.",
    fitnessTokens: ["Mineral + cobre", "Voz orientada a desempenho", "Núcleo de governança Turion"],
    futureStatus: "Estrutura de expansão",
    futureTitle: "Setores futuros",
    futureBody:
      "Novas verticais só são lançadas quando uma tese sólida, um parceiro qualificado e a governança são aprovados.",
    futureTokens: ["Cor definida pelo setor", "Nomenclatura controlada", "Lançamento por etapas"],
    architectureTitle: "A regra da marca monolítica",
    architectureBody:
      "A marca-mãe permanece constante. O descritor setorial, a paleta de destaque e a assinatura aprovada do parceiro geram diferenciação.",
    lockupPartner: "PARCEIRO SETORIAL",
    lockupCaption: "Zona controlada de coassinatura · o parceiro nunca substitui nem altera a marca-mãe Turion",
    sectionPartnership: "O modelo de parceria",
    partnershipTitle: "A vertical é construída em conjunto. A responsabilidade permanece explícita.",
    partnershipBody:
      "O parceiro traz experiência real do setor. A Turion oferece a plataforma do grupo. Decisões compartilhadas ficam dentro de uma governança documentada.",
    columns: [
      { n: "01", title: "Turion Global", label: "Dona da plataforma", items: ["Marca-mãe e padrões", "Estrutura de governança", "Arquitetura de capital", "Disciplina de reporte do grupo"] },
      { n: "02", title: "Parceiro setorial", label: "Cocriador da vertical", items: ["Tese e inteligência setorial", "Relações na indústria", "Execução comercial", "Desempenho da vertical"] },
      { n: "03", title: "Conselho conjunto", label: "Camada de decisão", items: ["Prioridades estratégicas", "Portas de risco e conformidade", "Decisões de investimento ou mercado", "Revisão de afirmações e reputação"] },
    ],
    sectionSystem: "Como nasce uma vertical",
    systemTitle: "Um caminho disciplinado da tese setorial à presença de mercado.",
    steps: [
      ["Identificar", "Definir a oportunidade e por que a Turion deve entrar."],
      ["Associar", "Validar o operador, os incentivos e os direitos de decisão."],
      ["Construir", "Criar proposta, modelo operacional e marca da vertical."],
      ["Ativar", "Lançar somente após aprovações legais, probatórias e operacionais."],
    ],
    sectionGovernance: "Governança de marca",
    governanceTitle: "Liberdade nas pontas. Controle no núcleo.",
    governanceBody:
      "O sistema dá a cada vertical personalidade suficiente para ser relevante em seu mercado, protegendo a confiança institucional do grupo.",
    rules: [
      ["Fixo", "Nome TURION, marca-mãe, princípios de governança, família tipográfica e tom institucional."],
      ["Flexível", "Descritor setorial, cor de destaque, símbolo de apoio, sistema de imagens e narrativa da vertical."],
      ["Com permissão", "Nome e logo do parceiro, biografia, afirmações reguladas, resultados, endossos e casos públicos."],
    ],
    ctaEyebrow: "Construindo o portfólio Turion",
    ctaTitle: "Uma plataforma global, uma vertical confiável por vez.",
    ctaBody:
      "Turion Travel Capital é o caso fundador. Outras verticais só serão anunciadas após aprovação do parceiro, jurídica e de marca.",
    ctaButton: "Revisar a arquitetura",
    disclosureTitle: "Situação institucional",
    disclosure:
      "A Turion Global é apresentada como uma arquitetura estratégica de marca em desenvolvimento. Não é apresentada aqui como banco, consultoria de investimentos licenciada, gestora de fundos ou instituição depositária. Atividades reguladas, quando aplicáveis, deverão ser executadas somente por entidades e parceiros devidamente autorizados.",
    footerStatus: "Pré-lançamento institucional · Julho de 2026",
    footerLine: "Plataforma global · Verticais setoriais · Execução com parceiros",
    footerLegal: "© 2026 Turion Global. Revisões jurídica e de marca em andamento.",
  },
  es: {
    preview: "Vista institucional · Enfoque inicial en las Américas, visión global",
    nav: ["Plataforma", "Verticales", "Alianza", "Gobernanza"],
    navIds: ["platform", "verticals", "partnership", "governance"],
    navCta: "Explorar el modelo",
    heroEyebrow: "Turion Global · Marca matriz",
    heroTitleA: "Una marca global.",
    heroTitleB: "Negocios nativos de cada sector.",
    heroBody:
      "Turion aporta un estándar común de gobernanza, arquitectura de capital y disciplina de marca a negocios especializados, liderados junto a socios sectoriales.",
    heroPrimary: "Explorar la plataforma",
    heroSecondary: "Ver el modelo de alianza",
    heroNote: "Primera vertical en formación: Turion Travel Capital",
    mapTitle: "Arquitectura sectorial",
    mapCore: "PLATAFORMA\nGLOBAL",
    mapTravel: "TRAVEL\nCAPITAL",
    mapFitness: "FITNESS\nCAPITAL",
    mapNext: "PRÓXIMO\nSECTOR",
    principles: [["Una", "marca matriz"], ["Sectorial", "tesis de mercado"], ["Con socios", "ejecución"], ["Con evidencia", "gobernanza"]],
    sectionPlatform: "La plataforma",
    platformTitle: "Un núcleo operativo común. Adaptable a cada sector.",
    platformBody:
      "Turion Global protege lo que debe permanecer consistente en todo el grupo, mientras cada vertical adquiere el derecho de verse, hablar y operar con relevancia sectorial.",
    platformCards: [
      ["Sistema de marca", "Una arquitectura de nombres, estándares compartidos y un lenguaje visual controlado."],
      ["Arquitectura de capital", "Un marco replicable para estructurar oportunidades con los especialistas adecuados."],
      ["Gobernanza", "Derechos de decisión claros, disciplina de reportes y afirmaciones públicas basadas en evidencia."],
      ["Red de socios", "Operadores sectoriales aportan conocimiento, acceso y ejecución responsable."],
    ],
    sectionVerticals: "Portafolio de verticales",
    verticalsTitle: "Distintas para liderar. Conectadas para escalar.",
    verticalsBody:
      "Cada vertical recibe una expresión sectorial y su propia capa de alianza, sin fragmentar el nombre Turion.",
    travelStatus: "Vertical fundadora",
    travelTitle: "Travel Capital",
    travelBody: "Una plataforma especializada en la economía de viajes, que conecta visión sectorial, oportunidades estructuradas y socios operativos experimentados.",
    travelTokens: ["Azul marino + oro clásico", "Símbolo propio de viajes", "Núcleo de gobernanza Turion"],
    fitnessStatus: "Próxima vertical",
    fitnessTitle: "Fitness Capital",
    fitnessBody: "Una vertical propuesta para la economía del fitness y bienestar. Tesis, socio y perímetro regulatorio siguen sujetos a aprobación.",
    fitnessTokens: ["Mineral + cobre", "Voz orientada al rendimiento", "Núcleo de gobernanza Turion"],
    futureStatus: "Marco de expansión",
    futureTitle: "Sectores futuros",
    futureBody: "Las nuevas verticales se lanzan únicamente cuando se aprueban una tesis sólida, un socio calificado y un caso de gobernanza.",
    futureTokens: ["Acento definido por sector", "Nomenclatura controlada", "Lanzamiento por etapas"],
    architectureTitle: "La regla de marca monolítica",
    architectureBody: "La marca matriz permanece constante. El descriptor sectorial, la paleta de acento y la firma aprobada del socio generan diferenciación.",
    lockupPartner: "SOCIO SECTORIAL",
    lockupCaption: "Zona controlada de cofirma · el socio nunca sustituye ni altera la marca matriz Turion",
    sectionPartnership: "El modelo de alianza",
    partnershipTitle: "La vertical se construye en conjunto. La responsabilidad permanece explícita.",
    partnershipBody: "El socio aporta experiencia real del sector. Turion ofrece la plataforma del grupo. Las decisiones compartidas se ubican dentro de una gobernanza documentada.",
    columns: [
      { n: "01", title: "Turion Global", label: "Dueña de la plataforma", items: ["Marca matriz y estándares", "Marco de gobernanza", "Arquitectura de capital", "Disciplina de reportes del grupo"] },
      { n: "02", title: "Socio sectorial", label: "Cocreador de la vertical", items: ["Tesis e inteligencia sectorial", "Relaciones en la industria", "Ejecución comercial", "Rendimiento de la vertical"] },
      { n: "03", title: "Consejo conjunto", label: "Capa de decisión", items: ["Prioridades estratégicas", "Controles de riesgo y cumplimiento", "Decisiones de inversión o mercado", "Revisión de afirmaciones y reputación"] },
    ],
    sectionSystem: "Cómo se forma una vertical",
    systemTitle: "Un camino disciplinado desde la tesis sectorial hasta la presencia de mercado.",
    steps: [["Identificar", "Definir la oportunidad y por qué Turion debe entrar."], ["Asociar", "Validar al operador, los incentivos y los derechos de decisión."], ["Construir", "Crear la propuesta, el modelo operativo y la marca vertical."], ["Activar", "Lanzar solo después de controles legales, probatorios y operativos."]],
    sectionGovernance: "Gobernanza de marca",
    governanceTitle: "Libertad en los bordes. Control en el núcleo.",
    governanceBody: "El sistema brinda a cada vertical suficiente personalidad para ser relevante en su mercado, mientras protege la confianza institucional del grupo.",
    rules: [
      ["Fijo", "Nombre TURION, marca matriz, principios de gobernanza, familia tipográfica y tono institucional."],
      ["Flexible", "Descriptor sectorial, color de acento, símbolo de apoyo, sistema de imágenes y narrativa vertical."],
      ["Con permiso", "Nombre y logo del socio, biografía, afirmaciones reguladas, resultados, avales y casos públicos."],
    ],
    ctaEyebrow: "Construyendo el portafolio Turion",
    ctaTitle: "Una plataforma global, una vertical creíble a la vez.",
    ctaBody: "Turion Travel Capital es el caso fundador. Las demás verticales se anunciarán únicamente tras la aprobación del socio, legal y de marca.",
    ctaButton: "Revisar la arquitectura",
    disclosureTitle: "Situación institucional",
    disclosure: "Turion Global se presenta como una arquitectura estratégica de marca en desarrollo. No se presenta aquí como banco, asesor de inversiones licenciado, gestor de fondos ni institución depositaria. Las actividades reguladas, cuando correspondan, deberán ser ejecutadas únicamente por entidades y socios debidamente autorizados.",
    footerStatus: "Prelanzamiento institucional · Julio de 2026",
    footerLine: "Plataforma global · Verticales sectoriales · Ejecución con socios",
    footerLegal: "© 2026 Turion Global. Revisiones legal y de marca en curso.",
  },
} as const;

export default function TurionLanding() {
  const [locale, setLocale] = useState<Locale>("en");
  const c = copy[locale];

  return (
    <main>
      <div className="preview-bar">{c.preview}</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Turion Global home">
          <span className="brand-seal" aria-hidden="true"><i>T</i></span>
          <span className="brand-name">TURION</span>
          <span className="brand-suffix">GLOBAL</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {c.nav.map((item, i) => <a href={`#${c.navIds[i]}`} key={item}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label="Language">
            {(["en", "pt", "es"] as Locale[]).map((language) => (
              <button
                className={locale === language ? "active" : ""}
                type="button"
                key={language}
                onClick={() => setLocale(language)}
                aria-pressed={locale === language}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="header-cta" href="#verticals">{c.navCta}<span aria-hidden="true">↘</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span>{c.heroEyebrow}</p>
            <h1>{c.heroTitleA}<br/><em>{c.heroTitleB}</em></h1>
            <p className="hero-body">{c.heroBody}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#platform">{c.heroPrimary}<span aria-hidden="true">↘</span></a>
              <a className="text-link" href="#partnership">{c.heroSecondary}<span aria-hidden="true">→</span></a>
            </div>
            <p className="hero-note"><span className="pulse" aria-hidden="true"/>{c.heroNote}</p>
          </div>

          <div className="sector-map" aria-label={c.mapTitle}>
            <p className="map-label">{c.mapTitle}</p>
            <div className="orbit orbit-one"/>
            <div className="orbit orbit-two"/>
            <div className="map-line line-a"/>
            <div className="map-line line-b"/>
            <div className="map-line line-c"/>
            <div className="map-node core-node"><span className="node-monogram">T</span><small>{c.mapCore}</small></div>
            <div className="map-node travel-node"><b>01</b><small>{c.mapTravel}</small></div>
            <div className="map-node fitness-node"><b>02</b><small>{c.mapFitness}</small></div>
            <div className="map-node next-node"><b>+</b><small>{c.mapNext}</small></div>
            <span className="map-coordinate map-coordinate-a">08°59′N</span>
            <span className="map-coordinate map-coordinate-b">79°31′W</span>
          </div>
        </div>
        <div className="principle-strip">
          {c.principles.map(([lead, rest], i) => (
            <div className="principle" key={lead}><span>0{i + 1}</span><p><strong>{lead}</strong>{rest}</p></div>
          ))}
        </div>
      </section>

      <section className="platform section" id="platform">
        <div className="section-intro">
          <p className="eyebrow dark"><span>02</span>{c.sectionPlatform}</p>
          <h2>{c.platformTitle}</h2>
          <p>{c.platformBody}</p>
        </div>
        <div className="platform-grid">
          {c.platformCards.map(([title, body], i) => (
            <article className="platform-card" key={title}>
              <span className="card-number">0{i + 1}</span>
              <div className={`system-symbol symbol-${i + 1}`} aria-hidden="true"><i/><i/><i/></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="verticals section" id="verticals">
        <div className="section-intro compact">
          <p className="eyebrow light"><span>03</span>{c.sectionVerticals}</p>
          <h2>{c.verticalsTitle}</h2>
          <p>{c.verticalsBody}</p>
        </div>
        <div className="vertical-grid">
          <article className="vertical-card travel-card">
            <div className="vertical-top"><span>{c.travelStatus}</span><b>01</b></div>
            <div className="travel-emblem" aria-hidden="true"><i/><i/><i/></div>
            <div className="vertical-lockup"><strong>TURION</strong><span>{c.travelTitle}</span></div>
            <p>{c.travelBody}</p>
            <ul>{c.travelTokens.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="vertical-card fitness-card">
            <div className="vertical-top"><span>{c.fitnessStatus}</span><b>02</b></div>
            <div className="fitness-emblem" aria-hidden="true"><i/><i/><i/></div>
            <div className="vertical-lockup"><strong>TURION</strong><span>{c.fitnessTitle}</span></div>
            <p>{c.fitnessBody}</p>
            <ul>{c.fitnessTokens.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="vertical-card future-card">
            <div className="vertical-top"><span>{c.futureStatus}</span><b>03—</b></div>
            <div className="future-emblem" aria-hidden="true">+</div>
            <div className="vertical-lockup"><strong>TURION</strong><span>{c.futureTitle}</span></div>
            <p>{c.futureBody}</p>
            <ul>{c.futureTokens.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>

        <div className="brand-rule">
          <div className="rule-copy"><span className="rule-index">A—01</span><h3>{c.architectureTitle}</h3><p>{c.architectureBody}</p></div>
          <div className="co-brand-demo">
            <div className="demo-turion"><span className="mini-seal">T</span><div><strong>TURION</strong><small>TRAVEL CAPITAL</small></div></div>
            <span className="demo-divider"/>
            <div className="demo-partner"><i>+</i><span>{c.lockupPartner}</span></div>
            <p>{c.lockupCaption}</p>
          </div>
        </div>
      </section>

      <section className="partnership section" id="partnership">
        <div className="section-intro horizontal">
          <div><p className="eyebrow dark"><span>04</span>{c.sectionPartnership}</p><h2>{c.partnershipTitle}</h2></div>
          <p>{c.partnershipBody}</p>
        </div>
        <div className="partnership-grid">
          {c.columns.map((column, i) => (
            <article className={`partner-column column-${i + 1}`} key={column.n}>
              <div className="column-head"><span>{column.n}</span><small>{column.label}</small></div>
              <h3>{column.title}</h3>
              <ul>{column.items.map(item => <li key={item}><i aria-hidden="true">↘</i>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="system section">
        <div className="system-heading"><p className="eyebrow light"><span>05</span>{c.sectionSystem}</p><h2>{c.systemTitle}</h2></div>
        <div className="steps">
          {c.steps.map(([title, body], i) => (
            <article className="step" key={title}><div className="step-number">0{i + 1}</div><div className="step-line"><i/></div><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="governance section" id="governance">
        <div className="governance-intro">
          <p className="eyebrow dark"><span>06</span>{c.sectionGovernance}</p>
          <h2>{c.governanceTitle}</h2>
          <p>{c.governanceBody}</p>
        </div>
        <div className="rule-list">
          {c.rules.map(([title, body], i) => (
            <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="closing section">
        <div className="closing-grid">
          <div className="closing-copy"><p className="eyebrow light"><span>07</span>{c.ctaEyebrow}</p><h2>{c.ctaTitle}</h2><p>{c.ctaBody}</p><a className="button button-gold" href="#verticals">{c.ctaButton}<span aria-hidden="true">↑</span></a></div>
          <div className="closing-mark" aria-hidden="true"><span>T</span><i/><i/><i/></div>
        </div>
        <aside className="disclosure"><strong>{c.disclosureTitle}</strong><p>{c.disclosure}</p></aside>
      </section>

      <footer>
        <div className="footer-brand"><span className="mini-seal">T</span><div><strong>TURION</strong><small>GLOBAL</small></div></div>
        <div className="footer-copy"><p>{c.footerStatus}</p><span>{c.footerLine}</span></div>
        <p className="footer-legal">{c.footerLegal}</p>
      </footer>
    </main>
  );
}
