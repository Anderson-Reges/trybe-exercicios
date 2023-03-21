import { Router } from 'express';
import TransferController from '../Controllers/TransferController';

const routes = Router();

routes
  .get('/', (req, res, next) => new TransferController(req, res, next).find())
  .get(
    '/:key',
    (req, res, next) => new TransferController(req, res, next).findOne(),
  )
  .post(
    '/transfer',
    (req, res, next) => new TransferController(req, res, next).create(),
  );

export default routes;