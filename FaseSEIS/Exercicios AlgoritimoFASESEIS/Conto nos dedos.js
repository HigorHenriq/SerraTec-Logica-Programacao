/* No programa “Conto nos dedos”, a criança diz até qual número quer contar,
e os números aparecem na tela em sequência. Ela vai experimentar vários
números, até que digite um zero para parar de contar.
 */

const prompt = require("prompt-sync")()


do{

    var contar = prompt ("Até qual número vai contar: ");

    for ( let i = 1; i <= contar; i++){
        console.log(i)
    }

}while(contar != 0)