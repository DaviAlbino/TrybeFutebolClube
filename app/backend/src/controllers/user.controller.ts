import { Request, Response } from 'express';
import validateLogin from '../utils/verifyLogin';
import UserService from '../services/user.service';

export default class UserController {
  static async login(req: Request, res: Response) {
    const userLogin = req.body;

    const checkLogin = validateLogin(userLogin);

    if (checkLogin.typeJoi) {
      return res.status(checkLogin.typeJoi).json({ message: checkLogin.messageJoi });
    }

    const { type, message } = await UserService.login(checkLogin.messageJoi);

    if (type) {
      return res.status(type).json({ message });
    }

    return res.status(200).json({ token: message });
  }

  static async getUserRole(req: Request, res: Response) {
    const { payload: { id } } = req.body.user;
    const { type, message } = await UserService.getUserRole(id);
    if (type) return res.status(type).json(message);
    return res.status(200).json({ role: message });
  }
}
