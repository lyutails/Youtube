import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials, LoginService } from '../../auth/login.service';
import { CommonModule, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  buttonName = 'Submit';

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  adminForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    linkVideo: new FormControl(''),
  });

  onSubmit() {
    const data = this.adminForm.value as Credentials;
    if (
      this.adminForm.value.title?.trim() &&
      this.adminForm.value.description?.trim()
    ) {
      this.loginService.toggleLoginLogout();
      this.loginService.saveCredentials(data);
      this.router.navigate(['/main']);
    }
  }

  ngOnInit() {
    this.adminForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [
        Validators.maxLength(255),
      ]),
      img: new FormControl('', [
        Validators.required,
      ]),
      linkVideo: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  get title() {
    return this.adminForm.get('title');
  }

  get description() {
    return this.adminForm.get('password');
  }

  get img() {
    return this.adminForm.get('img');
  }

  get linkVideo() {
    return this.adminForm.get('linkVideo');
  }
}
