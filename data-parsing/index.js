// native
const path = require('path');
const fs   = require('fs');

// read the csv file
const csvText = fs.readFileSync(__dirname + '/data.csv', 'utf8');

const parseEntitites = require('./entities');
const questions      = require('./option-groupings');
const simpleQuestions = require('./simple-questions');


parseEntitites(csvText, function (err, entities) {
  var data = {};
  data.entities = entities;
  data.questions = questions;
  data.simpleQuestions = simpleQuestions;

  console.log(JSON.stringify(data, null, '\t'));

});