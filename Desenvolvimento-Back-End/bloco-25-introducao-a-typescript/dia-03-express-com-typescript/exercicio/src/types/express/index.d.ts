import { decodeToken } from './../../interfaces/token.interface';
import { UserId } from './../../interfaces/user.interface';
import * as http from 'http';
import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
export interface Request extends http.IncomingMessage, Express.Request {
  user: JwtPayload;
}
}