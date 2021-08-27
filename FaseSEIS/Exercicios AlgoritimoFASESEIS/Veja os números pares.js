/* No programa “Veja os números pares”, o console apresentará uma frase
com os números pares entre 2 e 10, separados por vírgula e na mesma
linha. A frase termina com ponto, não com vírgula. Após escrever a frase, o
sistema pede para continuar, e a cada confirmação, exibe a nova
mensagem na sequência (entre 12 e 20 etc) */

const prompt = require("prompt-sync")()

do{
    
    var continuar = prompt("Continuar:'S' / 'N': ");
    
    while(continuar == 'S'){

        var txt_par = '2, 4, 6, 8, 10.'

        console.log(`${txt_par}`)
        
        var continuar = prompt("Continuar:'P' / 'N': ");
        
        var txt_par = '12, 14, 16, 18, 20.'
    
        console.log(`${txt_par}`)
    } 
    
    
}while(continuar != 'N')