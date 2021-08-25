/*
. O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique
seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá
triplicar o valor.
*/
const prompt = require("prompt-sync")()

var pergunta = prompt('Multiplique seus pontos, digite o número dele: ')

var quantidade = pergunta

var mult = quantidade * 2;

console.log(`Você tinha ${quantidade} agora você tem ${mult}`);