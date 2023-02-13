import ILeaderboard from '../interfaces/ILeaderboard';
import IGeneralBoard from '../interfaces/IGeneralBoard';
import SetGeneralBoard from './SetGeneralBoard.util';

export default class SetLeaderboardHome {
  static createHomeLeaderboard = (generalTeams: IGeneralBoard[]): ILeaderboard[] => {
    const board = generalTeams.map(({ teamName, homeMatches, awayMatches }) => ({
      name: teamName,
      totalPoints: SetGeneralBoard.totalPoints(homeMatches, awayMatches),
      totalGames: SetGeneralBoard.totalGames(homeMatches, awayMatches),
      totalVictories: SetGeneralBoard.totalVictories(homeMatches, awayMatches),
      totalLosses: SetGeneralBoard.totalLosses(homeMatches, awayMatches),
      totalDraws: SetGeneralBoard.totalDraw(homeMatches, awayMatches),
      goalsFavor: SetGeneralBoard.goalsFavor(homeMatches, awayMatches),
      goalsOwn: SetGeneralBoard.goalsOwn(homeMatches, awayMatches),
      goalsBalance: SetGeneralBoard.goalsBalance(homeMatches, awayMatches),
      efficiency: Number(SetGeneralBoard.efficiency(homeMatches, awayMatches)),
    }));

    return board;
  };
}
