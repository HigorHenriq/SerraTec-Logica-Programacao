/*
 É muito comum vermos promoções em mercados e shoppings
relacionadas ao valor das compras. Se a Alice fez suas compras em um
shopping cuja promoção era que a cada R$ 190,00 em compras ela
ganhava um cupom, quantos cupons ela ganhou? */

//
var g = 345;
var c = 1545;

var soma = g + c

var cupom = Math.trunc(soma / 190);

console.log(`Ganhou: ${cupom} cupom`)