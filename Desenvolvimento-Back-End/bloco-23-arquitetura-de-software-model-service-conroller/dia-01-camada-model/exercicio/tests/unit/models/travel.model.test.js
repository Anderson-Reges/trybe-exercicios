const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { travelModel } = require('../../../src/models');

const { newTravel, travels, travelsFromDB, travelsUpdated } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Realizando uma operação INSERT com o model travel', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    // act
    const result = await travelModel.insert(newTravel);

    // assert
    expect(result).to.equal(42);
  });

  it('Recuperando uma travel a partir do seu id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([[travelsFromDB[0]]]);
    // act
    const result = await travelModel.findById(1);
    // assert
    expect(result).to.be.deep.equal(travels[0]);
  });

  it('Recuperando as travels a partir do seu travel_status_id', async function () {
    // arrange
    sinon.stub(connection, 'execute').resolves([travelsFromDB]);
    // act
    const result = await travelModel.findByTravelStatusId(1);
    // assert
    expect(result).to.be.deep.equal(travels);
  });

  it('Realizando uma operação UPDATE com o model travel - rota .../assign', async function () {
    sinon.stub(connection, 'execute').resolves(travelsUpdated);

    const travelId = 1;
    const driverId = 1;
    const status = 2; // Aqui pode ser: "motorista a caminho", "corrida finalizada", ...
    const update = { driverId, status };

    const result = await travelModel.updateById(travelId, update);

    expect(result[0].affectedRows).to.be.deep.equal(1);
    expect(result[0].changedRows).to.be.deep.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});