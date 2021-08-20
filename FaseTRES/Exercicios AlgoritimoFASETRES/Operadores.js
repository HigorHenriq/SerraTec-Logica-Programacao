//Binarios
var resto = 5 % 2; //Leia-se resto da divisão inteira
console.log("Resto: ", resto);

var inteiro = Math.trunc(5 / 2);
console.log("Inteiro: ", inteiro);

//Relacionais

var maior = 5 > 3;
console.log('5 é maior que 3? ', maior)

var menor = 5 < 3;
console.log('5 é menor que 3? ', menor)

var maiorOuIgual = 7 >= 10;
console.log('7 é maior ou igual a 10? ', maiorOuIgual)

var MenorOuIgual = 7 <= 10;
console.log('7 é menor ou igual a 10? ', MenorOuIgual)

//Comparação de letras em string

var nome = "Edu" > "edu";
/*Irá retornar False, pq a letra E na lista de caracteres,
o "E" MAIUSCULO é abaixo do "e" na numeração da tabela.
*/ 
console.log("Edu é maior que edu? ", nome);

console.log(typeof teste)//Para saber que tipo de operador é seu valor no identificador 
