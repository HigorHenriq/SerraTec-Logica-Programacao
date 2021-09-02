/*A função “Parentesco” recebe um número inteiro por parâmetro e retorna
Verdadeiro caso seja um número Primo.
Primo:2, 3, 5, 7, 11, 13, 17, 19, 23 */

function Primo(numero) {
	let num = numero;
	//const numeros_primos = parseInt([0, 2, 3, 5, 7, 11, 13, 17, 19, 23]);

	let res =
		num == 2 ||
		num == 3 ||
		num == 5 ||
		num == 7 ||
		num == 11 ||
		num == 13 ||
		num == 17;

	if (res) {
		console.log('É número primo: ', res);
	} else {
		console.log('É número primo: ', res);
	}

	return res;
}

Primo(4);
