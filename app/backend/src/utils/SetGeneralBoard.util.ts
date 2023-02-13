import IMatchGoals from '../interfaces/IMatchGoals';
import SetLeaderboardRules from './SetLeaderboardRules.util';

export default class SetGeneralBoard {
  static totalPoints = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allPoints = SetLeaderboardRules
      .calculatePoints(homeMatches) + SetLeaderboardRules
      .calculatePoints(awayMatches);
    return allPoints;
  };

  static totalVictories = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allWinners = SetLeaderboardRules
      .homeVictory(homeMatches) + SetLeaderboardRules
      .awayVictory(awayMatches);
    return allWinners;
  };

  static totalLosses = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allLosers = SetLeaderboardRules
      .awayVictory(homeMatches) + SetLeaderboardRules
      .homeVictory(awayMatches);
    return allLosers;
  };

  static totalDraw = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allDraws = SetLeaderboardRules
      .draw(homeMatches) + SetLeaderboardRules
      .draw(awayMatches);
    return allDraws;
  };

  static goalsFavor = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allFavor = SetLeaderboardRules
      .totalHomeGoals(homeMatches) + SetLeaderboardRules
      .totalAwayGoals(awayMatches);
    return allFavor;
  };

  static goalsOwn = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allOwn = SetLeaderboardRules
      .totalAwayGoals(homeMatches) + SetLeaderboardRules
      .totalHomeGoals(awayMatches);
    return allOwn;
  };

  static totalGames = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allGames = SetLeaderboardRules
      .countGames(homeMatches) + SetLeaderboardRules
      .countGames(awayMatches);
    return allGames;
  };

  static goalsBalance = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const allBalances = SetLeaderboardRules
      .goalsBalance(homeMatches, 'homeTeam') + SetLeaderboardRules
      .goalsBalance(awayMatches);
    return allBalances;
  };

  static efficiency = (homeMatches: IMatchGoals[], awayMatches: IMatchGoals[]) => {
    const points = this.totalPoints(homeMatches, awayMatches);
    const games = this.totalGames(homeMatches, awayMatches) * 3;
    const allEfficiency = (points / games) * 100;
    return allEfficiency.toFixed(2);
  };
}
