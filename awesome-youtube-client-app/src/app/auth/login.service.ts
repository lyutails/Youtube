import { Injectable } from '@angular/core';

export interface Credentials {
  login: string | null | undefined;
  password: string | null | undefined;
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
