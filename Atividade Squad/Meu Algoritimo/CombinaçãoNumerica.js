/*
Pedro precisa descobrir UMA de suas QUATRO senhas, porém não tem nenhum email de recuperação,
mas Pedro lembra que suas senha é uma combinação de 4 números qualquer que vão de 1 a 5, onde a soma destes quatro valores será
igual a 7(PRIMEIRA SENHA), 15(SEGUNDA SENHA), 12(TERCEIRA SENHA) ou 9(QUARTA SENHA).
Para isso ele irá no algoritimo onde o computador só pode criar a combinação de forma Aleatória (Lembrando que o resultado final só precisa ser igual a 7, 15, 12 ou 9 a ordem da númeração que vier Não irá intervir)
+INSTRUÇÕES+
[O Pedro só poderá pedir somente UM NÚMERO POR VEZ, os numeros devem ser ALEATÓRIOS e INTEIROS
[Os Números aleatorios vão de 1 ATÉ 8
[O Pedro terá que pedir os números um total de 4 vezes e ao final deve exibir a soma deles
                                                                    L{Exemplo: A Soma entre 5, 7, 6, 4 é 22
[Se Pedro atingir a númeração 32 na soma final ou maior APARECE A MENSAGEM ('ATINGIU O LIMITE, TENTE NOVAMENTE!')
[Se Pedro bater a númeração 19 na SOMA FINAL ACHA A PRIMEIRA SENHA e APARECE A MENSAGEM ('SORTE GRANDE!, VOCÊ ACHOU A PRIMEIRA SENHA!')
[Se Pedro bater a numeração 22 na SOMA FINAL ACHA A SEGUNDA SENHA  APARECE A MENSAGEM ('SORTE GRANDE!, VOCÊ ACHOU A PRIMEIRA SENHA!')
[Se Pedro bater a numeração 24 na SOMA FINAL ACHA A SEGUNDA SENHA  APARECE A MENSAGEM ('SORTE GRANDE!, VOCÊ ACHOU A TERCEIRA SENHA!')
[Se Pedro bater a numeração 26 na SOMA FINAL ACHA A SEGUNDA SENHA  APARECE A MENSAGEM ('SORTE GRANDE!, VOCÊ ACHOU A QUARTA SENHA!')
[**ABAIXO DE CADA UMA DAS MENSAGEM QUE FOI CITADA ACIMA, BOTE ('===!APERTE "N" PARA CANCELAR ESSA COMBINAÇÃO!===') PARA SAIR DA COMBINAÇÃO**
[**NO FINAL EXIBA A MENSAGEM ('==!COMBINAÇÃO FECHADA COM SUCESSO!==')
*/

    const prompt = require("prompt-sync")()
//ENTRADA
const MAX_NUMBER = 18
const PRIMEIRA_SENHA = 7
const SEGUNDA_SENHA = 15
const TERCEIRA_SENHA = 12
const QUARTA_SENHA = 9

const iniciando = prompt("Aperte Alguma Letra Para Gerar Seu Número: ");

//CADA MAO VAI GERAR UM NOVO NUMERO
const PRIMEIRA_MAO = Math.floor(Math.random()*5 + 1);
const SEGUNDA_MAO = Math.floor(Math.random()*5 + 1);
const TERCEIRA_MAO = Math.floor(Math.random()*5 + 1);
const QUARTA_MAO = Math.floor(Math.random()*5 + 1);

var PrimeiroNum = PRIMEIRA_MAO;
   console.log('Seu Primeiro Número é: ', PrimeiroNum);

var SimOuNao = (pergunta != 'N');

//PROCESSAMENTO
while(SimOuNao){  
//INICIO DAS REPETIÇÕES PARA PEGAR OS NUMEROS   
    var pergunta = prompt("Criar Mais Um? Responda Somente 'SIM' ");
        if(pergunta == 'SIM'){
            var SegundoNum = SEGUNDA_MAO;
            console.log('Seu Segundo Número é: ', SegundoNum)
            var pergunta = prompt("Para Simular Mais Um Número Digite: 'OUTRO' ");
        }
            if(pergunta == 'OUTRO'){
                var TerceiroNum = TERCEIRA_MAO;
                console.log('Seu Terceiro Número é: ', TerceiroNum)
                var pergunta = prompt("Para A Criação De Seu Ultimo Digito, Digite: 'SORTE' ");
            }
                if(pergunta == 'SORTE'){
                    var QuartoNum = QUARTA_MAO;
                    console.log('Seu Quarto Número é: ', QuartoNum)   
                }//FINAL DAS REPETIÇÃO DOS NUMEROS

//SAIDA C/ SOMA DOS NUMEROS
    var soma = PrimeiroNum + SegundoNum + TerceiroNum + QuartoNum
    console.log(`A Soma Entre ${PrimeiroNum}, ${SegundoNum}, ${TerceiroNum} e ${QuartoNum} É IGUAL A: `, soma);

                //SAIDAS CASO O PEDRO PASSE DOS LIMITES, ACERTE A PRIMEIRA_SENHA OU TENHA ACERTADO A SEGUNDA_SENHA
                if(soma >= MAX_NUMBER){
                    console.log('ATINGIU O LIMITE, TENTE NOVAMENTE!')
                    console.log('===!APERTE "N" PARA CANCELAR ESSA COMBINAÇÃO!===')
                }
                    if(soma == PRIMEIRA_SENHA){
                        console.log('SORTE GRANDE!, VOCÊ ACHOU A PRIMEIRA SENHA!')
                        console.log('===!APERTE "N" PARA CANCELAR ESSA COMBINAÇÃO!===')
                    }
                        if(soma == SEGUNDA_SENHA){
                            console.log('SORTE GRANDE!, VOCÊ ACHOU A SEGUNDA SENHA!')
                            console.log('===!APERTE "N" PARA CANCELAR ESSA COMBINAÇÃO!===')
                        }      
                            if(soma == TERCEIRA_SENHA){
                                console.log('SORTE GRANDE!, VOCÊ ACHOU A TERCEIRA SENHA!')
                                console.log('===!APERTE "N" PARA CANCELAR ESSA COMBINAÇÃO!===')
                            }    
                                if(soma == QUARTA_SENHA){
                                    console.log('SORTE GRANDE!, VOCÊ ACHOU A QUARTA SENHA!')
                                    console.log('===!APERTE "N" PARA CANCELAR ESSA COMBINAÇÃO!===')
                                }    
    var SimOuNao = (pergunta != 'N');  
}
console.log('==!COMBINAÇÃO FECHADA COM SUCESSO!==')
