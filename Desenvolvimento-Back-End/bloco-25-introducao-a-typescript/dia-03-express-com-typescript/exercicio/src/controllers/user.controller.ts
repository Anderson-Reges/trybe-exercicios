import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';

import UserService from "../services/user.service";

export default class UserController {
  constructor(private userService = new UserService() ) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(statusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getById(Number(id))
    return res.status(statusCodes.OK).json(user);
  }

  public createNewUser = async (req: Request, res: Response) => {
    const user = req.body;
    const { type , data } = await this.userService.createNewUser(user);

    if (type === 'err') {
      return res.status(statusCodes.BAD_REQUEST).json({ message: 'email already exists' })
    }
    
    return res.status(statusCodes.CREATED).json({ token: data })
  }

  public login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { type, data } = await this.userService.login(email, password);

    if (type === 'err') return res.status(statusCodes.BAD_REQUEST).json({ message: data })

    return res.status(statusCodes.OK).json(data)
  }

  public updateUser = async (req: Request, res: Response) => {
    const loggedUser = req.user;
    const newUpdateUser = req.body
    const { id } = req.params

    if (loggedUser.id !== Number(id)) return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Unauthorized'})

    const { type, data } = await this.userService.updateUser(newUpdateUser, Number(id))

    return res.status(statusCodes.OK).json({ message:data })
  }

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (Number(id) !== req.user.id) return res.status(statusCodes.UNAUTHORIZED).json({ message: 'Unauthorized'})

    const { type, data } = await this.userService.deleteUser(Number(id))

    return res.status(statusCodes.OK).json(data)
  }

}