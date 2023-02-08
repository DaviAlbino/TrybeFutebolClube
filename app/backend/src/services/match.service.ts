import IMatches from '../interfaces/IMatches';
import Match from '../database/models/Match.model';

export default class MatchService {
  static async findAll(): Promise<IMatches[]> {
    const matches = await Match.findAll({
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
