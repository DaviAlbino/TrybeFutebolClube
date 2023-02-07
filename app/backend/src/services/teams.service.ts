import ITeams from '../interfaces/ITeams';
import Team from '../database/models/Team.model';

export default class TeamService {
  static async findAll(): Promise<ITeams[]> {
    const teams = await Team.findAll();
    return teams;
  }

  static async findById(id: number): Promise<ITeams | object> {
    const team = await Team.findByPk(id);
    if (!team) throw new Error('Team not found');
    return team.dataValues;
  }
}
