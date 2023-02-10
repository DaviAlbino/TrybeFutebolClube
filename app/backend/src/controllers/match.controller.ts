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
    if (newMatch.type) return res.status(newMatch.type).json({ message: newMatch.message });
    res.status(201).json(newMatch.message);
  }

  static async updateInProgress(req: Request, res: Response) {
    const { id } = req.params;
    const { type, message } = await MatchService.updateInProgress(Number(id));
    if (type) return res.status(type).json({ message });
    return res.status(200).json({ message });
  }

  static async updateGoals(req: Request, res: Response) {
    const { id } = req.params;
    const numberId = Number(id);
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { type, message } = await MatchService
      .updateGoals({ id: numberId, homeTeamGoals, awayTeamGoals });

    if (type) return res.status(type).json(message);
    return res.status(200).json({ message });
  }
}
