/*
O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob
o signo de Aquário são mais inteligentes que os demais.*/

const prompt = require("prompt-sync")()

//ENTRADA
const Signo = 'Aquário';

var pergunta_Mes = prompt('Qual seu mes de nascimento? ');
var Ano_Nascimento = pergunta_Mes;
console.log(`Mes de Nascimento: ${Ano_Nascimento}`);

var pergunta_niver = prompt('Qual o dia do seu aniversario?: ');
console.log(`Dia do aniversario: ${pergunta_niver}`);

var resposta_signo = prompt('Qual o seu signo?: ');

var int = resposta_signo == 'Aquario'
console.log('Você é inteligente? ', int)
/*
if(resposta_signo == 'Aquario'){
    console.log('Você é inteligente!');
}*/
