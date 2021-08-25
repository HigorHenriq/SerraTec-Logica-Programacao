//O algoritmo é bem simples. Digitar 4 notas, ou seja, precisamos receber 4 dados do usuário, e salvar em 4 variáveis diferentes. Além das notas, precisamos calcular a sua média que deve ser MAIOR ou IGUAL a 7. SE a soma das 4 notas for maior ou igual a 7, a família poderá viajar, caso contrário a criança terá que fazer prova de recuperação.

var prompt = require("prompt-sync")();

//EMTRADA

var sem1 = prompt ('Digite a nota do semestre 1: ');
var sem2 = prompt ('Digite a nota do semestre 2: ');
var sem3 = prompt ('Digite a nota do semestre 3: ');
var sem4 = prompt ('Digite a nota do semestre 4: ');

var nota_sem1 = parseInt(sem1);
var nota_sem2 = parseInt(sem2);
var nota_sem3 = parseInt(sem3);
var nota_sem4 = parseInt(sem4);

var nota_minima = 7;

//PROCESSAMENTO DAS NOTAS

var soma_das_notas = nota_sem1 + nota_sem2 + nota_sem3 + nota_sem4

var aprovado = soma_das_notas < nota_minima;

if(aprovado == true){
    console.log(`A familia pode viajar tranquilamente, seu filho passou de ano`);
}
else{
    console.log("Infelizmente não poderão viajar, a nota não foi suficiente")
}