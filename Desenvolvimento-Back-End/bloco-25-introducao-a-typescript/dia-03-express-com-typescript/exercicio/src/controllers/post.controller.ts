import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';

import PostService from "../services/post.service";

export default class PostController {
  constructor(private postService = new PostService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const posts = await this.postService.getAll();
    return res.status(statusCodes.OK).json(posts);
  }

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await this.postService.getById(Number(id))
    return res.status(statusCodes.OK).json(post);
  }

  public createPost = async (req: Request, res: Response) => {
    const post = req.body
    const { type, data } = await this.postService.createPost(post)

    return res.status(statusCodes.CREATED).json(data)
  }

  public updatePost = async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const post = req.body

    const { type, data} = await this.postService.updatePost(post, id)

    if (type !== null) return res.status(statusCodes.BAD_REQUEST).json({ message: data })

    return res.status(statusCodes.OK).json(data)
  }

  public deletePost = async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const { type, data } = await this.postService.deletePost(id)

    if (type !== null) return res.status(statusCodes.BAD_REQUEST).json({ message: data })

    return res.status(statusCodes.OK).json(data)
  }

  public searchtWithTerms = async (req: Request, res: Response) => {
    const q = req.query.q as string

    const { type, data } = await this.postService.searchWithTerms(q)

    return type !== null
    ? res.status(statusCodes.BAD_REQUEST).json({ message: data })
    : res.status(statusCodes.OK).json(data);
  }
}