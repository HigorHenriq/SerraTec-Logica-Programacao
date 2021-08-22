/*
. O aplicativo na entrada da loja possui internamente um limite de pessoas
que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez
que um cliente quiser entrar, o segurança irá preencher a quantidade de
pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/

const prompt = require("prompt-sync")()

//ENTRADA
const LIMITE_PESSOAS = 8;

var pergunta = prompt('Loja está com quantos clientes? ')
var quantidade = pergunta

if(quantidade < LIMITE_PESSOAS){
    console.log(`Tem: ${quantidade} de pessoas na loja\n: Entrada Liberada`)
}
else{
    console.log('Loja cheia, espere mais um pouco!')
}