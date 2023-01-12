# DIA 01 - ARQUITETURA DE SOFTWARE: CAMADA SERVICE

Nesse foi passado o conteudo sobre arquitetura da camada `service` no modelo `MSC`, a qual fui capaz de:

- Identificar e interpretar as regras de negócios de uma aplicação;
- Compreender as responsabilidades da camada de Serviços da arquitetura MSC;
- Estruturar a camada de Serviços em sua aplicação;
- Delegar responsabilidades específicas na sua aplicação;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Aplicar testes unitários nos serviços da sua aplicação.

# EXERCICIO

**Exercício 1** - Listar as pessoas motoristas (`service`)
Crie uma função na camada `Service` que lista as pessoas motoristas em nosso app.

Sobre a função

A função deve:

Se chamar `getDrivers`;
Usar a camada Model para receber a lista de motoristas;
Retornar um objeto no mesmo padrão que as outras funções da nossa camada `Service`.
Exemplo de resposta bem sucedida

```js
{
  type: null,
  message: [
    { id: 1, name: 'Liana Cisneiros' },
    { id: 2, name: 'Fábio Frazão' },
    { id: 3, name: 'Anastacia Bicalho' },
    { id: 4, name: 'Samara Granjeiro' },
    { id: 5, name: 'Levi Teixeira' },
  ],
}
```

**Parte 1.1:** Crie testes unitários para a função `getDrivers`

Cenários de teste

- Listando as pessoas motoristas
- a lista de motoristas é um `array`
- retorna a lista de motoristas com sucesso

**Parte 1.2:** Implemente a função getDrivers na camada `Service`

- Chame as funções da camada `Model` conforme a necessidade
- Confirme que a função passa nos testes

**Parte 1.3:** Crie `stubs` para isolar os testes

- Use `stubs` da função da camada `Model` para isolar seus testes
- Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

**Exercício 2** - Cadastrar um carro (`service`)
Crie uma função na camada `Service` que cadastra um carro em nosso app.

A função deve:

Se chamar `createCar`;
Receber o `model`o, cor e placa do novo carro;
Retornar um objeto de `erro` caso algum dado não seja recebido ou seja inválido;
Usar a camada `Model` para cadastrar um novo carro no banco de dados;
Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service;
Parâmetros a serem recebidos

`model`: string com pelo menos 3 caracteres ex: **"Ford Ka"**
`color`: string com pelo menos 2 caracteres ex.: **"Azul"**
`licensePlate`: string com exatamente 7 caracteres ex.: **"ABC1D2E"**

Exemplo de resposta bem sucedida

```js
{
  type: null,
  message: {
    id: 1,
    model: 'Chevrolet Monza',
    color: 'Branco',
    licensePlate: 'ABC1A2B',
  },
}
```

Exemplo de resposta de erro

```js
{
  type: 'INVALID_VALUE',
  message: '"model" length must be at least 3 characters long',
}
```

**Parte 2.1:** Crie testes unitários para a função `createCar`

Cenários de teste

- Tentando cadastrar um novo carro com erros semânticos
  - retorna um erro ao receber um modelo inválido
  - retorna um erro ao receber uma cor inválida
  - retorna um erro ao receber uma placa inválida
- Cadastrando um novo carro com sucesso
  - não retorna erros
  - retorna o carro cadastrado

**Parte 2.2:** Implemente a função `createCar` na camada `Service`

- Crie um schema do `Joi` e uma função de validação para validar os dados de um novo carro
- Chame as funções da camada `Model` conforme a necessidade
- Confirme que a função passa nos testes

**Parte 2.3:** Crie `stubs` para isolar os testes

- Use stubs da função da camada `Model` para isolar seus testes
- Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

**🚀 Exercício 3** - Cadastrar uma pessoa motorista (`service`)
Crie uma função na camada `Service` que cadastra uma pessoa motorista em nosso app.

A função deve:

- Se chamar `createDriver`;
- Receber o nome da pessoa motorista;
- Receber opcionalmente um array de ids de carros já cadastrados em nossa base de dados;
- Retornar um objeto de erro caso o nome não seja recebido ou seja inválido;
- Retornar um objeto de erro caso o array de carros seja inválido ex.: algum carro não exista;
- Usar a camada `Model` para cadastrar a pessoa motorista no banco de dados;
- Vincular os carros do array de ids (caso seja passada) à pessoa motorista;
- Retornar um objeto no mesmo padrão que as outras funções da nossa camada `Service`,
- A lista de carros vinculados à pessoa motorista deve ser retornada junto com as outras informações da pessoa motorista.
- Parâmetros a serem recebidos

`name`: string com pelo menos **3** caracteres ex: **"Gena"**
`carIds`: array com os **ids** dos carros a serem vinculados com a pessoa motorista (opcional)

Exemplo de resposta bem sucedida

```js
{
  type: null,
  message: {
    id: 1,
    name: 'Gus',
    cars: [
      {
        color: 'Branco',
        id: 1,
        licensePlate: 'NCA-0956',
        model: 'Renault Sandero',
      },
      {
        color: 'Vermelho',
        id: 2,
        licensePlate: 'DZG-4376',
        model: 'Volkswagen Gol',
      },
    ],
  }
}
```

Exemplo de resposta de erro

```js
{
  type: 'CAR_NOT_FOUND',
  message: 'Some car is not found',
}
```

**🚀 Parte 3.1:** Crie testes unitários para a função `createDriver`
Cenários de teste

- Tentando cadastrar uma nova pessoa motorista com erros semânticos:
  - retorna um erro ao receber um nome inválido
  - retorna um erro ao receber uma lista de carros inválida
- Tentando cadastrar uma nova pessoa motorista com erros de id:
  - retorna o erro **“CAR_NOT_FOUND”**
  - retorna a mensagem **“Some car is not found”**
- Cadastrando uma nova pessoa motorista com sucesso sem carros:
  - retorna a pessoa motorista cadastrada
  - não retorna erro
- Cadastrando uma nova pessoa motorista com sucesso com carros:
  - retorna os carros vinculados à pessoa motorista
  - não retorna erro

**🚀 Parte 3.2:** Implemente a função `createDriver` na camada `Service`

- Confirme que a função passa nos testes

**🚀 Parte 3.3:** Crie `stubs` para isolar os testes

- Use `stubs` da função da camada `Model` para isolar seus testes
- Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente