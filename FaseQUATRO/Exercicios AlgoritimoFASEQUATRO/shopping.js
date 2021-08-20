const PROMPT = require("prompt-sync")()

//ENTRADA
var verde = PROMPT('A luz está verde?Responda com "sim" ou "nao" ')

var vermelho = PROMPT('A luz está vermelha?Responda com "sim" ou "nao" ')

//PROCESSAMENTO
const textERRO = 'Não conseguimos identificar o que quis dizer, Verifique sua resposta!'

//SAIDA
if (verde == 'sim' && vermelho == 'nao'){
    console.log('Pode entrar')
}

if (vermelho == 'sim' && verde == 'nao'){
    console.log('Aguarde o sinal verde!')
}

if (verde && vermelho != 'sim' && 'nao' || 'sim' && 'sim' || 'nao' && 'nao'){
    console.log(textERRO)
}
