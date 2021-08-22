/*
 O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros
múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a
partir de zero
*/

/*
var mult = 0;
console.log(mult);

mult += 4;
console.log(mult);

mult += 4;
console.log(mult);
*/

var inicio = 1000;
console.log('Iniciando')

var Mult_4 = inicio += 4;
var texto1 = 'O primeiro multiplo é: '
console.log(texto1 += Mult_4)

Mult_4 += 4
var texto1 = 'O segundo multiplo é: '
console.log(texto1 += Mult_4)

Mult_4 += 4;
var texto1 = 'O terceiro multiplo é: '
console.log(texto1 += Mult_4)

Mult_4 += 4
var texto1 = 'O quarto multiplo é: '
console.log(texto1 += Mult_4)

//A PARTIR DO MIL

var primos = [2, 3, 5, 7]
var sub = Mult_4 - 3 - 5 - 7
console.log(`${sub}`)