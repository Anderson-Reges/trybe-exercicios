# DIA 03 - NODE.JS: TESTES DE INTEGRAÇÃO

Nesse dia foi passado um conteudo de testes no `Node.js` utilizando `Mocha`, `Chia`, `Sinon`, a qual eu fui capaz de:

- Identificar o que são e para quê servem testes automatizados;
- Escrever códigos para `Node.js` aplicando o conceito de `TDD`;
- Escrever testes utilizando ferramentas populares;
- Estruturar cenários de testes de acordo com os requisitos;
- Criar testes de integração para `APIs REST`;
- Executar testes verificando o comportamento do código.

# EXERCICIO

Exercício 1

Crie os testes de integração para o endpoint GET `/chocolates/total`

- Crie um caso para o código retornado
- Crie outro caso para o retorno esperado

Atenção: Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar. 👍

Exercício 2

Implemente o endpoint GET `/chocolates/total` na aplicação

- Crie um novo endpoint retornando o total de chocolates na base de dados
- Depois de implementar, verifique se os testes passam com sucesso

Resultado esperado:

```json
{
  "totalChocolates": 4 // quantidade de chocolates na base de dados
}
```