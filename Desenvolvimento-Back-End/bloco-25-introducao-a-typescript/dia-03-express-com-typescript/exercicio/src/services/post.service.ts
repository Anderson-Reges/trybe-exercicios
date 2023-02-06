import postModel from '../models/postModel';
import connection from '../models/connection.';
import { post, postId } from '../interfaces/post.interface';
import Result from '../interfaces/result.interface';

export default class PostService {
  public model: postModel

  constructor() {
    this.model = new postModel(connection)
  }

  public async getAll(): Promise<post[]> {
    const posts = await this.model.getAll();
    return posts;
  }

  public async getById(id: number): Promise<post> {
    const post = await this.model.getById(id);
    return post;
  }

  public async createPost(post: post): Promise<Result> {
    const result = await this.model.createPost(post)

    return { type: null, data: result }
  }

  public async updatePost(post: post, id: number): Promise<Result> {
    const ifExistPost = await this.model.getById(id)

    if (!ifExistPost) return { type: 'err', data: 'Post not exist' }

    await this.model.updatePost(post, id)

    return { type: null , data: { message: 'Post atualizado com sucesso' } }
  }

  public async deletePost(id: number): Promise<Result> {
    const ifExistPost = await this.model.getById(id)

    if (!ifExistPost) return { type: 'err', data: 'Post not exist' }

    await this.model.deletePost(id)

    return { type: null, data: { message: 'Post deletado com sucesso' } }
  }

  public async searchWithTerms(term: string): Promise<Result> {
    const result = await this.model.searchWithTerms(term)

    return result.length === 0 
    ? { type: 'err', data: 'Termo nao encontrado' }
    : { type: null, data: result }
  }
}