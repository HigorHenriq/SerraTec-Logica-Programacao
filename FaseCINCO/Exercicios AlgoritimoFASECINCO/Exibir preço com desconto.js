/*
O vendedor das Casas Sergipe não pode perder negócio. Por isso, após o
item, o sistema pergunta se deseja “Exibir preço com desconto”, que deve
abater 5% no valor do produto.
*/

const prompt = require("prompt-sync")()

//PREÇOS PRODUTOS
var cadeira_simples = 100.00;
var cadeira_luxo = 200.00;
var mesa_simples = 450.00;
var mesa_luxo = 900.00;
var cama = 1500.00;

//info cod
var cadeira_simples_cod = '001';
var cadeira_luxo_cod = '002';
var mesa_simples_cod = '003';
var mesa_luxo_cod = '004';
var cama_cod = '005';

const produto = prompt ('Qual código produto deseja pesquisar: ');

if (produto == '001'){
    console.log(`Produto Cadeira Simples - R$${cadeira_simples}`);

        var desconto = prompt('Exibir preço de desconto? ');

            if(desconto == 'sim'){
                var calculo = cadeira_simples * 0.05
                    console.log(`Desconto de: R$${calculo}`)
            }
}

if (produto == '002'){
    console.log(`Produto Cadeira Luxo - R$${cadeira_luxo}`);
       
    var desconto = prompt('Exibir preço de desconto? ');

        if(desconto == 'sim'){
            var calculo = cadeira_luxo * 0.05;
                console.log(`Desconto de: R$${calculo}`)
        }
}

if (produto == '003'){
    console.log(`Produto Mesa Simples - R$${mesa_simples}`);

    var desconto = prompt('Exibir preço de desconto? ');

        if(desconto == 'sim'){
            var calculo = mesa_simples * 0.05;
                console.log(`Desconto de: R$${calculo}`)
        }
}

if (produto == '004'){
    console.log(`Produto Mesa Luxo - R$${mesa_luxo}`);

    var desconto = prompt('Exibir preço de desconto? ');

        if(desconto == 'sim'){
            var calculo = mesa_luxo * 0.05;
                console.log(`Desconto de: R$${calculo}`)
        }
}

if (produto == '005'){
    console.log(`Produto Mesa Luxo - R$${cama}`);

    var desconto = prompt('Exibir preço de desconto? ');

        if(desconto == 'sim'){
            var calculo = cama * 0.05;
                console.log(`Desconto de: R$${calculo}`)
        }
}