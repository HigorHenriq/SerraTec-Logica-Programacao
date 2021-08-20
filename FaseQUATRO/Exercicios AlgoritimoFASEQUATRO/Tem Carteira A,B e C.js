//O motorista tem habilitação em carteira A, B e C?
//Se sim motorista profissional
var prompt = require("prompt-sync")()
//ENTRADA
var cartaA = prompt('Você possui carta A? Resposta S ou N' ) 
var cartaB = prompt('Você possui carta B? Resposta S ou N' )
var cartaC = prompt('Você possui carta C? Resposta S ou N' )

//PROCESSAMENTO
var aprovadoA = (cartaA == 'S') || (cartaA == 's')
var aprovadoB = (cartaB == 'S') || (cartaB == 's')
var aprovadoC = (cartaC == 'S') || (cartaC == 's')


//SAÍDA
var perfeito = aprovadoA && aprovadoB && aprovadoC
var medio = (aprovadoA && aprovadoB != aprovadoC)

if (perfeito == true){
    console.log('Parabens você é um pro!')
}
if (medio == true){
    console.log('Você está no nivel médio!')
}
else{
    console.log('Você está no nivel iniciante!')
}