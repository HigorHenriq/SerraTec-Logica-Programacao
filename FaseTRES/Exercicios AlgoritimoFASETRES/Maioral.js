/*
Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um
não ver o valor do outro), cada um irá digitar um número inteiro no teclado.
Vamos saber quem digitou o número maior, pelos resultados na tela.
*/

const prompt = require("prompt-sync")()

var per_player1 = prompt ('Digite seu numero player1: ');
var per_player2 = prompt ('Digite seu numero player2: ');

console.log(`Player 1 = ${per_player1}`);

console.log(`Player 2 = ${per_player2}`);

var win_player1 = per_player1 > per_player2;
console.log('Player 1 venceu? ', win_player1); 

var win_player2 = per_player2 > per_player1;
console.log('Player 2 venceu? ', win_player2);

var empate = per_player1 == per_player2;
console.log('Teve empate? ', empate)