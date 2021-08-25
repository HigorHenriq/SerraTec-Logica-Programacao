/*
O restaurante Zépa conta com um algoritmo de tecnologia de ponta para clientes fazerem seus pedidos de forma prática e rápida. O cardápio conta com hambúrguer vegetariano, batata frita com queijo e refrigerante (respectivamente nos valores R$35, R$15 e R$15).
*/

var prompt = require("prompt-sync")();

var refeição1 = 'Hambúrguer Vegetariano';
var refeição2 = 'Batata frita c/ queijo';
var refeição3 = 'Refrigerante';

var preco_re1 = 35;
var preco_re2 = 15;
var preco_re3 = 15;

var pedido1;
var pedido2;
var pedido3;

console.log(`Nosso cardapio\n ${refeição1} - R$${preco_re1}\n ${refeição2} - R$${preco_re2}\n ${refeição3} - R$${preco_re3}.`);
console.log("!=========================!")
console.log("!=========================!")
console.log("Digite 'S' para as opções que quiser\nDigite 'N' para as que não quiser")
console.log("!=========DIGITAR OUTRA COISA SERÁ DESCONSIDERADA O PEDIDO============!")

do{
    if(pedido1 != 'S' && pedido1 != 'N'){
        pedido1 = prompt (`Deseja ${refeição1}? `);
            if(pedido1 == 'S'){
                pedido1 = preco_re1;
            }
            else{
                pedido1 = 0;
            }
    }
    if(pedido2 != 'S' && pedido2 != 'N'){
        pedido2 = prompt (`Deseja ${refeição2}? `);
            if(pedido2 == 'S'){
                pedido2 = preco_re2
            }
            else{
                pedido2 = 0;
            }
    }
    if(pedido3 != 'S' && pedido3 != 'N'){
        pedido3 = prompt (`Deseja ${refeição3}? `);
            if(pedido3 == 'S'){
                pedido3 = preco_re3;
            }
            else{
                pedido3 = 0;
            }
    }
    var preco_final = pedido1 + pedido2 + pedido3
}while(preco_final <= 0)

console.log(`Total a se pagar R$${preco_final}`)