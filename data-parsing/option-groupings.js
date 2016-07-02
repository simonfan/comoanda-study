module.exports = [
  {
    name: 'abordagem',
    question: 'Qual a abordagem da sua organização sobre o tema da mobilidade a pé?',
    options: [
      {
        name: 'comunicacao',
        value: 'Comunicação e Informação [produção e compartilhamento: sites, blogs, grupos de discussão virtual]'
      },
      {
        name: 'educacao',
        value: 'Educação e Cultura [disseminação, capacitação, intervenção artística, sensibilização]'
      },
      {
        name: 'intervencao',
        value: 'Intervenção física no espaço [obra civil, intervenções temporárias, artísticas]'
      },
      {
        name: 'legislacao',
        value: 'Legislação e Políticas Públicas [produção e revisão de leis, planos e programas relacionados à mobilidade a pé]'
      },
      {
        name: 'mobilizacao',
        value: 'Mobilização [ativismo, participação, engajamento e controle social]',
      },
      {
        name: 'pesquisa',
        value: 
      'Pesquisa [diagnóstico, caracterização, indicadores]',
      },
      {
        name: 'projetos',
        value: 'Projetos e Planos [projetos de arquitetura, desenho urbano, planos de mobilidade, diretores]'
      },
      
      // we'll ignore other for now because
      // it has the same value accross groupings
      // {
      //   name: 'other',
      //   value: 'Other',
      // }
    ]
  },
  
  {
    name: 'area',
    question: '[review ] qual area',
    options: [
      {
        name: 'arquitetura',
        value: 'Arquitetura e urbanismo'
      },
      {
        name: 'comunicacao',
        value: 'Comunicação',
      },
      {
        name: 'direito',
        value: 'Direito'
      },
      {
        name: 'educacao',
        value: 'Educação',
      },
      {
        name: 'engenharia',
        value: 'Engenharia',
      },
      {
        name: 'meio-ambiente',
        value: 'Meio ambiente'
      },
      {
        name: 'politica-publica',
        value: 'Políticas públicas',
      },
      {
        name: 'saude',
        value: 'Saúde e qualidade de vida',
      },
      // {
      //   name: 'other',
      //   value: 'Other',
      // }
    ]
  },
  
  {
    name: 'escopo',
    question: 'escopo de atuacao?',
    options: [
      {
        name: 'bairro',
        value: 'Bairro / comunidade',
      },
      {
        name: 'cidade',
        value: 'Cidade',
      },
      {
        name: 'metropole',
        value: 'Regiões Metropolitanas (várias cidades)'
      },
      {
        name: 'estado',
        value: 'Estado',
      },
      {
        name: 'regional',
        value: 'Vários Estados / Regional'
      },
      {
        name: 'nacional',
        value: 'Nacional',
      },
      {
        name: 'internacional',
        value: 'Internacional'
      }
    ]
  },
  
  {
    name: 'financiamento',
    question: 'financiamento ?',
    options: [
      {
        name: 'bolsa-de-fomento',
        value: 'Bolsa de fomento'
      },
      {
        name: 'convenio',
        value: 'Convênio (poder público)',
      },
      {
        name: 'doacao-direta-filantropia',
        value: 'Doação direta (Investimento social/filantrópico)'
      },
      {
        name: 'doacao-direta-membros',
        value: 'Doação direta (membros associados)',
      },
      {
        name: 'edital',
        value: 'Edital'
      },
      {
        name: 'crowdfunding',
        value: 'Financiamento coletivo (crowdfunding)',
      },
      {
        name: 'lei-de-incentivo',
        value: 'Leis de incentivo (ex. Lei de incentivo ao esporte)',
      },
      {
        name: 'orcamento-publico',
        value: 'Orçamento Público'
      },
      {
        name: 'patrocinio',
        value: 'Patrocínio (investimento empresarial)',
      },
      {
        name: 'prestacao-de-servico',
        value: 'Prestação de serviço',
      },
      {
        name: 'voluntario',
        value: 'Trabalho voluntário',
      },
      {
        name: 'venda-de-produtos',
        value: 'Venda de produtos',
      },
      {
        name: 'nenhuma',
        value: 'Nenhuma fonte de financiamento'
      },
      // {
      //   name: 'other',
      //   value: 'Other'
      // }
    ]
  },
  
  {
    name: 'remuneracao',
    options: [
      {
        name: 'integral',
        value: 'Remunerados integralmente',
      },
      {
        name: 'parcial',
        value: 'Remunerados parcialmente',
      },
      {
        name: 'nao-remunerados',
        value: 'Não remunerados'
      }
    ]
  },
  
  {
    name: 'midia',
    options: [
      {
        name: 'assessoria-de-imprensa',
        value: 'Assessoria de Imprensa',
      },
      {
        name: 'congressos-e-seminarios',
        value: 'Congressos e Seminários',
      },
      {
        name: 'email',
        value: 'E-mail / mailing / newsletter',
      },
      {
        name: 'facebook',
        value: 'Facebook'
      },
      {
        name: 'linkedin',
        value: 'LinkedIn'
      },
      {
        name: 'jornal',
        value: 'Jornal'
      },
      {
        name: 'publicacao-cientifica',
        value: 'Publicação científica'
      },
      {
        name: 'radio',
        value: 'Rádio',
      },
      {
        name: 'revista',
        value: 'Revista'
      },
      {
        name: 'site',
        value: 'Site'
      },
      {
        name: 'tv',
        value: 'TV'
      },
      {
        name: 'twitter',
        value: 'Twitter'
      },
      {
        name: 'youtube',
        value: 'YouTube'
      }
    ]
  },
  {
    name: 'objeto-de-atuacao',
    options: [
      {
        name: 'arquitetura-da-edificacao',
        value: 'Arquitetura da edificação [interface entre espaço público e lote privado; projeto na infraestrutura para mobilidade a pé]',
      },
      {
        name: 'bicicleta',
        value: 'Bicicleta [convívio entre mobilidade cicloviária e mobilidade a pé]',
      },
      {
        name: 'economia',
        value: 'Economia [impactos da mobilidade na economia; geração de emprego; análise de trade-off; fomento ao comércio local]'
      },
      {
        name: 'infraestrutura',
        value: 'Infraestrutura local [calçadas, cruzamentos, escadarias, passarelas, passagens subterrâneas, travessias, sinalização, mobiliário urbano]',
      },
      {
        name: 'meio-ambiente',
        value: 'Meio ambiente e sustentabilidade [mudanças climáticas, energia, emissão de gases, poluição, economia sustentável]'
      },
      {
        name: 'microacessibilidade',
        value: 'Microacessibilidade ao Transporte Público Coletivo [conectividade, intermodalidade]',
      },
      {
        name: 'planejamento-urbano',
        value: 'Planejamento e desenho urbano [uso e ocupação do solo, infraestrutura de transporte, planejamento na escala do bairro/cidade]',
      },
      {
        name: 'saude-e-qualidade-de-vida',
        value: 'Saúde e Qualidade de Vida [sedentarismo e doenças relacionadas, como obesidade, diabetes; problemas respiratórios; estresse e depressão]',
      },
      {
        name: 'seguranca',
        value: 'Segurança [pessoal, viária e acidentalidade vertical]'
      },
      {
        name: 'tecnologia-e-inovacao',
        value: 'Tecnologia e Inovação [aplicativos, rede e plataforma online, base de dados]'
      }
    ]
  },
  {
    name: 'dificuldades',
    options: [
      {
        name: 'acesso-a-info',
        value: 'Acesso a informações',
      },
      {
        name: 'apoio-politico',
        value: 'Apoio político',
      },
      {
        name: 'financiamento',
        value: 'Ausência / escassez de recursos / financiamento',
      },
      {
        name: 'burocracia',
        value: 'Burocracia / meios legais de atuar'
      },
      {
        name: 'capacitacao',
        value: 'Capacitação da equipe',
      },
      {
        name: 'escassez-de-parcerias',
        value: 'Escassez de parcerias',
      },
      {
        name: 'escassez-de-voluntarios',
        value: 'Escassez de voluntários',
      },
      {
        name: 'falta-de-colaboradores',
        value: 'Falta de colaboradores',
      },
      {
        name: 'falta-de-conhecimento',
        value: 'Falta de conhecimento / clareza sobre o tema',
      },
      {
        name: 'falta-de-planejamento-estrategico',
        value: 'Falta de planejamento estratégico',
      },
      {
        name: 'interesse-das-liderancas-da-org',
        value: 'Interesse das lideranças da organização'
      },
    ]
  },
  {
    name: 'fonte-de-dados',
    options: [
      {
        name: 'coleta-propria',
        value: 'Coleto meus próprios dados em campo',
      },
      {
        name: 'dados-municipais-abertos',
        value: 'Dados municipais abertos',
      },
      {
        name: 'IBGE',
        value: 'IBGE'
      },
      {
        name: 'jornais-revistas-blogs',
        value: 'Jornais, Revistas, Sites, Blogs',
      },
      {
        name: 'legislacao',
        value: 'Legislação',
      },
      {
        name: 'midias-sociais',
        value: 'Mídias Sociais (Facebook, Twitter, Medium)',
      },
      {
        name: 'pesquisa-orig-destino',
        value: 'Pesquisa Origem e Destino',
      },
      {
        name: 'trab-academicos',
        value: 'Trabalhos acadêmicos'
      }
    ]
  }
];