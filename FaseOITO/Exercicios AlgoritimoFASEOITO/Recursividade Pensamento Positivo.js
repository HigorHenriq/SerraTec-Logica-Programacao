//FUNCTION UTILIZANDO RECURSIVIDADE
/*function SubstituirTodos(texto, antigo, novo){
    var resultado = texto.replace(antigo, novo);
    var posicao = resultado.indexOf(antigo);

    if (posicao > -1){
        console.log("Ainda tem ocorrencia");
        resultado = SubstituirTodos(resultado, antigo, novo);
    }
    else{
        console.log("Tudo substituito")
    }

    return resultado;
}*/

var frase = "Eu não vou terminar esse curso. Eu não tenho capacidade, hoje não dá"

/*var nova = SubstituirTodos(frase, "não", "sim");
console.log(nova);*/

//FUNCTION UTILIZANDO REPETIÇÃO PADRAO
function substituirTudo(texto, antigo, novo){
    var resultado = texto;

    do{
        resultado = resultado.replace(antigo, novo);
        var posicao = resultado.indexOf(antigo);
    }while(posicao > -1)

    return resultado
}

var nova = substituirTudo(frase, "não", "sim");
console.log(nova)