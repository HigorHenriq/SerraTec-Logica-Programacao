/*
A finalidade do sistema "Triagem" é ajudar o hospital a identificar os
pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do
paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas,
receberá a avaliação na tela.
*/

const prompt = require("prompt-sync")();

var nome = prompt("Nome do paciente: ")

var vacinado = prompt("Ja foi vacinado: ");

console.log("[Triagem]");

var triagem = vacinado != 'ok';

if(triagem){
    console.log("Sujeito a infecção? " + triagem)
}

else{
    console.log("Sujeito a infecção? " + triagem)
}