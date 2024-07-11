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

  public login = new BehaviorSubject<boolean>(false);
  login$ = this.login.asObservable();

  toggleLoginLogout() {
    this.login.next(!this.login.value);
  }

  generateToken() {
    const fakeAuthToken = Math.random().toString(36).substring(2);
    return fakeAuthToken;
  }

  saveCredentials(data: Credentials) {
    localStorage.setItem('token', this.generateToken());
    return localStorage.setItem('credentials', JSON.stringify(data));
  }

  removeCredentials() {
    return localStorage.clear();
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }
}
