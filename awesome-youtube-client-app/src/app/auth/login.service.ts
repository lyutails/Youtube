import { Injectable } from '@angular/core';
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

  public login = new BehaviorSubject<boolean>(false);
  login$ = this.login.asObservable();

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
