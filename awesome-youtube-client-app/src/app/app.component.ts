import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { FiltersComponent } from './core/filters/filters.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchResultsComponent } from './youtube/search/search-results/search-results.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
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
  dateAscSort = true;
  dateDescSort = true;

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

  public sortDateAsc(value: boolean) {
    this.dateAscSort = value;
    return value;
  }

  public sortDateDesc(value: boolean) {
    this.dateDescSort = value;
    return value;
  }
}
