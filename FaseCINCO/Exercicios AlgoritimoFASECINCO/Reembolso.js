/*
Como o restaurante não faz “Reembolso” de valores inteiros entre 20 e 100
Reais, a recepcionista irá digitar o valor e o sistema preencherá um cupom
desconto
*/

const prompt = require("prompt-sync")();

var retorno = prompt("Qual valor para o cupom: ");

console.log(":: Restaurante Braya ::");

if(retorno >= 20 || retorno <= 100){
    console.log(`Cupom desconto para sua próxima visita: ${retorno}`)
}

