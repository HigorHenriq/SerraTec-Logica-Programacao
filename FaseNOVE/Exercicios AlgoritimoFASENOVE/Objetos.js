var nome;
var presente;
var nota;

var aluno1 = {
    nome: 'Maria',
    presente: false,
    nota: 8.0
};

var aluno2 = {
    nome:'Joao',
    presente: true,
    nota: 5.0
};

//CCOM ARRAY TAMBÉM FUNCIONA

var aluno3 = {
    nome: ['Marcos', 'Sara', 'Antonio'],
    presente: true,
    nota: 5
}

//Para saber o nome do aluno no gropo aluno2
console.log('Nome do aluno', aluno2.nome);
//Para saber se o aluno do grupo aluno2 está presente
console.log('Aluno está presente: ', aluno2.presente);
//Para saber a nota
console.log('Nota: ', aluno2.nota);

//VARIAVEIS INTERNAS DO OBJETO
console.log('Aluno numero 2 na lista array ', aluno3.nome[2]);