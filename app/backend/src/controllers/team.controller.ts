import { Request, Response } from 'express';
import TeamService from '../services/teams.service';

export default class TeamController {
  static async findAllTeams(req: Request, res: Response) {
    const teams = await TeamService.findAll();
    return res.status(200).json(teams);
  }
}
