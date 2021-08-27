/* . Em “números sobre números”, o programa solicita uma entrada inteira,
mostra a sequência decrescente entre número até 1, e a soma de todos os
valores da sequência */

const prompt = require("prompt-sync")()

var entrada = parseInt(prompt("Valor inteiro: "));

for(i = entrada; i >= 1 ; i--){

    entrada = i

    console.log(entrada)
}