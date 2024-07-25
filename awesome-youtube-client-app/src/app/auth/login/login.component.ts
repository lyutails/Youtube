import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

import { Credentials, LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UpperCasePipe,
    CommonModule,
    MatSuffix,
    MatIcon,
    MatIconButton,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  buttonName = 'Submit';
  loginData!: Credentials;
  emailSign = '@';
  passwordSpecialSymbols = 'e.g. ! @ # ?';
  inputValue = '';
  isPasswordVisible = false;
  passwordVisibilitySymbol = { visible: 'key', invisible: 'key_off' };

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
      this.loginService.getLogin(this.loginForm.value.login?.trim());
      this.router.navigate(['/main']);
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(
          '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        ),
      ]),
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
