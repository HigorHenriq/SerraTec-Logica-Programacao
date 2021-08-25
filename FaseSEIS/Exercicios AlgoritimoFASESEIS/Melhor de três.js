/*
O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.
*/

const prompt = require("prompt-sync")()

var resp_oficial = '90FM'

for (i = 0; i < 3; i++){
    console.log("Olá ouvinte", + (i + 1));
    var chances = 2;

    do{
        var resposta = prompt ('Qual sua resposta: ');
        var acertou = resposta == resp_oficial
        chances--
            if(acertou){
                console.log('Acertou parabens!')
            }
            else{
                console.log('Você errou', chances)
            }
    }while(resposta != resp_oficial && chances > 0)
}