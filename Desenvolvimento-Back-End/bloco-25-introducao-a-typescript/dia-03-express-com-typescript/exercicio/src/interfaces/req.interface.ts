import { IUser } from './user.interface';

export interface UserRequest extends Request {
  user: IUser
}