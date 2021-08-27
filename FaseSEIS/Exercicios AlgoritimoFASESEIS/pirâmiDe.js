/* O jogo “pirâmiDe” solicita a altura da pirâmide, e imprime uma divertida
pirâmide de letras D no console */
const prompt = require("prompt-sync")()

var tamanho = prompt("Tamanho da pirâmide: ");
var simbolo = prompt("Qual simbolo para a pirâmide: ")

for(i = 0; i <= tamanho; i++){
    var d = '';

    for(j = 0; j < i; j++){

        d += simbolo
    }
    console.log(d)
}