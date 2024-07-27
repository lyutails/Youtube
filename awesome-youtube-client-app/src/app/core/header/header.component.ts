import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Credentials, LoginService } from '../../auth/login.service';
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
export class HeaderComponent implements OnInit {
  title = 'YouTube-client-app';
  fakeSearchValue = '';
  onAdminPage = false;
  public href: string = '';

  @Output() settingsToggle = new EventEmitter<boolean>();

  constructor(
    public loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    public youtubeService: YoutubeService,
    public themeService: ThemeService
  ) {}

  ngOnInit() {
    let loginValue: Credentials = { login: '', password: '' };
    const lsCredentials = localStorage.getItem('credentials');
    loginValue = lsCredentials ? JSON.parse(lsCredentials)! : '';
    const { login } = loginValue;
    this.loginService.setLogin(login?.trim().replace(/@(.*)$/, ''));
  }

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
      this.loginService.removeLogin();
      return this.loginService.removeCredentials();
    }
  }

  changeTheme() {
    this.themeService.switchTheme();
  }

  goToFavouritesPage() {
    this.router.navigate(['./favourite']);
  }

  goToAdminPage() {
    /* this.route.snapshot.paramMap.get('admin')
      ? (this.onAdminPage = true)
      : (this.onAdminPage = false); */
    this.router.navigate(['./admin']);
  }
}
