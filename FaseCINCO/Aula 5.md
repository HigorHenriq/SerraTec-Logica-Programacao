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

1. O teste do **while** é no início, o teste do **repeat** no final.
2. **repeat** pára quando expressão é true. **while** só executa se expressão é true.
3. **repeat** é executado pelo menos uma vez. o **while** pode nem ser executado.
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
