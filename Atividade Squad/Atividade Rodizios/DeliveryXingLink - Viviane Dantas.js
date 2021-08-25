/*
Delivery de comida Japonesa "XingLink" iniciando suas atividades precisa contratar motoboy e, como tem uma certa urgência na contratação , não pode ficar perdendo tempo com currículos que não atendam aos requisitos da vaga. O objetivo é fazer uma pré-seleção e permitir que somente candidatos que cumpram tais requisitos enviem seu currículo para o RH.

+Perguntas+

Possui CNH Categoria A? Sim / Não
CNH está na validade? Sim / Não
Possui experiência na área? Sim / Não

Se as respostas acima forem verdadeiras então o candidado estará apto para enviar o curriculo para analise
*/

const prompt = require("prompt-sync")();

//ENTRADA

console.log("Responda as perguntas SOMENTE com 'Sim' ou 'Nao'");

var pergunta_cnh = prompt("Possui CNH A? ");
var possui_cnh = pergunta_cnh == 'Sim'

var pergunta_cnh_val = prompt("CNH está na validade? ");
var atualizada_cnh = pergunta_cnh_val == 'Sim'

var pergunta_xp = prompt("Possui experiência na área? ");
var xp = pergunta_xp == 'Sim'

var resultado_cnh = possui_cnh;
console.log("Possui CNH Categoria A: ",resultado_cnh);

var resultado_cnh_val = atualizada_cnh;
console.log("CNH está atualizada: ", resultado_cnh_val);

var resultado_xp = xp;
console.log("Possui experiência na área: ",resultado_xp);

var resposta_final = resultado_cnh == true && resultado_cnh_val == true && resultado_xp == true;

if(resposta_final == true){
    console.log("Candidato apto para enviar curriculo");
}
else{
    console.log("Infelizmente você não antende nossos requisitos")
}