const { expect } = require('chai');
const sinon = require('sinon');

const { carService } = require('../../../src/services');
const { carModel } = require('../../../src/models');

const { validModel, validColor,
  validPlate, invalideValue, newCar,
} = require('./mocks/car.service.mock');

describe('Verifica o service car', function () {
  describe('Tentando cadastrar um novo carro com erros semânticos', function () {
    it('retorna um erro ao receber um modelo inválido', async function () {
      sinon.stub(carModel, 'insertCar').resolves(newCar);

      const result = await carService.createCar(invalideValue, validColor, validPlate);
      
      expect(result.type).to.be.equal('INVALID_VALUE');
      expect(result.message).to.be.equal('"model" length must be at least 3 characters long');
    });

    it('retorna um erro ao receber uma cor inválida', async function () {
      sinon.stub(carModel, 'insertCar').resolves(newCar);
      const result = await carService.createCar(validModel, invalideValue, validPlate);

      expect(result.type).to.be.equal('INVALID_VALUE');
      expect(result.message).to.be.equal('"color" length must be at least 2 characters long');
    });

    it('retorna um erro ao receber uma placa inválida', async function () {
      sinon.stub(carModel, 'insertCar').resolves(newCar);
      
      const result = await carService.createCar(validModel, validColor, invalideValue);
      
      expect(result.type).to.be.equal('INVALID_VALUE');
      expect(result.message).to.be.equal('"licensePlate" length must be 7 characters long');
    });
  });

  describe('Cadastrando um novo carro com sucesso', function () {
    it('nao retorne erros', async function () {
      sinon.stub(carModel, 'insertCar').resolves(newCar);
      const response = await carService.createCar(validModel, validColor, validPlate);

      expect(response.type).to.equal(null);
    });

    it('retorna um carro cadastrado', async function () {
      sinon.stub(carModel, 'insertCar').resolves(newCar);
      const response = await carService.createCar(validModel, validColor, validPlate);

      expect(response.message).to.equal(newCar);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});