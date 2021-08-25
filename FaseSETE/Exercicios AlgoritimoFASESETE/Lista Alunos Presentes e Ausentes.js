/*
Com base nos vetores de alunos e presença, Exibir:
1. A quantidade de alunos
2. Qual o número do aluno "Maria"
3. O total de presentes
4. O total de ausentes
*/

var lista_alunos = []
var lista_presenca = [];

lista_alunos[0] = 'Adrian'
lista_presenca[0] = true;

lista_alunos[1] = 'Andre luis'
lista_presenca[1] = false;

lista_alunos[2] = 'Gustavo'
lista_presenca[2] = true;

lista_alunos[3] = 'Higor'
lista_presenca[3] = true;

lista_alunos [4] = 'Luciana'
lista_presenca[4] = false;

lista_alunos[5] = 'Matheus'
lista_presenca[5] = true;

var presentes = -1;
var ausentes = -1;

var pesquisar_aluno = "Higor"
var encontrado = -1;

//QUANTIDADE DE ALUNOS
var total_alunos = lista_alunos.length;
console.log(`Total de alunos ${total_alunos}`);

//UTILIZADA PARA IR PASSANDO DE ALUNO EM ALUNO PARA ENCONTRAR O PESQUISADO
//O FOR ABAIXO PERCORRE A LISTA DE ALUNOS NOMES DOS ALUNOS
for(i = 0; i <= total_alunos; i++){
    //CRITERIO DE BUSCA
    if(lista_alunos[i] == pesquisar_aluno){
        encontrado = i;
        break;
    }
}
//ONDE O ALUNO SE ENCONTRA
if(encontrado == -1){
    console.log(`Aluno não encontrado na lista`)   
}
else{
    console.log(`O aluno ${pesquisar_aluno} está na cadeira ${encontrado}`)
}
console.log(";--------------------------;")

//LISTA DE ALUNOS PRESENTES
var NomePresentes = '';
//O FOR ABAIXO PERCORRE A LISTA DE PRESENÇA DE ALUNOS
for(p = 0; p <= total_alunos; p++){
    //CRITERIO DE BUSCA
    if(lista_presenca[p] == true){
        presentes = p;
        NomePresentes = lista_alunos[p];

        if(presentes > -1){
            console.log(`O aluno ${NomePresentes}, na cadeira ${presentes} está presente`)
        }
    }
}
console.log(";--------------------------;")

//ALUNOS QUE FALTOU
var NomeAusentes = '';
//O FOR ABAIXO PERCORRE A LISTA DE PRESENÇA DE ALUNOS
for (f = 0; f <= total_alunos; f++){
    //CRITERIO DE BUSCA
    if(lista_presenca[f] == false){
        ausentes = f; 
        NomeAusentes = lista_alunos[f];

        if(ausentes > -1){
            console.log(`O aluno ${NomeAusentes}, na cadeira ${ausentes} está ausente`);
        }
    }
}