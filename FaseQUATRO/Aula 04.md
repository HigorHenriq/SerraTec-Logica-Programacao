# Aula04

* Ctrl + F = Para pesquisar alguma palavra no VS.
* Ctrl + H = Para pesquisar por alguma palavra no VS.
* F2 = Renomeação de identificadores

### fonte externa(biblioteca) também pode ser chamada de API

## Nos operadores E (||), OU (&&), não contem uma ordem, irá seguir a ordem padrão da esquerda para direita

* Conjunção, ou and(E). A expressão somente é verdade quando ambos os operandos são verdade.

Disjunção, ou or(OU). A expressão é verdade quando qualquer dos operandos é verdade.

# Negação de operadores

## A negação das operações é a parte da álgebra relacional, ou seja, matemática.

* Negação, ou not( ! ) Retorna o valor oposto do operando.

# Teste de mesa

## Teste de mesa, também chamado de teste chines, significa basicamente anotar no papel o valor das variasveis a cada linha

* Conhecido como depuração

# Negação de operadores

Operador | Negação
:--------|---------:
==	     | !=
!=	     | ==
(>)	     | <=
(>=)     | (<)
<	     | >=
<=	     | >
and	     | or not
or	     | and not

# Condições/Seletores

O if(Se) executa apenas uma instrução, ele só é acionado quando a expressão é true/verdadeira

* Dentro do if pode se fazer uma corrente, pode conter um if e else de seu if principal

o else(Senão) necessita do if, ele não pode ser utilizado sozinho, o else é exectuado quando sua expressão da false

* Dentro do else também pode conter uma corrente de if e else.

### Seletor de escolha

O switch = mudar/trocar
É possível encadear **casos**, assim, mais de uma opção pode ‘mapear’ para a mesma ‘resposta’.

* Os itens da seleção não podem ser variáveis, apenas constantes - elementos do conjunto, valores do tipo de dados.

📢 Quando usar **case**?

- Em listas de seleção.
- Grupos de constantes.
- Comparações de *igualdade*.
- Quando mais de uma opção ‘mapeia’ para o mesmo valor.

📢 Quando não usar **case**?

- Quando tenho dois ou menos elementos a testar.
- Quando o tipo de dados não é ordinal (ex. float).
- Quando o operador não é de *igualdade*.
- Quando o valor das alternativas não é constante.

Break = É utilizado como parar/quebrar na linha onde achar a resposta/instrução que lhe foi dada

Default = Caso a resposta não corresponda com nenhum dos casos de cima

**Exemplo em JavaScript**

const fruta = '🍌';

switch (fruta) {
  case '🍍':
    console.log('Faça um chá com a casca.');
    break;
  case '🍉':
  case '🍊':
    console.log('Melancia e laranja são frutas do verão.');
    break;
  default:
    console.log('Sem informações sobre a fruta.');
}

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