# DIA 02 - NODE.JS: API REST COM EXPRESS

Nesse dia foi passado o conteudo sobre sobre construção de `API` usando o `Node.js` e `Express`, a qual eu fui capaz de:

- Definir um Servidor;
- Utilizar o `Node.js` com o framework `Express` para criar uma rota de um `endpoint` de `API`, acessível pelo navegador;
- Utilizar o `Nodemon` para auxiliar no desenvolvimento de `APIs Node.js` com o `framework Express`;
- Utilizar o `Node.js` com o `framework Express` para receber e tratar requisições com parâmetros de:
    - rota, ou `router params`;
- consulta, ou `query params`;
- Utilizar o `Node.js` com o `framework Express` para receber e tratar requisições com parâmetros em seu corpo, ou `body`;
- Utilizar o `Node.js` com o `framework Express` para criar uma aplicação `C.R.U.D.` - de criação, leitura, atualização e remoção de dados;
- Utilizar o `Thunder Client` para fazer requisições a partir do `VS Code`;
- Descrever uma `API REST`.

# EXERCICIO

Para esse exercicio usei os seguintes dados:

```json
[
  {
    "id": 1,
    "movie": "Avatar",
    "price": 5
  },
   {
    "id": 2,
    "movie": "Gente Grande",
    "price": 2
  },
  {
    "id": 3,
    "movie": "O Jogo",
    "price": 3
  },
  {
    "id": 4,
    "movie": "Quebrando a Banca",
    "price": 5
  },
  {
    "id": 5,
    "movie": "Lilo & Stitch",
    "price": 2
  },
  {
    "id": 6,
    "movie": "Os Fantasmas se Divertem",
    "price": 2
  },
  {
    "id": 7,
    "movie": "Meninas Malvadas",
    "price": 3
  }
]

```

🚀 Exercício 3
Crie um servidor `Node.js` utilizando o `framework Express`.

🚀 Exercício 4
Crie uma função de leitura do `JSON` com o modulo `fs`.

🚀 Exercício 5
Crie um endpoint do tipo `GET` com a rota **`/movies/:id`**, que possa listar um filme do `JSON` por **id**.

🚀 Exercício 6
Crie um endpoint do tipo `GET` com a rota **/movies**, que possa listar todos os filmes do `JSON`.

🚀 Exercício 7
Crie um endpoint do tipo `POST` com a rota **/movies**, para cadastrar um novo filme no `JSON`.

O corpo da requisição deve receber o seguinte formato:


```json
{
  "movie": "Vingadores",
  "price": 5
}
```

🚀 Exercício 8
Crie um endpoint do tipo `PUT` com a rota **/movies/:id**, que possa editar informações de um filme do `JSON`.

O corpo da requisição deve receber o seguinte formato:

``` json
{
  "movie": "Vingadores: Ultimato",
  "price": 5
}
```

🚀 Exercício 9
Crie um endpoint do tipo `DELETE` com a rota **/movies/:id** que possa deletar um filme do `JSON`.