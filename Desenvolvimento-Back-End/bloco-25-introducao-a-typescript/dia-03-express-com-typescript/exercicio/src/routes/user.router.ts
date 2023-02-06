import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateUserValues from '../middlewares/validateUser';
import Auth from '../middlewares/auth';

const router = Router();

const userController = new UserController();

router
  .get('/', userController.getAll)
  .get('/:id', userController.getById)
  .post('/', validateUserValues, userController.createNewUser)
  .post('/login', userController.login)
  .put('/:id', Auth, userController.updateUser)
  .delete('/delete/:id', Auth, userController.deleteUser)

export default router;