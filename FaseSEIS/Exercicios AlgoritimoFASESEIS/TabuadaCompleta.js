console.log("Todas as tabuadas");

for (var tabuada = 1; tabuada <= 10; tabuada++){

    console.log(`Tabuada de ${tabuada}`);

        for (var inicio2 = 1; inicio2 <= 10; inicio2++){
            var resultado2 = tabuada * inicio2;
            console.log(`${tabuada} x ${inicio2}'parte2' = ${resultado2}`)
        }
    console.log("----------")
}