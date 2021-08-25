/*
 É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a
pessoa do sexo masculino a partir dos 18 anos. Crie um programa para
atestar a emancipação do cidadão com base em sua idade no ano atual.
*/

const prompt = require("prompt-sync")()

//ENTRADA
var Ano_Atual = 2021;
//Saber o ano em que a pessoa nasceu
var pergunta_Ano = prompt('Qual seu ano de nascimento? ');
var Ano_Nascimento = pergunta_Ano;
console.log(`Ano de Nascimento: ${Ano_Nascimento}`);

//Saber se a pessoa está liberada para o emancipado
var liberado_idade = Ano_Atual - Ano_Nascimento;

//Saber o genero da pessoa
var pergunta_genero = prompt('Digite seu genero: "Masculino" "Feminino": ');
var resposta_genero = pergunta_genero;
console.log(`Genero: ${pergunta_genero}`);

var emancipado_masc = liberado_idade >= 18 && resposta_genero == "Masculino";
console.log(`Cidadão emancipado? `, emancipado_masc);

var emancipado_fem = liberado_idade >= 21 && resposta_genero == "Feminino";
console.log(`Cidadã emancipada? `, emancipado_fem);

/*
if(liberado_idade > 18 && pergunta_genero == 'M' == true){
    console.log('Emancipado com sucesso!');
}
    if(liberado_idade > 21 && pergunta_genero == 'F' == true){
        console.log('Emancipada com sucesso!')
    }
    else{
        console.log('Você não atende algum dos nossos requisitos')
    }
*/