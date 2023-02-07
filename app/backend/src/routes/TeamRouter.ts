import * as express from 'express';
import TeamController from '../controllers/team.controller';
//

export default class TeamRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/', TeamController.findAllTeams);
  }
}
