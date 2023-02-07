import ILogin from '../../interfaces/ILogin';

const mockLogin: ILogin = {
    email: 'admin@admin.com',
    password: 'secret_admin',
}

const mockLoginErrorPassword: ILogin = {
    email: 'admin@admin.com',
    password: 'wrong_password'
}

const mockNoLogin: ILogin = {
    email: '',
    password: ''
}

export { mockLogin, mockLoginErrorPassword, mockNoLogin };