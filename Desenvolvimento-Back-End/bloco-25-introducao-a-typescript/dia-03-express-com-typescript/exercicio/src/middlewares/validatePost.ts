import { z } from "zod";
import { NextFunction, Response, Request } from 'express';
import statusCodes from "../../statusCodes";

const validatePostValues = (req: Request, res: Response, next: NextFunction) => {
  const post = req.body
  
  const postSchema = z.object({
    title: z.string({
      required_error: 'Title is required',
      invalid_type_error: "Title must be a string",
    }),
    author: z.string({
      required_error: 'Author is required',
      invalid_type_error: "Author must be a string",
    }).min(3, { message: 'Author must be at least 3 characters' }),
    category: z.string({
      required_error: 'Category is required',
      invalid_type_error: "Category must be a string",
    }).min(3, { message: 'Author must be at least 3 characters' }),
  })
  
  const validate = postSchema.safeParse(post)

  if (!validate.success) {
    const { message } = validate.error.issues[0]
    return res.status(statusCodes.BAD_REQUEST).json({ message })
  }

  next()
}

export default validatePostValues;