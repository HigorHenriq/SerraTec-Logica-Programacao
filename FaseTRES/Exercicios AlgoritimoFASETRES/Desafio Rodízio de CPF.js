/*
 A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito
final do documento será utilizado para permitir a entrada nas lojas. CPF
final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é
destinado aos documentos ímpares.
*/

const prompt = require("prompt-sync")()

var pergunta_dia = prompt('Ultimo digito do Dia: ');
var ultimo_digito_dia = pergunta_dia;

var pergunta_cpf = prompt('Ultimo Digito CPF: ');
var final_cpf = pergunta_cpf;

var par = final_cpf && ultimo_digito_dia  == 0 || final_cpf && ultimo_digito_dia == 2 || final_cpf && ultimo_digito_dia == 4 || final_cpf && ultimo_digito_dia == 6 || final_cpf && ultimo_digito_dia == 8;

if(par == true){
    console.log(`Pares pode entrar na loja`);
}
else{
    console.log(`Impares pode entrar na loja`);
}