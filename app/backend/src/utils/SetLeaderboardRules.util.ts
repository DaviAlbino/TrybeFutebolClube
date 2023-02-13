import IMatchGoals from '../interfaces/IMatchGoals';

export default class SetLeaderboardRules {
  static homeVictory = (matches: IMatchGoals[]) => {
    const homeWinMatches = matches
      .filter(({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals > awayTeamGoals);
    return homeWinMatches.length;
  };

  static awayVictory = (matches: IMatchGoals[]) => {
    const awayWinMatches = matches
      .filter(({ homeTeamGoals, awayTeamGoals }) => awayTeamGoals > homeTeamGoals);
    return awayWinMatches.length;
  };

  static draw = (matches: IMatchGoals[]) => {
    const drawMatch = matches
      .filter(({ homeTeamGoals, awayTeamGoals }) => awayTeamGoals === homeTeamGoals);
    return drawMatch.length;
  };

  static totalHomeGoals = (matches: IMatchGoals[]) => {
    const homeGoals = matches.reduce((accGoals, { homeTeamGoals }) => accGoals + homeTeamGoals, 0);
    return homeGoals;
  };

  static totalAwayGoals = (matches: IMatchGoals[]) => {
    const awayGoals = matches.reduce((accGoals, { awayTeamGoals }) => accGoals + awayTeamGoals, 0);
    return awayGoals;
  };

  static calculatePoints = (matches: IMatchGoals[], chosenTeam?: string) => {
    if (chosenTeam === 'homeTeam') return this.homeVictory(matches) * 3 + this.draw(matches);
    return this.awayVictory(matches) * 3 + this.draw(matches);
  };

  static goalsBalance = (matches: IMatchGoals[], chosenTeam?: string) => {
    if (chosenTeam === 'homeTeam') {
      return this.totalHomeGoals(matches) - this.totalAwayGoals(matches);
    }
    return this.totalAwayGoals(matches) - this.totalHomeGoals(matches);
  };

  static countGames = (matches: IMatchGoals[]) => matches.length;

  static setEfficiency = (matches: IMatchGoals[], chosenTeam?: string) => {
    const efficiency = (this.calculatePoints(matches, chosenTeam) / this.countGames(matches)) * 100;
    return efficiency.toFixed(2);
  };
}
