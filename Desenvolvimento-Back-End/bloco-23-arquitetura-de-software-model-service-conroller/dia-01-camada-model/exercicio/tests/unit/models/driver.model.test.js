const { expect } = require('chai');
const sinon = require('sinon');
const { driverModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { driver, newDriver } = require('./mocks/driver.model.mock');

describe('Testa o Model de drivers', function () {
  it('Testa a função findAll', async function () {
    sinon.stub(connection, 'execute').resolves([driver]);

    const result = await driverModel.findAll();
    
    expect(result).to.be.deep.equal(driver);
  });

  it('Testa se lista um motorista pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([driver]);

    const result = await driverModel.findById(1);
    
    expect(result).to.be.deep.equal(driver);
  });

  it('Testa se cadastra um novo motorista', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);

    const result = await driverModel.insertDriver(newDriver);

    expect(result).to.equal(2);
  });

  afterEach(async function () {
    sinon.restore();
  });
});