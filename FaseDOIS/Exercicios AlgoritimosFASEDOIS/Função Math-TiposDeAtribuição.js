//trunc = Cortar
//Corta as casas decimais, devolve só a parte inteira
console.log("Retirando Casas Dec V");
var valorInteiro = Math.trunc(1455.23694);
console.log(valorInteiro);

//Funcionalidade sobre Math.random(), ele irá gerar um numero aleatorio
console.log("Número Aleatorio Com MathRandom V");

console.log(Math.random());

//Teste Com Numero Limitado
console.log("MathRandom Mas somente entre 1 e 19");

var random = Math.random()*20
var limitNum = Math.floor(random)
console.log (limitNum)
