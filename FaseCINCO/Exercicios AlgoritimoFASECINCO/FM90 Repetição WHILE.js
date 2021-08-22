//O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
const prompt = require("prompt-sync")()
//Faça primeiro e executa e depois testa

//Teste Enquanto
var Resposta = ""

while(Resposta){
    var PerguntaRespondida = prompt('Qual é o nosso código? ')
    var RespostaErrada = PerguntaRespondida != '90FM'

    console.log('Não foi dessa vez')
}
console.log('Parabens, você passou')