import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
//

export default class LeaderboardController {
  static findAllHomeTeams = async (_req: Request, res: Response) => {
    const allHomeTeams = await LeaderboardService.findAllHomeTemas();
    return res.status(200).json(allHomeTeams);
  };

  static findAwayTeams = async (_req: Request, res: Response) => {
    const allAwayTeams = await LeaderboardService.findAllAwayTemas();
    return res.status(200).json(allAwayTeams);
  };

  static findTeams = async (_req: Request, res: Response) => {
    const allTeams = await LeaderboardService.findAllTeams();
    return res.status(200).json(allTeams);
  };
}
