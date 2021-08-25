/*
Jessica tem sapateira com 5 sapatos
*/
const prompt = require("prompt-sync")()

/* METODO A PARTIR DO SWITCH
var sapato0 = "";
var sapato1 = "";
var sapato2 = "";
var sapato3 = "";
var sapato4 = "";

const numero = prompt('Qual o número da gaveta? ');
const calcado = prompt ('Qual sapato você quer guardar');

    switch(calcado){
        case "0":
            sapato0 = calcado;
            break;
        case "1":
            sapato1 = calcado;
            break;
    }

numero = prompt("Qual gaveta quer ver? ")

    switch(numero){
        case "0":
            calcado = sapato0;
            break;
        case "1":
            calcado = sapato1;
            break;
    }

console.log(`Na gaveta ${numero}, está guardado o calçado ${calcado}`)
*/

//METODO A PARTIR UTILIZANDO VETOR
/*
Para criar o tipo de array que você quer(tipo dela), e dentro do [] será a quantidade de itens que poderá ser armazenado.
String sapato = new Array[50]
para saber o tamanho da sua array utiliza o .length, ex: sapato.length
*/
var sapato = [];

sapato[0] = "Sandalia";
sapato[1] = "Bota";
sapato[2] = "Rasterinha";
sapato[3] = "Tenis Nike";
sapato[4] = "Tenis skate";

//SABER OQUE ESTÁ NA POSIÇÃO DO VETOR
console.log(`${sapato[1]}`)

var numero_gaveta = prompt('Qual o número da gaveta? ');
var calcado = prompt ('Qual sapato você quer guardar? ');

//ATRIBUIÇÃO COM UMA POSIÇÃO NUMERICA
//ÍNDICE
sapato[numero_gaveta] = calcado;

numero_gaveta = prompt('Qual gaveta quer ver? ');

//RECUPERAÇÃO POR INDICE, POR POSIÇÃO NUMÉRICA
calcado = sapato[numero_gaveta];

console.log(`Na gaveta ${numero_gaveta}, está guardando o calçado ${calcado}`)

//NOVO
var quantidade = 6;

quantidade++

//TAMANHO
console.log(`Extensão/Tamanho da array`, sapato.length);

//QUAL A POSIÇÃO?
var posicao = sapato.length;//6

sapato[posicao] = 'Pantufa';

sapato[7];