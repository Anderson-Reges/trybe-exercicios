import { Router } from 'express';
import PostController from '../controllers/post.controller';
import validatePostValues from '../middlewares/validatePost';

const router = Router();

const postController = new PostController();

router
  .get('/search', postController.searchtWithTerms)
  .get('/', postController.getAll)
  .get('/:id', postController.getById)
  .post('/', validatePostValues, postController.createPost)
  .put('/:id', validatePostValues, postController.updatePost)
  .delete('/delete/:id', postController.deletePost)

export default router;