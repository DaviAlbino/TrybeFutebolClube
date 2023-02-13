import ILeaderboard from '../interfaces/ILeaderboard';
import IHomeBoard from '../interfaces/IHomeBoard';
import SetLeaderboardRules from './SetLeaderboardRules.util';

export default class SetLeaderboardHome {
  static createHomeLeaderboard = (homeTeams: IHomeBoard[]): ILeaderboard[] => {
    const board = homeTeams.map(({ teamName, homeMatches }) => ({
      name: teamName,
      totalPoints: SetLeaderboardRules.calculatePoints(homeMatches, 'homeTeam'),
      totalGames: SetLeaderboardRules.countGames(homeMatches),
      totalVictories: SetLeaderboardRules.homeVictory(homeMatches),
      totalLosses: SetLeaderboardRules.awayVictory(homeMatches),
      totalDraws: SetLeaderboardRules.draw(homeMatches),
      goalsFavor: SetLeaderboardRules.totalHomeGoals(homeMatches),
      goalsOwn: SetLeaderboardRules.totalAwayGoals(homeMatches),
      goalsBalance: SetLeaderboardRules.goalsBalance(homeMatches, 'homeTeam'),
      efficiency: Number(SetLeaderboardRules.setEfficiency(homeMatches, 'homeTeam')),
    }));

    return board;
  };
}
