import * as bcrypt from 'bcryptjs';
import IToken from '../interfaces/IToken';
import User from '../database/models/User.model';
import ILogin from '../interfaces/ILogin';
import CreateToken from '../utils/createToken';

const newToken = new CreateToken();

export default class UserService {
  static async login(loginBody: ILogin) {
    const { email, password } = loginBody;

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return { type: 401, message: 'Incorrect email or password' };
    }

    const userToken: IToken = {
      id: user?.id,
      username: user?.username,
      email: user?.email,
    };

    const token = newToken.generateToken(userToken);

    return { type: null, message: token };
  }
}
