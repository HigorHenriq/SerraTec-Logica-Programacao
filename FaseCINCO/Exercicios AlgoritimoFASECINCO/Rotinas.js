/*
Braya sempre tem a mesma rotina nos fins de semana. Pela manhã, tendo
sol, vai à praia. Do contrário, aproveita pra estudar. À tarde é ainda mais
regrado: para o almoço na praia, leva um lanche; em casa, feijoada. Após
almoçar, assiste televisão e tira um cochilo. Agora ele quer imprimir seus
hábitos em papel na sexta, após a previsão do tempo, e colar na porta da
geladeira.
*/

const prompt = require("prompt-sync")();

var pergunta = prompt("Está fazendo sol?" );

if(pergunta == 'sim'){
    console.log('Dia de praia');

    pergunta = prompt("Já está de tarde?" );
        if(pergunta == "sim"){
            console.log("Comer o lanche");
        }
}
else{
    console.log('Vamos aproveitar para estudar');

    pergunta = prompt("Já está de tarde?" );
        if(pergunta == "sim"){
            console.log("Vamos almoçar hoje será feijoada");
        }
        console.log("Após assista tv e tire um cochilo")
}