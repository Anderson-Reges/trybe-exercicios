import { Pool, ResultSetHeader } from "mysql2/promise";
import { IUser, UpdatedUser, UserId } from '../interfaces/user.interface';

export default class User {
  public connection: Pool

  constructor(connection: Pool) { 
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const result = await this.connection.execute('SELECT * FROM Users')
    const [ rows ] = result;
    return rows as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const result = await this.connection.execute('SELECT * FROM Users WHERE id = ?',[id])
    const [ rows ] = result;
    const [ user ] = rows as IUser[]
    return user
  }

  public async getByEmail(email: string): Promise<UserId> {
    const query = 'SELECT * FROM Users WHERE email = ?';
    const values = [email];
  
    const [data] = await this.connection.execute(query, values);
    const [user] = data as UserId[];
  
    return user;
  }

  public async createNewUser(user: IUser): Promise<UpdatedUser> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?,?,?)', [user.name, user.email, user.password]
    )
    const [ ResultSetHeader ] = result
    const { insertId: id } = ResultSetHeader;
    return { id, name:user.name, email:user.email }
  }

  public async updateUser(user: IUser, id: number): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ? ',
      [user.name, user.email, user.password, id]
    )
    const { affectedRows } = result[0]
    return affectedRows
  }

  public async deleteUser(id: number): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'DELETE FROM Users WHERE id = ?', [id]
    )

    const { affectedRows } = result[0]
    return affectedRows
  }

}