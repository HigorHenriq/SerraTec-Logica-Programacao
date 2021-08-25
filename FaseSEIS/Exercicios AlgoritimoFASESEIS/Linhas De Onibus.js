/*
As linhas de ônibus da capital são identificados por numeros.
A empresa "Pão de açucar" opera 8 linhas.
O passageiro irá digitar o número do ônibus que está vindo, e o
programa mostra o nome da linha/trajeto.
*/
const prompt = require("prompt-sync")()

//ENTRADA
const linhas = [];

linhas[0] = "21b: Meudon x Ermitage";
linhas[1] = "27a: Vale da revolta x Prata";
linhas[2] = "28c: Barra x São Pedro";
linhas[3] = "900: Rodoviaria x Pesegueiros";
linhas[4] = "15a: Tijuca x Varzea";
linhas[5] = "16b: Ermitage x Vale";
linhas[6] = "26a: Coreia x Alto";
linhas[7] = "33c: Prata x Albuquerque";


var numero = prompt('Qual número do onibus deseja saber? ');

var operario = parseInt(numero) - 1;

var linha_onibus = linhas[operario];

console.log(`O onibus digitado tem a numeração e o trajeto de: ${linha_onibus}`);



