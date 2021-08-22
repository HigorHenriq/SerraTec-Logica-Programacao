/*
Maria está brincando de pique esconde com seus amigos e para começar a contar precisa pergunta se pode começar a contar, quando escutar SIM, ela deverá contar em ordem decrescente de 20 até 1 e no final falar 'Prontos Ou Não Ai Vou Eu'
*/
const prompt = require("prompt-sync")()

//ENTRADA
var contar = 20
var liberar = prompt('Posso ir? ')

//PROCESSAMENTO
if(liberar = 'SIM')
do{
    console.log(`Começando a contar ${contar}`);
    contar--
}while(contar >= 1)
console.log('Prontos ou Não Ai Vou Eu')
//SAIDA