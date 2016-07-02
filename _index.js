const fs = require('fs');

const csv = require('csv');

const csvText = fs.readFileSync(__dirname + '/data.csv', 'utf8');


const groupings = [
  {
    shortName: 'abordagem',
    question: 'Qual a abordagem da sua organização sobre o tema da mobilidade a pé?',
    options: [
      'Comunicação e Informação [produção e compartilhamento: sites, blogs, grupos de discussão virtual]',
      'Educação e Cultura [disseminação, capacitação, intervenção artística, sensibilização]',
      'Intervenção física no espaço [obra civil, intervenções temporárias, artísticas]',
      'Legislação e Políticas Públicas [produção e revisão de leis, planos e programas relacionados à mobilidade a pé]',
      'Mobilização [ativismo, participação, engajamento e controle social]',
      'Pesquisa [diagnóstico, caracterização, indicadores]',
      'Projetos e Planos [projetos de arquitetura, desenho urbano, planos de mobilidade, diretores]',
      'Other',
    ]
  }
];

function _findGrouping(colName) {
  for (var grouping in groupings) {

  }
}


var parser = csv.parse(csvText, function (err, data) {

  var columnNames = data.shift();

  var entities = data.map(function (lineEntry, index) {

    var entity = {};

    columnNames.forEach(function (colName, colIndex) {



      entity[colName] = lineEntry[colIndex];

    });

    return entity;

  });

  console.log(entities[0]);
});