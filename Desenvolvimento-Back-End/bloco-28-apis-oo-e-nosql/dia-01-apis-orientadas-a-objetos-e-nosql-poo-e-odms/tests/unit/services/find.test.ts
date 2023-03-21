import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import TransferService from '../../../src/Services/TransferService';

describe('Testa os endpoints de find', function () {
  it('Testa se lista todos os documentos', async function () {
    // a
    const documentsOutput = [
      {
        _id: '6418b787e6ae5e4112d0b392',
        payByPerson: 'Reges',
        payToPerson: 'Lucinda',
        amount: 32,
        key: '088.340.548-57',
        __v: 0,
      },
    ];
    sinon.stub(Model, 'find').resolves(documentsOutput);
    // a
    const service = new TransferService();
    const result = await service.find();
    // a
    expect(result).to.be.deep.equal(documentsOutput);
  });

  it('Testa se lista um documento pelo id', async function () {
    // a
    const documentsOutput = {
      _id: {
        $oid: '6418b787e6ae5e4112d0b392',
      },
      payByPerson: 'Reges',
      payToPerson: 'Lucinda',
      amount: 32,
      key: '070.350.800-56',
      __v: 0,
    };
    const id = '070.350.800-56';
    sinon.stub(Model, 'findOne').resolves(documentsOutput);
    // a
    const service = new TransferService();
    const result = await service.findOne(id);
    // a
    expect(result).to.be.deep.equal(documentsOutput);
  });
});