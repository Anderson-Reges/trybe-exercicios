
# # DIA 02 - MOCKS E INPUTS

Esse bloco pertence ao módulo de **`Desenvolvimento Front-End`** do curso da [Trybe](https://www.betrybe.com/).
nesse bloco aprendi sobre como criar **`Mocks`** e utilizar o **RTL** para testar **Inputs**.

Esse bloco é importantissimo para completar o pacote de desenvolvimento front-end pois é ensinado como gerenciar testes mockando funções para testa-las.

# Exercício do Dia

## Exercício 1

Verifique o arquivo `service/rollDice.js`. Ele implementa uma função `rollDice`, que simula como se uma pessoa tivesse rolando um dado, ou seja, a função retorna um número aleatório entre 1 e o valor máximo do dado. O valor máximo do dado é definido através de um parâmetro chamado `size`.

Para gerar o número aleatório, é usada a função `Math.random`, além de alguns outros cálculos para garantir que o número esteja dentro do intervalo estabelecido.

Testar o retorno de uma função que usa valores randômicos não é possível, já que seu resultado não é previsível - a menos que você utilize um `mock` para ter o controle desses valores aleatórios.

<details>
  <summary>Crie os testes para a função <code>rollDice</code> do arquivo <code>service/dice.js</code>.</summary><br />
  
- Considere um dado de tamanho 20 para este teste.
- Crie um mock para a função `Math.random`, de forma que a função `rollDice` sempre retorne o número 16.
- Teste que o valor retornado pela função é igual a 16.
- Teste que a função `Math.random` foi chamada uma única vez.

</details>

## Exercício 2

Dentro do arquivo `service/rollMultipleDice.js` existe a função `rollMultipleDice`. Essa é uma função que simula como se a pessoa tivesse rolado vários dados ao mesmo tempo. Ela recebe como parâmetro quantos dados foram rolados e qual o tamanho dos dados. Para gerar o valor de cada dado, a função `rollMultipleDice` usa, internamente, a função `rollDice`.

<details>
  <summary>Crie os testes para a função <code>rollMultipleDice</code> que é exportada no arquivo <code>service/rollMultipleDice.js</code></summary><br />

- use o `jest.mock` para *mockar* o módulo `service/rollDice`. Lembre-se de passar como argumento o caminho do arquivo.
- a função `rollDice` deverá ser *mockada* de forma que a primeira vez que ela é chamada deverá retornar `6`, e da segunda vez em que ela for chamada, deverá retornar `4`;
- considere um dado de tamanho 20 para este teste;
- verifique que o valor retornado pela função `rollMultipleDice` seja a somatória de `6` + `4`, ou seja `10`;
- verifique que a função `rollDicell` foi chamada duas vezes.

</details>

## Exercício 3
A função `attackEnemy` simula um ataque a um inimigo. Ela compara os resultados dos dados que você rolou (da função `rollMultipleDice`) com a defesa do inimigo.

- A função `attackEnemy` recebe **3 argumentos**: `diceQuantity`, `diceSize` e um objeto `enemy`
  - Esse é um exemplo de `enemy`: 
    ```javascript 
    const enemy = {
      id: 1,
      name: "Chapolin Colorado",
      source: "Chaves",
      defensePoints: 30
    }
    ``` 
- O **retorno** dessa função é um objeto que possui a chave `success` - que será `true` ou `false` dependendo do resultado da batalha.  

No exemplo acima do Chapolin, com 30 pontos de defesa, você precisará tirar nos dados um valor maior que 30 para ganhar. Nesse caso temos 3 cenários que podem ser testados: 

1. Você tira nos dados um valor menor que `30` = derrota
2. Você tira nos dados um valor maior que `30` = vitória
3. Você tira nos dados um valor igual a `30` = derrota.  

Nesse exercício, você deverá testar a função attackEnemy para esses 3 casos, seguindo os passos abaixo. 

<details>
  <summary>Crie os testes para a função <code>attackEnemy</code> que é exportada no arquivo <code>service/attackEnemy.js</code></summary><br />

- use o  `jest.mock` para *mockar* o módulo `service/rollMultipleDice.js`. Lembre-se de passar como argumento o caminho do arquivo.
- em todos os testes você deverá testar o resultado da função `attackEnemy`.

- crie um teste para o caso de **vitória**:
  - a função `rollMultipleDice` deverá ser *mockada* de forma que a primeira vez que ela é chamada deverá retornar um valor maior do que a defesa do inimigo.
  - O resultado da batalha deverá ser a vitória
  
- crie um teste para o caso de **derrota**:
  - a função `rowMultipleDice` deverá ser *mockada* de forma que a primeira vez que ela é chamada deverá retornar um valor menor do que a defesa do inimigo.
  - O resultado da batalha deverá ser a derrota

- Crie um teste para o caso de **empate nos dados**
  - a função `rowMultipleDice` deverá ser *mockada* de forma que a primeira vez que ela é chamada deverá retornar um valor igual ao da defesa do inimigo.
  - O resultado da batalha deverá ser a derrota

</details>

## Exercício 4

Os personagens usados nas batalhas chegam em nossa aplicação através de uma API. Quando a aplicação é renderizada, uma requisição é feita e uma lista de personagens é preenchida no estado.

Neste exercício você irá criar um teste _mockando_ a chamada da API de forma que seja retornado uma lista com apenas 1 personagem (do seu mock).

<details>
  <summary>Crie um teste renderizando a aplicação e mockando o retorno da API</summary><br />

- Faça um _mock_ na função `fetch` para que a requisição para a API de personagens retorne apenas um personagem.
- Renderize a aplicação e verifique que o nome do seu personagem está sendo exibido na tela. O nome do personagem é renderizado em um elemento `h3`. Dica: use o `getByRole` para pegar esse elemento.

</details>
