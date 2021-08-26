/*
 O “mini DP” aumentou seus cálculos. Agora, considere a jornada de
trabalho semanal de um funcionário, que é de 40 horas. O funcionário que
trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da
hora regular com um acréscimo de 50%. Considerando que o mês possui 4
semanas exatas, e que a entrada de horas será um valor maior que a
jornada normal.
a. Salário base (valor da hora * horas normais)
b. Valor de horas extras
c. Valor do desconto para o INSS
d. Salário líquido (Salário base + horas extras – desconto INSS)
e. Imprimir na tela o contracheque do funcionário.
*/

var horas = 45;

var dias_trab = 20;

var horas_semana = horas/dias_trab;

var valor_por_hora = 16;

var horas_extra = 2;

var acrescimo = 50/100;

const INSS = 103;


const salario_base = (valor_por_hora * dias_trab * 6);
console.log("Salario base: " + salario_base);

if(horas > 40){
    var extra = (valor_por_hora * horas_extra);
    console.log("A receber das horas extras: " + extra);
}

var desc_inss = salario_base - INSS;
console.log("Salario com desconto do inss: " + desc_inss);

var calculoFinal = salario_base + extra - INSS
console.log("Contra-cheque R$" + calculoFinal)