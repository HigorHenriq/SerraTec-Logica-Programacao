//Cópia de informação
//duas variáveis com o mesmo valor

//variável carro1 *RECEBE* valor que está em carro2
console.log("Expressão Cópia de informação V")

var carro1 = "mercedes"
var carro2 = "mclaren"
var carro3 = "redbull"

console.log("primeiro lugar, está", carro1)
console.log("segundo lugar, está", carro2)
console.log("terceiro lugar, está", carro3)

//info
console.log(carro3, "Ultrapassando", carro2)

// carro2 recebe carro3
// mclaren vira redbull
var carro2 = carro3

console.log("segundo lugar agora é", carro2)