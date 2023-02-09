import { Request, Response } from 'express';
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
    const newMatch = await MatchService.saveNewMatch(newMatchBody);
    res.status(201).json(newMatch);
  }
}
