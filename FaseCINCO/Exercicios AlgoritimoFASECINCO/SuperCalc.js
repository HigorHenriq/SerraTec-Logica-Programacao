/*
A “SuperCalc” é a calculadora que, além dos números, lê o operador que
será aplicado, e depois realiza a operação. Considere as entradas na ordem:
primeiro número, sinal (+, -, * ou /) e segundo número.
*/
const prompt = require("prompt-sync")()

var valor1 = prompt("Digite o primeiro valor: ");
var num_valor1 = Number(valor1);

var operador = prompt("Digite o operador que quer: ");

var valor2 = prompt("Digite o segundo valor: ");
var num_valor2 = Number(valor2);

if(operador == '+'){
    var soma = num_valor1 + num_valor2
    console.log(soma)
}

if(operador == '-'){
    var sub = num_valor1 - num_valor2
    console.log(sub)
}

if(operador == '*'){
    var mult = num_valor1 * num_valor2
    console.log(mult)
}

if(operador == '/'){
    var div = num_valor1 / num_valor2
    console.log(div)
}