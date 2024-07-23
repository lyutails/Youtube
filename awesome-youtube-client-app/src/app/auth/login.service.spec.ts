import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();
  });

  it('#getToken should save correct token to ls', () => {
    loginService.removeCredentials();
    const data = { login: 'lalala@lala', password: 'fe#9Fejls' };
    loginService.generateToken();
    loginService.saveCredentials(data);
    expect(loginService.getToken()).toBe(localStorage.getItem('token'));
  });

  it('#generateToken should return token value', () => {
    let authToken = '';
    expect((authToken = loginService.generateToken())).toBe(authToken);
  });

  it('#saveCredentials should return correct credentials from ls', () => {
    loginService.removeCredentials();
    const data = { login: 'lalala@lala', password: 'fe#9Fejls' };
    loginService.generateToken();
    loginService.saveCredentials(data);
    const lsCredentials = localStorage.getItem('credentials');
    expect(
      lsCredentials !== null ? JSON.parse(lsCredentials)! : ''
    ).toMatchObject({
      login: 'lalala@lala',
      password: 'fe#9Fejls',
    });
  });

  it('#removeCredentials should return undefined from ls', () => {
    expect(loginService.removeCredentials()).toBe(undefined);
  });
});
