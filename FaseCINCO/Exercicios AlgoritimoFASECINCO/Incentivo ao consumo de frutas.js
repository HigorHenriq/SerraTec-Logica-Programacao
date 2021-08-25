/*
No blog “Incentivo ao consumo de frutas”, o aluno digita o nome de sua
fruta favorita, e receberá alguma informação singular sobre ela. Para se
tornar interessante, a lista deve conter pelo menos 6 curiosidades, e uma
sobre frutas de modo geral.
*/

const prompt = require("prompt-sync")();

var pergunta = prompt("Digite sua fruta favorita: ");
console.log('Maça, Banana, Coco, Abacaxi, Uva ou Abacate');

if(pergunta == 'Maça'){
    console.log("é rica em pectina e auxilia na redução do colesterol ruim");
}

if(pergunta == 'Banana'){
    console.log("A fruta previne doenças cardíacas, faz bem para a digestão, aumenta a saciedade e reduz câimbras.");
}

if(pergunta == 'Coco'){
    console.log("é fonte de gordura boa e potássio, e ajuda na saciedade");
}

if(pergunta == 'Abacaxi'){
    console.log("Melhora a digestão, Fortalece o organismo após os exercícios.");
}

if(pergunta == 'Uva'){
    console.log("Prevenção de problemas cardíacos. Melhora da saúde da visão.");
}

if(pergunta == 'Abacate'){
    console.log("possui pouca quantidade de carboidratos e é fonte de omêga 3,6 e 9, e em triptofano");
}

console.log('Beneficios gerais das frutas: As frutas são fontes de vitaminas, minerais, fibras e antioxidantes de extrema importância para o funcionamento do nosso organismo.')