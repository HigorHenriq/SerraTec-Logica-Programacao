/*
 Em tempos de pandemia, só é permitido entrar em templos religiosos
pessoas de máscara. Na portaria deve ser medida a temperatura à
distância, e o valor não deve ultrapassar 37,5º.
*/

const prompt = require("prompt-sync")()

//ENTRADA
const LIMITE_TEMP = 37.5;

var pergunta = prompt('Temperatura da pessoa: ');
var temperatura = pergunta

if(temperatura < LIMITE_TEMP){
    console.log(`Está com ${temperatura}° Liberado`);
}
else{
    console.log('Temperatura muito alta!');
}

var pergunta2 = prompt('A pessoa está de mascara? Responda somente "S" ou "N" ');
var mascara = pergunta2

if(mascara == 'S'){
    console.log(`Está com ${mascara} Liberado`);
}
else{
    console.log('Não é permitida a entrada sem mascara!');
}

if(temperatura && mascara != true){
    console.log('Entrada Bloqueada, não bate nossos requisitos')
}