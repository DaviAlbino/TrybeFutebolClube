import * as jwt from 'jsonwebtoken';
import { JsonWebTokenError, Secret } from 'jsonwebtoken';

const tokenSecret: Secret = process.env.JWT_SECRET || 'jwt_secret';

const verifyToken = (token: string): void => {
  try {
    jwt.verify(token, tokenSecret);
  } catch (error) {
    const err = error as JsonWebTokenError;
    throw new Error(err.message);
  }
};

export default verifyToken;
