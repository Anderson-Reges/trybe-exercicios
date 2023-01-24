# DIA 03 - ORM: ASSOCIATIONS N:N E TRANSACTIONS

Nesse dia foi passado o completo do conteudo do dia anterior agora vimos como fazer **"JOINS"** com tipo de relacionamento de tabelas de **N:N** (muitos para muitos), e foi complementado sobre as **Transactions**, nesse dia eu fui capaz de:

- Utilizar o conceito de transações para realizar operações atômicas no banco de dados com **sequelize**;
- Utilizar o **sequelize** para criar relacionamento **N:N** entre tabelas;

# EXERCICIO 

#### 🚀 Exercício 1

Crie o model de `Plans`.

#### 🚀 Exercício 2

Crie o model de `Patients`.

#### 🚀 Exercício 3

Crie o model de `Surgeries`.

#### 🚀 Exercício 4

Crie o model de `Patient_surgeries`.

#### 🚀 Exercício 5

Crie um endpoint que liste todos os pacientes e seus respectivos planos.

#### 🚀 Exercício 6

Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas.

#### 🚀 Exercício 7

Crie um endpoint que de acordo com o id de um plano, que deve ser recebido via requisição, liste os pacientes que o possuem.

### Bônus

#### 🚀 Exercício 1

Crie um endpoint capaz de adicionar um novo paciente.

#### 🚀 Exercício 2

Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável.

#### 🚀 Exercício 3

Crie um endpoint que de acordo com o nome do médico, que deve ser recebido via requisição, liste todas as cirurgias realizadas pelo mesmo, um get na url `http://localhost:3000/surgeries/Rey%20Dos%20Santos`deve retornar as cirurgias realizadas pelo médico `Rey Dos Santos`.