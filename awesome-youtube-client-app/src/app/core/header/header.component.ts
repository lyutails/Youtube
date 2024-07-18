import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router, RouterModule } from '@angular/router';

import { LoginService } from '../../auth/login.service';
import { ThemeService } from '../../theme.service';
import { YoutubeService } from '../../youtube/youtube.service';
import { SearchInputFieldComponent } from '../search-input-field/search-input-field.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    SearchInputFieldComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    MatButton,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'YouTube-client-app';
  fakeSearchValue = '';

  @Output() settingsToggle = new EventEmitter<boolean>();

  constructor(
    public loginService: LoginService,
    private router: Router,
    public youtubeService: YoutubeService,
    public themeService: ThemeService
  ) {}

  public toggleFilters() {
    this.youtubeService.toggleFilters();
  }

  public gotFakeSearchHeader(value: string) {
    this.fakeSearchValue = value;
    return value;
  }

  // eslint-disable-next-line consistent-return
  public toggleIsAuth() {
    this.loginService.toggleLoginLogout();
    if (
      this.loginService.getToken() !== null ||
      this.loginService.login.value === false
    ) {
      this.router.navigate(['/login']);
      return this.loginService.removeCredentials();
    }
  }

  changeTheme() {
    this.themeService.switchTheme();
  }

  goToFavouritesPage() {
    this.router.navigate(['./favourite']);
  }
}
