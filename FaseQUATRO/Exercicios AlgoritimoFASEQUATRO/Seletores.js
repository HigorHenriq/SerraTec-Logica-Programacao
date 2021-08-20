{
const PROMPT = require("prompt-sync")();

const LIMITE_CLIENTES = 8;

var quantidade = PROMPT('Quantas pessoas tem na loja? ');

if (quantidade < LIMITE_CLIENTES){
    console.log('Entrada Liberada')
}
else{
    console.log('Loja antingiu seu limite')
}
}