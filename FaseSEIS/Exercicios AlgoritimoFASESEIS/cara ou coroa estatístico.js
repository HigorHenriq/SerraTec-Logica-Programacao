/* . O “cara ou coroa estatístico” vai jogar a moeda mil vezes, e depois
demonstrar percentualmente as aparições de caras ou coroas.
Pesquise sobre a função de números aleatórios, para sortear um número e
usá-lo como sendo a resposta da moeda.
 */

var cara = 0;
var coroa = 0;

for(i = 1; i <= 1000; i++){
    var aleatorio = Math.floor(Math.random()*2)
    
    if(aleatorio == 1){
        cara ++
    }
    else{
        coroa ++
    }
}



console.log(`Cara ${cara * 10 / 100}%`);

console.log(`Coraa ${coroa * 10 / 100}%`);