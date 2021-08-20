//Escreva uma carta para você mesmo ler ao final do curso, e imprima no console.

var prompt = require("prompt-sync")()

var carta = prompt('O Curso chegou ao fim? Responda S ou N: ')

if(carta == "S"){
    var texto = 'Espero que tenha gostado da jornada! mas lembre-se esse é apenas o inicio dela, continue se esforçando e sempre buscando evoluir'
    var texto2 = 'Além de tudo espero que tenha se divertido (mesmo com todas as dificuldades) nessa sua jornada de aprendizado e mudança'
    var texto3 = 'Se você chegou até aqui creio que suas expectativas foram atendidas de conseguir bastante conhecimento com os professores e colegas, que tenha se transformado para o melhor e consiga ver as coisas de diferentes perspectiva'
    var texto4 = 'Sogrinha Meu Guerreiro, Voa MLK!'
    console.log(texto, texto2, texto3, texto4)
}
else{
    console.log("Keep Calm, Good Things Take Time")
}