const sinon = require('sinon');
const { expect } = require('chai');

const { driverCarModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Driver_Car Model', function () {
  describe('Cadastra o relacionamento das pessoas motoristas com os carros', function () {
    it('com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

      const payload = {
        driverId: 3,
        carId: 1,
      };

      const response = await driverCarModel.insert(payload);

      expect(response).to.equal(1);
    });
  });

  after(async function () {
    sinon.restore();
  });
});