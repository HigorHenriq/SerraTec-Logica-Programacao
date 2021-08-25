//STRINGS == CADEIA DE CARACTERES

var texto  = "Uma String é um vetor!";

var trecho = texto[0];
console.log("A primeira letra do texto é: " + trecho);

//SABER O TAMANHO TOTAL DO TEXTO
var tamanho = texto.length;
console.log("Tamanho: " + tamanho);

//PEGAR DE UM TRECHO INICAL ATÉ UM FINAL
trecho = texto.substr(4, 6)
console.log(trecho);

//idenxOf PARA SABER A POSIÇÃO DE ALGUMA LETRA OU ESPAÇO
var posicao = texto.indexOf("v");
console.log("posição da letra 'v' é: " + posicao);

//TRANSFORMA AS LETRAS TUDO PARA MAIUSCULO
trecho = texto.toUpperCase();
console.log("Transforma tudo em maiusculo: " + trecho);

//TRANSFORMA AS LETRAS TUDO PARA MINUSCULO
trecho = texto.toLowerCase();
console.log("Transforma tudo em minusculo: " + trecho);


//SUBSTITUIÇÃO DE ALGUM TEXTO METODO LONGO
var aluno = "Maria é muito chata e muito rica";
const antigo = "chata";
const novo = "legal";

var posicao = aluno.indexOf(antigo);
var trecho = aluno.substr(0, posicao);
console.log(trecho);
posicao += antigo.length;
var total = aluno.length;
trecho = trecho + novo + aluno.substr(posicao, total);
console.log(trecho);

//DIVIDIR UM TEXTO EM ARRAY
var maria = aluno.split("muito");
console.log(maria);