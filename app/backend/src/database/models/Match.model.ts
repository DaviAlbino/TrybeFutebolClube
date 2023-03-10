import { INTEGER, BOOLEAN, Model } from 'sequelize';
import db from '.';
// import Team from './Team.model';

class Match extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Match.init({
  id: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

// Match.belongsTo(Team, {
//   foreignKey: 'home_team_id',
//   as: 'homeTeam',
// });

// Match.belongsTo(Team, {
//   foreignKey: 'away_team_id',
//   as: 'awayTeam',
// });

// Match.hasOne(Team, {
//   foreignKey: 'home_team_id',
//   as: 'home_team',
// });

// Match.hasOne(Team, {
//   foreignKey: 'away_team_id',
//   as: 'away_team',
// });

// Team.belongsTo(Match, {
//   foreignKey: 'home_team_id',
//   as: 'homeTeam',
// });

// Team.belongsTo(Match, {
//   foreignKey: 'away_team_id',
//   as: 'awayTeam',
// });

export default Match;
