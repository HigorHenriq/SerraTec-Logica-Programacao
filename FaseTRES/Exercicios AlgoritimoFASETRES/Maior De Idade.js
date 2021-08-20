//Você é maior de idade?

//A linha abaixo cria um pormpt dentro do VS Code
var prompt = require("prompt-sync")();

var idadeSimOuNao = prompt("Você é maior de idade? S ou N apenas: ")
//Relacionais
var MaiorS = idadeSimOuNao == "S"
console.log("Usuario é maior de idade? ", MaiorS);