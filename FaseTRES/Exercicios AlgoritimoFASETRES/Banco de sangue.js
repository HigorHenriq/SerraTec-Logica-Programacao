/*Doar sangue é muito importante. Porém, nem todos podem fazê-lo,
existem alguns impedimentos (que podem ser temporários). Ajude o
“Banco de sangue” a fazer a triagem dos voluntários que responderam
“Sim” para as restrições*/

const prompt = require("prompt-sync")()

var texto = 'Digite “Sim” ou “Nao” nas restrições a seguir';
console.log(texto);

var idade = prompt('Idade abaixo de 16 ou acima de 69 anos? ');

var peso = prompt('Pesa menos de 50kg? ');

var portador_HE = prompt('Portador de Hepatite? ');

var portador_MA = prompt('Já teve Malária? ');

var Doar = prompt('Fez doação recente? ');

var avaliar = idade == "Nao" && peso == "Nao" && portador_HE == "Nao" && portador_MA == "Nao" && Doar == "Nao";

console.log(`Pode doar: ${avaliar}`)