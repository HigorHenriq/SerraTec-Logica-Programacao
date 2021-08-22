//O locutor da Rádio 90FM irá telefonar ao vivo para um dos ouvintes que mandou um zap durante o programa. O primeiro que atender ganha uma camiseta! Mas não vale dizer alô, diga “90FM é show”!
const prompt = require("prompt-sync")()
//Faça primeiro e executa e depois testa

do{
    var respostaDaPergunta = prompt('Qual sua fala? ')
    var RespostaErrada = respostaDaPergunta != '90FM'

    console.log('Que pena você errou')
    
}while(RespostaErrada)
console.log('Parabens, Resposta correta!')

