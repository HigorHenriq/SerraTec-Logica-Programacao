// A Lanchonete Java'S solicitou ao Squad DevAneios um algoritimo que apresentasse ao seu cliente um cardápio com a lista de lanches e preços para sua escolha e ao final do seu pedido lhe fosse gerada a conta com a mensagem "Favor dirija-se ao caixa"

//
const prompt = require("prompt-sync")()
//
//Alimentos e Preços
const refeicao1 = "Brioche";
const refeicao2 = "Coxinha";
const refeicao3 = "Kibe";
const refeicao4 = "Sanduiche Natural";

var valor_re1 = 5.75;
var valor_re2 = 3.55;
var valor_re3 = 4.60;
var valor_re4 = 6.80;

//Bebidas e Preços
const Bebida1 = "Refrigerante Lata";
const Bebida2 = "Água Mineral";
const Bebida3 = "Guaravita";
const Bebida4 = "Suco Natural";

var valor_be1 = 6.99;
var valor_be2 = 2.99;
var valor_be3 = 4.99;
var valor_be4 = 7.99;

//ENTRADA ALIMENTOS
console.log(`Lanches:\n(1)${refeicao1} - R$${valor_re1}\n(2)${refeicao2} - R$${valor_re2}\n(3)${refeicao3} - R$${valor_re3}\n(4)${refeicao4} - R$${valor_re4}\n`)

console.log("!==========DIGITE O NÚMERO INDICADO DE ACORDO COM A REFEIÇÃO===========!")

var escolha_lanches = prompt(`Digite o código do alimento: `)

//PROCESSAMENTO ALIMENTOS

switch(escolha_lanches){
    case '1':
        conta = valor_re1;
        break;
    case '2':
        conta = valor_re2;
        break;
    case '3':
        conta = valor_re3;
        break;
    case '4':
        conta = valor_re4;
        break;
    default:
        conta = 0
        console.log("Código não identificado, valor: 0");
    break;
}

//PROCESSAMENTO BEBIBAS
console.log("!==========DIGITE O NÚMERO INDICADO DE ACORDO COM A BEBIDA===========!")

console.log(`Bebidas:\n(1)${Bebida1} - R$${valor_be1}\n(2)${Bebida2} - R$${valor_be2}\n(3)${Bebida3} - R$${valor_be3}\n(4)${Bebida4} - R$${valor_be4}\n`)

var bebida = prompt(`Digite o código da bebida: `)

switch(bebida){
    case '1':
        conta = conta + valor_be1;
        break;
    case '2':
        conta = conta + valor_be2;
        break;
    case '3':
        conta = conta + valor_be3;
        break;
    case '4':
        conta = conta + valor_be4;
        break;
    default:
        conta = 0
        console.log("Código não identificado, valor: 0");
    break;
}

console.log(`Total a se pagar R$${conta}\nFavor dirija-se ao caixa.`)