/*
. O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique
seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá
triplicar o valor.
*/
const prompt = require("prompt-sync")()

var pergunta = 5//prompt('Verifique seus pontos em cupons, digite o número dele: ')
var mult = pergunta * 2

switch(mult){
    case 0:
    console.log('Você com a promoção agora tem 0 cupons');
        break;
    case 2:
    console.log('Você com a promoção agora tem 4 cupons');
        break;
    case 3:
    console.log('Você com a promoção agora tem 6 cupons');
        break;
    case 4:
    console.log('Você com a promoção agora tem 8 cupons');
        break;
    case 5:
    console.log('Você com a promoção agora tem 10 cupons');
        break;
    case 6:
    console.log('Você com a promoção agora tem 12 cupons');
        break;
    case 7:
    console.log('Você com a promoção agora tem 7 cupons');
        break; 
    case 8:
    console.log('Você com a promoção agora tem 16 cupons');
        break;
    case 9:
    console.log('Você com a promoção agora tem 18 cupons');
        break; 
    case 10:
    console.log('Você com a promoção agora tem 20 cupons');
        break;   
    default:
        console.log('Não idetificamos sua resposta');
        break;
}