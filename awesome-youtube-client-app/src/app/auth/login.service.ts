import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

export interface Credentials {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  data!: Credentials;
  fakeAuthToken = '';
  token!: string | null;
  loginInput = '';

  public login = new BehaviorSubject<boolean>(false);
  login$ = this.login.asObservable();

  public loginName = new BehaviorSubject<string>('');
  loginName$ = this.loginName.asObservable();
  signalLoginName = toSignal(this.loginName.asObservable(), {
    initialValue: '',
  });

  setLogin(value: string) {
    this.loginInput = value;
    this.loginName.next(this.loginInput);
  }

  removeLogin() {
    this.loginName.next('');
  }

  toggleLoginLogout() {
    this.login.next(!this.login.value);
  }

  generateToken() {
    this.fakeAuthToken = Math.random().toString(36).substring(2);
    return this.fakeAuthToken;
  }

  saveCredentials(data: Credentials) {
    localStorage.setItem('token', this.generateToken());
    return localStorage.setItem('credentials', JSON.stringify(data));
  }

  removeCredentials() {
    return localStorage.clear();
  }

  getToken() {
    this.token = localStorage.getItem('token');
    return this.token;
  }
}
