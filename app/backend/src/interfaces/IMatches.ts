import IMatchGoals from './IMatchGoals';
import ITeams from './ITeams';

export default interface IMatches extends IMatchGoals {
  id?: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
  homeTeam?: ITeams;
  awayTeam?: ITeams;
}
