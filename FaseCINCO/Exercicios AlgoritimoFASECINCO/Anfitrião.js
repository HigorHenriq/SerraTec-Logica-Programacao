/*
O sistema “anfitrião” decidiu melhorar a ortografia nos ingressos
impressos, tanto nos plurais quanto na quantidade de visitas.
*/
//var txt = (`Você já nos visitou ${i} vezes`);

for (i = 1; i <= 3; i++){
    console.log(`Visitas: ${i}`);

    if(i == 1){
        console.log('Você já nos visitou uma vez');
    }

    if (i == 2){
        console.log('Você já nos visitou uma vez');
    }

    if (i == 3){
        console.log(`Você já nos visitou ${i} vez`);
    }
}