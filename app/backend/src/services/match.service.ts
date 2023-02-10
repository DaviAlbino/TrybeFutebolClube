import IMatches from '../interfaces/IMatches';
import Match from '../database/models/Match.model';
import IStatusReturn from '../interfaces/IStatusReturn';
import Team from '../database/models/Team.model';

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

  static async findTeamById(id: number): Promise<IStatusReturn> {
    const team = await Team.findByPk(id);
    if (!team) return { type: 404, message: 'There is no team with such id!' };
    return { type: null };
  }

  static async saveNewMatch(matchBody: IMatches): Promise<IStatusReturn> {
    const { homeTeamId, awayTeamId } = matchBody;
    const checkHome = await this.findTeamById(homeTeamId);
    const checkAway = await this.findTeamById(awayTeamId);

    if (checkAway.type) {
      return { type: checkAway.type, message: checkAway.message };
    }

    if (checkHome.type) {
      return { type: checkHome.type, message: checkHome.message };
    }
    const newMatch = await Match.create({ ...matchBody, inProgress: true });

    return { type: null, message: newMatch };
  }

  static async updateInProgress(id: number): Promise<IStatusReturn> {
    const finishedMatch = await Match.update({ inProgress: false }, { where: { id } });
    if (!finishedMatch) return { type: 404, message: 'There is no match here' };
    return { type: null, message: 'Finished' };
  }
}
