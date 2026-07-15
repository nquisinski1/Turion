"use client";

import { FormEvent, useState } from "react";

const navigation = [
  ["O que fazemos", "#atuacao"],
  ["Soluções", "#solucoes"],
  ["Verticais", "#verticais"],
  ["Para instituições", "#instituicoes"],
  ["Governança", "#governanca"],
] as const;

const services = [
  {
    n: "01",
    title: "Diagnóstico estratégico",
    body: "Lemos a operação, o setor, o ciclo financeiro e a necessidade real antes de indicar qualquer caminho.",
  },
  {
    n: "02",
    title: "Preparação da oportunidade",
    body: "Organizamos informações, documentos, premissas e alternativas para uma conversa objetiva com o mercado.",
  },
  {
    n: "03",
    title: "Conexão qualificada",
    body: "Direcionamos cada demanda a instituições e especialistas compatíveis com o escopo, o porte e a jurisdição.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    body: "Coordenamos comunicação, pendências e marcos, preservando rastreabilidade e clareza entre as partes.",
  },
] as const;

const solutions = [
  {
    title: "Recebíveis e capital de giro",
    body: "Preparação de demandas relacionadas a antecipação de recebíveis de cartão e boletos, securitização e outras estruturas de liquidez.",
    note: "Análise, oferta, aprovação e contratação pelo parceiro autorizado.",
  },
  {
    title: "Câmbio e operações internacionais",
    body: "Organização de necessidades cambiais e conexão com instituições habilitadas para operações entre Brasil e mercados internacionais.",
    note: "Liquidação e contratação diretamente com instituição autorizada.",
  },
  {
    title: "M&A e estrutura empresarial",
    body: "Assessoria estratégica em preparação societária, organização de tese, materiais, interlocução e coordenação de especialistas.",
    note: "Serviços jurídicos, fiscais e regulados por profissionais competentes.",
  },
  {
    title: "BaaS e finanças incorporadas",
    body: "Desenho de casos de uso para empresas que desejam integrar jornadas de pagamento, crédito ou parcelamento à própria experiência.",
    note: "Serviços prestados pela instituição de BaaS identificada ao cliente.",
  },
  {
    title: "Patrimônio e sucessão",
    body: "Coordenação inicial de demandas patrimoniais nacionais e internacionais com gestores, advogados e demais especialistas qualificados.",
    note: "A Turion não administra carteiras nem recomenda valores mobiliários.",
  },
] as const;

const segments = [
  {
    code: "E1",
    title: "Grandes empresas",
    range: "Referência: faturamento mensal acima de R$ 30 milhões",
    body: "Operações de maior escala que exigem capacidade institucional, coordenação executiva e interlocução com bancos e estruturas especializadas.",
    items: ["Recebíveis e cartões", "Câmbio internacional", "Estruturas sob medida"],
  },
  {
    code: "E2",
    title: "Empresas em escala",
    range: "Referência: faturamento mensal acima de R$ 1 milhão",
    body: "Negócios B2B que precisam organizar fluxo de caixa e acessar alternativas compatíveis com seu ciclo de recebimento.",
    items: ["Boletos e duplicatas", "Cartões", "Capital de giro"],
  },
  {
    code: "E3",
    title: "Plataformas B2B2C",
    range: "Turismo, clínicas, estética, saúde e bem-estar",
    body: "Empresas que desejam incorporar opções de pagamento ou crédito para clientes elegíveis por meio de parceiros de BaaS.",
    items: ["Embedded finance", "Parcelamento", "Consignado, quando aplicável"],
  },
] as const;

const verticals = [
  {
    n: "01",
    status: "Vertical fundadora",
    name: "Travel Capital",
    descriptor: "Viagens, hospitalidade e experiências",
    body: "Conhecimento setorial para conectar empresas da economia de viagens a soluções, estruturas e parceiros compatíveis com sua realidade.",
    className: "travel",
  },
  {
    n: "02",
    status: "Em desenvolvimento",
    name: "Fitness Capital",
    descriptor: "Fitness, performance e bem-estar",
    body: "Uma frente dedicada ao ecossistema de academias, redes, serviços, tecnologia e experiências ligadas à performance humana.",
    className: "fitness",
  },
  {
    n: "03",
    status: "Nome em validação",
    name: "Vitality Capital",
    descriptor: "Saúde, estética e longevidade",
    body: "A proposta moderna para reunir cuidado, estética, qualidade de vida e longevidade sem limitar a vertical ao território de beleza.",
    className: "vitality",
  },
] as const;

