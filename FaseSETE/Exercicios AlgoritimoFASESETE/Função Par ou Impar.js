/*  Já sabemos como calcular se um número é par ou ímpar. Agora vamos
criar duas funções, uma para cada, e usá-las em português! As funções
devem retornar um valor lógico. */

const prompt = require('prompt-sync')();
function ParImpar() {
	let num = prompt('Digite o número: ');

	let numero = num.substr(0, 2);

	const par =
		numero == '0' ||
		numero == '2' ||
		numero == '4' ||
		numero == '6' ||
		numero == '8';

	const impar =
		numero == '1' ||
		numero == '3' ||
		numero == '5' ||
		numero == '7' ||
		numero == '9';

	if (par) {
		console.log('É par: ', par);
	} else {
		console.log('É impar: ', impar);
	}
	return numero;
}

ParImpar();
