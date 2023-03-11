# DIA 03 - OPERADORES DE CONSULTA

Nesse dia foi passado a continuidade do conteudo sobre **MongoDB** com os **operadores de consulta**, a qual fui capaz de: 

- Utilizar o operador `$all` para filtrar documentos;
- Utilizar o operador `$elemMatch` para filtrar documentos;
- Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays;
- Utilizar o operador `$expr` para criar expressões de agregação;
- Utilizar expressões regulares e o operador `$regex` para buscar documentos;
- Utilizar o operador `$mod`.

# EXERCICIO

foi criada essa coleção no db:

```shell
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure"
    ],
    imdbRating: 7.7,
    budget: 35,
    grossWorldwide: 411,
    ratings: [ 85, 100, 102, 105 ],
    description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi"
    ],
    imdbRating: 6.6,
    budget: 160,
    grossWorldwide: 524,
    ratings: [ 78, 52, 95, 102 ],
    description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy"
    ],
    imdbRating: 7.4,
    budget: 0,
    grossWorldwide: 476,
    ratings: [ 200, 99, 65 ],
    description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
  },
  {
    title: "Matrix",
    category: [
      "sci-fi",
      "action"
    ],
    imdbRating: 8.7,
    budget: 63,
    grossWorldwide: 467,
    ratings: [ 77, 92, 150, 180 ],
    description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
  },
  {
    title: "Pulp Fiction",
    category: [
      "crime",
      "drama"
    ],
    imdbRating: 8.9,
    budget: 8,
    grossWorldwide: 213,
    ratings: [ 110, 84, 95, 90 ],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
   {
     title: "Stealth",
     category: [
       "action",
       "adventure",
       "sci-fi"
     ],
     imdbRating: 5.1,
     budget: 135,
     grossWorldwide: 79,
     ratings: [ 50, 48, 39, 67 ],
     description: "Deeply ensconced in a top-secret military program, three pilots struggle to bring an artificial intelligence program under control before it initiates the next world war."
   }
]);
```

**Exercicio 1**:Utilizando o operador `$all`, retorne todos os filmes que contenham action e adventure no array category.

**Exercicio 2**:🚀 Agora retorne os filmes que contenham **action** e **sci-fi** no array **category** e possuem nota do **IMDB** maior do que 7.

**Exercicio 3**:Retorne todos os filmes com **ratings maior do que 103**, exibindo apenas os campos **title** e **ratings**.

**Exercicio 4**:🚀 Retorne todos os filmes com **ratings entre 100 e 105**, exibindo apenas os campos **title** e **ratings**.

**Exercicio 5**:🚀 Retorne todos os filmes onde ao menos um elemento de **ratings** esteja **entre 64 e 105** e seja **divisível por 9**, exiba apenas os campos **title** e **ratings**.

**Exercicio 6**:Retorne os filmes da **categoria adventure** e com **ratings maior do que 103**, exibindo apenas os campos **title, ratings e category**.

**Exercicio 7**:Retorne somente o título de todos os filmes com dois elementos no array **category**.

**Exercicio 8**:🚀 Retorne somente o título de todos os filmes com quatro elementos no array **ratings**.

**Exercicio 9**:Busque os filmes em que o **módulo 5 do campo budget** seja 0 e que o array **category** tenha tamanho 2.

**Exercicio 10**:🚀 Retorne os filmes da **categoria "sci-fi"** ou que possua o **ratings maior do que 199**, exibindo apenas os campos **title, ratings e category**.

**Exercicio 11**:Retorne os filmes em que o **ratings possua tamanho 4** e que seja da **category "adventure" ou "family"**, mas que não tenha o **imdbRating menor que 7**.

**Exercicio 12**:🚀 Utilizando o operador `$regex`, retorne todos os filmes em que a descrição comece com a palavra `"The"`.

**Exercicio 13**:Utilizando o operador `$regex`, retorne todos os filmes em que a descrição termine com a palavra `"humanity."`.

**Exercicio 14**:Utilizando o operador `$expr`, retorne todos os filmes em que o **budget seja menor do que o grossWorldwide**.