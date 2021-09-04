/* No programa “Veja os números pares”, o console apresentará uma frase
com os números pares entre 2 e 10, separados por vírgula e na mesma
linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o
sistema pede para continuar, e a cada confirmação, exibe a nova
mensagem na sequência (entre 12 e 20 etc) */

const prompt = require('prompt-sync')();

for (let i = 0; i <= 10; i++) {
	if (i % 2 != 0) {
		continue;
	}
	console.log(i);
}

let pergunta = prompt('Deseja continuar: "S"/"N"');

if (pergunta == 'S') {
	for (j = 10; j <= 20; j++) {
		if (j % 2 != 0) {
			continue;
		}
		console.log(j);
	}
}
