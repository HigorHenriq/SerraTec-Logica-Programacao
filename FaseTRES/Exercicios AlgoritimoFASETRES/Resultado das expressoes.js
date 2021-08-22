/*Indique o resultado das expressões relacionais abaixo. Utilize uma variável
para atribuir a sentença, e então exibir na tela o resultado booleano.
Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual
Nesse exercício você deverá manter as variáveis e substituir apenas os
operadores. Pode ser necessário o uso de parênteses.
*/

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;

var contaA = (x - y) > a;
console.log(`A = ${contaA}`);

var contaB = (x - y) * a > (c % y);
console.log(`B = ${contaB}`);

var contaC = y != c;
console.log(`C = ${contaC}`);

var contaD = (x * y) != c;
console.log(`D = ${contaD}`);

var contaE = (c % y) >= (y  % c);
console.log(`E = ${contaE}`);

var contaF = a > b;
console.log(`F = ${contaF}`);

var contaG = (z / a) + (x * y - 5) >= b;
console.log(`G = ${contaG}`);

var contaH = (c * z + 2) == (a * x + y);
console.log(`H = ${contaH}`);

var contaI = c == z + b;
console.log(`I = ${contaI}`)

var contaJ = (y * 2) != (7 - b);
console.log(`J = ${contaJ}`)