/*
o tablet da lanchonete, o cliente pode escolher dois complementos para
o seu lanche. Apenas se marcar algum item de salada, pode também
escolher se quer adicionar molho. Ao finalizar, o pedido é enviado para a
cozinha.
Item 1: B
Item 2: T
Adicionar molho: Não
[Cozinha]
Lanche com Bacon e Tomate, sem molho.
*/

const prompt = require("prompt-sync")()

console.log("Você pode adicionar dois complementos, caso escolha a salada também")
console.log("Saladas:\nA = Alface\nT = Tomate\nP = Picles\nComplementos:\nQ = Queijo\nB = Bacon\n");

var opcao_salada = prompt ("salada: ");
var complemento = prompt ("complemento 1: ");

switch(opcao_salada){
    case 'A':
        salada = 'Alface';
        break;
    case 'T':
        salada = 'Tomate';
    break;
    case 'P':
        salada = 'Picles';
    break;
    }
    
var TemSalada = opcao_salada == 'A' || opcao_salada == 'T' || opcao_salada == 'P';

if(TemSalada){

        switch(complemento){
        case 'Q':
            recheio = 'Queijo'
        break;
        case 'B':
            recheio = 'Queijo'
        break;
        
    }
    var molho = prompt ("Deseja molho: 'Sim' ou 'Nao': ");
}

console.log(`Lanche com ${salada} e complemento ${recheio}, molho? ${molho}`)