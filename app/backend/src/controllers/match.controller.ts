import { Request, Response } from 'express';
import sameTeamError from '../utils/sameTeam.util';
import MatchService from '../services/match.service';

export default class MatchController {
  static async findAllMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    const inProgressBoolean = (typeof inProgress === 'string') ? JSON.parse(inProgress) : undefined;
    const matches = await MatchService.findInProgress(inProgressBoolean);
    return res.status(200).json(matches);
  }

  static async saveNewMatch(req: Request, res: Response) {
    const newMatchBody = req.body;
    const { homeTeamId, awayTeamId } = newMatchBody;
    const { type, message } = sameTeamError(homeTeamId, awayTeamId);

    if (type) return res.status(type).json({ message });

    const newMatch = await MatchService.saveNewMatch(newMatchBody);
    res.status(201).json(newMatch);
  }
}
