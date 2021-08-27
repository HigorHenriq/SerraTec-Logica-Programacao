/* . O programa “Veja os números pares” agora utiliza condições de fluxo e
parada */

let pares = 0;
var continuar = "S";

for (let i = 0; i <= 20; i++){
    pares = i;

    if(pares != 2 || pares != 4 || pares != 6 || pares != 8 || pares != 10){
        console.log(pares)
        continue;
    }

        if( pares == 12 || pares == 14 || pares == 16 || pares == 18 || pares == 20){
            console.log(pares)
            continue;
        }

}