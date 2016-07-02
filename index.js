const fs = require('fs');

const csv = require('csv');

const csvText = fs.readFileSync(__dirname + '/data.csv', 'utf8');

const groupings = [
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
  }
];

function findGroupingForValue(value) {
  return groupings.find(function (g) {
    return g.options.find(function (opt) {
      return opt.value === value;
    });
  });
};

function findOptionDetail(grouping, optionValue) {
  return grouping.options.find(function (opt) {
    return opt.value === optionValue;
  });
}

function Entity(columnNames, line) {
    
  // find groupings (colNames are values actually)
  columnNames.forEach((colName, index) => {
    if (line[index]) {
      var grouping = findGroupingForValue(colName);
      
      if (grouping) {
        this[grouping.name] = this[grouping.name] || [];
        
        this[grouping.name].push(findOptionDetail(grouping, colName));
      }
    }
  });
  
}


var parser = csv.parse(csvText, function (err, data) {

  var columnNames = data.shift();
  
  var entities = data.map(function (lineEntry, index) {
    
    var entity = new Entity(columnNames, lineEntry);
    
    return entity;

  });

  console.log(entities[0]);
});