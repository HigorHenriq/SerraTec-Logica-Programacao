function BomDia(){
    return "Bom Dia";
}

var txt = BomDia();
console.log("Resposta da função BD " + txt);


function multiplicar(numero){
    return numero * 2;
}

var calc = 2 + 2 + multiplicar(5);
console.log("Resultado da função multiplicar: " + calc)


function calcular(valor1, operador, valor2){
    var conta = 0;

    switch(operador){
        case "+":
            conta = valor1 + valor2;
            break;
        case "-":
            conta = valor1 - valor2;
            break;
        case "*":
            conta = valor1 * valor2;
            break;
        case "/":
            conta = valor1 / valor2;
            break;
    }

    return conta;
}


/*function somar (operador1, operando, operador2){
    conta = operador1 + operador2;
    return conta;
}*/

var resposta = calcular(5, "-", 3);
console.log("Resultado da função calcular: " + resposta);

resposta = calcular(multiplicar(5), "+", 3);
console.log("Resultado da função calcular e depois juntar com a multiplicar: " + resposta);
