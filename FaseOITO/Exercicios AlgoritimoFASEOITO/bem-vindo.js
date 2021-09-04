/* O programa “bem-vindo” pergunta seu nome e sobrenome, e depois
gentilmente te cumprimenta.
 */

const prompt = require('prompt-sync')();

const pergunta_nome = prompt('Qual seu nome: ');

const pergunta_sobre = prompt(`E sobrenome: `);

console.log(
	`Olá ${pergunta_nome} ${pergunta_sobre}, Seja bem vindo ao mundo da programação!`
);
