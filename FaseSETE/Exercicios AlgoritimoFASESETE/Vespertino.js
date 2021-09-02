/* O programa ‘Vespertino’ irá exibir uma mensagem personalizada de
acordo com o período do dia. Tanto a leitura do do período ‘manhã, tarde
ou noite’, quanto a impressão do texto de cordialidade serão montados em
uma função sem retorno. A rotina será chamada duas vezes. */

const prompt = require('prompt-sync')();

function Vespertino() {
	let pergunta = prompt('Horario do dia: ');

	let dia = 'Bom Dia';
	let tarde = 'Boa Tarde';
	let noite = 'Boa Noite';

	if (pergunta >= 4 && pergunta < 13) {
		console.log(dia);
	}

	if (pergunta >= 13 && pergunta <= 18) {
		console.log(tarde);
	}

	if (pergunta > 18) {
		console.log(noite);
	}
	return pergunta;
}

Vespertino();

Vespertino();
