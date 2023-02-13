import ILeaderboard from '../interfaces/ILeaderboard';
import IAwayBoard from '../interfaces/IAwayBoard';
import SetLeaderboardRules from './SetLeaderboardRules.util';

export default class SetLeaderboardAway {
  static createAwayLeaderboard = (homeTeams: IAwayBoard[]): ILeaderboard[] => {
    const board = homeTeams.map(({ teamName, awayMatches }) => ({
      name: teamName,
      totalPoints: SetLeaderboardRules.calculatePoints(awayMatches),
      totalGames: SetLeaderboardRules.countGames(awayMatches),
      totalVictories: SetLeaderboardRules.awayVictory(awayMatches),
      totalLosses: SetLeaderboardRules.homeVictory(awayMatches),
      totalDraws: SetLeaderboardRules.draw(awayMatches),
      goalsFavor: SetLeaderboardRules.totalAwayGoals(awayMatches),
      goalsOwn: SetLeaderboardRules.totalHomeGoals(awayMatches),
      goalsBalance: SetLeaderboardRules.goalsBalance(awayMatches),
      efficiency: Number(SetLeaderboardRules.setEfficiency(awayMatches)),
    }));

    return board;
  };
}
