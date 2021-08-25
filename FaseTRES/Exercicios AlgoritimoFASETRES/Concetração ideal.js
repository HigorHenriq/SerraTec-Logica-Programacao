/*
O laboratório fabricante de álcool em gel precisa saber se o produto está
atingindo a concentração ideal para desinfecção, que é de 70%. Para a
ajudar o laboratório, crie um programa onde será preenchida a capacidade
da garrafa em mililitros, e o resultado serão os volumes de álcool e de gel
que precisam ser misturados para preenchimento do vasilhame.
*/

var porc = 70
var ml = 1000

var calc = 1000 % 70
var int = Math.floor(calc);

console.log(`${int}`);