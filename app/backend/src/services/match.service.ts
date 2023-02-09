import IMatches from '../interfaces/IMatches';
import Match from '../database/models/Match.model';

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
}
