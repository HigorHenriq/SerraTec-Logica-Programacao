/* . O programa “Financeira” irá solicitar que o cliente digite seu nome,
empresa e função, além do valor do empréstimo que deseja contratar.
Então será calculado 86% do valor desejado como crédito disponível. A
resposta ao cliente deve seguir o exemplo abaixo.
Para escrever as mensagens, utilize variáveis com concatenação de strings.
O valor será escrito separadamente (no console.log). */

const prompt = require('prompt-sync')();

//
var texto = 'Senhor';

var texto2 = 'você está com sorte! Pela sua função de';

var texto3 = ', e sua excelente relação com a empresa onde trabalha';

var texto4 = ', foi aprovado um crédito em sua conta corrente de R$';

const nome = prompt('Digite seu nome: ');

const empresa = prompt('Empresa: ');

const funcao = prompt('Função: ');

const emprestimo = prompt('Valor que deseja contratar: ');

//
const calc = emprestimo * 0.86;

console.log(
	`${texto} ${nome} ${texto2} ${funcao} ${texto3} ${empresa} ${texto4} ${calc}`
);
