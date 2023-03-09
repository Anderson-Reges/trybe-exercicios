# DIA 01 - MONGODB INTRODUÇÃO

Nessa dia foi passado o conteudo introdutorio de **mongoDB**, a qual fui capaz de:

- Instalar e conectar-se ao **MongoDB**;
- Listar bancos de dados e coleções;
- Inserir documentos no banco de dados usando o `insert()`;
- Pesquisar documentos no banco de dados usando o `find()`;
- Contar a quantidade de documentos retornados usando o `countDocuments()`;
- Filtrar o resultado das suas pesquisas;
- Limitar e pular os documentos retornados;
- Fazer uma paginação simples combinando os métodos `limit()` e o `skip()`.
- Entender o que é uma projeção e como utilizá-la.

# EXERCICIO

**Exercício 1**: Retorne o documento com o `_id` igual a **8**.

**Exercício 2**: Retorne o documento com o `_id` igual a **8**, mas só exiba os atributos: `_id` e `name`.

🚀 **Exercício 3**: Retorne apenas os atributos `name` e `birth` do documento com o `_id` igual a **8**.

**Exercício 4**: Retorne todos os documentos em que o atributo `name.first` seja igual a `John`, utilizando o método `pretty()`.

**Exercício 5**: Retorne os **3** primeiros documentos da coleção bios utilizando o método `pretty()`.

**Exercício 6**: Retorne **2** documentos da coleção bios pulando os **5** primeiros documentos.

Utilizando o `mongoimport`, importe o arquivo `books.json` para a sua instância local do `MongoDB` e utilize a coleção `books` para construir as seguintes consultas:

🚀 **Exercício 7**: Retorne a quantidade de documentos da coleção `books`.

🚀 **Exercício 8**: Conte quantos livros existem com o `status = "PUBLISH"`.

🚀 **Exercício 9**: Exiba os atributos `title`, `isbn` e `pageCount` dos **3** primeiros livros. NÃO retorne o atributo `_id`.

**Exercício 10**: Pule 5 documentos e exiba os atributos _id, title, authors e status dos livros com o status = "MEAP", limitando-se a 10 documentos.