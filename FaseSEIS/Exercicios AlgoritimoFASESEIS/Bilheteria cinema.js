/*  A bilheteria do cinema reservou todas as poltronas terminadas em 6 para
deficientes. A sala de projeção possui 40 lugares, e para cada um, o sistema
irá imprimir se o ingresso pode ser vendido ou não.
*/
const prompt = require("prompt-sync")()

let cadeiras;

for(let i = 0; i <= 40; i++){
    cadeiras = i
    console.log(cadeiras)

    if(cadeiras == 6 || cadeiras == 16 || cadeiras == 26 || cadeiras == 36){
        console.log(`A cadeira ${cadeiras} é reservada para deficientes`);

        var pergunta = prompt ("Você é portador de alguma e gostaria de reservar essa poltrona? ")

            if(pergunta == 'S'){
                console.log('Comprada com sucesso')
                break;
            }
            else{
                console.log('Passando para as proximas cadeiras')
            }
    }
}