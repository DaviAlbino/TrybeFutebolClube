import IStatusReturn from '../interfaces/IStatusReturn';

const sameTeamError = (homeTeam: number, awayTeam: number): IStatusReturn => {
  if (homeTeam === awayTeam) {
    return { type: 422, message: 'It is not possible to create a match with two equal teams' };
  }

  return { type: null };
};

export default sameTeamError;
