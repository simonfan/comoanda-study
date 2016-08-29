module.exports = [
  {
    _id: 'nome',
    _value: 'Qual o nome da organização da qual faz parte?',
  },
  {
    _id: 'estado',
    _value: 'Estado:',
  },
  {
    _id: 'cidade',
    _value: 'Cidade:',
  },
  {
    _id: 'ano',
    _value: 'Quando sua organização surgiu?',
    get: function (value) {
      return parseInt(value, 10);
    },
  },

  // FILTERABLE
  {
    _id: 'formalização',
    _value: 'Como vocês estão formalizados?',
  },
  {
    _id: 'mobilidade-a-pe-e-foco',
    _value: 'Mobilidade a pé é o foco principal da sua organização?',
  },
  
];