import * as express from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

export default class LeaderboardRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/home', LeaderboardController.findAllHomeTeams);
    this.router.get('/away', LeaderboardController.findAwayTeams);
  }
}
