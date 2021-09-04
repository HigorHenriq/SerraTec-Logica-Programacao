/* O programa "Educado" irá perguntar o seu nome, e também como você
gostaria de ser chamado. Depois disso, uma saudação para você aparece
na tela.
 */

const prompt = require('prompt-sync')();

const pergunta_nome = prompt('Qual seu nome: ');

const pergunta_apelido = prompt(
	`Como gostaria de ser chamado ${pergunta_nome}?: `
);

console.log(`Olá ${pergunta_apelido}, Muito Prazer!`);
