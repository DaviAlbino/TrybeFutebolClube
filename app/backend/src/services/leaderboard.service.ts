import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';

export default class LeaderboardService {
  static findAllHomeTemas = async () => {
    const allHomeTeams = await Match.findAll({
      include: [
        { model: Team, as: 'homeTeam' },
      ],
    });
    return allHomeTeams;
  };
}
