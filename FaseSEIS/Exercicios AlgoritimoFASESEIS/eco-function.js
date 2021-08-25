const prompt = require("prompt-sync")()
//declaração da função só pode ser feito uma vez
/*function ecoMontanha (escuta){
    return escuta + '' + escuta;
}

//Chamada da função pode ser quantas vezes quiser
var texto = ecoMontanha("cantor");
console.log(texto);
texto = ecoMontanha("top");
console.log(texto)
*/

/*
A função ecoMontanha terá dois parâmetro: o primeiro
é 
*/

//Sem função
/*var pergunta_num_repetir = prompt("Quantas vezes quer que repita: ");
var qtde = parseInt(pergunta_num_repetir);

var texto = prompt("Qual palavra? ");

for(var i = 0; i < qtde; i++){
    console.log(texto)
}
*/

//EM FUNCTION
function ecoMontanha(palavra, quantidade){
    var resposta = " ";
   
    for(var i = 0; i < quantidade; i++){
        console.log(resposta + " ");
    }
    return resposta;   
}

//COM FUNÇÃO
var palavra = prompt ("Qual a sua palavra? ");
var vezes = prompt("Quantas vezes irá repetir? ");
var qtde = parseInt(vezes) ;

var txt = ecoMontanha(palavra, qtde);
console.log('Retorno da função' + txt);
