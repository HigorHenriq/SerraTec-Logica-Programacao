console.log("Bravo Heroi, o grande e poderoso dragão 'Programaçãnção' esta vindo para destruis o mundo, e só você podera nos salvar!")
"─────▄████▀█▄"
"───▄█████████████████▄"
"─▄█████.▼.▼.▼.▼.▼.▼▼▼▼"
"▄███████▄.▲.▲▲▲▲▲▲▲▲",
"████████████████████▀▀"

console.log("Escolha uma das seguintes armas: (Sapato) 👠, (Espada) ⚔️, e (Faca) 🔪")

const prompt = require("prompt-sync")();

const jogador = prompt('Escolha um dos itens'['Sapato', 'Espada', 'Faca']);

const mov_drag = ['Ataque Rapido', 'Ataque a distancia', 'Areas vitais Abertas'];
var sorteio = Math.floor(Math.random()*3);

var maquina = sorteio[mov_drag];
console.log(maquina)
console.log(sorteio)

do{
if(jogador == ''){
    console.log("Escolha seu armamento meu heroi!")
}
}while(jogador == '')

//var pocao = prompt('Você recebeu uma poção da vida, quer continuar? "Sim" "Nao" ');

    if(
        (jogador == 'Sapato' && maquina == 'Ataque Rapido') ||
        (jogador == 'Espada' && maquina == 'Ataque a distancia') ||
        (jogador == 'Faca' && maquina == 'Areas vitais Abertas') 
    )
    {
        console.log(`Dragão usou ${maquina}`)
        console.log("Você conseguiu ferir o dragão");
    }

else{

    console.log(`Dragão usou ${maquina}`)
    console.log("Você morreu!");
}

