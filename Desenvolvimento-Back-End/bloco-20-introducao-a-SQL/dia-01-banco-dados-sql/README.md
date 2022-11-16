# DIA 01 - BANCO DE DADOS SQL

Nesse dia foi passado o conteudo introdutorio para `MySQL`, a qual fui capaz de:

- Entender o que são bancos de dados;
- Entender como a linguagem de consulta estruturada (`SQL`) é usada;
- Compreender como as tabelas se encaixam no conceito de banco de dados;
- Montar um ambiente de desenvolvimento local para praticar `SQL`;
- Entender como usar o `MySQL Workbench`.

obs: o dia foi mais de criação de banco de dados e manipulação por isso a ausencia de arquivos, tudo foi feito pelo terminal e `MySql Workbench`.

# EXERCICIO

Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o `MySql Workbench`.

Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: `filme`

Colunas:

- `filme_id` - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
- `descricao` - não permite nulos, tipo texto (varchar(100));
- `ano_lancamento` - não permite nulos, tipo int;
- `nota` - permite nulos, tipo int;

Exercício 4: Analise a tabela `city` e encontre a tabela à qual a coluna `country_id` faz referência.

Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela `city` faz com a tabela `country`?

Exercício 6: Qual tipo de relacionamento a tabela `country` faz com a tabela `city`?

Exercício 7: Abra tabela por tabela do banco `sakila` e encontre no mínimo 3 exemplos de um relacionamentos `1:N` ou `N:1`.