const institutionValue = [
  ["Originação setorial", "Acesso a empresas e demandas com contexto de negócio, não apenas pedidos isolados de produto."],
  ["Qualificação inicial", "Leitura de porte, necessidade, documentação disponível e aderência preliminar ao escopo do parceiro."],
  ["Dossiê organizado", "Informação estruturada para reduzir ruído, acelerar entendimento e permitir uma decisão independente."],
  ["Coordenação responsável", "Um ponto de contato para pendências, alinhamentos e acompanhamento comercial, sem interferir na decisão regulada."],
] as const;

const process = [
  ["01", "Qualificar", "Entender empresa, demanda, setor, jurisdição e urgência real."],
  ["02", "Diligenciar", "Organizar informações e identificar riscos, lacunas e dependências."],
  ["03", "Estruturar", "Desenhar alternativas e preparar a oportunidade para o mercado."],
  ["04", "Conectar", "Encaminhar ao parceiro compatível, com papéis e responsabilidades claros."],
  ["05", "Acompanhar", "Coordenar o fluxo até a decisão e os marcos previstos no contrato."],
] as const;

function TurionMark({ tone = "light" }: { tone?: "light" | "dark" | "bronze" }) {
  return (
    <span className={`turion-mark mark-${tone}`} aria-hidden="true">
      <i className="mark-bar" />
      <i className="mark-stem" />
    </span>
  );
}

function TurionLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`turion-logo ${dark ? "logo-dark" : ""}`}>
      <TurionMark tone={dark ? "dark" : "light"} />
      <span className="wordmark">
        <strong>TURION</strong>
        <small>GLOBAL</small>
      </span>
    </span>
  );
}

