import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

export default class LeaderboardController {
  static findAllTeams = async (_req: Request, res: Response) => {
    const allHomeTeams = await LeaderboardService.findAllHomeTemas();
    return res.status(200).json(allHomeTeams);
  };
}
