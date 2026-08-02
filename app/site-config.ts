export type SiteKey = "advisory" | "travel" | "fitness" | "health";

type ContentCard = { code: string; title: string; body: string };
type AudienceCard = { title: string; body: string };

export type SiteConfig = {
  key: SiteKey;
  path: string;
  domain: string;
  descriptor: string;
  code: string;
  eyebrow: string;
  hero: string;
  heroEmphasis: string;
  lead: string;
  thesisLabel: string;
  thesis: string;
  thesisBody: string;
  pointOfView: string;
  solutionsLabel: string;
  solutionsTitle: string;
  solutionsIntro: string;
  solutions: readonly ContentCard[];
  audienceLabel: string;
  audienceTitle: string;
  audienceLead: string;
  audiences: readonly AudienceCard[];
  method: readonly ContentCard[];
  formTitle: string;
  formLead: string;
  products: readonly string[];
};

export const sites: Record<SiteKey, SiteConfig> = {
  advisory: {
    key: "advisory",
    path: "/",
    domain: "turionadvisory.com",
    descriptor: "",
    code: "T / 00",
    eyebrow: "Advisory & Capital · Travel · Fitness · Health",
    hero: "Capital com contexto.",
    heroEmphasis: "Oportunidades com direção.",
    lead:
      "A Turion une empresas que conhece em profundidade a instituições e provedores de capital com potencial aderência à sua realidade. Não partimos do produto financeiro. Partimos da decisão empresarial.",
    thesisLabel: "Nossa visão",
    thesis: "A decisão começa antes do capital.",
    thesisBody:
      "Conhecer a empresa. Preparar a oportunidade. Encontrar aderência. A Turion organiza essa sequência para que a interlocução com o mercado financeiro comece com propósito, informação e responsabilidades claras.",
    pointOfView:
      "Uma boa relação bancária amplia possibilidades. Uma visão independente ajuda a empresa a compreender o conjunto, comparar caminhos e preservar o controle da decisão.",
    solutionsLabel: "O que a Turion faz",
    solutionsTitle: "Inteligência entre a necessidade empresarial e o capital disponível.",
    solutionsIntro:
      "Conhecemos a dor do cliente, qualificamos o contexto e apresentamos a oportunidade a potenciais instituições aderentes. A análise e a decisão permanecem integralmente com cada instituição.",
    solutions: [
      { code: "01", title: "Leitura executiva", body: "Compreendemos o negócio, a finalidade do capital, o momento da empresa e as restrições da decisão." },
      { code: "02", title: "Preparação da oportunidade", body: "Organizamos informações, narrativa financeira e pontos que precisam ser tratados antes da apresentação." },
      { code: "03", title: "Aderência institucional", body: "Relacionamos o perfil da oportunidade a instituições e provedores com potencial compatibilidade." },
      { code: "04", title: "Coordenação", body: "Conduzimos o fluxo autorizado de informações e acompanhamos a interlocução sem interferir na análise da instituição." },
    ],
    audienceLabel: "Responsabilidades",
    audienceTitle: "Cada parte ocupa o lugar que lhe corresponde.",
    audienceLead:
      "A confiança nasce da clareza sobre quem prepara, quem decide e quem executa.",
    audiences: [
      { title: "A empresa", body: "Define a necessidade, disponibiliza informações e preserva a decisão final sobre o caminho escolhido." },
      { title: "Turion", body: "Compreende o contexto, prepara a oportunidade e coordena a interlocução prevista no mandato." },
      { title: "A instituição", body: "Realiza sua própria análise, solicita informações, define condições e aprova ou recusa a oportunidade." },
    ],
    method: [
      { code: "01", title: "Compreender", body: "A conversa começa pelo negócio e pela decisão que o capital precisa tornar possível." },
      { code: "02", title: "Preparar", body: "A oportunidade é organizada para que informação e contexto sustentem a análise." },
      { code: "03", title: "Apresentar", body: "Com autorização do cliente, aproximamos a oportunidade de potenciais instituições aderentes." },
      { code: "04", title: "Acompanhar", body: "Coordenamos pendências e próximos passos até a decisão independente de cada instituição." },
    ],
    formTitle: "Uma oportunidade relevante merece uma conversa bem preparada.",
    formLead:
      "Compartilhe o contexto, a finalidade do capital e o momento da empresa. A leitura inicial avaliará se existe base para avançar.",
    products: ["Capital para crescimento", "Liquidez e recebíveis", "Expansão ou aquisição", "Preparação empresarial", "Outro mandato"],
  },
  travel: {
    key: "travel",
    path: "/travel",
    domain: "travel.turionadvisory.com",
    descriptor: "TRAVEL",
    code: "T / 01",
    eyebrow: "Operadoras · hospitalidade · tecnologia · serviços",
    hero: "O capital precisa compreender",
    heroEmphasis: "o tempo da viagem.",
    lead:
      "Reservas, fornecedores, sazonalidade, moeda e entrega operam em calendários distintos. A Turion Travel prepara oportunidades de capital a partir da realidade do setor.",
    thesisLabel: "Ponto de vista Travel",
    thesis: "No turismo, caixa presente e obrigação futura precisam ser lidos juntos.",
    thesisBody:
      "Uma reserva pode gerar receita hoje e compromissos por muitos meses. Essa diferença altera liquidez, risco, garantias e a forma como uma oportunidade deve chegar ao mercado.",
    pointOfView:
      "A tese de capital começa pela dinâmica da operação. Só depois encontra o instrumento e a instituição compatíveis.",
    solutionsLabel: "Advisory para Travel",
    solutionsTitle: "Decisões de capital orientadas pelo ciclo real da viagem.",
    solutionsIntro:
      "A Turion traduz o contexto operacional do setor em uma oportunidade inteligível para potenciais instituições, preservando a decisão de cada parte.",
    solutions: [
      { code: "T01", title: "Liquidez e recebíveis", body: "Organização de reservas, recebíveis, compromissos futuros e garantias para interlocução institucional." },
      { code: "T02", title: "Hospitalidade e capacidade", body: "Preparação de oportunidades ligadas a novas unidades, modernização, ocupação e experiência do hóspede." },
      { code: "T03", title: "Tecnologia e distribuição", body: "Leitura de investimentos em plataformas, eficiência operacional, meios de venda e integração." },
      { code: "T04", title: "Crescimento internacional", body: "Coordenação com instituições habilitadas quando a decisão envolve moeda, fornecedores ou expansão internacional." },
    ],
    audienceLabel: "Ecossistema Travel",
    audienceTitle: "Para quem move a economia da viagem.",
    audienceLead:
      "A divisão reúne conhecimento sobre negócios que vendem, operam e sustentam experiências de viagem.",
    audiences: [
      { title: "Operadoras e agências", body: "Empresas com ciclos intensos de reservas, recebimentos e compromissos com fornecedores." },
      { title: "Hotelaria e hospitalidade", body: "Hotéis, grupos e operadores diante de decisões de capacidade, modernização ou expansão." },
      { title: "Travel tech e fornecedores", body: "Plataformas, distribuidores e empresas que sustentam vendas, pagamentos e operação do setor." },
    ],
    method: [
      { code: "01", title: "Ler o ciclo", body: "Compreendemos reservas, sazonalidade, recebíveis e compromissos futuros." },
      { code: "02", title: "Preparar", body: "Organizamos a finalidade, a informação e os fatores setoriais relevantes." },
      { code: "03", title: "Relacionar", body: "Mapeamos potenciais instituições conforme perfil e finalidade da oportunidade." },
      { code: "04", title: "Acompanhar", body: "Coordenamos o fluxo até a decisão independente de cada instituição." },
    ],
    formTitle: "Qual decisão está definindo o próximo ciclo da sua empresa?",
    formLead: "Apresente a finalidade do capital e a dinâmica da operação. A leitura inicial avaliará a aderência à Turion Travel.",
    products: ["Liquidez e recebíveis", "Hospitalidade e capacidade", "Tecnologia e distribuição", "Crescimento internacional", "Outro mandato"],
  },
  fitness: {
    key: "fitness",
    path: "/fitness",
    domain: "fitness.turionadvisory.com",
    descriptor: "FITNESS",
    code: "T / 02",
    eyebrow: "Academias · clubes · equipamentos · tecnologia",
    hero: "Recorrência só se transforma em valor",
    heroEmphasis: "quando sustenta capacidade.",
    lead:
      "Retenção, maturação por unidade, ocupação e equipamentos determinam a qualidade do crescimento. A Turion Fitness prepara o capital dentro dessa economia.",
    thesisLabel: "Ponto de vista Fitness",
    thesis: "Crescer não é apenas abrir unidades. É sustentar a economia de cada uma delas.",
    thesisBody:
      "Mensalidades mostram recorrência. Retenção, ocupação, capacidade instalada e disciplina operacional revelam se essa recorrência pode financiar o próximo ciclo.",
    pointOfView:
      "A tese de capital precisa reconhecer a diferença entre expansão aparente e crescimento economicamente consistente.",
    solutionsLabel: "Advisory para Fitness",
    solutionsTitle: "Capital para capacidade, equipamentos e escala disciplinada.",
    solutionsIntro:
      "A Turion organiza indicadores operacionais e financeiros para que a oportunidade seja compreendida dentro da lógica do setor.",
    solutions: [
      { code: "F01", title: "Recebíveis e liquidez", body: "Organização de recorrência, retenção, recebíveis e garantias para interlocução institucional." },
      { code: "F02", title: "Equipamentos e expansão", body: "Preparação de oportunidades para novas unidades, retrofit e aumento de capacidade." },
      { code: "F03", title: "Clubes e experiências", body: "Leitura de investimentos em instalações, serviços e experiência do associado." },
      { code: "F04", title: "Consolidação e tecnologia", body: "Preparação para aquisições, alianças, plataformas e movimentos de profissionalização." },
    ],
    audienceLabel: "Ecossistema Fitness",
    audienceTitle: "Para quem constrói a economia do movimento.",
    audienceLead:
      "A divisão reúne empresas de operação, infraestrutura, distribuição e tecnologia ligadas ao setor.",
    audiences: [
      { title: "Academias e redes", body: "Operações recorrentes diante de decisões de expansão, modernização ou consolidação." },
      { title: "Clubes e studios", body: "Empresas que combinam capacidade física, serviço e experiência de comunidade." },
      { title: "Equipamentos e fitness tech", body: "Distribuidores, fabricantes, plataformas e empresas que dão escala ao ecossistema." },
    ],
    method: [
      { code: "01", title: "Ler a unidade", body: "Compreendemos recorrência, retenção, ocupação, capacidade e maturação." },
      { code: "02", title: "Preparar", body: "Organizamos a finalidade e os dados que sustentam a oportunidade." },
      { code: "03", title: "Relacionar", body: "Mapeamos potenciais instituições conforme perfil, finalidade e estágio da empresa." },
      { code: "04", title: "Acompanhar", body: "Coordenamos o fluxo até a decisão independente de cada instituição." },
    ],
    formTitle: "Que movimento sua empresa precisa financiar com consistência?",
    formLead: "Apresente a decisão e a economia da operação. A leitura inicial avaliará a aderência à Turion Fitness.",
    products: ["Liquidez e recebíveis", "Equipamentos e expansão", "Clubes e experiências", "Consolidação e tecnologia", "Outro mandato"],
  },
  health: {
    key: "health",
    path: "/health",
    domain: "health.turionadvisory.com",
    descriptor: "HEALTH",
    code: "T / 03",
    eyebrow: "Clínicas · hospitais · beleza · longevidade",
    hero: "Crescimento e confiança",
    heroEmphasis: "precisam avançar juntos.",
    lead:
      "Capacidade clínica, tecnologia, ciclo financeiro e responsabilidade não podem ser separados. A Turion Health prepara oportunidades de capital dentro dessa complexidade.",
    thesisLabel: "Ponto de vista Health",
    thesis: "Em Health, uma decisão financeira também afeta capacidade e confiança.",
    thesisBody:
      "Equipamentos, instalações, equipe, recebimento e condicionantes regulatórias alteram a qualidade de uma oportunidade. O capital precisa respeitar esse conjunto.",
    pointOfView:
      "A Turion organiza a dimensão empresarial. Responsabilidades clínicas, técnicas e regulatórias permanecem com profissionais e instituições habilitados.",
    solutionsLabel: "Advisory para Health",
    solutionsTitle: "Capital para tecnologia, capacidade e expansão responsável.",
    solutionsIntro:
      "A Turion prepara a oportunidade empresarial e coordena potenciais interlocutores sem ultrapassar responsabilidades clínicas ou regulatórias.",
    solutions: [
      { code: "H01", title: "Recebíveis e liquidez", body: "Organização de fluxos financeiros, recebíveis e garantias para interlocução institucional." },
      { code: "H02", title: "Tecnologia e capacidade", body: "Preparação de oportunidades para equipamentos, instalações e ampliação operacional." },
      { code: "H03", title: "Clínicas e expansão", body: "Leitura de novas unidades, aquisição, modernização e crescimento de grupos clínicos." },
      { code: "H04", title: "Indústria e inovação", body: "Preparação de oportunidades em cosméticos, farmacêutica, medtech e capacidade produtiva." },
    ],
    audienceLabel: "Ecossistema Health",
    audienceTitle: "Para empresas que ampliam possibilidades de cuidado e longevidade.",
    audienceLead:
      "A divisão acompanha negócios clínicos, industriais e tecnológicos ligados à saúde, beleza e bem-estar.",
    audiences: [
      { title: "Clínicas e hospitais", body: "Operações diante de decisões de capacidade, equipamentos, expansão ou reorganização." },
      { title: "Estética e cirurgia plástica", body: "Clínicas que combinam experiência, confiança, tecnologia e responsabilidade clínica." },
      { title: "Cosméticos, farmacêutica e medtech", body: "Indústrias, marcas e plataformas que desenvolvem produtos e tecnologia para o setor." },
    ],
    method: [
      { code: "01", title: "Ler a capacidade", body: "Compreendemos o ciclo financeiro, a operação e as condicionantes informadas pelos especialistas." },
      { code: "02", title: "Preparar", body: "Organizamos a finalidade e os dados empresariais necessários à oportunidade." },
      { code: "03", title: "Relacionar", body: "Mapeamos potenciais instituições e especialistas conforme o contexto." },
      { code: "04", title: "Acompanhar", body: "Coordenamos o fluxo preservando responsabilidades clínicas, técnicas e financeiras." },
    ],
    formTitle: "Qual capacidade sua empresa precisa construir para o próximo ciclo?",
    formLead: "Apresente a decisão e o contexto empresarial. A leitura inicial avaliará a aderência à Turion Health.",
    products: ["Liquidez e recebíveis", "Tecnologia e capacidade", "Clínicas e expansão", "Indústria e inovação", "Outro mandato"],
  },
};

export const ecosystem = [sites.travel, sites.fitness, sites.health] as const;
