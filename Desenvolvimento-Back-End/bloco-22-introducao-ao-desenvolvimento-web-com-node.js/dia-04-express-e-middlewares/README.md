# DIA 04 - EXPRESS E MIDDLEWARES

Nesse dia foi passado o conteudo sobre `middleware` junto com `express`, a qual a fui capaz de:

- Definir o que são `middlewares`;
- Identificar o que são `middlewares`;
- Empregar o encadeamento de `middlewares` usando a função `next`.
- Empregar `middlewares` assíncronos no `express`.
- Empregar a passagem de valores entre `middlewares`.
- Empregar `middlewares` para tratamento de erros.
- Empregar o uso de rotas aplicando o `Router`.

# EXERCICIO

## PARTE 1

1 - Crie um servidor **Node.js** utilizando o framework **Express** com a estrutura inicial do `app.js` e **server.js** e prepare o ambiente instalando a biblioteca **nodemon**.

2 - Adicione um **middleware** criado pela comunidade que tem como função interpretar conteúdo `JSON`.

3 - Crie um endpoint `POST` com a rota **/activities** para adicionar novas atividades. Ela deve:

- Retornar o status `201` e uma mensagem de sucesso quando a atividade tiver sido inserida (formato json);
- Sugestão: `{ "message": "Atividade cadastrada com sucesso!" }`.

4 - Crie um **middleware** de validação para a chave `name`. Ela deve:

- Ser obrigatória;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo name é obrigatório" }`.
- Ter mais de **4** caracteres;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo name deve ter pelo menos 4 caracteres" }`.

5 - Crie um **middleware** de validação para a chave `price`. Ela deve:

- Ser obrigatória;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo price é obrigatório" }`.
- Ser um número maior ou igual a zero;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo price deve ser um número maior ou igual a zero" }`.

6 - Crie um **middleware** de validação para a chave **description** que possui as chaves **createdAt**, **rating** e **difficulty**. Ela deve:

- Ter todas as chaves obrigatórias;
- Retornar o status `400` para todas e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo description é obrigatório" }`;
- Sugestão: `{ "message": "O campo createdAt é obrigatório" }`;
- Sugestão: `{ "message": "O campo rating é obrigatório" }`;
- Sugestão: `{ "message": "O campo difficulty é obrigatório" }`.

7 - Crie um **middleware** de validação para a chave **createdAt**. Ela deve:

- Ter uma data válida no formato **dd/mm/aaaa**;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }`.

8 - Crie um **middleware** de validação para a chave **rating**. Ela deve:

- Ter um número inteiro entre **1** e **5**;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo rating deve ser um número inteiro entre 1 e 5" }`.

9 - Crie um **middleware** de validação para a chave **difficulty**. Ela deve:

- Ter apenas 3 classificações: **“Fácil”, “Médio” ou “Difícil”**;
- Retornar o status `400` e uma mensagem em formato `json`;
- Sugestão: `{ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }`.

## PARTE 2

Para gerar o token aleatiorio:

```javascript
const crypto = require("crypto");

function generateToken() {
  return crypto.randomBytes(8).toString("hex");
}

module.exports = generateToken;
```

1 - Crie um endpoint `POST` com a rota `/signup` para cadastrar pessoas usuárias. Ela deve:

- Ter os campos **email**, **password**, **firstName** e **phone** obrigatoriamente;
- Caso os campos não sejam preenchidos, retornar o status **401 - Unauthorized** e uma mensagem (formato json);
- Sugestão: `{ "message": "Campos ausentes!" }`.
- Gerar um token aleatório válido;
- Retornar o status `200` e uma mensagem contendo o token (formato json);
- Sugestão: `{ token: '<token-aleatorio>' }`.

2 - Crie um **middleware** de autenticação ao endpoint `POST` com a rota `/activities`. Ela deve:

  - Ser validada por meio do token que foi gerado ao realizar o `signup`;
  - Ser encontrada pelo header **Authorization**;
  - Ter exatamente **16** caracteres;
  - Caso o token seja inválido ou inexistente, retornar o status `401 - Unauthorized` e uma mensagem (formato json);
  - Sugestão: `{ "message": "Token inválido!" }`.