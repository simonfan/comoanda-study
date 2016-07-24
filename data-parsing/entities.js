// native
const path = require('path');
const fs   = require('fs');

// third-party
const csv = require('csv');
const slug = require('slug');

// read the csv file
const optionGroupings = require('./option-groupings');


const BASIC_DATA_PICKERS = [
  {
    property: 'nome',
    question: 'Qual o nome da organização da qual faz parte?',
  },
  {
    property: 'estado',
    question: 'Estado:',
  },
  {
    property: 'cidade',
    question: 'Cidade:',
  },
  {
    property: 'ano',
    question: 'Quando sua organização surgiu?',
  }
  
];

function findGroupingForValue(value) {
  return optionGroupings.find(function (g) {
    return g.options.find(function (opt) {
      return opt._value === value;
    });
  });
};

function findOption(grouping, optionValue) {
  return grouping.options.find(function (opt) {
    return opt._value === optionValue;
  });
}

function Entity(columnNames, line) {
  // basic data

  BASIC_DATA_PICKERS.forEach((picker) => {
    columnNames.forEach((colName, index) => {
      if (picker.question === colName) {
        this[picker.property] = line[index]
      }
    })
  });
  
  // find optionGroupings (colNames are values actually)
  columnNames.forEach((colName, index) => {
    if (line[index]) {
      var grouping = findGroupingForValue(colName);
      
      if (grouping) {
        this[grouping._id] = this[grouping._id] || [];
        
        this[grouping._id].push(findOption(grouping, colName));
      }
    }
  });
  
  
  // id
  this._id = slug(this.nome);
  this._type = 'entity';
}


module.exports = function (csvText, callback) {


  var parser = csv.parse(csvText, function (err, data) {

    if (err) {
      callback(err);
      return;
    }

    var columnNames = data.shift();
    
    var entities = data.map(function (lineEntry, index) {
      
      var entity = new Entity(columnNames, lineEntry);
      
      return entity;

    });

    callback(entities);
  });
}
