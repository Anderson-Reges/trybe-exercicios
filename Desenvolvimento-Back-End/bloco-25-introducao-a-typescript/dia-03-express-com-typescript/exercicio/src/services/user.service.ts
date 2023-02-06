import { config, secret } from './../interfaces/token.interface';
import { IUser } from '../interfaces/user.interface'
import userModel from '../models/userModel';
import connection from '../models/connection.';
import Result from '../interfaces/result.interface';
import { sign } from 'jsonwebtoken';

require('dotenv/config');

const { JWT_SECRET } = process.env;

export default class UserService {
  public model: userModel

  constructor() {
    this.model = new userModel(connection)
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user;
  }

  public async createNewUser(user: IUser): Promise<Result> {
    const { email } = user;

    const ifExistEmail = await this.model.getByEmail(email);
    if (ifExistEmail) {
      return { type: 'err', data: ifExistEmail };
    }

    const newUser = await this.model.createNewUser(user)

    const token = sign(newUser, secret.secret, config);
    return { type: null, data: token }
  }

  public async login(email: string, password: string) {
    const user = await this.model.getByEmail(email);
    
    if (!user) return { type: 'err', data: 'email not exist' }

    if (user.password !== password) return { type: 'err', data: 'Wrong password' }

    const loggedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    }

    const token = sign(loggedUser, secret.secret, config);
    return { type: null, data: { message: 'Usuario logado com sucesso', token} }
  }
  
  public async updateUser(user: IUser, id: number): Promise<Result> {
    await this.model.updateUser(user, id)

    const userUpdated = {
      id,
      name: user.name,
      email: user.email,
    }
    
    const token = sign(userUpdated, secret.secret, config);
    
    return { type: null, data: { message: 'Usuario atualizado com sucesso', token} }
  }
  
  public async deleteUser(id: number): Promise<Result> {
    await this.model.deleteUser(id);

    return { type: null, data: { message: 'Usuario deletado com sucesso' } }
  }

}