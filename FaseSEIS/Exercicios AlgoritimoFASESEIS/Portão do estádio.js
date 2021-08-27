/*  No sistema “Portão do estádio” a entrada dos torcedores é controlada de
forma organizada e pacífica. O sistema solicita o número do bilhete e
direciona o torcedor para a arquibancada. Contudo, se algum mal
intencionado furar a fila (indicado por um bilhete com número negativo), a
entrada por aquele portão é fechada em definitivo, e todos precisarão ser
encaminhados para outro portão. */

const prompt = require("prompt-sync")()

let bilhete = prompt ("Numero do bilhete: ");

while(bilhete > 0){
    
    if(bilhete < 0){
        
        break;
    }
    
    else{
        
        console.log(`Bilhete ${bilhete} se direcione ao portão x`);
        
        bilhete = prompt ("Proximo bilhete: ");        
    }
    
}
console.log(`Bilhete ${bilhete} está negativo ou furou fila por isso, essa entrada está fechada`)
console.log(`Encaminhem para o proximo portão mais proximo`);