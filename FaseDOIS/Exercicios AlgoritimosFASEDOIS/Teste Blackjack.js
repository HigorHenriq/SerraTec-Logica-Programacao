//Objetivo o jogador que alcançar o numero 21 ganha, se passar de 25 igual perde na hora ou o mais prox de 21 ganha

const prompt = require("prompt-sync")()

//ENTRADA
const CardNum = []
var CardRandom = Math.random(CardNum)*25 + 1

var player1 = []

var player2 = []

//PROCESSAMENTO
const LIMIT_CARD = 25

var GetNewCard = []

//SAIDA
if(player1 == 'sim'){
    GetNewCard = []

    if(player1 >= LIMIT_CARD){
        console.log('Você ultrapassou a limite de cartas, turururu')
    }
    else{
        console.log('Respira e confie na sua decissão')
    }
}

if(jogador2 == 'sim'){

}