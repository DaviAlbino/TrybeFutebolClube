import { Request, Response } from 'express';
import MatchService from '../services/match.service';

export default class MatchController {
  static async findAllMatches(_req: Request, res: Response) {
    const matches = await MatchService.findAll();
    return res.status(200).json(matches);
  }
}
