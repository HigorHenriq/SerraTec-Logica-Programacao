/*
. Alice foi até uma loja de eletrônicos e comprou alguns jogos e um
videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo
videogame. Para o pagamento, o sistema irá apresentar 3 opções de
parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem
juros e em 10 vezes com 1,5% de juros sobre o total da compra.
*/

const prompt = require("prompt-sync")()

//ENTRADA
var jogos = 345.00;
var video_game = 1.545;

const op_3x = '3 vezes s/juros';
const op_5x = '5 vezes s/juros';
const op_10x = '10 vezes, você terá 1,5% de juros';

var pergunta = prompt(`Vai parcelar em quantas vezes?\nDigite (3) para ${op_3x}, (5) para${op_5x} ou (10) para ${op_10x}:`)
//PROCESSAMENTO
if(pergunta == 'op_3x'){
    console.log('Parcelamento em 3x sem juros')
}
if(pergunta == '5'){
    console.log('Parcelamento em 5x sem juros')
}
if(pergunta == '10'){
    console.log('Parcelamento em 10x com juros')
}

//SAIDA