   ## Aula 3

## _Pensamento Antes de criar qualquer programação: Entrada, processamento e saída_

## SCM

 SCM é a sigla para **Source Control Management** ou gerenciamente de código fonte

## Artefatos

* OlaMundo.html
* bolo.mds
* foto.jpd
* aula.js

>todos esses são arquivos que podem ser editados.

## Repositório

Um **Repositorio é um Banco de dados**. É um local virtual, em um servidor,podemos aramazenar nossos arquivos.

## Git

**Git** é um sistema de controle de artefatos de código fonte git é livre(open source)

## Leitura de informações do console

**prompt** ("texto para a janela que irá aparecer")
* Ela irá retornar o valor que foi digitado
* ## __Instalação do prompt basta digitar npm install prompt-sync no console__
* ## Sempre no inicar do seu código utiliza - _var prompt = require("prompt-sync")()_
* Exemplo mais detalhado de prompt em Leitura.js

>Ex: var nome = prompt("Digite um nome");

>A pessoa digita o nome e irá retornar isso no seu console

>Nome digitado = "Edu"
>Dando console.log(nome) a var nome agora vai ser = Edu

## Operadores
### Aritimeticos

1. Binários = 2 Valores, um Operando esquerda com operador operando da direita( %(resto da divisão), /, *, divisão )

* 2 - 2
* 2 + 2

2. Unários = Necessita apenas de um operador

* -5
* +3

3. Relacionais = Usado muito para True or False

* igual ==
* diferente !=
* maior >
* menor <
* maior ou igual >=
* menor ou igual <=

>Os operadores também podem ser utilizados em letras ou string completa

## Constante e Constante de substiuição

* usa Const
* Após definir o identificador da sua const não pode ser mudado
* Const é usada para um valor que nunca vai mudar
* Constante é boa para ser usada como Segurança, para não atribuir por engano denovo
* Constante não é indicada para usar em avaliação de dados 

# Incrementação

Ao definir a opção ++ ou -- em uma outra variavel, ela não vai me entregar o valor já somado e sim o valor atual da variavel

## Com o ++ ou -- Depois
>Em Resumo basta pensar que há um delay de 1ms(1linha) para executar a ação, ele só executa a soma ou subtração depois
* Ex var numero = 15;
*  var resposta = numero++; (Neste momento a var resposta ainda recebe 15)
*  console.log(numero)(Agora se eu for ver o valor aqui, ele já irá ter somado e resposta está valendo 16)
*  console.log(resposta)(Aqui a resposta ainda continuara valendo 15)

## Com o ++ ou -- Antes
>Em Resumo, o ++ antes ele ja realiza a ação no inicio
* Ex var numero = 15;
*  var resposta = ++numero; (Neste momento a var numero ja irá valer 16, assim como a resposta)
*  console.log(numero)(Agora ja está valendo 16)
*  console.log(resposta)(Aqui já estará valendo 16)

## Soma ou Sub com forma rapida

*var num = 0;
*basta adicionar var num += 4 
*console.log(num)(o num agora vai ser diretamente 4 já)