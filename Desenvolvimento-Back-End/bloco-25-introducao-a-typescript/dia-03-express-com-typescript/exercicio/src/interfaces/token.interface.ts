export interface JWTPayload {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const config: object = {
  expiresIn: '3d',
  algorithm: 'HS256'
}

export const secret = {
  secret: String(process.env.JWT_SECRET),
}