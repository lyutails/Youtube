import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SearchInputFieldComponent } from '../search-input-field/search-input-field.component';
import { LoginService } from '../../auth/login.service';
import { Router } from '@angular/router';
import { YoutubeService } from '../../youtube/youtube.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, SearchInputFieldComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title = 'YouTube-client-app';
  state = true;
  fakeSearchValue = '';

  @Output() settingsToggle = new EventEmitter<boolean>();

  constructor(
    public loginService: LoginService,
    private router: Router,
    private youtubeService: YoutubeService
  ) {}

  public toggleFilters() {
    this.state = !this.state;
    // this.settingsToggle.emit(this.state);
    this.youtubeService.filtersToggle(this.state);
  }

  public gotFakeSearchHeader(value: string) {
    this.fakeSearchValue = value;
    return value;
  }

  @Output() fakeSearchHeader = new EventEmitter<string>();

  public fakeSearchToApp(value: string) {
    this.fakeSearchHeader.emit(value);
  }

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
}
