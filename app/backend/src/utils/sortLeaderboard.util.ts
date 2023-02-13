import ILeaderboard from '../interfaces/ILeaderboard';

const sortLeaderboard = (leaderboard: ILeaderboard[]): ILeaderboard[] => {
  const sorted = leaderboard.sort((a, b) => b.totalPoints - a.totalPoints
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor
        || b.goalsOwn - a.goalsOwn);
  return sorted;
};

export default sortLeaderboard;
