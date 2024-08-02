import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
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
  requiredSign = '*';
  requiredSignColor = 'oklch(59.98% 0.236 15.45)';
  validSignColor = 'oklch(59.92% 0.255 298.77)';

  colorRequired = signal(this.requiredSignColor);
  colorValid = signal(this.validSignColor);
  isValid = signal(false);
  validSign = signal('verified_user');
  requiredSignSignal = signal('lock');

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
      this.loginService.setLogin(
        this.loginForm.value.login?.trim().replace(/@(.*)$/, '')
      );
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

  /*   if (this.adminForm.valid) {
      this.isValid.set(true);
    } */

  setRequiredSignColor(value: boolean) {
    this.isValid = signal(value);
  }

  color = computed(() => {
    if (this.isValid()) {
      return this.colorValid();
    }
    return this.colorRequired();
  });
}
