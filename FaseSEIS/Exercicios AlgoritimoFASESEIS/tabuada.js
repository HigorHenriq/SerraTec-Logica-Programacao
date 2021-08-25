/*
 Vou tomar a tabuada! O aluno de matemática escolhe o número, e o
sistema lhe ensina a contar.
*/
const prompt = require("prompt-sync")()

var tabuada = prompt("Qual número você deseja saber a tabuada? ");

var iniciar = 1;

for (iniciar = 1; iniciar <= 15; iniciar++){
    var resultado = iniciar * tabuada
    console.log(`${tabuada} x ${iniciar} = ${resultado}`)
}
