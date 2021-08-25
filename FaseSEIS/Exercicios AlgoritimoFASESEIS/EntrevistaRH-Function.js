//O setor de RH quer fazer uma separação dos candidatos à vaga de programador usando um critério diferente: As pessoas com nome iniciado em vogal serão entrevistadas na segunda-feira, e as pessoas com nome iniciado em consoante, na terça-feira.

const prompt = require("prompt-sync")()
//ENTRADA
/*
var vogal = [
    'a',
    'e',
    'i',
    'o',
    'u',
]

var nome = prompt('Qual a primeira letra do seu nome: ');
//PROCESSAMENTO
var primeira_letra = nome.substring(0, 1);

primeira_letra = primeira_letra.toUpperCase

if(vogal == primeira_letra){
    console.log(`Sua entrevista será na segunda-feira`);
}
else{
    console.log(`Sua entrevista será na terça-feira`)
}
*/

//FUNCTION
function dizLetraVogal(Letra){
    console.log('Função foi chamada');
}

function obterPrimeiraLetra(){
    nome = nome.toUpperCase();
    return nome.substr(0, 1)
}

//METODO 2 E CHAMANDO UMA FUNCTION
var vogal = false;
var nome = dizLetraVogal('A');
var primeiro_letra = "";

do{
    nome = prompt('Qual a primeira letra do seu nome? ');

    var primeira_letra = nome
    primeira_letra = primeira_letra.toUpperCase

    var teste = obterPrimeiraLetra();
    vogal = dizLetraVogal();
    
    switch (primeira_letra){
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            vogal = true;
            break;
        default:
            vogal = false;
            break;
    }
        if(vogal){
            console.log(`Sua entrevista é Segunda-feira`);
        }
        else{
            console.log(`Sua entrevista é Terça-feira`);
        }
}while(nome != "");
console.log("RH deseja um bom dia");