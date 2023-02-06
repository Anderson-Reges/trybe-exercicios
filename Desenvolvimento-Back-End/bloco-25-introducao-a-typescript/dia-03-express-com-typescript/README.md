# DIA 03 - EXPRESS COM TYPESCRIPT

Nesse foi posto em pratica a biblioteca `Express` com `TypeScript`, a qual fui capaz de:

- Configurar um projeto `Node.js` com `TypeScript`
- Criar uma aplicação `Express` com `TypeScript`

# EXERCICIO

Banco de Dados usado:

```sql
CREATE DATABASE IF NOT EXISTS `TypeScriptExpress`;
USE `TypeScriptExpress`;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `author` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `publicationDate` date NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `Users`
VALUES
  (1, 'Geraldo', 'geraldo@email.com', '123456'),
  (2, 'Marceline', 'marceline@email.com', '123456');

INSERT INTO `Posts`
VALUES
  (1, 'Facebook vai dividir departamento de realidade aumentada e virtual', 'Renan', 'tecnologia', '2021-10-26'),
  (2, 'O que é UDP e quais as diferenças com o TCP?', 'Giulianna', 'tecnologia', '2021-10-26');

```


<article class="c-daJEgu"><h2>
Atividade 1 🚀</h2>
<p>
<strong>Objetivos:</strong></p>
<ul>
  <li>
Criar um <strong>CRUD</strong> completo de pessoas usuárias de uma aplicação.  </li>
  <li>
Permitir que pessoas usuárias dessa aplicação façam <em>login</em> utilizando suas credenciais.  </li>
  <li>
Utilize o <strong>jwt</strong> para que um usuário somente possa deletar ou atualizar sua própria conta.  </li>
  <li>
<em>Utilize a tabela <strong>Users</strong> para realizar a atividade.</em>  </li>
</ul>
<p>
<strong>Rotas:</strong></p>
<ul>
  <li>
Uma rota que lista todos as pessoas usuárias da aplicação;  </li>
  <li>
Uma rota que lista uma única pessoa usuária a partir de seu <em>id</em>;  </li>
  <li>
Uma rota que permite cadastrar uma nova pessoa usuária da aplicação;  </li>
  <li>
Uma rota que permite editar o registro de uma única pessoa usuária cadastrada por meio de seu <em>id</em>;  </li>
  <li>
Uma rota que permite deletar uma pessoa usuária da aplicação a partir de seu <em>id</em>.  </li>
</ul>
<p>
<strong>Regras:</strong></p>
<ul>
  <li>
Uma pessoa usuária da aplicação deve possuir as propriedades <em>id</em>, nome, <em>email</em> e senha;  </li>
  <li>
Nenhuma propriedade de uma pessoa usuária da aplicação pode ser nula ou vazia;  </li>
  <li>
O <em>id</em> deve ser gerado automaticamente;  </li>
  <li>
A senha deve possuir no mínimo 6 e no máximo 12 caracteres;  </li>
  <li>
O nome deve possuir pelo menos 3 caracteres;  </li>
  <li>
O <em>email</em> deve possuir um formato de <em>email</em> válido (email@email.com);  </li>
  <li>
Ao criar um novo <code class="inline">user</code>, o <em>email</em> não pode já estar cadastrado.  </li>
</ul>
</article>

<br>

<article class="c-daJEgu"><h2>
Atividade 2 🚀</h2>
<p>
<strong>Objetivos:</strong></p>
<ul>
  <li>
Criar um <strong>CRUD</strong> completo de <em>Blog Posts</em>.  </li>
  <li>
Listar <em>posts</em> por autor, categoria ou data de criação.  </li>
  <li>
<em>Utilize a tabela <strong>Posts</strong> para realizar a atividade.</em>  </li>
</ul>
<p>
<strong>Rotas:</strong></p>
<ul>
  <li>
Uma rota que lista todos os posts;  </li>
  <li>
Uma rota que lista um único post por meio de seu <em>id</em>;  </li>
  <li>
Uma rota que permite cadastrar um novo post;  </li>
  <li>
Uma rota que permite editar o registro de um post cadastrado a partir de seu <em>id</em>;  </li>
  <li>
Uma rota que permite deletar um post a partir de seu <em>id</em>.  </li>
  <li>
Uma rota que recebe via <code class="inline">query params</code> o <strong>autor, a categoria ou a data de criação</strong> e lista todos os <em>posts</em> que se encaixem no filtro;  </li>
</ul>
<p>
<strong>Regras:</strong></p>
<ul>
  <li>
Um post deve possuir as propriedades <em>id</em>, título, nome do autor, nome da categoria e data de criação;  </li>
  <li>
<strong>Nenhuma</strong> propriedade de um <em>post</em> pode ser nula ou vazia;  </li>
  <li>
O nome do autor deve possuir pelo menos 3 caracteres;  </li>
  <li>
O nome da categoria deve possuir pelo menos 3 caracteres;  </li>
  <li>
A <code class="inline">query param</code> de data de criação deve ser no formato: aaaa-mm-dd;  </li>
</ul>
</article>
