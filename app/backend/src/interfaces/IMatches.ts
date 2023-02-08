import ITeams from './ITeams';

export default interface IMatches {
  id?: number;
  homeTeamId: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeTeam?: ITeams;
  awayTeam?: ITeams;
}
