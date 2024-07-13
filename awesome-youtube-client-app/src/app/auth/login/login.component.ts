import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Credentials, LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  buttonName = 'Submit';
  loginData!: Credentials;
  emailSign = '@';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

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
      this.loginService.toggleLoginLogout();
      this.loginService.saveCredentials(data);
      this.router.navigate(['/main']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email
      ]),
      password: new FormControl(''),
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
