//Operador OU ( || )
//Quando QUALQUER dos valores é verdade

var servidorDragao = false;
var servidorGuerrilha = true;

var entrar = servidorDragao || servidorGuerrilha

console.log("Estou conectado em algum discord? ", entrar);

/*
P     |   Q   | OU(||)
------+-------=
true  | true  | TRUE
true  | false | TRUE
false | true  | TRUE
false | false | FALSE
*/
/*
P  |  Q  | OU (Equivalenta á (soma, mais, +))
1  |  1  | 1
1  |  0  | 1
0  |  1  | 1
0  |  0  | 0
*/


//Operar E (&&)
//Quando AMBOS os valores são valores

var fruta1 = true;
var fruta2 = true;

var caixaDeFruta = fruta1 && fruta2;

console.log("As caixas de fruta são iguais? ", caixaDeFruta)
/*
P     |   Q   | E (&&)
------+-------=
true  | true  | TRUE
true  | false | FALSE
false | true  | FALSE
false | false | FALSE
*/
/*
P  |  not 
0  | -0
1  | -1
*/


//Operador Unário Not (!)
//Retorna o valor oposto

var professor = true;
var servidorAlunos = ! professor;

console.log("O professor pode entrar no servidor dos alunos? ", servidorAlunos);
/*
P     |  not (equivalente a -)
true  | false
false | true
*/
/*
P  |  not 
0  | -0
1  | -1
*/

