// native
const path = require('path');
const fs   = require('fs');

// third-party
const csv = require('csv');
const slug = require('slug');

// read the csv file
const optionGroupings = require('./option-groupings');

const simpleQuestions = require('./simple-questions');

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
  simpleQuestions.forEach((question) => {

    var get = question.get || function (v) { return v; };

    columnNames.forEach((colName, index) => {
      if (question._value === colName) {
        this[question._id] = get(line[index]);

        if (!this[question._id]) {
          console.warn('no value found for %s', question._id, this.nome);
        }
      }
    });
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

  // ensure the entity has a value for each of the groupings
  optionGroupings.forEach((grouping) => {
    if (!this[grouping._id]) {
      this[grouping._id] = [];
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

    // filter out entities without 'estado' or 'ano'
    entities = entities.filter(function (entity) {
      return (typeof entity.estado === 'string' && entity.estado !== '') &&
             (entity.ano && typeof entity.ano === 'number' && entity.ano !== NaN);
    });

    callback(null, entities);
  });
}
