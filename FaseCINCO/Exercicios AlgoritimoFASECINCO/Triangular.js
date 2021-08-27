/*
. O programa “Triangular” lê as medidas do triângulo, e informa se ele é
equilátero, isósceles ou escaleno.
Triângulo equilátero: triângulo que possui todos os lados com medidas iguais.
Triângulos isósceles: triângulo que possui dois lados com medidas iguais.
Triângulo escaleno: triângulo que possui todos os lados com medidas diferentes.
*/

const prompt = require("prompt-sync")()

const pergunta1 = prompt("Primeiro valor: ");
const angulo1 = parseInt(pergunta1);

const pergunta2 = prompt("Segundo valor: ");
const angulo2 = parseInt(pergunta2);

const pergunta3 = prompt("Terceiro valor: ");
const angulo3 = parseInt(pergunta3);

const equilatero = angulo1 != angulo2 && angulo2 != angulo3 && angulo1 != angulo3;

const isosceles = angulo1 == angulo2 && angulo2 == angulo3 && angulo1 != angulo3;

const escaleno = angulo1 == angulo2 && angulo2 == angulo3 && angulo1 == angulo3;

if(equilatero){
    console.log('O triangulo é equilatero');
}

if(isosceles){
    console.log('O triangulo é isosceles');
}

if(escaleno){
    console.log('O triangulo é escaleno');
}