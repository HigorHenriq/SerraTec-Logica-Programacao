# Aula 5

# Repetições indefinidas

São controladas por uma condição, semelhante a um **if**. A condição pode ser de continuidade ou de parada.

Podem ser instruções de enquanto ou repita. Resumo:

* Enquanto verdade faça
* repita até que não seja verdade

enquanto <continuidade>
  <instrução>;

faça
  <instrução>;
enquanto <continuidade>

>o while e do while é recomendado para utilizar quando não se tem ideia de quando irá ter seu final,ou seja, indefinidos.

1. O teste do **while** é no início, o teste do **do..while** no final.
2. **do..while** é executado pelo menos uma vez. o **while** pode nem ser executado.
3. **Ambos,** repete quando resultado da expressão é `true`, pára quando resultado é `false`.
4. **Ambos**, semelhante ao **if**, executam uma instrução após a condição. Para mais instruções é necessário um bloco de comandos.

# Repetições definidas

- ordinais
- sequenciais
- Permite controlar início, incremento e iteração

Facilita a construção de repetições com contagem. Útil quando existe o acesso a índices (ordinais). A contadora é inicializada e incrementada automaticamente pelo comando.

para (<inicializacao>; <condicao>; <final>)
  <instrucao>;
  * para = for
  * Por convenção, é utilizada a letra i como identificador para a variável.

>O for é recomendado para quando você já sabe onde irá acabar, quando ele é definido

# REPETIÇÕES DICAS

> for == Sei o Inicio e Fim == Contadora

> do while == Uma Repetição que sei que irá acontecer ao menos uma vez

## Encadeamento

Uma repetição pode existir dentro de outra. Porém os comandos não tem vínculo entre si, da mesma forma que o if encadeado - Exceto pelo fato de que, o laço mais interno só é executado quando o mais externo está em repetição. O laço interno depende da condição do externo para acontecer, e por isso dizemos que estão em cadeia.

📢 Cada repetição definida precisa da sua própria variável de controle. Então, se usamos I para a externa, outra deve estar no controle da interna, ex. J.

💭 Sintaxe conceitual

```jsx
para (var i = 0; i < fim; i++)
  para (var j = 0; j < fim; j++)
    <instrução>;
```

No caso acima, a *instrução* será executada I * J vezes.

# Condições de fluxo e parada

# Parada abrupta

## break - Interrompe o laço e passa o fluxo para o comando a seguir.

# Interromper iteração corrente

## continue - Volta ao início do laço, desprezando as instruções abaixo do comando.

>Esses comandos não podem ser utilizados fora de um laço. E quando os laços estão encadeados, o comando é válido para o laço mais interno.