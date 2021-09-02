/*
CineShow tem 7 assentos disponiveis para a sessão das 18h: 43 a 50
A bilheteria quer vender esses ingressos, sendo que a cadeira 46 é preferencial e não pode ser vendida
*/
const prompt = require('prompt-sync')();
//ENTRADA
//PROCESSAMENTO
/* for (var i = 43; i <= 50; i++) {
	console.log('Poltrona ', i);
	var pergunta = prompt(
		"Deseja poltrona Comum ou Preferencial? 'C' ou 'P': "
	);

	if (pergunta == 'P' && i != 46) {
		console.log(`Essa poltrona não é preferencial`);
		continue;
	}

	console.log(`Poltrona ${i} vendida com sucesso`);
} */

var i = 43;

for (; i <= 50; ) {
	console.log('Poltrona ', i);
	var pergunta = prompt(
		"Deseja poltrona Comum ou Preferencial? 'C' ou 'P': "
	);

	if (pergunta == 'P' && i != 46) {
		console.log(`Essa poltrona não é preferencial`);
		continue;
	}

	console.log(`Poltrona ${i} vendida com sucesso`);
	i++;
}
//SAIDA
