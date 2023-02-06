export interface UserCredentials {
  email: string;
  password: string;
}

export interface IUser extends UserCredentials {
  name: string;
}

export interface UserId extends IUser {
  id: number;
}

export interface UpdatedUser {
  name: string,
  email: string,
  password?: string,
  id: number,
}