/* . O “gerador de tabela verdade” solicita ao aluno de programação qual
operador lógico quer visualizar (e, ou), e depois imprime na tela a tabela
verdade montada em um laço. */

var p;
var q;

for(i = 0; i < 4; i++){

    var p = (i == 0) || (i == 1)

    var q = (i == 0) || (i == 2)

    var res = p && q

    console.log(`${p} | ${q} | ${res}`)
}