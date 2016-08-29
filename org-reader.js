const fs = require('fs');
const csv = require('csv');

var raw = fs.readFileSync(__dirname + '/org-websites.csv');

var nameQuestion = 'Qual o nome da organização da qual faz parte?';
var siteQuestion = 'Site da organização:';
var fbQuestion   = 'Facebook da organização:';

csv.parse(raw, function (err, data) {

  if (err) {
    console.warn('ERRORR', err);
    return;
  }

  var entities = {};

  data.forEach((line) => {

    var name = line[2];
    var site = line[4];
    var fb   = line[5];

    entities[name] = {
      website: site,
      fb: fb,
    };

  });

  console.log(JSON.stringify(entities, null, '\t'));
});