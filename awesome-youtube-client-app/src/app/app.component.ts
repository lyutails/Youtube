import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { FiltersComponent } from './filters/filters.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SearchResultsComponent,
    FiltersComponent,
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
export class AppComponent {
  isOpenClose = true;
  filterValue = '';
  fakeSearchValue = '';
  viewsAscSort = true;
  viewsDescSort = true;

  public closeOpenFilters(value: boolean) {
    this.isOpenClose = value;
    return value;
  }

  public gotFilterByWordValue(value: string) {
    this.filterValue = value;
    return value;
  }

  public gotFakeSearch(value: string) {
    this.fakeSearchValue = value;
    return value;
  }

  public sortViewsAsc(value: boolean) {
    this.viewsAscSort = value;
    return value;
  }

  public sortViewsDesc(value: boolean) {
    this.viewsDescSort = value;
    return value;
  }
}
