/*
 A loja “Casas Sergipe” vende os seguintes itens:
001 Cadeira simples - R$ 100,00
002 Cadeira luxo - R$ 200,00
003 Mesa simples - R$ 450,00
004 Mesa luxo - R$ 900,00
005 Cama - R$ 1500,00
Quando o vendedor digitar o código do item, o sistema de vendas exibe o
nome do produto e o valor de venda.
*/
const prompt = require("prompt-sync")()

//PREÇOS PRODUTOS
var cadeira_simples = 100.00;
var cadeira_luxo = 200.00;
var mesa_simples = 450.00;
var mesa_luxo = 900.00;
var cama = 1500.00;

//info cod
var cadeira_simples_cod = '001';
var cadeira_luxo_cod = '002';
var mesa_simples_cod = '003';
var mesa_luxo_cod = '004';
var cama_cod = '005';

const produto = prompt ('Qual código produto deseja pesquisar: ');

if (produto == '001'){
    console.log(`Produto Cadeira Simples - R$${cadeira_simples}`);
}

if (produto == '002'){
    console.log(`Produto Cadeira Luxo - R$${cadeira_luxo}`);
}

if (produto == '003'){
    console.log(`Produto Mesa Simples - R$${mesa_simples}`);
}

if (produto == '004'){
    console.log(`Produto Mesa Luxo - R$${mesa_luxo}`);
}

if (produto == '005'){
    console.log(`Produto Mesa Luxo - R$${cama}`);
}

if (produto == '005'){
    console.log(``);
}

