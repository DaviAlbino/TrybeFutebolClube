import * as jwt from 'jsonwebtoken';
import { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const tokenSecret: Secret = process.env.JWT_SECRET || 'jwt_secret';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const tokenDecoded = jwt.verify(authorization, tokenSecret);
    req.body.user = tokenDecoded;
    return next();
  } catch (error) {
    return error;
  }
};

export default verifyToken;
