import * as Joi from 'joi';
import ILogin from '../interfaces/ILogin';

const validateLogin = (body: ILogin) => {
  const newLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { value, error } = newLogin.validate(body);

  if (error) {
    return {
      typeJoi: 400,
      messageJoi: 'All fields must be filled',
    };
  }

  return { typeJoi: null, messageJoi: value };
};

export default validateLogin;
