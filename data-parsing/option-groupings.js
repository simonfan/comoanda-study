module.exports = [
  {
    _id: 'abordagem',
    label: 'Abordagem',
    _value: 'Qual a abordagem da sua organização sobre o tema da mobilidade a pé?',
    options: [
      {
        _id: 'comunicacao',
        _value: 'Comunicação e Informação [produção e compartilhamento: sites, blogs, grupos de discussão virtual]'
      },
      {
        _id: 'educacao',
        _value: 'Educação e Cultura [disseminação, capacitação, intervenção artística, sensibilização]'
      },
      {
        _id: 'intervencao',
        _value: 'Intervenção física no espaço [obra civil, intervenções temporárias, artísticas]'
      },
      {
        _id: 'legislacao',
        _value: 'Legislação e Políticas Públicas [produção e revisão de leis, planos e programas relacionados à mobilidade a pé]'
      },
      {
        _id: 'mobilizacao',
        _value: 'Mobilização [ativismo, participação, engajamento e controle social]',
      },
      {
        _id: 'pesquisa',
        _value: 
      'Pesquisa [diagnóstico, caracterização, indicadores]',
      },
      {
        _id: 'projetos',
        _value: 'Projetos e Planos [projetos de arquitetura, desenho urbano, planos de mobilidade, diretores]'
      },
      
      // we'll ignore other for now because
      // it has the same value accross groupings
      // {
      //   _id: 'other',
      //   value: 'Other',
      // }
    ]
  },
  
  {
    _id: 'area',
    label: 'Área de atuação',
    _value: 'Qual é a área de atuação da sua organização?',
    options: [
      {
        _id: 'arquitetura',
        _value: 'Arquitetura e urbanismo'
      },
      {
        _id: 'comunicacao',
        _value: 'Comunicação',
      },
      {
        _id: 'direito',
        _value: 'Direito'
      },
      {
        _id: 'educacao',
        _value: 'Educação',
      },
      {
        _id: 'engenharia',
        _value: 'Engenharia',
      },
      {
        _id: 'meio-ambiente',
        _value: 'Meio ambiente'
      },
      {
        _id: 'politica-publica',
        _value: 'Políticas públicas',
      },
      {
        _id: 'saude',
        _value: 'Saúde e qualidade de vida',
      },
      // {
      //   _id: 'other',
      //   value: 'Other',
      // }
    ]
  },
  
  {
    _id: 'escala',
    label: 'Escala de atuação',
    _value: 'Para qual(is) escala(s) as ações da sua organização estão direcionadas?',
    options: [
      {
        _id: 'bairro',
        _value: 'Bairro / comunidade',
      },
      {
        _id: 'cidade',
        _value: 'Cidade',
      },
      {
        _id: 'metropole',
        _value: 'Regiões Metropolitanas (várias cidades)'
      },
      {
        _id: 'estado',
        _value: 'Estado',
      },
      {
        _id: 'regional',
        _value: 'Vários Estados / Regional'
      },
      {
        _id: 'nacional',
        _value: 'Nacional',
      },
      {
        _id: 'internacional',
        _value: 'Internacional'
      }
    ]
  },
  
  {
    _id: 'financiamento',
    label: 'Fontes de financiamento',
    _value: 'Quais são as fontes de recurso da sua organização?',
    options: [
      {
        _id: 'bolsa-de-fomento',
        _value: 'Bolsa de fomento'
      },
      {
        _id: 'convenio',
        _value: 'Convênio (poder público)',
      },
      {
        _id: 'doacao-direta-filantropia',
        _value: 'Doação direta (Investimento social/filantrópico)'
      },
      {
        _id: 'doacao-direta-membros',
        _value: 'Doação direta (membros associados)',
      },
      {
        _id: 'edital',
        _value: 'Edital'
      },
      {
        _id: 'crowdfunding',
        _value: 'Financiamento coletivo (crowdfunding)',
      },
      {
        _id: 'lei-de-incentivo',
        _value: 'Leis de incentivo (ex. Lei de incentivo ao esporte)',
      },
      {
        _id: 'orcamento-publico',
        _value: 'Orçamento Público'
      },
      {
        _id: 'patrocinio',
        _value: 'Patrocínio (investimento empresarial)',
      },
      {
        _id: 'prestacao-de-servico',
        _value: 'Prestação de serviço',
      },
      {
        _id: 'voluntario',
        _value: 'Trabalho voluntário',
      },
      {
        _id: 'venda-de-produtos',
        _value: 'Venda de produtos',
      },
      {
        _id: 'nenhuma',
        _value: 'Nenhuma fonte de financiamento'
      },
      // {
      //   _id: 'other',
      //   value: 'Other'
      // }
    ]
  },
  
  {
    _id: 'remuneracao',
    label: 'Remuneração dos membros',
    _value: 'Os membros da organização são:',
    options: [
      {
        _id: 'integral',
        _value: 'Remunerados integralmente',
      },
      {
        _id: 'parcial',
        _value: 'Remunerados parcialmente',
      },
      {
        _id: 'nao-remunerados',
        _value: 'Não remunerados'
      }
    ]
  },
  
  {
    _id: 'midia',
    label: 'Ferramentas de comunicação',
    _value: 'Quais são as ferramentas utilizadas regularmente por sua organização para fins de divulgação e comunicação?',
    options: [
      {
        _id: 'assessoria-de-imprensa',
        _value: 'Assessoria de Imprensa',
      },
      {
        _id: 'congressos-e-seminarios',
        _value: 'Congressos e Seminários',
      },
      {
        _id: 'email',
        _value: 'E-mail / mailing / newsletter',
      },
      {
        _id: 'facebook',
        _value: 'Facebook'
      },
      {
        _id: 'linkedin',
        _value: 'LinkedIn'
      },
      {
        _id: 'jornal',
        _value: 'Jornal'
      },
      {
        _id: 'publicacao-cientifica',
        _value: 'Publicação científica'
      },
      {
        _id: 'radio',
        _value: 'Rádio',
      },
      {
        _id: 'revista',
        _value: 'Revista'
      },
      {
        _id: 'site',
        _value: 'Site'
      },
      {
        _id: 'tv',
        _value: 'TV'
      },
      {
        _id: 'twitter',
        _value: 'Twitter'
      },
      {
        _id: 'youtube',
        _value: 'YouTube'
      }
    ]
  },
  {
    _id: 'aspectos-da-mobilidade',
    label: 'Aspectos da mobilidade',
    _value: 'Com quais aspectos da mobilidade a pé sua organização trabalha ou como o tema está inserido na sua atuação?',
    options: [
      {
        _id: 'arquitetura-da-edificacao',
        _value: 'Arquitetura da edificação [interface entre espaço público e lote privado; projeto na infraestrutura para mobilidade a pé]',
      },
      {
        _id: 'bicicleta',
        _value: 'Bicicleta [convívio entre mobilidade cicloviária e mobilidade a pé]',
      },
      {
        _id: 'economia',
        _value: 'Economia [impactos da mobilidade na economia; geração de emprego; análise de trade-off; fomento ao comércio local]'
      },
      {
        _id: 'infraestrutura',
        _value: 'Infraestrutura local [calçadas, cruzamentos, escadarias, passarelas, passagens subterrâneas, travessias, sinalização, mobiliário urbano]',
      },
      {
        _id: 'meio-ambiente',
        _value: 'Meio ambiente e sustentabilidade [mudanças climáticas, energia, emissão de gases, poluição, economia sustentável]'
      },
      {
        _id: 'microacessibilidade',
        _value: 'Microacessibilidade ao Transporte Público Coletivo [conectividade, intermodalidade]',
      },
      {
        _id: 'planejamento-urbano',
        _value: 'Planejamento e desenho urbano [uso e ocupação do solo, infraestrutura de transporte, planejamento na escala do bairro/cidade]',
      },
      {
        _id: 'saude-e-qualidade-de-vida',
        _value: 'Saúde e Qualidade de Vida [sedentarismo e doenças relacionadas, como obesidade, diabetes; problemas respiratórios; estresse e depressão]',
      },
      {
        _id: 'seguranca',
        _value: 'Segurança [pessoal, viária e acidentalidade vertical]'
      },
      {
        _id: 'tecnologia-e-inovacao',
        _value: 'Tecnologia e Inovação [aplicativos, rede e plataforma online, base de dados]'
      }
    ]
  },
  {
    _id: 'dificuldades',
    label: 'Principais dificuldades',
    _value: 'Quais são as principais dificuldades que sua organização encontra para trabalhar com o tema da mobilidade a pé?',
    options: [
      {
        _id: 'acesso-a-info',
        _value: 'Acesso a informações',
      },
      {
        _id: 'apoio-politico',
        _value: 'Apoio político',
      },
      {
        _id: 'financiamento',
        _value: 'Ausência / escassez de recursos / financiamento',
      },
      {
        _id: 'burocracia',
        _value: 'Burocracia / meios legais de atuar'
      },
      {
        _id: 'capacitacao',
        _value: 'Capacitação da equipe',
      },
      {
        _id: 'escassez-de-parcerias',
        _value: 'Escassez de parcerias',
      },
      {
        _id: 'escassez-de-voluntarios',
        _value: 'Escassez de voluntários',
      },
      {
        _id: 'falta-de-colaboradores',
        _value: 'Falta de colaboradores',
      },
      {
        _id: 'falta-de-conhecimento',
        _value: 'Falta de conhecimento / clareza sobre o tema',
      },
      {
        _id: 'falta-de-planejamento-estrategico',
        _value: 'Falta de planejamento estratégico',
      },
      {
        _id: 'interesse-das-liderancas-da-org',
        _value: 'Interesse das lideranças da organização'
      },
    ]
  },
  {
    _id: 'fonte-de-informação',
    label: 'Fontes de informação',
    _value: 'Quais as fontes de informação que sua organização utiliza com mais frequência?',
    options: [
      {
        _id: 'coleta-propria',
        _value: 'Coleto meus próprios dados em campo',
      },
      {
        _id: 'dados-municipais-abertos',
        _value: 'Dados municipais abertos',
      },
      {
        _id: 'IBGE',
        _value: 'IBGE'
      },
      {
        _id: 'jornais-revistas-blogs',
        _value: 'Jornais, Revistas, Sites, Blogs',
      },
      {
        _id: 'legislacao',
        _value: 'Legislação',
      },
      {
        _id: 'midias-sociais',
        _value: 'Mídias Sociais (Facebook, Twitter, Medium)',
      },
      {
        _id: 'pesquisa-orig-destino',
        _value: 'Pesquisa Origem e Destino',
      },
      {
        _id: 'trab-academicos',
        _value: 'Trabalhos acadêmicos'
      }
    ]
  }
];

module.exports.forEach(function (q) {
  q._type = 'question';

  q.options.forEach(function (opt) {
    
    // temporary mapping to maintain compat with current ui
    opt._id = q._id + '--' + opt._id
    opt._type = 'question-option'
  })
})

// console.log(JSON.stringify(module.exports, null , '\t'));