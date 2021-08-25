/*
 Sapato
*/
'use strict'

var sapato = [];

sapato[0] = 'Sandalia';
sapato[1] = 'Mocacim';
sapato[2] = 'Bota';
sapato[3] = 'Chuteira';
sapato[4] = 'Rasterinha';
sapato[5] = 'Sapatilha';
sapato[6] = 'Tamanco';
sapato[7] = 'Kichute';
sapato[8] = 'Tenis';
sapato[9] = 'Chuteira';

//ITEM PARA PESQUISAR DA ARRAY
var pesquisa = 'Chuteira';
var encontrei = -1;

var quantos = 0;
var encontrados = [];

for(var i = 0; i < sapato.length; i++){
    if(sapato[i] == pesquisa){
        encontrei = i;
            encontrados[quantos];
            quantos++;
    }
}

console.log(`Encontrei ${quantos} unidade de ${pesquisa} nas posições ${encontrados}`)

    if(encontrei > -1){
        console.log(`Sapato encontrado na posição ${encontrei}`);
    }
    else{
        console.log(`Não Encontrado!`)
    }


