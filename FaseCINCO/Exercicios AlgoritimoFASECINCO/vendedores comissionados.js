/*
Os "vendedores comissionados" recebem 5% do valor de cada produto
vendido. Aqueles que batem a meta de 5 mil em vendas, recebem um
adicional de 9% sobre o excedente. Seu programa irá receber o valor total
de vendas e emitir o recibo de comissão.
*/

const prompt = require("prompt-sync")();

var vendas = prompt("Vendas Totais: R$");
var conversao = Number(vendas);
