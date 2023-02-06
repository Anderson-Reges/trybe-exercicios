import { secret } from './../interfaces/token.interface';
import { Request, Response, NextFunction } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

require('dotenv/config');

const authorizationVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  const decoded = verify(token, secret.secret) as JwtPayload;
  
  req['user'] = decoded;

  return next();
};

export default authorizationVerify