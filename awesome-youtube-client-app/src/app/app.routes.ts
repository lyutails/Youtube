import { Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  /* { component: HomePage, path: '', data: {animation: 'HomePage'} } */
  { path: '', component: SearchResultsComponent, title: 'main' },
  { path: '', component: LoginComponent, title: 'login' },
  { path: '', component: CardDetailsComponent, title: 'card' },
  { path: '', component: NotFoundComponent, title: '404' }
];
