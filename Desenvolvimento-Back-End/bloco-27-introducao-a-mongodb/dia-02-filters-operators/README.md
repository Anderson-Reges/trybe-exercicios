# DIA 02 - FILTER OPERATORS

Nesse dia foi continuado o conteudo sobre `MongoDB` passando metodos de filtragem de dados, a qual fui capaz de:

- Utilizar os operadores de comparação
  - `$lt` (less than, menor que, <)
  - `$lte` (less than or equal, menor ou igual a, <=)
  - `$gt` (greater than, maior que, >)
  - `$gte` (greater than or equal, maior ou igual a, >=)
  - `$eq` (equal, igual a, =)
  - `$ne` (not equal, diferente de, !=, <>)
  - `$in` (in, dentro de)
  - `$nin` (not in, não está dentro de)
- Utilizar os operadores lógicos
  - `$and` (and, se todas as condições forem verdadeiras retorna true)
  - `$or` (or, se apenas uma condição for verdadeira retorna true)
- Compor filtros avançados com
  - `$not` (not, inverte o resultado da expressão)
  - `$nor` (not or, semelhante ao or, porém trabalha com a condição false)
- Utilizar o operador
  - `$exists` (exists, verifica a existência de um atributo)
- Utilizar o método
  - `sort()` (sort, ordenar)
- Remover documentos

# EXERCICIO

**🚀 Exercício 1**: Inspecione um documento para que você se familiarize com a estrutura. Entenda os atributos e os níveis existentes.

**🚀 Exercício 2**: Selecione todos os super-heróis com **menos de 1.80m** de altura. Lembre-se de que essa informação está em centímetros.

**🚀 Exercício 3**: Retorne o total de super-heróis **menores que 1.80m**.

**Exercício 4**: Retorne o total de super-heróis com **até 1.80m**.

**Exercício 5**: Selecione um super-herói com **2.00m ou mais** de altura.

**Exercício 6**: Retorne o total de super-heróis **com 2.00m ou mais**.

**Exercício 7**: Selecione todos os super-heróis que têm **olhos verdes** (`"green"`).

**Exercício 8**: Retorne o total de super-heróis com **olhos azuis** (`"blue"`).

**🚀 Exercício 9**: Utilizando o operador `$in`, selecione todos os super-heróis com **cabelos pretos** (`"black"`) **ou carecas** (`"no hair"`).

**Exercício 10**: Retorne o total de super-heróis com **cabelos pretos** (`"black"`) **ou carecas** (`"no hair"`).

**Exercício 11**: Retorne o total de super-heróis que não tenham **cabelos pretos** (`"black"`) **ou não sejam carecas**.

**🚀 Exercício 12**: Utilizando o operador `$not`, retorne o total de super-heróis que não tenham **mais de 1.80m** de altura.

**Exercício 13**: Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.

**Exercício 14**: Selecione todos os super-heróis com **1.80m** ou **2.00m** de altura e que sejam **publicados pela Marvel Comics**.

**Exercício 15**: Selecione todos os super-heróis que pesem entre **80kg** e **100kg**, sejam **Humanos ou Mutantes** e não sejam publicados pela **DC Comics**.

**Exercício 16**: Retorne o total de documentos que não contêm o campo **race**.

**Exercício 17**: Retorne o total de documentos que contêm o campo **hairColor**.

**Exercício 18**: Remova **apenas um** documento publicado pela **Sony Pictures**.

**🚀 Exercício 19**: Remova todos os documentos publicados pelo **George Lucas**.