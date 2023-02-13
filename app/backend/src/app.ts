import * as express from 'express';
import LeaderboardRouter from './routes/LeaderboardRouter';
import MatchRouter from './routes/MatchRouter';
import TeamRouter from './routes/TeamRouter';
import LoginRouter from './routes/UserRoutes';

const userRoutes = new LoginRouter();
const teamRoutes = new TeamRouter();
const matchRoutes = new MatchRouter();
const leaderboardRoutes = new LeaderboardRouter();

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
    this.app.use('/login', userRoutes.router);
    this.app.use('/teams', teamRoutes.router);
    this.app.use('/matches', matchRoutes.router);
    this.app.use('/leaderboard', leaderboardRoutes.router);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
