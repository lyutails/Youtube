import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Credentials, LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  buttonName = 'Submit';
  loginData!: Credentials;

  constructor(private loginService: LoginService) {}

  generateToken() {
    const fakeAuthToken = Math.random().toString(36).substring(2);
    return fakeAuthToken;
  }

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const data = this.loginForm.value as Credentials;
    if (
      this.loginForm.value.login?.trim() &&
      this.loginForm.value.password?.trim()
    ) {
      localStorage.setItem('token', this.generateToken());
      return this.loginService.saveFakeAuthToken(data);
    }
  }
}
