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
  }
  
];