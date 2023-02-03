import { JwtPayload } from 'jsonwebtoken';

interface IToken extends JwtPayload {
  id: number | undefined;
  username: string | undefined;
  email: string | undefined;
}

export default IToken;
