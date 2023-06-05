# DIA 05 - PILHAS E FILAS

Nesse dia foi passado sobre como funciona as pilhas e filas, na qual fui capaz de:

- Entender o funcionamento da estrutura de dados pilha (`stack`);
- Adicionar, remover, saber a quantidade e limpar itens de uma pilha;
- Identificar e escolher o uso de pilhas em diferentes casos.

# EXERCICIO

**Exercício 1**:
Filas: crie uma classe `Queue`, onde deve conter as operações: `enqueue`, `dequeue`, `peek` e `is_empty`.

> Para este desafio, é necessário efetuar o `import` das classes `LinkedList` e `Node` e utilizar seus métodos de acesso para simular uma fila, respeitando o padrão **FIFO**.

**Exercício 2**:
Pilhas: crie uma classe `Stack`, onde deve conter as operações: `push`, `pop`, `peek` e `is_empty`.

**Exercício 3**:
Estenda a classe `Stack`, que escrevemos durante as explicações do conteúdo, adicionando uma nova função chamada `min_value()` que irá retornar o menor valor inteiro presente na pilha. Por exemplo:

> stack.py

```py
# ...

content_stack.push(1)
content_stack.push(-2)
content_stack.push(3)
print(content_stack.min_value()) # saída: -2
```


**Exercício 4**:
Estenda a classe `Stack`, que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens. Por exemplo:

> stack_limit.py

```py
# ...

content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)

try:
    content_stack.push(3)
except StackOverflow:
    print("Não é possível adicionar outro item à pilha")
```

> Dica: Para esse exercício, crie uma nova classe, no mesmo diretório da classe `Stack`.


**Exercício 5**:
Um estacionamento comercial possui uma garagem em forma de linha, ou seja, somente é possível parar os carros enfileirados. Para auxiliar as pessoas que trabalham manobrando os veículos, iremos escrever um programa para que eles consigam adicionar novos veículos na garagem e retirar os veículos conforme a solicitação dos clientes. Escreva um programa que faça essas duas operações, inserção de veículos e a remoção do veículo desejado pela pessoa. Lembrando que os veículos que foram removidos para se chegar no veículo do cliente, ficam parados na rua e depois são adicionados na mesma ordem que estavam no estacionamento.


**Exercício 6**:
Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.

*Nota*: transforme as expressões em pós fixas e atribua valores. Caso seja necessário, faça o `cast` do valor para ponto flutuante.

<img src="https://content-assets.betrybe.com/prod/c02178de-2773-46db-9cb2-023b67e6987d-Lista%20Express%C3%B5es.png" />

> Lista Expressões

**Exercício 7**:
Dado uma string, contendo letras e parênteses. Crie uma função que irá reverter os caracteres de tal forma que somente os caracteres dentro dos parênteses sejam revertidos. A string final não deve conter os parênteses. Por exemplo:

```py
string = 'teste(lagel)'
resultado = 'testelegal'
```