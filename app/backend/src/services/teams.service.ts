import ITeams from '../interfaces/ITeams';
import Team from '../database/models/Team.model';

export default class TeamService {
  static async findAll(): Promise<ITeams[]> {
    const teams = await Team.findAll();
    return teams;
  }
}
