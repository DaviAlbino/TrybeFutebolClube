import * as express from 'express';
import UserController from '../controllers/user.controller';

export default class LoginRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.post('/', UserController.login);
  }
}
