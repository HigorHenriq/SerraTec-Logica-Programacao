/*
. “No abecedário da Xuxa, vamos aprender!” Lembra da música? Então, crie
um programa que recebe uma letra maiúscula e canta sua “definição
musical”
*/

const prompt = require("prompt-sync")()

//
var pergunta = prompt("Para inicar digite alguma letra do abecedário: ");
var caso = pergunta.toUpperCase();


    switch(caso){
        case 'A':
            console.log('A de amor');
            break;
        case 'B':
            console.log('B de baixinho');
            break;
        case 'C':
            console.log('C de coração');
            break;
        case 'D':
            console.log('D de docinho');
            break;
        case 'E':
            console.log('E de escola');
            break;
        case 'F':
            console.log('F de feijão');
            break;
        }