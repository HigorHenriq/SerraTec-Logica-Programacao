1. Por quê os textos são envolvidos entre aspas?

> Para ser interpretado como String

2. Qual é a potência de dois que forma o número decimal 127? (dois elevado
   a…)

> 2 ^ 7 é a base

3. Ainda para o decimal 127, qual o número binário equivalente a ele?

> É 1111111

4. De que formas podemos utilizar aspas dentro de texto, no momento da
   atribuição?

> Podemos utilizar os três tipos de aspas Simples '', Duplas "" e Craseada ``

5. Em JavaScript, responda as perguntas sobre caracteres.
   Dica: Pesquise por funções do JS que possuem “char” no nome.

-   a. É possível “extrair” um caractere de um texto utilizando sua posição numérica? Ex. Obter o terceiro caractere de uma palavra?

    > Sim, basta utilizar uma variavel recebendo o indexOf do texto e após criar uma nova variavel recebendo aquela primeira varivel que contem o index em um charCodeAt

-   b. A partir de um caractere, é possível saber a sua posição numérica na tabela de caracteres (Ex. ASCII)? Ex. A posição de “A” é 65.

    > Sim, basta pensar onde na Lista a primeira parte são ... caracteres que termina em 63, a partir dai começa a parte 2 de caracteres comuns, onde 64 é o @ como inicio, após vem as letras MAIUSCULAS, Segundo os caracteres do tipo ... , terceiro as letras minusculas

6. Entendendo os caracteres (Char), a tabela ASCII, e o console:

-   a. Quantos elementos possui a tabela ASCII?

    > 255

-   b. Em quantas partes a tabela é dividida?

    > Em duas partes, Caracteres não imprimiveis e os mais comuns

-   c. O espaço é um caractere?

    > Sim, sua sigla é sp

-   d. Qual o caractere de escape?

    > esc

-   e. É possível utilizar o caractere de escape como parte do texto?

    > Apenas no formato string

-   f. Qual a posição do símbolo @ ?

    > 64

-   g. O tab existe na tabela? Como utilizar o tab com o escape?

    > Sim, sua sigla é ht(horizontal tab),

-   h. Qual o índice do primeiro número?

    >

-   i. Segundo a tabela, seria possível “voltar” e apagar um caractere já escrito?

    > Sim, utilizando o caractere de controle backspace

-   j. Existe algum caractere originalmente criado para emitir um sinal sonoro (bip)?
    > Sim, sua sigla é bel(bell character)

7. Explique o conceito do ‘caractere de escape’.

> Combinações de caracteres que consistem em uma faixa invertida ( ) seguidas por uma letra ou por uma combinação de \ dígitos são chamadas de "sequências de escape".

Sequência de escape | Representa
\a | Campainha (alerta)
\b | Backspace
\f | Avanço de formulário
\n | Nova linha
\r | Retorno de carro
\t | Guia horizontal
\v | Guia vertical
\' | Aspas simples
\" | Aspas duplas
\\ | Barra invertida
\? | Ponto de interrogação literal
\*\*\*\* | ooo Caractere ASCII em notação octal
\x h oh Caractere Unicode em notação hexadecimal, se esta sequência de escape é usada em uma constante de caractere largo ou uma literal de cadeia de caracteres Unicode.

8. Como você costuma chamar o símbolo ‘#’? Quais outros nomes você
   conhece para ele?

> HashTag, Jogo da Velha

9. O que é o “Unicode” em uma string JavaScript?

> Unicode são caracteres abstratos que são lidos em númeração exemplo: u+0068, ele é lido em números para que o computador consiga interpretar o que foi dito.

10. Como podemos escrever caracteres em unicode utilizando o escape?

> Utilizando o u+ ou \u+, e o restante do código do caractere
