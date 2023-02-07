import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
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

  it('Retornar status 401 caso o password estiver incorreto', async () => {
    const message = 'Incorrect email or password';
    sinon.stub(bcrypt, 'compareSync').callsFake(() => false)

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(mockLoginErrorPassword);
  
    expect(chaiHttpResponse.status).to.be.equal(401);
    expect(chaiHttpResponse.body.message).to.be.equal(message);
  });

  it('Retornar status 400 caso estiver faltando password e/ou email', async () => {
    const message = 'All fields must be filled';

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(mockNoLogin);
  
    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(chaiHttpResponse.body.message).to.be.equal(message);
  });
});
