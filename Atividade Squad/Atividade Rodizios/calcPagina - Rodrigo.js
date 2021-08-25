/*
Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está
sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos
dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem
ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas
decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está
iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: Revolucao dos Bichos e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo
usuário não pode ser o mesmo da recomendação.
*/

const prompt = require('prompt-sync')();
//LIVROS RECOMENDADOS
//LIVROS DE 100 PAGINAS MENOS
var pag_menos100 = 'Revolucao dos Bichos';
var pag2_menos100 = 'O Alienista';

//LIVROS ENTRE 101 E 499 PAG
var pag_mais100 = 'O Homem Invisivel';
var pag2_mais100 = 'Eu, Robo';

//LIVROS MAIS OU IGUAL A 500 PAG
var pag_mais500 = 'Moby Dick';
var pag2_mais500 = 'Duna';

console.log("Bem Vindo!");
//PERGUNTAS INI
const pergunta_inicial = prompt("Você está lendo qual livro no momento? ");

    const paginas = prompt("Quantas páginas tem o livro que você está lendo? ");

        const prazo = prompt("Falta quantos dias para o prazo de leitura? ");

//CALCULAR AS PAG
var calc = Math.floor(paginas / prazo);
console.log(`Você precisa ler ${calc} páginas dias até o deadline`)

//CONDIÇÕES PARA NÃO INDICAR O MESMO LIVRO

var novo_livro = prompt("Deseja uma nova recomendação para sua proxima leitura?\n -'Sim' / 'Nao'-  ");
    //SAIDAS DE RECOMENDACAO PARA O USUARIO
    if(calc < 100 && pergunta_inicial != pag_menos100){
        console.log(`De acordo com sua leitura de ${pergunta_inicial}, recomendamos ${pag_menos100}`)
    }
    if(calc < 100 && pergunta_inicial != pag2_menos100 && pergunta_inicial == pag_menos100){
        console.log(`De acordo com sua leitura de ${pergunta_inicial}, recomendamos ${pag2_menos100}`)
    }
        //101 / 499
        if(calc >= 101 && calc <= 499 && pergunta_inicial != pag_mais100){
            console.log(`De acordo com sua leitura de ${pergunta_inicial}, recomendamos ${pag_mais100}`)
        }
        if(calc >= 101 && calc <= 499 && pergunta_inicial != pag_mais100 && pergunta_inicial == pag_mais100){
            console.log(`De acordo com sua leitura de ${pergunta_inicial}, recomendamos ${pag2_mais100}`)
        }

            //500+
            if(calc >= 500 && pergunta_inicial != pag_mais500){
                console.log(`De acordo com sua leitura de ${pergunta_inicial}, recomendamos ${pag_mais500}`)
            }
            if(calc >= 101 && calc <= 499 && pergunta_inicial != pag_mais500 && pergunta_inicial == pag_mais500){
                console.log(`De acordo com sua leitura de ${pergunta_inicial}, recomendamos ${pag2_mais500}`)
            }


