/*
O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos.
Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de
direcionamento:
acima de 67 anos = Por quê não vacinou ainda?
Abaixo de 67 anos = Volte na próxima semana
67 anos completos = Vacinação hoje.
*/
const prompt = require("prompt-sync")()
//ENTRADA
var idadeVAC = 67;

var pergunta_idade = prompt("QUAL SUA IDADE? ");
//PROCESSAMENTO
    if(pergunta_idade > idadeVAC){
        console.log('Porque você não vacinou ainda?');
    }

    if(pergunta_idade == idadeVAC){
        console.log("Sua vacinação é hoje! Venha se tornar um jacaré");
    }

    if(pergunta_idade < idadeVAC){
        console.log('Volte na próxima semana');
    }
//SAIDA
