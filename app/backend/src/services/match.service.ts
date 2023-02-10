import IMatches from '../interfaces/IMatches';
import Match from '../database/models/Match.model';
import IStatusReturn from '../interfaces/IStatusReturn';

export default class MatchService {
  static async findInProgress(query: boolean): Promise<IMatches[]> {
    const matches = await Match.findAll({
      where: (typeof query === 'boolean') ? { inProgress: query } : {},
      include: [
        {
          association: 'homeTeam',
          attributes: ['teamName'],
        },
        {
          association: 'awayTeam',
          attributes: ['teamName'],
        },
      ],
    });
    return matches;
  }

  static async saveNewMatch(matchBody: IMatches) {
    const newMatch = await Match.create({ ...matchBody, inProgress: true });
    return newMatch;
  }

  static async updateInProgress(id: number): Promise<IStatusReturn> {
    const finishedMatch = await Match.update({ inProgress: false }, { where: { id } });
    if (!finishedMatch) return { type: 404, message: 'There is no match here' };
    return { type: null, message: 'Finished' };
  }
}
