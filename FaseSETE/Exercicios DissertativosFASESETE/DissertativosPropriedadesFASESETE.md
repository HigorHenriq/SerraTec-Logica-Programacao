1. O que significa o termo zero-based?

> É o termo dado para quando um indice tem sua atribuição inicial no 0

2. Como saber o tamanho de um vetor?

> basta utilizar o NomeDoVetor.length

3. Qual a função de adição de elementos?

> NomeDaArray[Numero da Posição do item] = 'Algum Item'

4. Cite o exemplo de um iterador de arrays.

> for (parametro of NomeDaArray)

5. O que é uma função (ou algoritmo) de busca? Qual estrutura de repetição
   é mais prática para o uso?

> É quando a vai passando de valor em valor até encontrar o item que queria, a estrutura padrão utilizado é o for() com indice de onde inicia e onde termina controlada por um contador

6. Quais são as funções para exclusão de elementos?

> Para esse metodo primeiro precisamos localizar onde o item está utilizando o indexOf(), após localizar podemos utilizar o metodo splice().Exemplo

    * var numeros = [1, 2, 3, 4];
    * var index = numeros.indexOf(3);
    * if (index > -1){ numeros.splice (index, 1) };

    * Foi utilizado o -1 como condição para caso não conseguir localizar o item procurado

> O método splice recebe dois parâmetros, o primeiro é a posição no array e o segundo é a quantidade de elementos a remover. O splice modifica o array original e retorna um nova array contendo os elementos que foram removidos.
