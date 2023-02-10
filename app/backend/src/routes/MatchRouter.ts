import * as express from 'express';
import verifyToken from '../middelwares/verifyToken';
import MatchController from '../controllers/match.controller';

export default class MatchRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/', MatchController.findAllMatches);
    this.router.post('/', verifyToken, MatchController.saveNewMatch);
    this.router.patch('/:id/finish', verifyToken, MatchController.updateInProgress);
  }
}
