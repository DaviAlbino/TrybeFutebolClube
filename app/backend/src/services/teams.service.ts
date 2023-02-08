import ITeams from '../interfaces/ITeams';
import Team from '../database/models/Team.model';
import IStatusReturn from '../interfaces/IStatusReturn';

export default class TeamService {
  static async findAll(): Promise<ITeams[]> {
    const teams = await Team.findAll();
    return teams;
  }

  static async findById(id: number): Promise<IStatusReturn> {
    const team = await Team.findByPk(id);
    if (!team) return { type: 404, message: 'Team not found' };
    return { type: null, message: team.dataValues };
  }
}
