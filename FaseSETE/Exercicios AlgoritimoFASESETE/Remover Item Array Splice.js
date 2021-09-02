var estados = ['RJ', 'MG', 'SP', 'SC', 'SP', 'SP', 'PR', 'PE', 'PA'];
var buscar = 'SP';
var indice = estados.indexOf(buscar);
while (indice >= 0) {
	estados.splice(indice, 1);
	indice = estados.indexOf(buscar);
}
console.log(estados);
