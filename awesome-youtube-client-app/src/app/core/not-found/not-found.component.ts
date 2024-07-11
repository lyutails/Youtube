import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../auth/login.service';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  buttonText = 'go home';
  router = inject(Router);

  constructor(
    private loginService: LoginService,
    public themeService: ThemeService
  ) {}

  goHome() {
    const route = this.loginService.getToken() !== null ? '/main' : '/login';
    return this.router.navigate([route]);
  }
}
