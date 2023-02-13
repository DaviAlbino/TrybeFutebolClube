import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';
import sortLeaderboard from '../utils/sortLeaderboard.util';
import SetLeaderboardHome from '../utils/SetLeaderboardHome.util';
import SetLeaderboardAway from '../utils/SetLeaderboardAway.util';
import IHomeBoard from '../interfaces/IHomeBoard';
import IAwayBoard from '../interfaces/IAwayBoard';
import IGeneralBoard from '../interfaces/IGeneralBoard';
import SetLeaderboard from '../utils/SetLeaderboard';

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

  static findAllAwayTemas = async () => {
    const allAwayTeams = await Team.findAll({
      include: [{
        model: Match,
        where: { inProgress: false },
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        as: 'awayMatches',
      }],
      attributes: ['teamName'],
    });
    return sortLeaderboard(SetLeaderboardAway
      .createAwayLeaderboard(allAwayTeams as unknown as IAwayBoard[]));
  };

  static findAllTeams = async () => {
    const allTeams = await Team.findAll({
      include: [{
        model: Match,
        where: { inProgress: false },
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        as: 'homeMatches',
      },
      {
        model: Match,
        where: { inProgress: false },
        attributes: ['homeTeamGoals', 'awayTeamGoals'],
        as: 'awayMatches',
      }],
      attributes: ['teamName'],
    });

    // return allTeams;
    return sortLeaderboard(SetLeaderboard
      .createLeaderboard(allTeams as unknown as IGeneralBoard[]));
  };
}
