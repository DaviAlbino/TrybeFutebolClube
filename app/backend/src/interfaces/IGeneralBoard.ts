import IMatchGoals from './IMatchGoals';

export default interface IGeneralBoard {
  teamName: string;
  homeMatches: IMatchGoals[];
  awayMatches: IMatchGoals[];
}
