import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SearchResultsComponent,
    // BrowserAnimationsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  /* animations: [
    trigger('routeAnimations', [transition('homePage => profilePage'), [
      query(':enter', []),
      query(':leave', [])
    ]]),
  ], */
})
export class AppComponent {}