export default function TurionLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company = String(data.get("empresa") || "");
    const name = String(data.get("nome") || "");
    const email = String(data.get("email") || "");
    const range = String(data.get("faixa") || "");
    const interest = String(data.get("interesse") || "");
    const subject = encodeURIComponent(`Oportunidade institucional — ${company || name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmpresa: ${company}\nE-mail: ${email}\nFaixa de faturamento: ${range}\nInteresse: ${interest}\n\nGostaria de apresentar uma oportunidade à Turion Global.`,
    );
    window.location.href = `mailto:contato@turionglobal.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand-link" href="#inicio" aria-label="Turion Global — início">
          <TurionLogo />
        </a>
        <nav className={`site-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Navegação principal">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contato">
          Apresentar oportunidade <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="kicker"><span>Advisory internacional</span> Panamá → Brasil</p>
          <h1>Estratégia financeira, <em>construída por setores.</em></h1>
          <p className="hero-lead">
            A Turion Global assessora empresas da economia da experiência e do bem-estar na preparação,
            estruturação e conexão de oportunidades com instituições e especialistas qualificados.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">Apresentar uma oportunidade <span>↗</span></a>
            <a className="button button-quiet" href="#modelo">Conhecer o modelo <span>↓</span></a>
          </div>
          <p className="hero-boundary">
            A Turion não é instituição financeira. Produtos e atividades reguladas são analisados, ofertados
            e contratados diretamente por parceiros devidamente autorizados.
          </p>
        </div>
        <div className="hero-architecture" aria-label="Sistema Turion: estratégia, setores e parceiros">
          <div className="architecture-label top">TURION / SISTEMA 01</div>
          <div className="structure structure-a" />
          <div className="structure structure-b" />
          <div className="structure structure-c" />
          <div className="structure-core">
            <TurionMark tone="dark" />
            <span>NÚCLEO<br />ESTRATÉGICO</span>
          </div>
          <div className="architecture-label bottom">08°59′ N &nbsp;·&nbsp; 79°31′ W</div>
        </div>
        <div className="principle-strip">
          {["Método setorial", "Governança documental", "Parceiros qualificados", "Acompanhamento contínuo"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="section section-light" id="atuacao">
        <div className="section-heading">
          <p className="kicker kicker-dark"><span>01</span> O que fazemos</p>
          <h2>Transformamos uma necessidade complexa em uma oportunidade <em>compreensível e encaminhável.</em></h2>
          <p>
            A Turion atua no ponto em que estratégia, documentação, setor e relacionamento precisam convergir.
            Nosso papel é preparar a conversa certa — com o parceiro certo e com responsabilidades explícitas.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.n}>
              <span>{service.n}</span>
              <div className="micro-mark" aria-hidden="true"><i /><i /></div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-petroleum" id="solucoes">
        <div className="section-heading heading-on-dark">
          <p className="kicker"><span>02</span> Soluções coordenadas</p>
          <h2>Uma arquitetura de acesso. <em>Não uma prateleira de promessas.</em></h2>
          <p>
            Cada demanda é analisada individualmente. Quando houver produto ou atividade regulada, o parceiro
            autorizado mantém decisão, contratação, precificação, execução e atendimento ao cliente.
          </p>
        </div>
        <div className="solution-list">
          {solutions.map((solution, index) => (
            <article key={solution.title}>
              <span className="solution-number">0{index + 1}</span>
              <h3>{solution.title}</h3>
              <p>{solution.body}</p>
              <small>{solution.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-mineral" id="modelo">
        <div className="model-heading">
          <p className="kicker kicker-dark"><span>03</span> Perímetro de atuação</p>
          <h2>Clareza sobre quem faz o quê.</h2>
        </div>
        <div className="role-grid">
          <article className="role-card role-turion">
            <div className="role-top"><TurionMark tone="bronze" /><span>Turion Global</span></div>
            <h3>Assessoria estratégica e coordenação</h3>
            <ul>
              <li>Diagnóstico empresarial e financeiro</li>
              <li>Preparação de informações e alternativas</li>
              <li>Identificação e conexão de parceiros</li>
              <li>Coordenação de comunicação e pendências</li>
              <li>Acompanhamento conforme mandato contratado</li>
            </ul>
          </article>
          <article className="role-card role-partner">
            <div className="role-top"><span className="partner-symbol">+</span><span>Parceiro competente</span></div>
            <h3>Decisão e execução especializada</h3>
            <ul>
              <li>Análise independente de crédito ou operação</li>
              <li>Condições, preço, aprovação e contratação</li>
              <li>Oferta e execução de atividades reguladas</li>
              <li>KYC, PLD/FTP e controles exigidos</li>
              <li>Liquidação, custódia e atendimento, quando aplicável</li>
            </ul>
          </article>
        </div>
        <p className="model-note">O encaminhamento não representa aprovação, recomendação de investimento ou garantia de resultado.</p>
      </section>

      <section className="section section-light" id="clientes">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker kicker-dark"><span>04</span> Perfis atendidos</p>
            <h2>Três jornadas. Um padrão institucional.</h2>
          </div>
          <p>
            As faixas abaixo orientam a qualificação inicial. Elegibilidade, limites, garantias, preços e aprovação
            dependem exclusivamente da análise do parceiro e da solução aplicável.
          </p>
        </div>
        <div className="segment-grid">
          {segments.map((segment) => (
            <article className="segment-card" key={segment.code}>
              <div className="segment-code">{segment.code}</div>
              <h3>{segment.title}</h3>
              <strong>{segment.range}</strong>
              <p>{segment.body}</p>
              <ul>{segment.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-petroleum vertical-section" id="verticais">
        <div className="section-heading heading-on-dark">
          <p className="kicker"><span>05</span> Verticais Turion</p>
          <h2>Profundidade setorial para oportunidades <em>mais bem compreendidas.</em></h2>
          <p>
            A marca-mãe concentra governança, método e relacionamentos. Cada vertical desenvolve conhecimento,
            linguagem e alianças coerentes com sua economia.
          </p>
        </div>
        <div className="vertical-grid">
          {verticals.map((vertical) => (
            <article className={`vertical-card ${vertical.className}`} key={vertical.n}>
              <div className="vertical-meta"><span>{vertical.status}</span><b>{vertical.n}</b></div>
              <div className="vertical-geometry" aria-hidden="true"><i /><i /><i /></div>
              <p className="vertical-turion">TURION</p>
              <h3>{vertical.name}</h3>
              <strong>{vertical.descriptor}</strong>
              <p>{vertical.body}</p>
            </article>
          ))}
        </div>
        <p className="vertical-note">
          “Vitality Capital” é a recomendação de nomenclatura para saúde, estética, bem-estar e longevidade.
          O uso público depende de busca e aprovação jurídica de marca.
        </p>
      </section>

      <section className="section institution-section" id="instituicoes">
        <div className="institution-intro">
          <p className="kicker kicker-dark"><span>06</span> Para bancos, fundos e especialistas</p>
          <h2>Um parceiro de origem setorial. <em>Com disciplina de processo.</em></h2>
          <p>
            A Turion pretende entregar oportunidades mais claras, bem documentadas e contextualizadas — respeitando
            integralmente a autonomia de análise, decisão e contratação de cada instituição.
          </p>
          <a className="text-link" href="#contato">Construir uma aliança institucional <span>↗</span></a>
        </div>
        <div className="institution-list">
          {institutionValue.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="process-head">
          <p className="kicker"><span>07</span> Método Turion</p>
          <h2>Da demanda à decisão, sem atalhos.</h2>
        </div>
        <div className="process-grid">
          {process.map(([n, title, body]) => (
            <article key={n}><span>{n}</span><i aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section governance-section" id="governanca">
        <div className="governance-copy">
          <p className="kicker kicker-dark"><span>08</span> Governança e confiança</p>
          <h2>Autoridade demonstrada por método — nunca por aparência.</h2>
          <p>
            Para a Turion, reputação nasce de limites claros, documentação, confidencialidade e seleção responsável
            de parceiros. Marcas de alianças só são publicadas após contrato, evidência e autorização de uso.
          </p>
          <div className="registry-links">
            <a href="https://bcb.gov.br/meubc/encontreinstituicao" target="_blank" rel="noreferrer">Consultar instituições no BCB <span>↗</span></a>
            <a href="https://www.gov.br/pt-br/servicos/consultar-participantes-cvm" target="_blank" rel="noreferrer">Consultar participantes na CVM <span>↗</span></a>
          </div>
        </div>
        <div className="governance-grid">
          {[
            ["Parceiros", "Validação cadastral e regulatória antes de qualquer comunicação pública."],
            ["Dados", "Tratamento proporcional, finalidade clara e proteção de informações confidenciais."],
            ["Conflitos", "Papéis, remuneração e potenciais conflitos documentados conforme o mandato."],
            ["Comunicação", "Nenhuma promessa de aprovação, retorno, exclusividade ou licença inexistente."],
          ].map(([title, body], index) => (
            <article key={title}><span>G{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="contact-copy">
          <p className="kicker"><span>09</span> Conversa institucional</p>
          <h2>Apresente a sua oportunidade.</h2>
          <p>
            Se você representa uma empresa, instituição financeira, fundo ou especialista, compartilhe o contexto.
            A primeira análise identifica aderência, dependências e o próximo passo adequado.
          </p>
          <div className="contact-signature"><TurionLogo /><span>Panamá · atuação internacional</span></div>
        </div>
        <form className="contact-form" onSubmit={handleContact}>
          <label>Nome<input name="nome" type="text" required autoComplete="name" /></label>
          <label>Empresa<input name="empresa" type="text" required autoComplete="organization" /></label>
          <label>E-mail corporativo<input name="email" type="email" required autoComplete="email" /></label>
          <label>Faixa de faturamento mensal
            <select name="faixa" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option>Até R$ 1 milhão</option>
              <option>De R$ 1 milhão a R$ 30 milhões</option>
              <option>Acima de R$ 30 milhões</option>
              <option>Instituição ou parceiro</option>
            </select>
          </label>
          <label className="full-field">Interesse
            <textarea name="interesse" rows={4} required placeholder="Conte-nos, em linhas gerais, qual oportunidade deseja estruturar." />
          </label>
          <label className="consent full-field">
            <input type="checkbox" required />
            <span>Autorizo o uso destes dados para responder a esta solicitação, conforme a política de privacidade.</span>
          </label>
          <button className="button button-primary full-field" type="submit">Preparar mensagem <span>↗</span></button>
          <p className="form-note full-field">O formulário abre uma mensagem no aplicativo de e-mail do seu dispositivo. Nenhum dado é enviado automaticamente.</p>
        </form>
      </section>

      <section className="legal-section" aria-label="Informações regulatórias">
        <div className="legal-title"><span>L—01</span><h2>Informações importantes</h2></div>
        <div className="legal-copy">
          <p>
            A Turion Global atua como assessoria estratégica empresarial. Não é instituição financeira ou de pagamento,
            banco, correspondente bancário, corretora, distribuidora, gestora, securitizadora ou consultora de valores
            mobiliários registrada no Brasil.
          </p>
          <p>
            Quando uma oportunidade envolver produto ou atividade regulada, análise, oferta, aprovação, precificação,
            contratação, liquidação, custódia e atendimento são realizados diretamente pela instituição ou pelo profissional
            devidamente autorizado, sujeito a suas políticas e à regulamentação aplicável. A Turion não recebe depósitos,
            não mantém contas, não custodia ativos, não decide crédito e não garante aprovação, retorno ou economia.
          </p>
          <p>
            O conteúdo deste site é institucional e não constitui oferta pública, recomendação de investimento, aconselhamento
            jurídico, tributário ou promessa de contratação. Nomes e logotipos de terceiros somente serão exibidos mediante
            relação comprovada e autorização expressa.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <TurionLogo />
        <p>Estratégia financeira · Conhecimento setorial · Conexões qualificadas</p>
        <div><a href="#governanca">Governança</a><a href="#contato">Contato</a><span>© 2026 Turion Global</span></div>
      </footer>
    </main>
  );
}
