/* O restaurante "Self-Service" precisa de um programa para imprimir as
etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá
digitar no programa o preço do quilo e o total em gramas do prato.
Considere que o prato vazio pesa 465 gramas (tara), e que a entrada
sempre será maior que a tara. A etiqueta irá conter o nome do restaurante,
a tara do prato, o preço de 100 gramas, o peso apenas da refeição e o valor
a pagar.
 */

const msg = 'Valor invalido!';
const local = 'Restaurante Varieta';
const KG_PRECO = 49.95;
//const G_PRECO;

const PESO_PRATO = 0.465;

let peso_refeicao = 0.8;

//
//const CALC_PRECO = Math.floor();
//console.log(calc);
const CALC = peso_refeicao * KG_PRECO;
const TOTAL = CALC.toFixed(2);

if (TOTAL <= PESO_PRATO) {
	console.log(msg);
} else {
	console.log(local);
	console.log(
		`A tara do prato é ${PESO_PRATO}kg, O preço por KG é ${KG_PRECO}, Peso da refeição ${peso_refeicao}Kg, Total a pagar:R$ ${TOTAL}`
	);
}
