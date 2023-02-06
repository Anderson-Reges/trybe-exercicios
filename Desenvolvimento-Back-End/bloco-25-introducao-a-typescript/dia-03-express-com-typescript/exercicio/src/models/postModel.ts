import { Pool, ResultSetHeader } from "mysql2/promise";
import { post, postId } from '../interfaces/post.interface';


export default class Post {
  public connection: Pool

  constructor(connection: Pool) { 
    this.connection = connection;
  }
  
  public async getAll(): Promise<post[]> {
    const result = await this.connection.execute('SELECT * FROM Posts')
    const [ rows ] = result;
    return rows as post[];
  }
  
  public async getById(id: number): Promise<post> {
    const result = await this.connection.execute('SELECT * FROM Posts WHERE id = ?',[id])
    const [ rows ] = result;
    const [ post ] = rows as post[]
    return post
  }
  
  public async createPost(post: post): Promise<postId> {
    const formatDate = new Date().toISOString().split('T')[0];

    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?,?,?,?)',
      [post.title, post.author, post.category, formatDate]
    )
    const [ ResultSetHeader ] = result
    const { insertId: id } = ResultSetHeader;
    return { id, ...post, publicationDate: formatDate }
  }

  public async updatePost(update: post, id: number ): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'UPDATE Posts SET title = ?, author = ?, category = ? WHERE id = ?',
      [update.title, update.author, update.category, id]
    )

    const { affectedRows } = result[0]
    return affectedRows
  }

  public async deletePost(id: number): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'DELETE FROM Posts WHERE id = ?',
      [id]
    )

    const { affectedRows } = result[0]
    return affectedRows
  }

  public async searchWithTerms(term: string): Promise<post[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Posts WHERE author LIKE ? OR category LIKE ? OR publicationDate LIKE ?',
      [`%${term}%`, `%${term}%`, `%${term}%`]
    )
    
    const [ posts ] = result
    return posts as post[]
  }
}