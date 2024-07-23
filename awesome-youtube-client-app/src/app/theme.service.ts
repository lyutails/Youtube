import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isLightTheme = true;

  switchTheme() {
    this.isLightTheme = !this.isLightTheme;
    return !this.isLightTheme;
  }
}
