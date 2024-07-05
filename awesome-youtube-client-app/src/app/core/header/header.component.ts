import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SearchInputFieldComponent } from '../search-input-field/search-input-field.component';
import { LoginService } from '../../auth/login.service';
import { Router, RouterModule } from '@angular/router';
import { YoutubeService } from '../../youtube/youtube.service';
import { ThemeService } from '../../theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    SearchInputFieldComponent,
    RouterModule,
    CommonModule,
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
    private youtubeService: YoutubeService,
    public themeService: ThemeService
  ) {}

  public toggleFilters() {
    this.youtubeService.toggleFilters();
  }

  public gotFakeSearchHeader(value: string) {
    this.fakeSearchValue = value;
    return value;
  }

  /* @Output() fakeSearchHeader = new EventEmitter<string>();

  public fakeSearchToApp(value: string) {
    this.fakeSearchHeader.emit(value);
  } */

  public toggleIsAuth() {
    this.loginService.isLoggedIn();
    if (
      this.loginService.getToken() !== null ||
      this.loginService.isAuth === true
    ) {
      this.router.navigate(['/login']);
      return this.loginService.removeCredentials();
    }
  }

  changeTheme() {
    this.themeService.switchTheme();
  }
}
