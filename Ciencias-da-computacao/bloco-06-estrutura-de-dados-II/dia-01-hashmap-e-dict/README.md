# DIA 01 - HASHMAP E DICT 

Nesse dia foi passado o funcionamento por de tras da classe `Dict` do **Python** e sobre como hashmaps pode ajudar no dia a dia de desenvolvimento, nesse dia eu fui capaz de:

- Entender o conceito de hashing e como ele é utilizado para criar estruturas eficientes;
- Implementar uma classe `HashMap` simples com as principais operações;
- Compreender como as decisões de implementação impactam na eficiência real da estrutura de dados;
- Entender como a classe `Dict`, de Python, funciona por baixo dos panos.

# EXERCICIO

**Exercício 1 - Google**: <br>
Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

Escreva um método que calcule o score de uma determinada pessoa.

👀 De olho na dica: para saber o score de uma pessoa, você precisa saber o score das pessoas da equipe dela, correto? Qual estratégia utiliza a mesma função dentro dela própria?

Exemplo de subordinados:

```py
- 1 => 2, 3

- 2 => 4

- 3 => sem subordinados

- 4 => 5, 6

- 5 => 7

- 6 => sem subordinados

- 7 => sem subordinados
```

Neste exemplo, o score de cada pessoa é:

```py
- 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7

- 2 => 4 (score 4) + 1 (score dele próprio) = 5

- 3 => 1 (score dele próprio)

- 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4

- 5 => 1 (score 7) + 1 (score dele próprio) = 2

- 6 => 1 (score dele próprio)

- 7 => 1 (score dele próprio)
```