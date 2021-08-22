/*
O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus
pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá
digitar um número inteiro correspondente aos seus cupons. Cada cupom
corresponde a 1 ponto.
*/
const prompt = require("prompt-sync")()

var pergunta = 1//prompt('Verifique seus pontos em cupons, digite o número dele: ')

switch(pergunta){
    case 0:
    console.log('Você tem 0 cupons');
        break;
    case 1:
    console.log('Você tem 1 cupons');
        break;
    case 2:
    console.log('Você tem 2 cupons');
        break;
    case 3:
    console.log('Você tem 3 cupons');
        break;
    case 4:
    console.log('Você tem 4 cupons');
        break;
    case 5:
    console.log('Você tem 5 cupons');
        break;
    default:
        console.log('Não idetificamos sua resposta');
        break;
}