/*
 O programa “Três ângulos” lê os valores dos ângulos de uma forma, e
escreve se as medidas formam um triângulo válido.
*/

const prompt = require("prompt-sync")()

//E
const ANGULO_TRI = 180;

var pergunta_angA = prompt('Medida 1: ');
var pergunta_angB = prompt('Medida 2: ');
var pergunta_angC = prompt('Medida 3: ');

//Processar de String para Numero Inteiro
var Angulo_A = parseInt(pergunta_angA);

var Angulo_B = parseInt(pergunta_angA);

var Angulo_C = parseInt(pergunta_angA);

//P

//S
var soma = Angulo_A + Angulo_B + Angulo_C
console.log(`A soma de seus angulos é ${soma}`)

if(soma != ANGULO_TRI){
    console.log('Infelizmente você não fechou o triangulo, tente novamente')
}
else{
    console.log(`Parabens você fechou o triangulo`)
}