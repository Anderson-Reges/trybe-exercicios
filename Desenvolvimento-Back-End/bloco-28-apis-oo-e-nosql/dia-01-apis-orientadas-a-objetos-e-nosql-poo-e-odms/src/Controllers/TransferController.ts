import { NextFunction, Request, Response } from 'express';
import IPayment from '../Interfaces/IPayment';
import TransferService from '../Services/TransferService';

class TransferController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: TransferService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new TransferService();
  }

  public async create() {
    const payment: IPayment = {
      payByPerson: this.req.body.payByPerson,
      payToPerson: this.req.body.payToPerson,
      amount: this.req.body.amount,
      key: this.req.body.key,
    };

    try {
      const newPayment = await this.service.transfer(payment);
      return this.res.status(201).json(newPayment);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const allDocuments = await this.service.find();
      return this.res.status(200).json(allDocuments);
    } catch (error) {
      this.next(error);
    }
  }

  public async findOne() {
    const { key } = this.req.params;
    try {
      const document = await this.service.findOne(key);
      return this.res.status(200).json(document);
    } catch (error) {
      this.next(error);
    }
  }
}
  
export default TransferController;