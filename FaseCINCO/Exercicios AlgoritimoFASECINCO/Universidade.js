/*
Os boletos da "Universidade" são emitidos com vencimento no dia 15 do
mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido
um desconto na próxima mensalidade. O programa irá receber o número
do boleto e o dia do pagamento, e emitir o extrato.
*/

const prompt = require("prompt-sync")()

var dia = prompt ("Dia de hoje: ");

var pagamento = prompt ("Dia do pagamento: ");

var boleto = 156899;

var desconto = pagamento >= 10 || pagamento <= 13;

if(desconto){
    console.log("Desconto na próxima mensalidade? " + desconto)
}
else{
    console.log("Desconto na próxima mensalidade? " + desconto)
}