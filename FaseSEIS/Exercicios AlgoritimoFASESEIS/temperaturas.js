/* Para exibir a tabela de “temperaturas”, o programa irá exibir os graus
Celsius entre 0º e 40ºC, além da equivalência com os graus Fahrenheit. */

var celsius = 0;
var fahr;

for (let i = celsius; i <= 40; i++){

    celsius = i
    fahr = celsius * 1.8 + 32;
    console.log(`${celsius}°C equivalente à ${Math.round(fahr)}°F`);
}