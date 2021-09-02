/*  Agora o “IMC” é calculado em uma função, que contém a tabela e as
respostas. O programa irá ler os valores do peso e altura, enviar para a
função, receber a resposta em texto, e mostrar na tela.
 */

function IMC(peso, altura) {
	let kg = peso;
	let m = altura;

	const imc = kg / (m * m);
	console.log(`Seu IMC é de: ${imc}`);
	console.log(`
    IMC               | Classificação
    Menor que 18,5    | Magreza
    Entre 18,5 e 24,9 | Normal
    Entre 25 e 29,9   | SobrePeso`);
}

IMC(95, 1.8);
