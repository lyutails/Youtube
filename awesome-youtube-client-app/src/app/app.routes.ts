import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

export const routes: Routes = [
  /* { component: HomePage, path: '', data: {animation: 'HomePage'} } */
  { path: '', component: SearchResultsComponent, title: 'main page' },
  { path: '', component: CardDetailsComponent, title: 'card page' },
];
