import { INTEGER, STRING, Model } from 'sequelize';
import Match from './Match.model';
import db from '.';
//

class Team extends Model {
  declare id: number;
  declare teamName: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

Team.hasMany(Match, {
  foreignKey: 'home_team_id',
  as: 'homeMatches',
});

Team.hasMany(Match, {
  foreignKey: 'away_team_id',
  as: 'awayMatches',
});

Match.belongsTo(Team, {
  foreignKey: 'home_team_id',
  as: 'homeTeam',
});

Match.belongsTo(Team, {
  foreignKey: 'away_team_id',
  as: 'awayTeam',
});

export default Team;
