# DIA 04 - JWT (JSON WEB TOKEN)

Nesse dia foi passado o conteudo sobre tokens utilizando o `JWT`, a qual fui capaz de:

- Entender o que há por dentro de um **token** de autenticação e autorização;
- Gerar **tokens** a partir de informações como login e senha;
- Autenticar pessoas usuárias utilizando o token `JWT`.
- Autorizar o acesso a rotas do Express, usando o token `JWT`.

# EXERCICIO

🚀 Crie um endpoint `POST /login`.

- O endpoint deve receber os seguintes dados no corpo da requisição:

```json
{
  "username": "algumNomeDeUsuario",
  "password": "algumaSenha"
}
```

- Caso `username` e `password` sejam válidos, retorne um `token` que atenda às seguintes especificações:
  - Expira em uma hora;
  - Contém, no `payload`, o nome de usuário informado na **request**;
  - Contém, no `payload`, uma propriedade admin, com o valor `false`.
  - Para retornar o **token**, utilize o seguinte formato no corpo da resposta:

```json
{
  "token": "<JWT aqui>"
}
```

- Para que username seja válido, seu valor precisa ser uma **string** alfanumérica de, pelo menos, 5 caracteres.
- Para que password seja válido, seu valor precisa ser uma **string** de, pelo menos, 5 caracteres.

🚀 Altere o endpoint `POST /login`:

Caso `username` seja admin e password seja `s3nh4S3gur4???`, a chave **admin** no payload do token gerado deve ter o valor `true`.

🚀 Crie o endpoint `/GET /users/me`:

- O endpoint só pode ser acessado por pessoas autenticadas.
- Para realizar a autenticação, a requisição deve conter o header `Authorization`, cujo valor deve ser um token válido.
- Caso o token não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

```json
{
  "error": {
    "message": "Token not found"
  }
}
```

Caso aconteça um erro ao validar o token, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

- Caso o token seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade admin, no seguinte formato:

```json
    {
      "username": "nome de usuário do token",
      "admin": true || false
    }
```

- Utilize um `middleware` exclusivo para a autenticação. Armazene-o no arquivo `src/middlewares/auth.js`.

🚀 Crie o endpoint `/GET /top-secret`.

- O endpoint só pode ser acessado por pessoas autenticadas.
- Apenas **tokens** contendo, no **payload**, a propriedade admin com o valor true têm autorização para acessar esse endpoint.
- Caso o token não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:

```json
{
  "error": {
    "message": "Token not found"
  }
}
```

Caso aconteça um erro ao validar o token, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```

```json
{
  "error": {
    "message": "Restricted access"
  }
}
```

- Caso o token seja válido e o payload contenha admin com o valor `true`, retorne o seguinte JSON:

```json
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
```

Para validar se a pessoa é `admin`, crie um novo `middleware` no arquivo `src/middlewares/admin.js`.