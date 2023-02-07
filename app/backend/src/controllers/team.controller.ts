import { Request, Response } from 'express';
import TeamService from '../services/teams.service';

export default class TeamController {
  static async findAllTeams(_req: Request, res: Response) {
    const teams = await TeamService.findAll();
    return res.status(200).json(teams);
  }

  static async findOneTeam(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamService.findById(Number(id));

    return res.status(200).json(team);
  }
}
