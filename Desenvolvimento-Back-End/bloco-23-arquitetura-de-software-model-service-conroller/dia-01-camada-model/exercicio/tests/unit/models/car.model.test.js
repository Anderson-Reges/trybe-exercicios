const { expect } = require('chai');
const sinon = require('sinon');
const { carModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { newCar } = require('./mocks/car.model.mock');

describe('Testa o Model de cars', function () {
  it('Testa se cadastra um carro novo', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 45 }]);
    const result = await carModel.insertCar(newCar);

    expect(result).to.equal(45);
  });

  it('Testa se lista um carro pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([newCar]);

    const result = await carModel.findById(1);
    
    expect(result).to.be.deep.equal(newCar);
  });
  
  afterEach(async function () {
    connection.execute.restore();
  });
});