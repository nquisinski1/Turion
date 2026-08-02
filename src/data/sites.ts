export type SiteKey = "advisory" | "travel" | "fitness" | "health";

export type ContentItem = {
  code: string;
  title: string;
  body: string;
};

export type SiteContent = {
  key: SiteKey;
  path: string;
  domain: string;
  descriptor: string;
  metaTitle: string;
  metaDescription: string;
  code: string;
  eyebrow: string;
  hero: string;
  heroEmphasis: string;
  lead: string;
  thesisLabel: string;
  thesis: string;
  thesisBody: string;
  principle: string;
  mandateLabel: string;
  mandateTitle: string;
  mandateIntro: string;
  mandates: ContentItem[];
  audienceLabel: string;
  audienceTitle: string;
  audienceIntro: string;
  audiences: ContentItem[];
  method: ContentItem[];
  formTitle: string;
  formLead: string;
};

export const sites: Record<SiteKey, SiteContent> = {
  advisory: {
    key: "advisory",
    path: "/",
    domain: "turionadvisory.com",
    descriptor: "",
    metaTitle: "TURION | Advisory & Capital",
    metaDescription: "Preparação e interlocução institucional para decisões de capital nos setores Travel, Fitness e Health.",
    code: "T / 00",
    eyebrow: "Advisory & Capital · Travel · Fitness · Health",
    hero: "Capital exige mais do que acesso.",
    heroEmphasis: "Exige critério.",
    lead: "A Turion prepara empresas para decisões de capital. Compreendemos o contexto, organizamos a oportunidade e conduzimos a interlocução com instituições e provedores potencialmente aderentes.",
    thesisLabel: "Ponto de vista",
    thesis: "A qualidade da relação com o capital começa na qualidade da oportunidade.",
    thesisBody: "Antes de buscar uma instituição, é preciso compreender a empresa, a finalidade dos recursos e as condições que sustentam a decisão. Capital sem contexto amplia ruído. Contexto bem organizado eleva a qualidade da análise.",
    principle: "A Turion atua antes e durante essa interlocução. O objetivo não é multiplicar apresentações. É construir clareza suficiente para que cada parte decida com responsabilidade.",
    mandateLabel: "Mandato",
    mandateTitle: "Preparação antes da apresentação.",
    mandateIntro: "Nosso trabalho transforma uma necessidade empresarial em uma oportunidade compreensível, comparável e conduzida com disciplina.",
    mandates: [
      { code: "01", title: "Contexto empresarial", body: "Lemos o negócio, a finalidade do capital, o momento da empresa e as restrições que influenciam a decisão." },
      { code: "02", title: "Consistência da oportunidade", body: "Organizamos informações, premissas, garantias informadas e questões que precisam ser tratadas antes da apresentação." },
      { code: "03", title: "Aderência institucional", body: "Relacionamos a oportunidade a instituições e provedores cujo escopo possa ser compatível com o mandato." },
      { code: "04", title: "Condução do processo", body: "Coordenamos o fluxo autorizado de informações e acompanhamos a interlocução sem interferir na análise de cada instituição." },
    ],
    audienceLabel: "Responsabilidades",
    audienceTitle: "Clareza sobre quem prepara, quem decide e quem executa.",
    audienceIntro: "A confiança institucional depende de limites compreendidos desde o início.",
    audiences: [
      { code: "01", title: "A empresa", body: "Define sua necessidade, disponibiliza informações e preserva a decisão final sobre qualquer proposta recebida." },
      { code: "02", title: "A Turion", body: "Compreende o contexto, prepara a oportunidade e conduz a interlocução prevista no mandato." },
      { code: "03", title: "A instituição", body: "Realiza sua própria análise, solicita informações, define condições e aprova ou recusa a oportunidade segundo critérios próprios." },
    ],
    method: [
      { code: "01", title: "Compreender", body: "A conversa começa pela empresa e pela decisão que o capital precisa tornar possível." },
      { code: "02", title: "Organizar", body: "Informação, finalidade e contexto são tratados como partes de uma mesma oportunidade." },
      { code: "03", title: "Relacionar", body: "A apresentação ocorre somente com autorização e potencial compatibilidade institucional." },
      { code: "04", title: "Acompanhar", body: "Pendências e próximos passos são coordenados até a decisão independente de cada instituição." },
    ],
    formTitle: "Decisões relevantes começam com uma conversa reservada.",
    formLead: "Apresente o contexto da empresa, a finalidade do capital e o momento da decisão. A leitura inicial indicará se existe base para uma interlocução.",
  },
  travel: {
    key: "travel",
    path: "/travel/",
    domain: "travel.turionadvisory.com",
    descriptor: "TRAVEL",
    metaTitle: "Turion Travel | Capital para a economia da viagem",
    metaDescription: "Preparação de oportunidades de capital para operadoras, hospitalidade, tecnologia e serviços ligados à viagem.",
    code: "T / 01",
    eyebrow: "Operadoras · hospitalidade · tecnologia · serviços",
    hero: "Capital para quem transforma expectativa",
    heroEmphasis: "em experiência.",
    lead: "A Turion Travel prepara decisões de capital a partir dos ciclos que definem o setor: reservas, fornecedores, sazonalidade, moeda, capacidade e entrega.",
    thesisLabel: "Ponto de vista Travel",
    thesis: "O turismo converte confiança futura em compromisso presente.",
    thesisBody: "Uma venda realizada hoje pode produzir obrigações por muitos meses. Recebimentos, fornecedores e entrega operam em calendários distintos. Essa diferença altera liquidez, risco e a forma como uma oportunidade deve ser compreendida.",
    principle: "A tese de capital começa pelo ciclo real da viagem. O instrumento vem depois.",
    mandateLabel: "Mandato Travel",
    mandateTitle: "Capital orientado pela economia da operação.",
    mandateIntro: "A divisão organiza o contexto setorial para que instituições possam avaliar a oportunidade com maior clareza.",
    mandates: [
      { code: "T01", title: "Ciclo de caixa e recebíveis", body: "Leitura de reservas, recebimentos, compromissos futuros e garantias informadas para a interlocução institucional." },
      { code: "T02", title: "Hospitalidade e capacidade", body: "Preparação de decisões relacionadas a novas unidades, modernização, ocupação e experiência do hóspede." },
      { code: "T03", title: "Tecnologia e distribuição", body: "Organização de oportunidades ligadas a plataformas, eficiência operacional, meios de venda e integração." },
      { code: "T04", title: "Operações internacionais", body: "Coordenação com instituições habilitadas quando a decisão envolve moeda, fornecedores ou expansão internacional." },
    ],
    audienceLabel: "Economia Travel",
    audienceTitle: "Negócios que vendem, operam e sustentam a viagem.",
    audienceIntro: "A especialização setorial reduz a distância entre a realidade operacional e a leitura financeira.",
    audiences: [
      { code: "01", title: "Operadoras e agências", body: "Empresas com ciclos intensos de reservas, recebimentos e compromissos com fornecedores." },
      { code: "02", title: "Hotelaria e hospitalidade", body: "Grupos e operadores diante de decisões de capacidade, modernização ou expansão." },
      { code: "03", title: "Tecnologia e fornecedores", body: "Plataformas, distribuidores e empresas que sustentam vendas, pagamentos e operação." },
    ],
    method: [
      { code: "01", title: "Ler o ciclo", body: "Reservas, sazonalidade, recebíveis e compromissos futuros são analisados em conjunto." },
      { code: "02", title: "Organizar", body: "A finalidade e os fatores setoriais relevantes são apresentados com precisão." },
      { code: "03", title: "Relacionar", body: "Potenciais instituições são consideradas conforme perfil, finalidade e escopo." },
      { code: "04", title: "Acompanhar", body: "O fluxo é coordenado até a decisão independente de cada instituição." },
    ],
    formTitle: "Qual decisão está definindo o próximo ciclo da sua empresa?",
    formLead: "Compartilhe a finalidade do capital e a dinâmica da operação. A leitura inicial indicará a aderência ao mandato da Turion Travel.",
  },
  fitness: {
    key: "fitness",
    path: "/fitness/",
    domain: "fitness.turionadvisory.com",
    descriptor: "FITNESS",
    metaTitle: "Turion Fitness | Capital para a economia do movimento",
    metaDescription: "Preparação de oportunidades de capital para academias, clubes, equipamentos, distribuição e fitness tech.",
    code: "T / 02",
    eyebrow: "Academias · clubes · equipamentos · tecnologia",
    hero: "Crescimento disciplinado começa",
    heroEmphasis: "na economia de cada unidade.",
    lead: "A Turion Fitness prepara decisões de capital considerando recorrência, retenção, ocupação, maturação, capacidade instalada e disciplina operacional.",
    thesisLabel: "Ponto de vista Fitness",
    thesis: "Recorrência não é apenas receita. É compromisso contínuo com capacidade e entrega.",
    thesisBody: "Mensalidades indicam previsibilidade. Retenção, ocupação e maturação revelam a qualidade dessa previsibilidade. A expansão precisa ser compreendida a partir da unidade econômica que a sustenta.",
    principle: "Escala sem disciplina amplia exposição. Disciplina transforma recorrência em continuidade.",
    mandateLabel: "Mandato Fitness",
    mandateTitle: "Capital para capacidade, eficiência e continuidade.",
    mandateIntro: "A divisão organiza indicadores operacionais e financeiros para que o próximo movimento seja apresentado dentro da lógica do setor.",
    mandates: [
      { code: "F01", title: "Recebíveis e liquidez", body: "Leitura de recorrência, retenção, recebíveis e garantias informadas para a interlocução institucional." },
      { code: "F02", title: "Expansão e capacidade", body: "Preparação de decisões relacionadas a novas unidades, retrofit e aumento de capacidade." },
      { code: "F03", title: "Clubes e experiência", body: "Organização de investimentos em instalações, serviços e experiência do associado." },
      { code: "F04", title: "Consolidação e tecnologia", body: "Preparação para aquisições, alianças, plataformas e movimentos de profissionalização." },
    ],
    audienceLabel: "Economia Fitness",
    audienceTitle: "Empresas que constroem a economia do movimento.",
    audienceIntro: "Operação, distribuição e tecnologia exigem leituras distintas dentro de uma mesma disciplina de capital.",
    audiences: [
      { code: "01", title: "Academias e redes", body: "Operações recorrentes diante de decisões de expansão, modernização ou consolidação." },
      { code: "02", title: "Clubes e estúdios", body: "Empresas que combinam capacidade física, serviço e experiência de comunidade." },
      { code: "03", title: "Equipamentos e fitness tech", body: "Distribuidores, fabricantes e plataformas que ampliam a capacidade do setor." },
    ],
    method: [
      { code: "01", title: "Ler a unidade", body: "Recorrência, retenção, ocupação, capacidade e maturação são analisadas em conjunto." },
      { code: "02", title: "Organizar", body: "A finalidade e os dados que sustentam a oportunidade são tratados com precisão." },
      { code: "03", title: "Relacionar", body: "Potenciais instituições são consideradas conforme perfil, finalidade e estágio da empresa." },
      { code: "04", title: "Acompanhar", body: "O fluxo é coordenado até a decisão independente de cada instituição." },
    ],
    formTitle: "Qual movimento a empresa precisa sustentar no próximo ciclo?",
    formLead: "Compartilhe a decisão e a economia da operação. A leitura inicial indicará a aderência ao mandato da Turion Fitness.",
  },
  health: {
    key: "health",
    path: "/health/",
    domain: "health.turionadvisory.com",
    descriptor: "HEALTH",
    metaTitle: "Turion Health | Capital para saúde, beleza e longevidade",
    metaDescription: "Preparação de oportunidades de capital para clínicas, hospitais, estética, cosméticos, farmacêutica e medtech.",
    code: "T / 03",
    eyebrow: "Clínicas · hospitais · beleza · longevidade",
    hero: "Crescimento e confiança",
    heroEmphasis: "precisam avançar juntos.",
    lead: "A Turion Health prepara decisões de capital considerando capacidade clínica, tecnologia, ciclo financeiro e as responsabilidades próprias do setor.",
    thesisLabel: "Ponto de vista Health",
    thesis: "Em Health, capital e responsabilidade avançam juntos.",
    thesisBody: "Equipamentos, instalações, equipe, recebimento e condicionantes regulatórias influenciam a qualidade de uma oportunidade. A decisão financeira precisa respeitar esse conjunto.",
    principle: "A Turion organiza a dimensão empresarial. Responsabilidades clínicas, técnicas e regulatórias permanecem com profissionais e instituições habilitados.",
    mandateLabel: "Mandato Health",
    mandateTitle: "Capital para capacidade, tecnologia e continuidade.",
    mandateIntro: "A divisão prepara a oportunidade empresarial e conduz potenciais interlocuções sem ultrapassar responsabilidades clínicas ou regulatórias.",
    mandates: [
      { code: "H01", title: "Recebíveis e liquidez", body: "Leitura de fluxos financeiros, recebíveis e garantias informadas para a interlocução institucional." },
      { code: "H02", title: "Tecnologia e capacidade", body: "Preparação de decisões relacionadas a equipamentos, instalações e ampliação operacional." },
      { code: "H03", title: "Clínicas e expansão", body: "Organização de oportunidades ligadas a novas unidades, aquisição, modernização e crescimento de grupos." },
      { code: "H04", title: "Indústria e inovação", body: "Preparação de oportunidades em cosméticos, farmacêutica, medtech e capacidade produtiva." },
    ],
    audienceLabel: "Economia Health",
    audienceTitle: "Empresas que ampliam possibilidades de cuidado e longevidade.",
    audienceIntro: "Negócios clínicos, industriais e tecnológicos exigem capital compreendido dentro de suas responsabilidades.",
    audiences: [
      { code: "01", title: "Clínicas e hospitais", body: "Operações diante de decisões de capacidade, equipamentos, expansão ou reorganização." },
      { code: "02", title: "Estética e cirurgia plástica", body: "Clínicas que combinam experiência, confiança, tecnologia e responsabilidade clínica." },
      { code: "03", title: "Cosméticos, farmacêutica e medtech", body: "Indústrias, marcas e plataformas que desenvolvem produtos e tecnologia para o setor." },
    ],
    method: [
      { code: "01", title: "Ler a capacidade", body: "Ciclo financeiro, operação e condicionantes informadas pelos especialistas são analisados em conjunto." },
      { code: "02", title: "Organizar", body: "A finalidade e os dados empresariais necessários à oportunidade são tratados com precisão." },
      { code: "03", title: "Relacionar", body: "Potenciais instituições e especialistas são considerados conforme o contexto." },
      { code: "04", title: "Acompanhar", body: "O fluxo é coordenado preservando responsabilidades clínicas, técnicas e financeiras." },
    ],
    formTitle: "Qual capacidade a empresa precisa construir para o próximo ciclo?",
    formLead: "Compartilhe a decisão e o contexto empresarial. A leitura inicial indicará a aderência ao mandato da Turion Health.",
  },
};

export const divisions = [sites.travel, sites.fitness, sites.health];
