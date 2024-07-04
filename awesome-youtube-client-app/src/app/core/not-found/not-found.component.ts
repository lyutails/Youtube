import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  buttonText = 'go home';
  router = inject(Router);

  constructor(private loginService: LoginService) {}

  goHome() {
    if (this.loginService.isLoggedIn() === true) {
      this.router.navigate(['/main']);
    } else this.router.navigate(['login']);
  }
}
