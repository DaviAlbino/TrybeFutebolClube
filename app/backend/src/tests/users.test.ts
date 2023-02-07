import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken'
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User.model';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { mockLogin, mockLoginErrorPassword, mockNoLogin } from './mocks/mockLogin';
import mockToken from './mocks/mockToken';
import mockUser from './mocks/mockUser';
import { sign } from 'crypto';

describe('Testes do post da rota /login', () => {
  
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(mockUser as User);
  });

  afterEach(() => { 
    (User.findOne as sinon.SinonStub).restore();
  })


  it('Retornar o token caso o post estiver correto', async () => {

    const { token } = mockToken;

    sinon.stub(jwt, 'sign').callsFake(() => token)


    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(mockLogin);
  
    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(chaiHttpResponse.body.token).to.be.equal(token);
  });
});
