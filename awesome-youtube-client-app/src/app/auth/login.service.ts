import { Injectable } from '@angular/core';

export interface Credentials {
  login: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  data!: Credentials;
  isAuth = false;

  generateToken() {
    const fakeAuthToken = Math.random().toString(36).substring(2);
    return fakeAuthToken;
  }

  isLoggedIn() {
    console.log(this.isAuth);
    return (this.isAuth = !this.isAuth);
  }

  saveCredentials(data: Credentials) {
    localStorage.setItem('token', this.generateToken());
    return localStorage.setItem('credentials', JSON.stringify(data));
  }

  removeCredentials() {
    return localStorage.clear();
  }
}
