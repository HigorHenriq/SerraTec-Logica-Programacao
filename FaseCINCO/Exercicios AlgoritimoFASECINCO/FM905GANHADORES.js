/*
Os 5 primeiros ouvintes da 90FM a ligar ganharão ingresso
*/
//
//i = identificação padrão
for(i = 0; i < 5; i++){
    console.log('Parabéns aos vencedores ', i, '! pelos ingressos')
}

//Para aparecer de 1 a 5
for(i = 0; i < 5; i++){
    var num = i + 1
    console.log('Parabéns aos vencedores ', num, '! pelos ingressos')
}

//Para ir pulando casas
for(i = 0; i < 5; i += 2){
    var num = i + 1//Para aparecer a partir do 1 e não do 0
    console.log('Parabéns aos vencedores ', num, '! pelos ingressos')
}