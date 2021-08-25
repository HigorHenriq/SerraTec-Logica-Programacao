/*
Mesmo com aulas online, os alunos do cursinho continuam sendo
avaliados com duas provas, a P1 e a P2, que valem 5 pontos inteiros cada.
Pela soma dos pontos, o aluno saberá sua situação na disciplina.
Reprovado = 0 a 4 |Recuperação = 4 a 6 |Aprovado = 6 a 8 |Destaque = 8 a 10

*/

const prompt = require("prompt-sync")();

//
const P1 = 5;
const P2 = 5;

var MAX = 10;

var pergunta_p1 = prompt("Nota do aluno em P1: ");
var pergunta_p2 = prompt("Nota do aluno em p2: ");

var aluno_p1 = parseInt(pergunta_p1);
var aluno_p2 = parseInt(pergunta_p2);

var calculo = aluno_p1 + aluno_p2;
console.log(`Nota do aluno ${calculo}`)
//
    if (calculo >= 0 || calculo <= 4) {
        console.log(`Reprovado`);
    }

    if (calculo > 4 || calculo <= 6) {
        console.log(`Recuperação`);
    }

    if (calculo > 6 || calculo <= 8) {
        console.log(`Aprovado`);
    }
    
    if (calculo >= 8 || calculo <= 10) {
        console.log(`Destaque`);
    }

//
