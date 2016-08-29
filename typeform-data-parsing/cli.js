const sourceData = require('./data.json');

const parser = require('./parser');

var p = parser(sourceData);

function logAnswers() {
  // output answers
  console.log(JSON.stringify(p.parse(), null, '\t'));
}

function logQuestions() {
  // output questions
  var answers = p.parse();
  var questions = require('./questions.json');
}