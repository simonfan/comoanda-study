// native
const path = require('path');
const fs   = require('fs');

// third-party
const csv = require('csv');
const slug = require('slug');

// read the csv file
const questions = require('./questions');

const textInputQuestions = questions.filter(function (q) {
  return q._questionType === 'text-input';
});
const multiSelectionQuestions = questions.filter(function (q) {
  return q._questionType === 'multi';
});
const singleSelectionQuestions = questions.filter(function (q) {
  return q._questionType === 'single-selection';
});

// console.log(textInputQuestions);
// console.log(multiSelectionQuestions);
// console.log(singleSelectionQuestions);

function findQuestionForValue(value) {
  return multiSelectionQuestions.find(function (g) {
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
  textInputQuestions.forEach((question) => {

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
  
  // find multiSelectionQuestions (colNames are values actually)
  columnNames.forEach((colName, index) => {
    if (line[index]) {
      var grouping = findQuestionForValue(colName);
      
      if (grouping) {
        this[grouping._id] = this[grouping._id] || [];
        
        this[grouping._id].push(findOption(grouping, colName));
      }
    }
  });

  // ensure the entity has a value for each of the groupings
  multiSelectionQuestions.forEach((grouping) => {
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
