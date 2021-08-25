/*
O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus
pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá
digitar um número inteiro correspondente aos seus cupons. Cada cupom
corresponde a 1 ponto.
*/
const prompt = require("prompt-sync")()

var pergunta = prompt('Verifique seus pontos em cupons, digite o número dele: ')

var quantidade = pergunta

var pontos = quantidade;

console.log(`Você tinha ${quantidade} cupom agora você tem ${pontos} pontos`);