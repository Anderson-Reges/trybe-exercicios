# DIA 02 - CONTEXT API E REACT HOOKS

O conteudo desse foi focado **`useState`** e **`useContext`** e suas funcionabilidades dentro do componente e em funções, foi mostrado a diferença entre **`class`** e **`function`** e como cada um funciona com **`useState`** e **`useContext`**.

# FIXAÇÃO

### 1. Crie uma aplicação React e implemente um formulário contendo os dados pessoais de uma pessoa estudante da Trybe. Os seus componentes precisam ser funcionais e, para gerenciamento do estado, precisam utilizar hooks.

- O formulário deve conter:

   -Input do tipo text contendo o nome completo;
   -Input do tipo number contendo a idade;
   -Input do tipo text contendo a cidade;
   -Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
   -Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na  aplicação.

Dica: Utilize o hook useState para gerenciar o estado do seu componente!

### 2. Implemente a lógica do botão criado no exercício anterior.

Abaixo dele deve existir uma ul contendo os dados inseridos no formulário. Sempre que a pessoa usuária clicar no botão, deve ser criada uma li contendo: nome, idade, cidade e o módulo da pessoa estudante. A pessoa usuária poderá adicionar nessa lista os dados de quantas pessoas estudantes ela desejar.

Ao clicar no botão, os dados que foram inseridos no formulário devem ser salvos no contexto da aplicação. O componente que irá renderizar essa lista que deve recuperar os dados do contexto por meio de hooks.

Dica: Utilize o hook useContext para recuperar as informações do contexto da aplicação.

# EXERCICIO 

## Exercício 1 - Atualize a função `handleChange`.

No arquivo `./src/context/MyProvider.js`, atualize a função `handleChange` de modo que, caso o item que está sendo alterado já esteja na sacola (ou seja, se o item já estiver no estado `orderList` do `Provider`), ele deve chamar a função `manageItemsInList`. Caso contrário, ele deve chamar a função `addNewItem`.

<details>
<summary><b>Dicas:</b></summary>

- Os parâmetros da função se referem ao seguinte:
    - `target`: Se refere ao input que está sendo utilizado. Use-o para recuperar o valor de `value`;
    - `itemName`: O nome do produto;
    - `itemType`: O tipo do produto (comida, bebida ou sobremesa);
    - `itemPrice`: O preço do produto.
- A constante `value`, que já está criada na função, se refere ao _valor_ recebido no `input`. Por exemplo, se a pessoa usuária adicionar o valor `2` no input do item `Chimarrão`, o valor de `value` será `2`;
- A constante `newItem` está criando um objeto com todas as informações necessárias para aplicação. Ou seja, ele está "pronto" para ser salvo no estado do `Provider`.
- Utilize a variável `isPresentInList` para salvar o resultado da verificação de um item já existe na lista ou não.

</details>

## Exercício 2 - Implemente a função `addNewItem`.

No arquivo `./src/context/MyProvider.js`, implemente a função `addNewItem` de modo que, quando for chamada, adicione o objeto `newItem` ao estado do `Provider`. Utilize o valor de `newItem.itemType` para descobrir se o item deve ser salvo como `comida`, `bebida` ou `sobremesa`.

<details>
<summary><b>Dica:</b></summary> 

- Ao salvar novos itens no estado, cuidado para não excluir os itens já existentes;

</details>

## Exercício 3 - Implemente as funções `updateItem` e `removeItem`.

As duas funções são executadas dentro da função `manageItemsInList`, que é executada na função `handleChange` quando o item que está sendo alterado já existe no estado do `Provider`.

A função `manageItemsInList` faz a seguinte verificação: Se o valor de `quantity` do item for igual a zero, ele irá chamar a função `removeItem`. Caso contrário, a função `updateItem` é chamada.

O que deverá ser implementado em cada função:

- `removeItem`: Ao ser executada, o item deve ser removido do estado da aplicação;
- `updateItem`: Ao ser executada, o estado da aplicação deve ser atualizado contendo o valor de `quantity` correto.

<details>
<summary><b>Dicas:</b></summary>

**Atente-se aos parâmetros que essas funções recebem**

Os parâmetros são:
- `itemTypeList`: Ele possui a lista do tipo do item. Ou seja, se o item for uma `comida`, `itemTypeList` será o valor de `orderList[comida]`;
- `indexPresentInList`: Indica qual a posição (index) do item na lista do estado. Exemplo: Se o item for `brigadeiro`, ele indicará em qual `index` o item `brigadeiro` se encontra no estado `orderList[sobremesa]`;
- `item`: Contém a informação do item (id, quantidade, valor e tipo).

</details>
