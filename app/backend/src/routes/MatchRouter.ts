import * as express from 'express';
import MatchController from '../controllers/match.controller';
//

export default class MatchRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/', MatchController.findAllMatches);
  }
}
