/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o
indivíduo já pode exercer sua cidadania nas urnas.
*/
const prompt = require("prompt-sync")()

console.log('== Eleição 2020 ==');

var pergunta_idade = prompt('Qual a sua idade? ');
var aprovado = pergunta_idade >= 17;

console.log('Voce já pode votar? ', aprovado);