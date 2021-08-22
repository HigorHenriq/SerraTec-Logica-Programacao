/*
O menino, os tênis e os apitos
a partir das quais você pode identificar que
cada figura (menino, tênis e apitos) possui um valor diferente.
Seu desafio é
descobrir qual é o resultado da última equação. Preste muita atenção, pois os
detalhes fazem a diferença!
*/

var sapato = 30/3;
var menino;
var apito;

console.log(`Sapato vale ${sapato}`)

//Descobrir Menino
var calc_MENINO = 20 - sapato;
console.log(`os dois meninos vale ${calc_MENINO}`)

calc_MENINO = 10/2
console.log(`Um menino é igual a ${calc_MENINO}`)

//Descobrir Apito
var calc_APITO = 13 - calc_MENINO - calc_MENINO
console.log(`Um apito é igual a ${calc_APITO}`)

calc_APITO = 3

//Soma Final
var calc_final = sapato + calc_MENINO + calc_APITO
console.log(`A soma de sapato, menino e sapato é igual a: ${calc_final}`)
