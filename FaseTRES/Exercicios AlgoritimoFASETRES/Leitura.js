//A linha abaixo cria um prompt dentro do VS Code
var prompt = require("prompt-sync")()

var nome = prompt('Qual Seu Nome?')

console.log("Bem-Vindo!" + nome)

var local = prompt('Qual Sua Cidade?')

console.log(local)

console.log(nome + '', ' da cidade ', local)