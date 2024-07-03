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

  saveFakeAuthToken(data: Credentials) {
    return localStorage.setItem('credentials', JSON.stringify(data));
  }
}
