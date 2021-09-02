/*  O “lockdown” na cidade de Teresópolis irá restringir o acesso dos cidadãos
às ruas utilizando o número do CPF. O programa irá solicitar a digitação do
CPF, com pontos e traços. Após isso, irá executar funções para cada
situação abaixo.
    a. Função “ValidarCPF”, que recebe o documento por parâmetro, e
retorna uma mensagem com as inconsistências. Itens a validar:
        i. O tamanho do texto digitado é 14 dígitos.
        ii. Foram digitados apenas números, e os separadores ponto e traço.
        iii. Os separadores se encontram nas posições esperadas, segundo a máscara “999.999.999-99”.
    b. Função “NumeroCPF”. A função recebe o CPF por parâmetro, e retorna apenas o número digitado (sem os separadores).
    c. Função “DigitoCPF”, que devolve os 2 dígitos finais do documento.
    d. Função “Permitido”. O final do CPF ímpar somente permite sair de casa em dias ímpares. De igual modo, o dia par é destinado para
    documentos com final par. Exibir uma mensagem dizendo se o cidadão está autorizado a circular.
 */

const prompt = require('prompt-sync')();

var cpf = '190.231.956-00'; //prompt('Digite seu cpf (ex: 190.231.956-00): ');

function ValidarCPF(cpf) {
	let digitos_cpf = cpf;

	const max_digits = '195.231.956-01';

	/* let posicao_ponto = digitos_cpf.indexOf('.');
	let posicao_ifen = digitos_cpf.indexOf('-');
	console.log(posicao_ifen);
	let verficiar = ; */

	if (digitos_cpf.length == max_digits.length) {
		console.log('Funfando');
	} else {
		console.log('Digitos não correspondentes');
	}
}

ValidarCPF(cpf);
