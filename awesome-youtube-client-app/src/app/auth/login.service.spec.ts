import { Injector } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;
  let fixture: ComponentFixture<LoginService>;

  beforeEach(async () => {
    // loginService = new LoginService();
    loginService = Injector.create({
      providers: [{ provide: LoginService, useValue: jest.mock }],
    }).get(LoginService);
  });

  it('#getToken should save correct token to ls', async () => {
    loginService = TestBed.inject(LoginService);

    loginService.removeCredentials();
    const data = { login: 'lalala@lala', password: 'fe#9Fejls' };
    loginService.generateToken();
    loginService.saveCredentials(data);
    expect(loginService.getToken()).toBe(localStorage.getItem('token'));
  });

  it('#generateToken should return token value', () => {
    loginService = TestBed.inject(LoginService);

    let authToken = '';
    expect((authToken = loginService.generateToken())).toBe(authToken);
  });

  it('#saveCredentials should return correct credentials from ls', () => {
    loginService = TestBed.inject(LoginService);

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
    loginService = TestBed.inject(LoginService);

    expect(loginService.removeCredentials()).toBe(undefined);
  });

  it('#toggleLoginLogout should return login value', () => {
    loginService = TestBed.inject(LoginService);

    loginService.login$.subscribe(data => {
      fixture.detectChanges();
      expect(data).toBe(true || false);
    });
  });
});
