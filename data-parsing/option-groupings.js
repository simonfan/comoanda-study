module.exports = [
  {
    _id: 'abordagem',
    value: 'Abordagem',
    _value: 'Qual a abordagem da sua organização sobre o tema da mobilidade a pé?',
    options: [
      {
        _id: 'comunicacao',
        value: 'Comunicação e Informação [produção e compartilhamento: sites, blogs, grupos de discussão virtual]'
      },
      {
        _id: 'educacao',
        value: 'Educação e Cultura [disseminação, capacitação, intervenção artística, sensibilização]'
      },
      {
        _id: 'intervencao',
        value: 'Intervenção física no espaço [obra civil, intervenções temporárias, artísticas]'
      },
      {
        _id: 'legislacao',
        value: 'Legislação e Políticas Públicas [produção e revisão de leis, planos e programas relacionados à mobilidade a pé]'
      },
      {
        _id: 'mobilizacao',
        value: 'Mobilização [ativismo, participação, engajamento e controle social]',
      },
      {
        _id: 'pesquisa',
        value: 
      'Pesquisa [diagnóstico, caracterização, indicadores]',
      },
      {
        _id: 'projetos',
        value: 'Projetos e Planos [projetos de arquitetura, desenho urbano, planos de mobilidade, diretores]'
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
    value: 'Área de atuação',
    _value: 'Qual é a área de atuação da sua organização?',
    options: [
      {
        _id: 'arquitetura',
        value: 'Arquitetura e urbanismo'
      },
      {
        _id: 'comunicacao',
        value: 'Comunicação',
      },
      {
        _id: 'direito',
        value: 'Direito'
      },
      {
        _id: 'educacao',
        value: 'Educação',
      },
      {
        _id: 'engenharia',
        value: 'Engenharia',
      },
      {
        _id: 'meio-ambiente',
        value: 'Meio ambiente'
      },
      {
        _id: 'politica-publica',
        value: 'Políticas públicas',
      },
      {
        _id: 'saude',
        value: 'Saúde e qualidade de vida',
      },
      // {
      //   _id: 'other',
      //   value: 'Other',
      // }
    ]
  },
  
  {
    _id: 'escala',
    value: 'Escala de atuação',
    _value: 'Para qual(is) escala(s) as ações da sua organização estão direcionadas?',
    options: [
      {
        _id: 'bairro',
        value: 'Bairro / comunidade',
      },
      {
        _id: 'cidade',
        value: 'Cidade',
      },
      {
        _id: 'metropole',
        value: 'Regiões Metropolitanas (várias cidades)'
      },
      {
        _id: 'estado',
        value: 'Estado',
      },
      {
        _id: 'regional',
        value: 'Vários Estados / Regional'
      },
      {
        _id: 'nacional',
        value: 'Nacional',
      },
      {
        _id: 'internacional',
        value: 'Internacional'
      }
    ]
  },
  
  {
    _id: 'financiamento',
    value: 'Fontes de financiamento',
    _value: 'Quais são as fontes de recurso da sua organização?',
    options: [
      {
        _id: 'bolsa-de-fomento',
        value: 'Bolsa de fomento'
      },
      {
        _id: 'convenio',
        value: 'Convênio (poder público)',
      },
      {
        _id: 'doacao-direta-filantropia',
        value: 'Doação direta (Investimento social/filantrópico)'
      },
      {
        _id: 'doacao-direta-membros',
        value: 'Doação direta (membros associados)',
      },
      {
        _id: 'edital',
        value: 'Edital'
      },
      {
        _id: 'crowdfunding',
        value: 'Financiamento coletivo (crowdfunding)',
      },
      {
        _id: 'lei-de-incentivo',
        value: 'Leis de incentivo (ex. Lei de incentivo ao esporte)',
      },
      {
        _id: 'orcamento-publico',
        value: 'Orçamento Público'
      },
      {
        _id: 'patrocinio',
        value: 'Patrocínio (investimento empresarial)',
      },
      {
        _id: 'prestacao-de-servico',
        value: 'Prestação de serviço',
      },
      {
        _id: 'voluntario',
        value: 'Trabalho voluntário',
      },
      {
        _id: 'venda-de-produtos',
        value: 'Venda de produtos',
      },
      {
        _id: 'nenhuma',
        value: 'Nenhuma fonte de financiamento'
      },
      // {
      //   _id: 'other',
      //   value: 'Other'
      // }
    ]
  },
  
  {
    _id: 'remuneracao',
    value: 'Remuneração dos membros',
    _value: 'Os membros da organização são:',
    options: [
      {
        _id: 'integral',
        value: 'Remunerados integralmente',
      },
      {
        _id: 'parcial',
        value: 'Remunerados parcialmente',
      },
      {
        _id: 'nao-remunerados',
        value: 'Não remunerados'
      }
    ]
  },
  
  {
    _id: 'midia',
    value: 'Ferramentas de comunicação',
    _value: 'Quais são as ferramentas utilizadas regularmente por sua organização para fins de divulgação e comunicação?',
    options: [
      {
        _id: 'assessoria-de-imprensa',
        value: 'Assessoria de Imprensa',
      },
      {
        _id: 'congressos-e-seminarios',
        value: 'Congressos e Seminários',
      },
      {
        _id: 'email',
        value: 'E-mail / mailing / newsletter',
      },
      {
        _id: 'facebook',
        value: 'Facebook'
      },
      {
        _id: 'linkedin',
        value: 'LinkedIn'
      },
      {
        _id: 'jornal',
        value: 'Jornal'
      },
      {
        _id: 'publicacao-cientifica',
        value: 'Publicação científica'
      },
      {
        _id: 'radio',
        value: 'Rádio',
      },
      {
        _id: 'revista',
        value: 'Revista'
      },
      {
        _id: 'site',
        value: 'Site'
      },
      {
        _id: 'tv',
        value: 'TV'
      },
      {
        _id: 'twitter',
        value: 'Twitter'
      },
      {
        _id: 'youtube',
        value: 'YouTube'
      }
    ]
  },
  {
    _id: 'aspectos-da-mobilidade',
    value: 'Aspectos da mobilidade',
    _value: 'Com quais aspectos da mobilidade a pé sua organização trabalha ou como o tema está inserido na sua atuação?',
    options: [
      {
        _id: 'arquitetura-da-edificacao',
        value: 'Arquitetura da edificação [interface entre espaço público e lote privado; projeto na infraestrutura para mobilidade a pé]',
      },
      {
        _id: 'bicicleta',
        value: 'Bicicleta [convívio entre mobilidade cicloviária e mobilidade a pé]',
      },
      {
        _id: 'economia',
        value: 'Economia [impactos da mobilidade na economia; geração de emprego; análise de trade-off; fomento ao comércio local]'
      },
      {
        _id: 'infraestrutura',
        value: 'Infraestrutura local [calçadas, cruzamentos, escadarias, passarelas, passagens subterrâneas, travessias, sinalização, mobiliário urbano]',
      },
      {
        _id: 'meio-ambiente',
        value: 'Meio ambiente e sustentabilidade [mudanças climáticas, energia, emissão de gases, poluição, economia sustentável]'
      },
      {
        _id: 'microacessibilidade',
        value: 'Microacessibilidade ao Transporte Público Coletivo [conectividade, intermodalidade]',
      },
      {
        _id: 'planejamento-urbano',
        value: 'Planejamento e desenho urbano [uso e ocupação do solo, infraestrutura de transporte, planejamento na escala do bairro/cidade]',
      },
      {
        _id: 'saude-e-qualidade-de-vida',
        value: 'Saúde e Qualidade de Vida [sedentarismo e doenças relacionadas, como obesidade, diabetes; problemas respiratórios; estresse e depressão]',
      },
      {
        _id: 'seguranca',
        value: 'Segurança [pessoal, viária e acidentalidade vertical]'
      },
      {
        _id: 'tecnologia-e-inovacao',
        value: 'Tecnologia e Inovação [aplicativos, rede e plataforma online, base de dados]'
      }
    ]
  },
  {
    _id: 'dificuldades',
    value: 'Principais dificuldades',
    _value: 'Quais são as principais dificuldades que sua organização encontra para trabalhar com o tema da mobilidade a pé?',
    options: [
      {
        _id: 'acesso-a-info',
        value: 'Acesso a informações',
      },
      {
        _id: 'apoio-politico',
        value: 'Apoio político',
      },
      {
        _id: 'financiamento',
        value: 'Ausência / escassez de recursos / financiamento',
      },
      {
        _id: 'burocracia',
        value: 'Burocracia / meios legais de atuar'
      },
      {
        _id: 'capacitacao',
        value: 'Capacitação da equipe',
      },
      {
        _id: 'escassez-de-parcerias',
        value: 'Escassez de parcerias',
      },
      {
        _id: 'escassez-de-voluntarios',
        value: 'Escassez de voluntários',
      },
      {
        _id: 'falta-de-colaboradores',
        value: 'Falta de colaboradores',
      },
      {
        _id: 'falta-de-conhecimento',
        value: 'Falta de conhecimento / clareza sobre o tema',
      },
      {
        _id: 'falta-de-planejamento-estrategico',
        value: 'Falta de planejamento estratégico',
      },
      {
        _id: 'interesse-das-liderancas-da-org',
        value: 'Interesse das lideranças da organização'
      },
    ]
  },
  {
    _id: 'fonte-de-informação',
    value: 'Fontes de informação',
    _value: 'Quais as fontes de informação que sua organização utiliza com mais frequência?',
    options: [
      {
        _id: 'coleta-propria',
        value: 'Coleto meus próprios dados em campo',
      },
      {
        _id: 'dados-municipais-abertos',
        value: 'Dados municipais abertos',
      },
      {
        _id: 'IBGE',
        value: 'IBGE'
      },
      {
        _id: 'jornais-revistas-blogs',
        value: 'Jornais, Revistas, Sites, Blogs',
      },
      {
        _id: 'legislacao',
        value: 'Legislação',
      },
      {
        _id: 'midias-sociais',
        value: 'Mídias Sociais (Facebook, Twitter, Medium)',
      },
      {
        _id: 'pesquisa-orig-destino',
        value: 'Pesquisa Origem e Destino',
      },
      {
        _id: 'trab-academicos',
        value: 'Trabalhos acadêmicos'
      }
    ]
  }
];

module.exports.forEach(function (q) {
  q._type = 'question';

  // temporary mapping to maintain compat with current ui
  q.name = q._id;

  q.options.forEach(function (opt) {
    
    // temporary mapping to maintain compat with current ui
    opt.name = q._id + '--' + opt._id
    opt._type = 'question-option'
  })
})

console.log(JSON.stringify(module.exports, null , '\t'));