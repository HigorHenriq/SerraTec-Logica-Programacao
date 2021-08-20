//Se o limite de pessoas passar de 8, então bloqueie a entrada
const PROMPT = require("prompt-sync")();

const LIMITE_CLIENTES = 8;

var quantidade = PROMPT('Quantas pessoas tem na loja? ');

var entrada = (quantidade < LIMITE_CLIENTES);
console.log('Entrada Liberada? ', entrada);

var bloq = (quantidade >= LIMITE_CLIENTES)
console.log('Loja atingiu seu limite', bloq)