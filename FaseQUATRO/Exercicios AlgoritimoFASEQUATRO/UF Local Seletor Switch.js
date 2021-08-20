//O sistema irá solicitar a digitação da sigla da 'UF' de onde você mora. ALT + Z = colar na mesma linha sem precisar rolar para horizontal. Para os sudeste bote a opção de letra minuscula. 

const prompt = require("prompt-sync")()
//ENTRADA

const local = prompt ('Qual sua UF? ')

//PROCESSAMENTO

//SAIDA

switch (local){
    case 'RJ' :
        console.log('Rio de janeiro')
    break;
    case 'rj':
        console.log('Rio de janeiro')
    break;
    case 'SP' :
        console.log('São Paulo')
    break;
    case 'ES' :
        console.log('Espirito Santo')
    break;
    case 'es':
        console.log('Rio de janeiro')
    break;
    case 'SC' :
        console.log('Santa Catarina')
    break;
    case 'RS' :
        console.log('Rio Grande do Sul')
    break;
    case 'GO' :
        console.log('Goiás')
    break;
        default:
        console.log('Não encontramos informações sobre o carro');
}