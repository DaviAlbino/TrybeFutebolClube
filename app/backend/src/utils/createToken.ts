import * as jwt from 'jsonwebtoken';
import { Secret, SignOptions } from 'jsonwebtoken';
import IToken from '../interfaces/IToken';

export default class CreateToken {
  private _secret: Secret;
  private _options: SignOptions;

  constructor() {
    this._secret = process.env.JWT_SECRET || 'jwt_secret';
    this._options = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
  }

  get secret(): Secret {
    return this._secret;
  }

  get options(): SignOptions {
    return this._options;
  }

  generateToken = (payload: IToken): string => {
    const token = jwt.sign({ payload }, this.secret, this.options);
    return token;
  };
}
