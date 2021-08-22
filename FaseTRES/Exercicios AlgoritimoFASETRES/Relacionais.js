/*
O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis
booleanas, escreve na tela o resultado de cada operação relacional com os
números.*/

var A = 15;
var B = 6;

var igual = A == B;
var maior = A >= B;
var menor = A <= B;
var dif = A != B;

console.log(`É igual? `,igual, '\nÉ maior? ',maior, '\nÉ menor? ', menor,'\nÉ diferente? ', dif)