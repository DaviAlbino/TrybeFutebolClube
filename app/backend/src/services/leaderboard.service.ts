import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';
import sortLeaderboard from '../utils/sortLeaderboard.util';
import SetLeaderboardHome from '../utils/SetLeaderboardHome.util';
import IHomeBoard from '../interfaces/IHomeBoard';

export default class LeaderboardService {
  static findAllHomeTemas = async () => {
    const allHomeTeams = await Team.findAll({
      include: [{
        model: Match,
        where: { inProgress: false },
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        as: 'homeMatches',
      }],
      attributes: ['teamName'],
    });
    return sortLeaderboard(SetLeaderboardHome
      .createHomeLeaderboard(allHomeTeams as unknown as IHomeBoard[]));
  };
}
