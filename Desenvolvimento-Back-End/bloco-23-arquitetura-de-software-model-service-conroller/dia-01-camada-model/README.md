# DIA 01 - ARQUITETURA DE SOFTWARE: CAMADA MODEL

No conteudo desse dia foi passado sobre arquitetura de um software e como podemos organizar partes do nosso codigo utilizando o modelo `MSC` de organização, nesse dia eu fui capaz de:

- Definir o conceito de Arquitetura de Software;
- Aplicar a arquitetura baseada em camadas em um código de exemplo;
- Criar testes de unidade para componentes de software da camada `Model`;
- Identificar os componentes de software pertencentes a camada `Model`.

# EXERCICIO

Exercício 1 - Listar as pessoas motoristas (model)
  Crie um arquivo `driver.model.js` dentro da pasta de models*.

  👀 Observação: Garanta que o arquivo exporte um objeto que conterá todas as futuras funções referentes ao modelo do driver. Crie uma função no arquivo `driver.model.js` para listar as pessoas motoristas em nosso app.

Sobre a função A função deve:

  - Se chamar `findAll`;
  - Retornar um array de objetos, referente à busca ao banco de dados;
  - Exemplo de array:

```js
     [
       {
         id: 1,
         name: 'Fábio Frazão',
       },
     ];
```

#### Parte 1.1: Crie testes unitários para a função findAll.

  Cenário de teste Listando as pessoas motoristas:

  - a lista de motoristas deve ser um `array` de objetos, onde cada posição do `array` corresponde a um motorista
  - retorna a lista de motoristas com sucesso

  De olho na dica 👀: Crie o `stub` da conexão com o banco de dados.

#### Parte 1.2: Implemente a função findAll na camada Model

Sobre a função A função deve:

- Utilizar uma query no banco de dados, que ao ser executada retorna uma lista de motoristas;
- Retornar esse `array`;
- Observação: Confirme que a função passa nos testes;

🚀 Exercício 2 - Cadastrar um novo carro ao banco de dados (`model`)
Crie uma função na camada `Model` que cadastra um novo carro no banco de dados.

Sobre a função A função deve:

- Se chamar `insertCar`;
- Receber um objeto que contenha o modelo, cor e placa do novo carro;
- Executar uma `query` para cadastrar um novo carro no banco de dados;
- Retornar o `id` do novo carro cadastrado;

Parte 2.1: Crie testes unitários para a função `insertCar`.
Cenário de teste

- Cadastrando um novo carro com sucesso
- retorna o `id` do carro cadastrado conforme o esperado
#### Parte 2.2: Implemente a função insertCar na camada Model.

🚀 Exercício 3 - Encontrando um carro no banco de dados por meio de seu `id` (**model**)

Crie a função findById na camada Model que lista os carros por meio de seu `id`.

Sobre a função A função deve:

- Se chamar `findById`;
- Retornar um objeto com as informações do carro encontrado;
#### Parte 3.1 - Crie testes unitários para a função findById.

Cenário de teste

#### Parte 3.2 - Implemente a função findById.

Sobre a função A função deve:

- Receber um `id` como parâmetro;
- Executar uma `query` no banco de dados, para encontrar um carro por meio de seu `id`;
- Retornar um objeto com as informações do carro, conforme exemplo abaixo:

🚀 Exercício 4 - Encontrando uma pessoa motorista no banco de dados por meio de seu `id` (**model**)

Crie a função `findById` na camada **Model** que lista as pessoas motoristas por meio de seu `id`.

Sobre a função A função deve:

- Se chamar `findById`;
- Retornar um objeto com as informações da pessoa motorista encontrada;

Parte 4.1 - Crie testes unitários para a função `findById`.

Cenário de teste

- Buscando informações da pessoa motorista pelo `id`
- ao receber um `id` como parâmetro, a função retorna um objeto com as informações da pessoa motorista encontrada

Parte 4.2 - Crie a função `findById`.
Sobre a função A função deve:

- Receber um id como parâmetro;
- Executar uma query no banco de dados, para encontrar uma pessoa motorista por meio de seu id;
- Retornar um objeto com as informações da pessoa motorista, conforme exemplo abaixo:

🚀 Exercício 5 - Cadastrando uma nova pessoa motorista no banco de dados (**model**)

Crie a função `insertDriver` na camada **Model** que insere uma nova pessoa motorista ao banco de dados, retornando seu `id` criado.

Sobre a função A função deve:

- Se chamar `insertDriver`;
- Receber o nome da pessoa motorista como parâmetro;
- Retornar o `id` da nova pessoa motorista que foi inserida ao banco de dados;

Parte 5.1 - Crie testes unitários para a função insertDriver.

Cenário de teste

- retorna um id com sucesso
#### Parte 5.2 Crie a função insertDriver.

Sobre a função A função deve:

- Utilizar uma `query` no banco de dados, que ao ser executada, cadastre uma nova pessoa motorista ao banco de dados;
- Recebe um objeto como parâmetro, que contém a chave name com o nome da pessoa motorista;
- Retorna o `id` da nova pessoa motorista cadastrada;

Observação: Confirme que a função passa nos testes;

🚀 Exercício 6 - Criando uma relação `N:N` de uma nova pessoa motorista com os carros cadastrados (**model**)
Sobre a função

A função deve:

Se chamar `insert`;

Executar uma query ao banco de dados, que cadastra uma pessoa motorista com relacionamento `N:N` com os carros cadastrados;

Parte 6.1 - Crie testes unitários da função `insert`.

Cenários de teste

- Cadastrando pessoa motorista com relacionamento `N:N` com carros cadastrados
- é possível cadastrar com sucesso uma pessoa motorista e um carro usando seus respectivos `Ids`;
- retorna o `id` cadastrado
#### Parte 6.2 - Crie a função insert.

Sobre a função

A função deve:

- ser responsável por cadastrar as pessoas motoristas com o relacionamento `N:N` com os carros cadastrados;
- Receber como parâmetro um objeto com as chaves: `driverId` e `carId`;
- Retornar o `id` cadastrado.