const Pessoa = require(`./classes/pessoa`);
const hash = require(`md5`);
// const novo = new Pessoa(`123456`);
const novo = new Pessoa(hash('123456'));
const pessoa = new Pessoa("1234")