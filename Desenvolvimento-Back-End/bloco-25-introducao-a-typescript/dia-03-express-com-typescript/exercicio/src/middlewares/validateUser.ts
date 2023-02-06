import { IUser } from './../interfaces/user.interface';
import { NextFunction, Response, Request } from 'express';
import { z } from "zod";
import statusCodes from '../../statusCodes';

const validateUserValues = async (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;

  const userSchema = z.object({
    name: z.string({
      required_error: 'Name is required',
    }).min(3, { message: 'name invalid' }),
    email: z.coerce.string({
      required_error: 'Email is required',
    }).email({ message: 'email invalid' }),
    password: z.string({
      required_error: 'Password is required',
    }).min(6, { message: 'your password must be more than 6 characters' })
      .max(12, { message: 'your password must be less than 12 characters' })
  })

  const data = userSchema.safeParse(user);

  if (!data.success) {
    const { message } = data.error.issues[0]
    return res.status(statusCodes.BAD_REQUEST).json({ message })
  }

  next();
}

export default validateUserValues;