/*
Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:
    a. Alterar a mensagem de resultado, para dizer quais motivos
impediram o voluntário de participar da doação (ou parabenizar
quando aprovado).
    b. Assim que a primeira restrição for atendida, não serão feitas as
perguntas subsequentes.
*/

const prompt = require("prompt-sync")()

var texto = 'Digite “Sim” ou “Nao” nas restrições a seguir';
console.log(texto);

var idade = prompt('Idade abaixo de 16 ou acima de 69 anos? ');

var peso = prompt('Pesa menos de 50kg? ');

var portador_HE = prompt('Portador de Hepatite? ');

var portador_MA = prompt('Já teve Malária? ');

var Doar = prompt('Fez doação recente? ');


if(idade <= 16 || idade >= 69){
    console.log('Você não foi selecionado devido a idade');
}

if(peso == 'Sim'){
    console.log('Você não foi selecionado devido ao peso ser abaixo do permitido');
}

if(portador_HE == 'Sim'){
    console.log('Você não foi selecionado devido a ser portador de hepatite')
}

if(portador_MA == 'Sim'){
    console.log('Você não foi selecionado devido a ser portador de malária')
}

if(Doar == 'Sim'){
    console.log('Você não foi selecionado devido a ter doado recentemente')
}

