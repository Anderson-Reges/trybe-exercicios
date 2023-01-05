const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

const tasksList = [
  {
    id: 2,
    nome: "Fazer Exercicio",
    descricao: "Tarefa do Curso"
  },
  {
    id: 3,
    nome: "Aprender Docker",
    descricao: "conhecimento"
  }
]

describe('Testando endpoints de tasks', function() {
  it('Testa se é possivel adicionar uma task', async function() {
    sinon.stub(connection, 'execute').resolves([{ insertId: 5 }])

    const response = await chai
      .request(app)
      .post('/tasks')
      .send({
        nome: "test",
        descricao: "test"
      })
    
    expect(response.status).to.equal(201)
    expect(response.body).to.
      deep.equal({ message: `Tarefa cadastrada com sucesso com id: 5` });
  });

  it('Testa se é possivel atualizar a task', async function() {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai
      .request(app)
      .put('/tasks/5')
      .send({
        nome: "test",
        descricao: "test"
      });
      
    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal({ message: `Tarefa com id: 5 atualizada com sucesso` });
  });

  it('Teste se é possivel deletar uma task', async function() {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }])

    const response = await chai
      .request(app)
      .delete('/tasks/5')

    expect(response.status).to.equal(200)
    expect(response.body).to.deep.equal({ message: `Tarefa com id: 5 deletada com sucesso` })
  });

  it('Testa se lista todas as tasks', async function() {
    sinon.stub(connection, 'execute').resolves([tasksList]);

    const response = await chai
      .request(app)
      .get('/tasks')

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(tasksList);
  });

  it('Testa a listagem da task pelo id', async function() {
    sinon.stub(connection, 'execute').resolves([[tasksList[0]]]);

    const response = await chai
      .request(app)
      .get('/tasks/5')
    
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(tasksList[0]);
  });

  afterEach(sinon.restore);
})